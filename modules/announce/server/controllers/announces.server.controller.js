'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  config = require(path.resolve('./config/config')),
  mongoose = require('mongoose'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  querystring = require('querystring'),
  tracker = require('./common/tracker'),
  User = mongoose.model('User'),
  Torrent = mongoose.model('Torrent'),
  Peer = mongoose.model('Peer'),
  benc = require('bncode'),
  assert = require('assert'),
  async = require('async'),
  url = require('url'),
  util = require('util');

const FAILURE_REASONS = {
  100: 'Invalid request type: client request was not a HTTP GET',
  101: 'Missing info_hash',
  102: 'Missing peer_id',
  103: 'Missing port',
  104: 'Missing passkey',
  150: 'Invalid infohash: infohash is not 20 bytes long',
  151: 'Invalid peerid: peerid is not 20 bytes long',
  152: 'Invalid numwant. Client requested more peers than allowed by tracker',
  153: 'Passkey length error (length=32)',
  154: 'Invalid passkey, if you changed you passkey, please re-download the torrent file from ' + config.meanTorrentConfig.announce.base_url,

  160: 'Invalid torrent info_hash',
  161: 'No torrent with that info_hash has been found',
  162: 'ip length error',

  170: 'your account is banned',
  171: 'your account is sealed',
  172: 'your client is not allowed, here is the blacklist: ' + config.meanTorrentConfig.announce.client_black_list_url,

  180: 'You already are downloading the same torrent. You may only leech from one location at a time',
  181: 'You cannot seed the same torrent from more than 3 locations',
  182: 'Create peer failed',

  600: 'This tracker only supports compact mode',
  900: 'Generic error'
};

const EVENT_NONE = 0;
const EVENT_COMPLETED = 1;
const EVENT_STARTED = 2;
const EVENT_STOPPED = 3;

const WANT_DEFAULT = 50;

const PEERSTATE_SEEDER = 'seeder';
const PEERSTATE_LEECHER = 'leecher';

const PEER_COMPACT_SIZE = 6;
const ANNOUNCE_INTERVAL = 60;

const PARAMS_INTEGER = [
  'port', 'uploaded', 'downloaded', 'left', 'compact', 'numwant'
];

const PARAMS_STRING = [
  'event'
];

/**
 * event
 * @param e
 * @returns {number}
 */
function event(e) {
  switch (e) {
    case 'completed':
      return EVENT_COMPLETED;
    case 'started':
      return EVENT_STARTED;
    case 'stopped':
      return EVENT_STOPPED;
  }
  return EVENT_NONE;
}

/**
 * Failure
 * @param code
 * @param reason
 * @constructor
 */
function Failure(code, reason) {
  this.code = code;
  this.reason = reason;
  if (reason === undefined && typeof FAILURE_REASONS[this.code] !== 'undefined')
    this.reason = FAILURE_REASONS[this.code];
  else if (this.code == null)
    this.code = 900;
}

/**
 * Failure.prototype
 * @type {{bencode: Function}}
 */
Failure.prototype = {
  bencode: function () {
    return 'd14:failure reason' + this.reason.length + ':' + this.reason + '12:failure codei' + this.code + 'ee';
  }
};

/**
 * info api
 * @param req
 * @param res
 */
exports.announce = function (req, res) {
  req.torrent = undefined;
  req.selfpeer = [];
  req.seeder = false;

  console.log('------------ Announce request ----------------');
  //console.log(req.url);

  var parts = url.parse(req.url, true);
  var query = parts.query;
  var passkey = req.params.passkey || query.passkey || undefined;

  async.waterfall([
    /*---------------------------------------------------------------
     validateQueryCheck
     ---------------------------------------------------------------*/
    function (done) {
      var i = 0;
      var p;

      if (req.method !== 'GET') {
        done(100);
      } else if (typeof query.info_hash === 'undefined') {
        done(101);
      } else if (typeof query.peer_id === 'undefined') {
        done(102);
      } else if (typeof query.port === 'undefined') {
        done(103);
      } else if (query.info_hash.length !== 20) {
        done(150);
      } else if (query.peer_id.length !== 20) {
        done(151);
      } else if (typeof query.compact === 'undefined' || query.compact !== '1') {
        done(600);
      } else {
        for (i = 0; i < PARAMS_INTEGER.length; i++) {
          p = PARAMS_INTEGER[i];
          if (typeof query[p] !== 'undefined')
            query[p] = parseInt(query[p].toString(), 10);
        }

        for (i = 0; i < PARAMS_STRING.length; i++) {
          p = PARAMS_STRING[i];
          if (typeof query[p] !== 'undefined')
            query[p] = query[p].toString();
        }

        req.seeder = (query.left === 0) ? true : false;

        done(null);
      }
    },

    /*---------------------------------------------------------------
     validatePasskeyCheck
     ---------------------------------------------------------------*/
    function (done) {
      if (!config.meanTorrentConfig.announce.open_tracker) {
        if (typeof passkey === 'undefined') {
          done(104);
        }
        if (passkey.length !== 32) {
          done(153);
        }
        if (req.passkeyuser === undefined) {
          done(154);
        }
      }
      done(null);
    },

    /*---------------------------------------------------------------
     validateUserCheck
     check normal,banned,sealed
     ---------------------------------------------------------------*/
    function (done) {
      switch (req.passkeyuser.status) {
        case 'banned':
          done(170);
          break;
        case 'sealed':
          done(171);
          break;
        default:
          done(null);
      }
    },

    /*---------------------------------------------------------------
     validateClientCheck
     check client blacklist
     ---------------------------------------------------------------*/
    function (done) {
      var ua = req.get('User-Agent');
      var inlist = false;
      if (ua) {
        config.meanTorrentConfig.clientBlackList.forEach(function (client) {
          if (client.name.toUpperCase() === ua.toUpperCase()) {
            inlist = true;
          }
        });
      }
      if (inlist) {
        done(172);
      } else {
        done(null);
      }
    },

    /*---------------------------------------------------------------
     getTorrentItemData
     torrent data include peers
     ---------------------------------------------------------------*/
    function (done) {
      Torrent.findOne({
        info_hash: '5d8063667a23648d693665426f649140362db88e'
      })
        .populate('user')
        .populate('_peers')
        .exec(function (err, t) {
          if (err) {
            done(160);
          } else if (!t) {
            done(161);
          } else {
            req.torrent = t;

            //find my peers
            if (req.torrent._peers.length > 0) {
              req.torrent._peers.forEach(function (p) {
                if (p.user.str === req.passkeyuser._id.str) {
                  req.selfpeer.push(p);
                }
              });
            }
            done(null);
          }
        });
    },

    /*---------------------------------------------------------------
     onEventStarted
     if downloading, check download peer num only 1, torrent leechers +1, ratio check
     if seeding, check seed peer num less 3, torrent seeds +1
     if no peer founded, create new peer
     ---------------------------------------------------------------*/
    function (done) {
      if (event(query.event) === EVENT_STARTED) {
        console.log('---------------EVENT_STARTED----------------');

        if (getSelfLeecherCount() >= 1 && !req.seeder) {
          done(180);
        } else if (getSelfSeederCount >= 3 && req.seeder) {
          done(181);
        } else if (req.selfpeer.length === 0) {
          var peer = new Peer();
          peer.user = req.passkeyuser;
          peer.torrent = req.torrent;
          peer.peer_id = query.peer_id;
          peer.peer_ip = req.connection.remoteAddress;
          peer.peer_port = query.port;
          peer.peer_status = req.seeder ? PEERSTATE_SEEDER : PEERSTATE_LEECHER;
          peer.user_agent = req.get('User-Agent');

          peer.save(function (err) {
            if (err) {
              done(182);
            } else {
              req.selfpeer.push(peer);
              req.torrent._peers.push(peer);

              if (req.seeder) {
                req.torrent.torrent_seeds++;
                req.torrent.save();
              } else {
                req.torrent.torrent_leechers++;
                req.torrent.save();
              }

              done(null);
            }
          });
        }
      } else {
        done(null);
      }
    },

    /*---------------------------------------------------------------
     onEventStopped
     delete peers
     if not seeder, torrent leechers -1
     if seeder, torrent seeds -1
     ---------------------------------------------------------------*/
    function (done) {
      if (event(query.event) === EVENT_STOPPED) {
        console.log('---------------EVENT_STOPPED----------------');

        req.selfpeer.forEach(function (p) {
          if (p.user.str === req.passkeyuser._id.str && p.peer_id === query.peer_id) {
            req.selfpeer.splice(req.selfpeer.indexOf(p), 1);
            req.torrent._peers.pull(p);
            req.torrent.save();

            p.remove();
            //Peer.remove({
            //  user: p.user,
            //  peer_id: query.peer_id
            //});

            if (req.seeder) {
              req.torrent.torrent_seeds--;
              req.torrent.save();
            } else {
              req.torrent.torrent_leechers--;
              req.torrent.save();
            }
          }
        });
      }
      done(null);
    },

    /*---------------------------------------------------------------
     onEventCompleted
     torrent leechers -1
     torrent finished +1
     torrent seeds +1, auto change to seeder?
     ---------------------------------------------------------------*/
    function (done) {
      if (event(query.event) === EVENT_COMPLETED) {
        console.log('---------------EVENT_COMPLETED----------------');
      }
      done(null);
    },

    /*---------------------------------------------------------------
     writeUpDownData
     uploaded,downloaded
     ---------------------------------------------------------------*/
    function (done) {
      done(null);
    },

    /*---------------------------------------------------------------
     sendPeers
     compact mode
     ---------------------------------------------------------------*/
    function (done) {
      var want = WANT_DEFAULT;
      if (typeof query.numwant !== 'undefined' && query.numwant > 0)
        want = query.numwant;

      var peerBuffer = new Buffer(want * PEER_COMPACT_SIZE);
      var len = writePeers(peerBuffer, want, req.torrent._peers);
      peerBuffer = peerBuffer.slice(0, len);

      //req.torrent.torrent_seeds = 77;
      //req.torrent.torrent_leechers = 88;
      //req.torrent.torrent_finished = 99;

      var resp = 'd8:intervali' + ANNOUNCE_INTERVAL + 'e8:completei' + req.torrent.torrent_seeds + 'e10:incompletei' + req.torrent.torrent_leechers + 'e10:downloadedi' + req.torrent.torrent_finished + 'e5:peers' + len + ':';
      console.log(resp);

      res.writeHead(200, {
        'Content-Length': resp.length + peerBuffer.length + 1,
        'Content-Type': 'text/plain'
      });

      res.write(resp);
      res.write(peerBuffer);
      res.end('e');

      done(null, 'done');
    }
  ], function (err) {
    if (err) {
      sendError(new Failure(err));
    }
  });

  /**
   * getSelfLeecherCount
   * @returns {number}
   */
  function getSelfLeecherCount() {
    if (req.selfpeer.length === 0) {
      return 0;
    } else {
      var i = 0;

      req.selfpeer.forEach(function (p) {
        if (p.peer_status === PEERSTATE_LEECHER) {
          i++;
        }
      });

      return i;
    }
  }

  /**
   * getSelfSeederCount
   * @returns {number}
   */
  function getSelfSeederCount() {
    if (req.selfpeer.length === 0) {
      return 0;
    } else {
      var i = 0;

      req.selfpeer.forEach(function (p) {
        if (p.peer_status === PEERSTATE_SEEDER) {
          i++;
        }
      });

      return i;
    }
  }

  /**
   * sendError
   * @param failure
   */
  function sendError(failure) {
    var respc = failure.bencode();
    console.log(respc);
    res.writeHead(500, {
      'Content-Length': respc.length,
      'Content-Type': 'text/plain'
    });

    res.end(respc);
  }

  /**
   * writePeers
   * @param buf
   * @param count
   * @param peers
   * @returns {number}
   */
  function writePeers(buf, count, peers) {
    var c = 0;
    var p;

    var m = Math.min(peers.length, count);
    for (var i = 0; i < m; i++) {
      var index = Math.floor(Math.random() * peers.length);
      p = peers[index];
      if (p !== undefined && p.user.str !== req.passkeyuser._id.str) {
        var b = compact(p);
        if (b) {
          b.copy(buf, c++ * PEER_COMPACT_SIZE);
        }
      }
    }

    return c * PEER_COMPACT_SIZE;
  }

  /**
   * compact
   * @param p
   * @returns {*}
   */
  function compact(p) {
    var b = new Buffer(PEER_COMPACT_SIZE);

    var parts = p.peer_ip.split('.');
    if (parts.length !== 4) {
      return null;
    } else {
      for (var i = 0; i < 4; i++)
        b[i] = parseInt(parts[i], 10);

      b[4] = (p.peer_port >> 8) & 0xff;
      b[5] = p.peer_port & 0xff;

      return b;
    }
  }
};

/**
 * userByPasskey
 * @param req
 * @param res
 * @param next
 * @param pk
 * @returns {*}
 */
exports.userByPasskey = function (req, res, next, pk) {
  User.findOne({passkey: pk})
    .exec(function (err, u) {
      if (u) {
        req.passkeyuser = u;
      } else {
        req.passkeyuser = undefined;
      }
      next();
    });
};
