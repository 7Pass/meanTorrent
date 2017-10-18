(function (app) {
  'use strict';

  // Setting HTML5 Location Mode
  angular
    .module(app.applicationModuleName)
    .config(transConfig);

  // **************************************************
  // 中 文 翻 译
  // --------------------------------------------------
  // 请不要修改翻译部分之外的代码
  // **************************************************

  var string_zh = {
    COMINGSOON: '开发中，请稍候...',
    DEMO_INFO: '欢迎进入meanTorrent演示站点, 您可以手动注册一个普通帐户或者使用admin演示帐号 <mark>demo</mark> 与密码 <mark>demoAdmin12#</mark>登录, 但请不要删除我们的演示数据, 谢谢!',
    WARNING_POPUP_STRING: '这里是一个 <strong style="color:#f00">DEMO SITE</strong>, 所有资源仅供下载测试使用, 请在测试完毕后24小时内立即删除, 我们推荐您使用正版资源!',

    //client topbar menu
    MENU_CHAT: '聊天室',
    MENU_TORRENTS: '种子',
    MENU_TORRENTS_ADMIN: '种子管理',
    MENU_TORRENTS_ADMIN_EDAU: '种子修改器',
    MENU_ADMIN_OFFICIAL_INVITATION: '发送官方邀请',
    MENU_ADMIN_MESSAGES: '系统消息',
    MENU_ADMIN_TRACE: '系统日志',
    MENU_ADMIN_FORUMS_CONFIGURE: '论坛配置',
    MENU_ADMIN_FORUMS_MANAGEMENT: '论坛管理',
    MENU_USERS_ADMIN: '用户管理',
    MENU_UPLOAD: '发布',
    MENU_FORUMS: '论坛',
    MENU_RANKING: '排行榜',
    MENU_ABOUT: '关于',
    MENU_ABOUT_RULES: '站内规则',
    MENU_ABOUT_BLACKLIST: '禁止客户端列表',
    MENU_VIP: 'VIP',
    MENU_ADMIN: '管理中心',

    //sub menu of torrents
    MENU_TORRENTS_SUB: {
      MOVIE: '电影',
      TVSERIAL: '电视剧',
      MUSIC: '音乐',
      SPORTS: '体育',
      VARIETY: '综艺',
      PICTURE: '图片',
      SOFTWARE: '软件',
      GAME: '游戏',
      EBOOK: '电子书',
      OTHER: '其它'
    },

    //client account menu
    SIGNOUT: '退出登录',
    SIGNIN: '登录',
    SIGNUP: '注册',
    MENU_MESSAGE_BOX: '站内消息',
    MENU_SCORE_LEVEL: '积分等级',
    MENU_MY_INVITE: '我的邀请',
    MENU_ACCOUNT_STATUS: '帐户状态',
    EDIT_PROFILE: '修改个人信息',
    EDIT_PROFILE_PIC: '修改个人头像',
    CHANGE_PASSWORD: '修改登录密码',
    RESET_PASSKEY: '重置 Passkey',
    MANAGE_SOCIAL_ACCOUNTS: '管理社交帐号',

    //HomeController & home views
    LOADING_TOP: '正在推荐资源，请稍候...',
    TOP_MOVIE_INFO_ERROR: '获取电影Top列表失败',
    NEWEST_MOVIE_LIST: '最新电影资源',
    NEWEST_TV_LIST: '最新电视剧资源',
    NEWEST_MUSIC_LIST: '最新音乐资源',
    NEWEST_SPORTS_LIST: '最新体育资源',
    NEWEST_VARIETY_LIST: '最新综艺资源',
    NEWEST_PICTURE_LIST: '最新图片资源',
    NEWEST_GAME_LIST: '最新游戏资源',
    NEWEST_SOFTWARE_LIST: '最新软件资源',
    NEWEST_EBOOK_LIST: '最新电子书资源',
    NEWEST_MORE: '更多...',

    //element title/alt
    TITLE_ALT: {
      SEEDS: '做种用户数',
      LEECHERS: '正在下载数',
      FINISHED: '完成下载数',
      IMDB_VOTES: 'IMDB 评分',
      MORE_TAGS: '显示更多检索标签',
      RESET_TAGS: '重置检索条件与标签',
      DOWNLOAD_TORRENT: '下载种子文件'
    },

    //table fields
    TABLE_FIELDS: {
      //torrent
      INFO: '种子信息',
      SIZE: '大小',
      SEEDS_LEECHERS_FINISHED: '上/下/完',
      ABBR_SEEDS_LEECHERS_FINISHED: '种子用户数/下载用户数/完成用户数',
      PUBLISHER: '发布者',
      ADMIN_TOOLS: '管理工具',
      LIFETIME: '存活时间',
      VOTES: '评分',

      //status
      UPLOADED_SPEED: '上/速',
      DOWNLOADED_RATIO: '下/比',
      DOWNLOADED_SPEED: '下/速',
      UPLOADED_RATIO_PERCENT: '上/比/进度',
      UP_DOWN_RATIO_TIME: '上/下/比/时',

      ABBR_UPLOADED_SPEED: '上传量/速度',
      ABBR_DOWNLOADED_RATIO: '下载量/分享率',
      ABBR_DOWNLOADED_SPEED: '下载量/速度',
      ABBR_UPLOADED_RATIO_PERCENT: '上传量/分享率/完成百分比',
      ABBR_UP_DOWN_RATIO_TIME: '上传量/下载量/分享率/做种时间',

      //peer
      USERNAME: '用户',
      UPLOADED: '已上传/速度',
      DOWNLOADED: '已下载/速度',
      RATIO: '分享率',
      FINISHED: '已完成',
      STARTED: '开始时间',
      ACTIVE: '活动状态',
      CLIENT: '客户端',
      CONNECTABLE: '可连接',

      //ranking
      UPLOAD: '已上传',
      DOWNLOAD: '已下载',
      SEEDED: '正在做种',
      LEECHED: '正在下载',
      SCORE: '积分',
      JOINED: '加入时间'
    },

    //page title
    PAGETITLE: {
      UPLOAD: '上传',
      MOVIE_LIST: '电影列表',
      TV_LIST: '电视剧列表',
      MUSIC_LIST: '音乐列表',
      SPORTS_LIST: '体育资源列表',
      VARIETY_LIST: '综艺资源列表',
      PICTURE_LIST: '图片资源列表',
      SOFTWARE_LIST: '软件列表',
      GAME_LIST: '游戏列表',
      EBOOK_LIST: '电子书列表',
      OTHER_LIST: '其它列表',
      TORRENT_INFO: '种子信息',
      RANKING: '排行榜',
      RULES: '规则',
      BLACK: '禁止客户端列表',
      VIP: 'Vip',
      FORUM: '论坛',
      ADMIN_USER_LIST: '用户管理',
      ADMIN_USER_VIEW: '查看用户',
      ADMIN_USER_EDIT: '编辑用户',
      ADMIN_USER_SEEDING: '用户正在做种',
      ADMIN_USER_LEECHING: '用户正在下载',
      ADMIN_USER_WARNING: '用户正被警告',
      ADMIN_USER_UPLIST: '用户上传的种子',
      USER_INFO: '用户信息',
      ADMIN_ANNOUNCE_EDIT: '种子修改器',
      ADMIN_TORRENTS_LIST: '种子管理',
      ADMIN_MESSAGES: '系统消息',
      ADMIN_TRACES_LIST: '系统日志',
      ADMIN_FORUMS_CONFIGURE: '论坛配置',
      ADMIN_FORUMS_MANAGEMENT: '论坛管理',
      ADMIN_OFFICIAL_INVITATION: '官方邀请',
      PASSWORD_FORGOT: '找回密码',
      PASSWORD_RESET: '重设密码',
      MESSAGES_BOX: '站内消息',
      MESSAGES_SEND: '发送消息',
      STATUS_ACCOUNT: '帐户状态',
      STATUS_UPLOADED: '我的种子',
      STATUS_SEEDING: '正在做种',
      STATUS_DOWNLOADING: '正在下载',
      STATUS_WARNING: '正被警告',
      SCORE_DETAIL: '积分详情',
      INVITATIONS: '我的邀请',
      INVITE_INVALID: '无效的邀请'
    },

    //sign in, sign up, password
    SIGN: {
      BTN_SIGN_IN: '登录',
      BTN_SIGN_UP: '注册',
      BTN_SUBMIT: '提交',
      SIGN_IN: '使用你的注册帐号登录',
      SIGN_SOCIAL: '或使用你的社交帐户登录',
      SIGN_UP: '使用你的邮箱注册',
      RESET_PASSWORD: '重设密码',
      RESTORE_PASSWORD: '找回密码',
      USERNAME_OR_EMAIL: '用户名或邮箱地址',
      U_PATTERN: '请输入有效的用户名, 长度不小于3字符, 由字母数字下划线组成',
      U_TOOLTIP: '请输入有效的密码，长度不小于 {{minLength}} 字符, 且必须包含有数字, 小写字母, 大写字母以及一个特殊的标点符号.',
      U_E_REQUIRED: '用户名或邮箱地址不能为空.',
      U_REQUIRED: '用户名不能为空.',
      E_REQUIRED: '邮箱地址不能为空.',
      E_INVALID: '无效的邮箱地址.',
      PASSWORD: '密码',
      PASSWORD_REQ: '密码强度检测',
      P_REQUIRED: '密码不能为空.',
      FORGOT_PASSWORD: '忘记了密码?',
      FN_REQUIRED: '姓氏不能为空.',
      LN_REQUIRED: '名字不能为空.',

      NEW_PASSWORD: '新密码',
      NP_REQUIRED: '新密码不能为空.',
      VERIFY_PASSWORD: '再输入一次新密码',
      VP_REQUIRED: '验证新密码不能为空.',
      NP_VP_NOTMATCH: '两次输入的密码不一致.',
      BTN_UPDATE_PASSWORD: '修改密码',
      ENTER_USERNAME: '请输入你的帐号用户名或注册邮箱',
      RESET_PASS_OK: '密码重置成功',
      RESET_PASS_INVALID: '密码重置失败',
      RE_RESET_PASSWORD: '再次请求重置密码?'
    },

    //TorrentsController & views
    TOP_LIST_INFO_ERROR: '获取推荐列表失败',
    LIST_PAGE_INFO_ERROR: '获取资源分页列表失败',
    LIST_PAGE_INFO_EMPTY: '没有找到信息，请更换标签重新检索',
    TAGS_SEARCH: '标签检索',
    CA_KEYWORD: '关键字',
    CA_TORRENT_STATUS: '种子状态',
    CA_TORRENT_HNR: 'Hit and Run',
    CA_TORRENT_VIP: 'VIP 资源',
    CA_RESOURCE_TYPE: '资源类型',
    PH_KEYWORD: '搜索关键字',
    CLEAR_ALL_CONDITION: '清空所有条件',
    MORE_TAGS: '显示更多标签',
    CA_RESET: '重置条件',
    TORRENT_DOWNLOAD_ERROR: '种子文件下载失败',
    TORRENTS_DOWNLOAD_SUCCESSFULLY: '种子文件下载成功',

    //torrent info
    UNIT_MILLION: '百万美元',
    UNIT_MITUTE: '分钟',
    TMDB_INFO_OK: '装载 TMDB 电影信息成功',
    TMDB_INFO_FAILED: '装载 TMDB 电影信息失败',
    TAB_TORRENT_INFO: '种子信息',
    TAB_USER_SUBTITLE: '字幕信息',
    TAB_THUMBS_LIST: '点赞用户',
    TAB_USER_INFO: '用户信息',
    TAB_OTHER_TORRENTS: '其它种子',
    TAB_MY_PANEL: '我的面板',
    TAB_ADMIN_PANEL: '管理员面板',
    THUMBS_UP_TORRENT: '我要为此种子点赞并赠送 {{number}} 积分给发布者',
    TORRENT_THUMBS_SUCCESSFULLY: '为种子点赞成功',
    TORRENT_THUMBS_FAILED: '为种子点赞失败',
    TORRENT_RATING_SUCCESSFULLY: '为种子投票成功',
    TORRENT_RATING_FAILED: '为种子投票失败',
    EDIT_THIS_OVERVIEW: '编辑详情介绍',

    ANNOUNCE_URL: 'Tracker 地址',
    TORRENT_FILENAME: '种子文件名',
    ATTRIBUTE_TAGS: '视频属性(标签)',
    VIDEO_NFO: '视频 NFO',
    VIDEO_SIZE: '视频文件大小',
    VIDEO_SALE_INFO: '视频促销信息',
    SALE_EXPIRES_TIME: '过期',
    UPLOAD_SUBTITLE: '上传字幕文件',
    SUBTITLE_LIST: '字幕列表',
    SUBTITLE_RULES: {
      0: '如果你有该种子的字幕文件，你可以在这里上传.',
      1: '请注意字幕文件名的正确格式，比如: Sing.2016.3D.HKG.BluRay.1080p.AVC.Atmos.TrueHD7.1-MTeam.chs&eng.srt'
    },
    MY_TORRENT_RULES: {
      0: '这个种子文件是由你自己上传的，你可以对其做如下操作.',
      1: '如需其它帮助，请与我们的管理员联系：<strong><a href="mailto:#">{{admin}}</a></strong>.'
    },
    TORRENT_SEED_USERS: '做种用户列表',
    TORRENT_LEECHER_USERS: '下载用户列表',
    TORRENT_FINISHED_USERS: '完成用户列表',
    SUBTITLE_UPLOAD_FAILED: '字幕文件上传失败',
    SUBTITLE_DELETE_ICON_TITLE: '删除字幕文件',
    SUBTITLE_CONFIRM_OK: '删除',
    SUBTITLE_CONFIRM_CANCEL: '取消',
    SUBTITLE_CONFIRM_HEADER_TEXT: '删除确认',
    SUBTITLE_CONFIRM_BODY_TEXT: '你确定要删除这条字幕吗?',
    SUBTITLE_DOWNLOAD_SUCCESSFULLY: '字幕文件下载成功',
    SUBTITLE_DOWNLOAD_ERROR: '字幕文件下载失败',
    SUBTITLE_DELETE_SUCCESSFULLY: '字幕文件删除成功',
    SUBTITLE_DELETE_ERROR: '字幕文件删除失败',
    OTHER_TORRENT_LIST_TITLE: '该资源有 {{x}} 个其它版本的种子, 你可以从下面查看或直接下载:',

    ADMIN_BASIC_COMMAND: '操作命令',
    ADMIN_BASIC_REVIEWED: '通过审核',
    ADMIN_BASIC_UPDATE: '从 TMDB 更新电影信息',
    ADMIN_BASIC_DELETE: '删除种子',
    ADMIN_BASIC_SCRAPE: '刮削种子状态',
    ADMIN_BASIC_SET_HNR: '设置HnR',
    ADMIN_BASIC_UNSET_HNR: '取消HnR',
    ADMIN_BASIC_SET_VIP: '设置VIP',
    ADMIN_BASIC_EDIT_TAGS: '编辑标签',
    ADMIN_BASIC_UNSET_VIP: '取消VIP',
    ADMIN_BASIC_TYPE_SET: '设置促销',
    ADMIN_SALE_TYPE_SET: '种子促销类型',
    ADMIN_BASIC_RLEVEL_SET: '推荐级别',
    ADMIN_RLEVEL_SET: '推荐级别设置',

    TORRENT_DELETE_CONFIRM_OK: '删除',
    TORRENT_DELETE_CONFIRM_CANCEL: '取消',
    TORRENT_DELETE_CONFIRM_HEADER_TEXT: '删除确认',
    TORRENT_DELETE_CONFIRM_BODY_TEXT: '你确定要删除这条种子吗?',
    TORRENT_DELETE_SUCCESSFULLY: '种子删除成功',
    TORRENT_DELETE_ERROR: '种子删除失败',
    TORRENT_UPDATE_CONFIRM_OK: '更新',
    TORRENT_UPDATE_CONFIRM_CANCEL: '取消',
    TORRENT_UPDATE_CONFIRM_HEADER_TEXT: '更新确认',
    TORRENT_UPDATE_CONFIRM_BODY_TEXT: '你确定要从 TMDB 上更新该资源详细信息',
    TORRENT_UPDATE_SUCCESSFULLY: '资源信息更新成功',
    TORRENT_UPDATE_ERROR: '资源信息更新失败',
    TORRENT_SETSALETYPE_SUCCESSFULLY: '种子促销类型设置成功',
    TORRENT_SETSALETYPE_ERROR: '种子促销类型设置失败',
    TORRENT_SETREVIEWED_SUCCESSFULLY: '种子审核状态设置成功',
    TORRENT_SETREVIEWED_ERROR: '种子审核状态设置失败',
    TORRENT_SETRLEVEL_SUCCESSFULLY: '种子推荐级别设置成功',
    TORRENT_SETRLEVEL_ERROR: '种子推荐级别设置失败',
    TORRENT_TOGGLE_HNR_SUCCESSFULLY: '改变种子HnR标签成功',
    TORRENT_TOGGLE_HNR_FAILED: '改变种子HnR标签失败',
    TORRENT_TOGGLE_VIP_SUCCESSFULLY: '改变种子VIP标签成功',
    TORRENT_TOGGLE_VIP_FAILED: '改变种子VIP标签失败',
    TORRENT_SETTAGS_SUCCESSFULLY: '种子属性标签设置成功',
    TORRENT_SETTAGS_ERROR: '种子属性标签设置失败',

    //page text
    PAGE_TEXT_FIRST: '首页',
    PAGE_TEXT_PREVIOUS: '上一页',
    PAGE_TEXT_NEXT: '下一页',
    PAGE_TEXT_LAST: '尾页',

    //comment
    USER_COMMENT_LIST: '用户评论',
    POST_NEW_COMMENT: '发表新评论',
    EDIT_COMMENT: '编辑评论',
    REPLY_COMMENT: '回复评论',
    SUBMIT_COMMENT: '提交评论',
    SUBMIT_REPLY: '提交回复',
    SUBMIT_CANCEL: '取消',
    MARKDOWN_LINK: '排版支持 Markdown 全部格式',
    COMMENT_REPLY_BUTTON: '@ 楼主并回复',
    COMMENT_REPLY_DELETE: '删除',
    COMMENT_REPLY_EDIT: '编辑',
    COMMENT_EDITED_INFO: '编辑于',
    COMMENT_CONFIRM_OK: '删除',
    COMMENT_CONFIRM_CANCEL: '取消',
    COMMENT_CONFIRM_HEADER_TEXT: '删除确认',
    COMMENT_CONFIRM_BODY_TEXT: '你确定要删除这条评论吗?',
    COMMENT_CONFIRM_BODY_TEXT_REPLY: '你确定要删除这条评论回复吗?',
    COMMENT_EDIT_ICON_TITLE: '编辑回复',
    COMMENT_DELETE_ICON_TITLE: '删除回复',

    //TorrentsUploadController
    UPLOAD_RULES: '上传规则：',
    TORRENTS_UPLOAD_SUCCESSFULLY: '文件上传成功',
    TORRENTS_UPLOAD_FAILED: '文件上传失败',
    TORRENTS_NO_FILE_SELECTED: '请选择种子文件后再做尝试',

    SELECT_RESOURCE_TYPE: '2. 请选择上传资源类型',
    SELECT_TORRENT_FILE: '1. 请选择种子文件',
    SELECT_FILE: '选择文件',
    DO_UPLOAD: '上传',
    ENTER_TMDB_ID: '3. 请输入TMDB_ID',
    LOAD_TMDB_INFO: '检索信息',
    TMDB_ID: 'TMDB ID',
    TMDB_ID_OK: 'MDB ID 正确，检索信息成功!',
    TMDB_ID_ERROR: 'MDB ID 错误，检索信息失败!',
    TMDB_ID_REQUIRED: '请输入 TMDB ID',
    TMDB_RESOURCE_INFO: '4. TMDB 资源信息',
    TMDB_IS_LOADING: '正在检索视频信息，请稍候...',
    SELECT_SE: '4.1. 请选择电视剧季数并输入本资源为本剧第几集',
    SELECT_TAGS: '5. 请为资源选择合适的标签',
    ENTER_VIDEO_NFO: '6. 请输入视频和音频的NFO信息',
    TORRENTS_SUBMIT_UPLOAD: '7. 同意上传协议，并提交',
    SUBMIT_BUTTON: '已备妥，现在提交',
    CANCEL_BUTTON: '算了，以后再说',
    AGREE_RULES: '我已阅读并同意站内所有协议条款，<a href="#">协议条款</a>',
    DOWNLOAD_TORRENT: '下载种子',

    ENTER_MUSIC_TITLE: '3. 请输入艺人名称和音乐/专辑标题',
    MUSIC_ARTIST: '艺人名称',
    MUSIC_TITLE: '音乐/专辑标题',
    MUSIC_SUB_TITLE: '音乐/专辑短描述',
    SELECT_MUSIC_IMAGE: '3.1 请选择音乐/专辑封面图片',
    COVER_UPLOAD_SUCCESSFULLY: '封面图片上传成功',
    COVER_UPLOAD_FAILED: '封面图片上传失败',
    ENTER_MUSIC_DETAIL_INFO: '4. 请输入音乐/专辑详细信息',
    ERROR_ONLY_IMAGE: '此处只支持图片文件上传(gif, png, bmp, jpg, jpeg)',

    ENTER_RESOURCE_TITLE: '3. 请输入资源标题与描述',
    RESOURCE_TITLE: '资源标题',
    RESOURCE_SUB_TITLE: '资源短描述',
    SELECT_RESOURCE_IMAGE: '3.1 请选择资源封面图片',
    ENTER_RESOURCE_DETAIL_INFO: '4. 请输入资源详细信息',

    //ranking view
    PAGE_HEADER_RANKING_UPLOAD: '上传量排行榜',
    PAGE_HEADER_RANKING_DOWNLOAD: '下载量排行榜',
    PAGE_HEADER_RANKING_RATIO: '分享率排行榜',
    PAGE_HEADER_RANKING_SCORE: '积分排行榜',

    //admin views
    USERS_LIST: '用户列表',
    USERS_UPDATE: '修改',
    TORRENT_STATUS_NEW: '未审核',
    TORRENT_STATUS_REVIEWED: '已审核',
    TORRENT_STATUS_DELETED: '已删除',
    TORRENT_STATUS_ALL: '全部',
    TORRENT_RECOMMEND_LEVEL: '推荐级别',
    TORRENT_RECOMMEND_LEVEL_ITEM: {
      LEVEL0: '无',
      LEVEL1: '一级推荐',
      LEVEL2: '二级推荐',
      LEVEL3: '三级推荐'
    },

    SET_ROLE_SUCCESSFULLY: '用户角色权限设置成功',
    SET_ROLE_FAILED: '用户角色权限设置失败',
    SET_STATUS_SUCCESSFULLY: '用户帐号状态设置成功',
    SET_STATUS_FAILED: '用户帐号状态设置失败',
    SET_IMAGE_SUCCESSFULLY: '用户帐号图片修改成功',
    SET_IMAGE_FAILED: '用户帐号图片修改失败',
    SET_VIP_MONTHS_SUCCESSFULLY: '更新用户vip状态数据成功',
    SET_VIP_MONTHS_FAILED: '更新用户vip状态数据失败',

    SCORE_NUMBER: '积分数',
    SCORE_TITLE: '修改积分',
    SET_SCORE_SUCCESSFULLY: '用户积分设置成功',
    SET_SCORE_FAILED: '用户积分设置失败',

    UPLOADED_NUMBER: '上传量',
    UPLOADED_TITLE: '修改上传量 (单位: GB)',
    SET_UPLOADED_SUCCESSFULLY: '用户上传量设置成功',
    SET_UPLOADED_FAILED: '用户上传量设置失败',

    DOWNLOADED_NUMBER: '下载量',
    DOWNLOADED_TITLE: '修改下载量 (单位: GB)',
    SET_DOWNLOADED_SUCCESSFULLY: '用户下载量设置成功',
    SET_DOWNLOADED_FAILED: '用户下载量设置成功',

    ANNOUNCE_EDIT_TIP: '上传一个种子文件, </br>自动替换 <mark>Announce URL</mark> 与 <mark>Comment</mark>',
    ANNOUNCE_COMMENT: 'Announce Comment',

    //vip views
    VIP: {
      BUTTON_DONATE: '捐赠Vip',
      DONATE_VIP: '捐赠Vip',
      TORRENTS_LIST: 'Vip 资源专区',
      TORRENTS_LIST_ERROR: 'Vip 资源获取失败'
    },

    //about views
    ABOUT: {
      CLIENT_BLACK_LIST: '禁止客户端列表'
    },

    //user settings
    SETTINGS: '控制面版',
    BUTTON_SAVE_PROFILE: '保存',
    BUTTON_SELECT_PICTURE: '选择图片',
    BUTTON_USE_THIS_PICTURE: '应用图片',
    BUTTON_CANCEL: '取消',
    BUTTON_SAVE: '保存',
    BUTTON_SET: '设置',
    BUTTON_COMPLETE: '完成',
    BUTTON_SAVE_PASSWORD: '保存密码',
    CAPTION_CURRENT_PASSWORD: '当前密码',
    CAPTION_NEW_PASSWORD: '新密码',
    CAPTION_VERIFY_PASSWORD: '再输一次新密码',
    CAPTION_REQUIRED_CURRENT_PASSWORD: '请输入当前密码.',
    CAPTION_REQUIRED_NEW_PASSWORD: '请输入新密码.',
    CAPTION_REQUIRED_VERIFY_PASSWORD: '请再输入一次新密码.',
    CAPTION_PASSWORD_NOT_MATCH: '两次输入的新密码不一致.',
    CURRENT_PASSKEY: '当前 Passkey: <mark class="text-danger">{{passkey}}</mark>',
    RESET_PASSKEY_NOTE: '注意：如果你重置了你的 passkey, 你必须重新下载所有种子文件并添加到你的下载客户端，这样才能正确下载上传并统计你的数据。',
    RESET_PASSKEY_CONFIRM_OK: '重置',
    RESET_PASSKEY_CONFIRM_CANCEL: '取消',
    RESET_PASSKEY_CONFIRM_HEADER_TEXT: '重置 Passkey',
    RESET_PASSKEY_CONFIRM_BODY_TEXT: '确要重置你的 passkey?',
    RESET_PASSKEY_SUCCESSFULLY: 'Passkey 重置成功',
    RESET_PASSKEY_ERROR: 'Passkey 重置失败',
    CONNECTED_SOCIAL: '已绑定的社交平台帐号:',
    UNCONNECTED_SOCIAL: '还未绑定的部分社交平台帐号:',

    //user status
    STATUS_ACCOUNT: '帐户状态',
    STATUS_UPLOADED: '我上传的种子',
    STATUS_SEEDING: '正在做种的种子',
    STATUS_DOWNLOADING: '正在下载的种子',
    STATUS_WARNING: '正被警告的种子',
    BTN_REMOVE_WARNING: '移除警告',
    UPLOADED_LIST_ERROR: '获取我上传的种子列表失败',
    SEEDING_LIST_ERROR: '获取我正做种的列表失败',
    WARNING_LIST_ERROR: '获取正被警告种子列表失败',
    DOWNLOADING_LIST_ERROR: '获取我正下载的列表失败',
    STATUS_FIELD: {
      PICTURE: '头像',
      RESET_DEFAULT_PICTURE: '重置为默认图片',
      ADD_VIP_MONTHS: '+ VIP一个月',
      USERNAME: '用户名',
      FIRST_NAME: '姓',
      LAST_NAME: '名',
      DISPLAY_NAME: '显示昵称',
      INVITED_BY: '邀请发送人',
      EMAIL: '邮箱',
      PASSKEY: 'Passkey',
      ROLE: '用户角色',
      STATUS: '帐号状态',
      NORMAL: '正常',
      BANNED: '被禁止',
      BTN_BAN: '禁止',
      BTN_UNBAN: '解禁',
      SEALED: '冻结',
      VIP_START_AT: 'Vip 资格开始于',
      VIP_END_AT: 'Vip 资格结束于',
      UPLOADED: '总上传量',
      DOWNLOADED: '总下载量',
      RATIO: '总分享率',
      SCORE: '总积分',
      UPTOTAL: '发布种子',
      SEEDED: '正在做种',
      LEECHED: '正在下载',
      FINISHED: '下载完成',
      HNR_WARNING: 'H&R 警告',
      FORUM_TOPICS: '论坛主题数',
      FORUM_REPLIES: '论坛回复数',
      DETAIL: '详情',
      SIGNUP_DATE: '注册时间',
      LATEST_SIGNED_TIME: '最近一次登录时间',
      SIGNED_IP: '登录过网站的IP列表',
      LEECHED_IP: '下载过的IP列表',
      BT_CLIENT: '下载过的BT客户端'
    },
    TORRENT_TYPE_LABEL: {
      MOVIE: '电影',
      TVSERIAL: '电视剧',
      MUSIC: '音乐',
      SPORTS: '体育',
      VARIETY: '综艺',
      PICTURE: '图片',
      SOFTWARE: '软件',
      GAME: '游戏',
      EBOOK: '电子书',
      OTHER: '其它'
    },
    TORRENT_STATUS_LABEL: {
      NEW: '未审核',
      REVIEWED: '已审核'
    },

    //user status warning list
    REMOVE_WARNING_CONFIRM_OK: '移除警告',
    REMOVE_WARNING_CONFIRM_CANCEL: '取消',
    REMOVE_WARNING_CONFIRM_HEADER_TEXT: '移除确认',
    REMOVE_WARNING_CONFIRM_BODY_TEXT: '您确定愿意使用 {{score}} 积分来移除这个 H&R 警告?',
    REMOVE_WARNING_CONFIRM_BODY_TEXT_ADMIN: '您确定要移除这个 H&R 警告?',
    REMOVE_WARNING_SUCCESSFULLY: '警告移除成功',
    REMOVE_WARNING_ERROR: '警告移除失败',
    REMOVE_WARNING_NO_ENOUGH_SCORE: '错误: 积分不足!',
    WARNING_TOOLTIP: '您有 {{wnumber}} 个 H&R 警告, 请立即处理, ',
    WARNING_DETAIL_LINK: '查看详情',
    HNR_HAVE_NO_WARNING: '很好, 您目前还没有 H&R 警告.',

    //user score
    SCORE: {
      CURRENT_SCORE: '当前积分:',
      HOW_TO_GET_LEVEL: '怎么计算用户级别？',
      HOW_TO_GET_SCORE: '怎么取得用户积分？'
    },
    EXCHANGE_INVITATION: '兑换一个邀请 ({{score}} 积分)',
    EXCHANGE_INVITATION_CONFIRM_OK: '兑换',
    EXCHANGE_INVITATION_CONFIRM_CANCEL: '取消',
    EXCHANGE_INVITATION_CONFIRM_HEADER_TEXT: '兑换确认',
    EXCHANGE_INVITATION_CONFIRM_BODY_TEXT: '您确定要花 {{score}} 积分来兑换一个限时邀请么?',
    EXCHANGE_INVITATION_SUCCESSFULLY: '限时邀请兑换成功',
    EXCHANGE_INVITATION_ERROR: '限时邀请兑换失败',
    INVITE_CLOSED: '邀请功能已关闭, 现在不能使用积分兑换邀请 ...',
    INVITE_INFO: '邀请功能已关闭, 现在只有系统管理员可发送邀请 ...',
    NOTE_CAPTION: '请注意!',
    NOTE_TIP: '提示:',

    //invitation
    INVITATION: {
      MY_INVITATION: '我的邀请',
      USED_INVITATION: '已发送的邀请',
      INVITE_NOTE: '请注意限时邀请的过期时间为 {{hours}} 小时.',
      SIGN_NOTE: '请注意邀请注册的有效期为 {{hours}} 小时.',
      TITLE_CREATEDAT: '创建时间',
      TITLE_EXPIRESAT: '过期时间',
      TITLE_INVITEDAT: '发邀时间',
      TITLE_SIGNINAT: '注册时间',
      TITLE_SIGNINID: '注册ID',
      TITLE_OPERATION: '操作',
      TITLE_SENDER: '发送人',
      TITLE_TOKEN: '哈希码',
      TITLE_EMAIL: '邮箱',
      TITLE_SEND: '发送邀请',
      TITLE_STATUS: '状态',
      TITLE_STATUS_REGED: '已注册',
      TITLE_STATUS_UNREGED: '未注册',
      TITLE_STATUS_EXPIRED: '已失效'
    },
    GET_INVITATIONS_ERROR: '获取邀请列表失败',
    BUTTON_INVITE: '发送',
    BUTTON_SEARCH: '搜索',
    INPUT_EMAIL: '邮箱地址',
    SEND_INVITE_SUCCESSFULLY: '发送邀请成功',
    SEND_INVITE_ERROR: '发送邀请失败',
    INVALID_INVITATION_TIP: '无效的邀请, 该邀请可能已过期.',
    INVITATION_IS_EMPTY: '没有可用的邀请函!',
    INVITATION_USED_IS_EMPTY: '没有发送过的邀请!',

    ADMIN_SEND_OFFICIAL_INVITATION: '发送官方邀请函',
    ADMIN_INVITATION_SUCCESSFULLY: '官方邀请函发送成功',
    ADMIN_INVITATION_ERROR: '官方邀请函发送失败',

    //user message box
    MESSAGES_BOX: '站内消息',
    MESSAGES_SEND: '发送消息',
    ADMIN_MESSAGES_SEND: '发送系统消息',
    MESSAGES_SEND_BUTTON: '发送',
    MESSAGES_IS_EMPTY: '消息盒子为空!',
    MESSAGES_FIELD: {
      TO: '发送至:',
      TYPE: '消息类型:',
      TITLE: '标题:',
      CONTENT: '内容:',
      TO_REQUIRED: '请输入消息接收者',
      TT_REQUIRED: '请输入消息标题',
      CT_REQUIRED: '请输入消息内容',
      LIST_TITLE: '标题',
      LIST_TITLE_CONTENT: '标题 & 内容',
      LIST_REPLIES: '回复',
      LIST_READERS: '已读',
      LIST_TYPE: '类型',
      LIST_SENDAT: '发送时间',
      LIST_SELECT: '选择',
      INFO_SEND_TO: '发送给',
      INFO_SEND_AT: '于',
      LAST_REPLY_AT: '最新回复于',
      NEW_MSG: '条未读消息'
    },
    BUTTON_MESSAGE_DELETE: '删除',
    BUTTON_MESSAGE_CLOSE: '关闭(esc)',
    BUTTON_MESSAGE_REPLY: '回复',

    MESSAGE_TYPE_USER: '用户消息',
    MESSAGE_TYPE_SYSTEM: '系统消息',
    MESSAGE_TYPE_ADVERT: '广告推送',
    MESSAGE_TYPE_NOTICE: '系统通知',
    MESSAGE_SEND_SUCCESSFULLY: '消息发送成功',
    MESSAGE_SEND_FAILED: '消息发送失败',
    MESSAGE_DELETED_SUCCESSFULLY: '消息删除成功',
    MESSAGE_DELETED_ERROR: '消息删除失败',

    MESSAGE_DELETE_CONFIRM_OK: '删除',
    MESSAGE_DELETE_CONFIRM_CANCEL: '取消',
    MESSAGE_DELETE_CONFIRM_HEADER_TEXT: '删除确认',
    MESSAGE_DELETE_CONFIRM_BODY_TEXT_MANY: '您确定要删除选中的这些消息?',
    MESSAGE_DELETE_CONFIRM_BODY_TEXT: '您确定要删除该消息?',

    MESSAGE_TO_ICON_TITLE: '给{{name}}发送站内消息',
    USER_INFO_TITLE: '{{name}} 的用户信息',
    USER_IS_VIP: '{{name}} 是一个VIP用户',

    //traces
    ADMIN_TRACES_LIST: '系统日志',
    TRACES_IS_EMPTY: '系统日志为空!',
    TRACES_FIELDS: {
      USERNAME: '操作用户',
      CONTENT: '日志内容',
      TYPE: '操作类型',
      CREATEDAT: '操作时间'
    },

    //chat view
    CHAT_USERS_LIST: '用户列表',
    CHAT_WELCOME: '欢迎进入聊天室，请注意自已的言行，共同维护良好的聊天环境！',
    CHAT_PLACEHOLDER_INPUT: '输入聊天消息，按回车键发送',
    CHAT_USER_JOIN: '已加入聊天室~',
    CHAT_USER_QUIT: '已退出聊天室~',
    CHAT_CLEAN_MESSAGE: '清空聊天记录',
    CHAT_BOLD_MESSAGE: '粗体字风格',
    CHAT_ITALIC_MESSAGE: '斜体字风格',
    CHAT_MESSAGE_ALREADY_CLEAN: '*** 聊天消息已被清空',
    CHAT_FONT_BOLD: '粗体字',
    CHAT_FONT_ITALIC: '斜体字',
    CHAT_BAN_KICK: '踢出房间并禁止再连接',
    CHAT_BAN_KICK_REASON: '你在这里是个不受欢迎的人',
    CHAT_BAN_KICK_MESSAGE: '{{who}} 被 {{by}} 踢出房间并禁止 ({{reason}})',

    CHAT_CONFIRM_BAN_OK: '踢出并禁止',
    CHAT_CONFIRM_BAN_CANCEL: '取消',
    CHAT_CONFIRM_BAN_HEADER_TEXT: '踢出确认',
    CHAT_CONFIRM_BAN_BODY_TEXT: '你确定要把该用户踢出聊天室并禁止他的ip登录吗?',
    CHAT_DISCONNECT: '已与服务器断开连接，请检查网络或聊天服务器已关闭',
    CHAT_FONT_COLOR: '字体颜色',

    //footer view
    MIT_PROTOCOL: '本项目源码受 <a href="https://github.com/twbs/bootstrap/blob/master/LICENSE" target="_blank">MIT</a> 开源协议保护',
    GIT_REPO: 'Power by &copy;meanTottent，<a href="https://github.com/taobataoma/meanTorrent" target="_blank">GitHub 源码仓库</a>',
    TOTAL_USERS: '注册会员',
    TOTAL_VIP_USERS: 'VIP会员',
    TOTAL_TORRENTS: '种子数',
    TOTAL_TORRENTSSIZE: '种子总体积',
    TOTAL_SEEDERS: '正在做种',
    TOTAL_LEECHERS: '正在下载',
    TOTAL_UPLOADED: '总上传量',
    TOTAL_DOWNLOADED: '总下载量',
    TOTAL_FORUMTOPICS: '论坛话题',
    TOTAL_FORUMREPLIES: '论坛回复',

    ///////////////////////the movie db fields////////////////////////////////
    TMDB_FIELDS: {
      ID: 'id',
      IMDB_ID: 'imdb_id',
      IMDB_LINK: 'IMDB链接',
      TMDB_LINK: 'TMDB链接',
      HOMEPAGE: '主页',
      ADULT: '成人级别',
      BUDGET: '制作预算',
      REVENUE: '票房收入',
      ORIGINAL_LANGUAGE: '原语言',
      ORIGINAL_TITLE: '原片名',
      TITLE: '译名',
      SUB_TITLE: '短描述',
      ARTIST: '艺人名称',
      BELONGS_TO_COLLECTION: '集合',
      GENRES: '类型',
      OVERVIEW: '详情介绍',
      POPULARITY: 'popularity',
      PRODUCTION_COMPANIES: '制作',
      PRODUCTION_COUNTRIES: '国家',
      RELEASE_DATE: '上映',
      RUNTIME: '片长',
      SPOKEN_LANGUAGES: '语言',
      STATUS: '状态',
      TAGLINE: '推广语',
      VIDEO: 'video',
      VOTE_AVERAGE: 'IMDB评分',
      VOTE_COUNT: '参评人数',
      VOTE_UNIT: '人',
      BACKDROP_PATH: '背景海报',
      POSTER_PATH: '海报',
      CAST: '主演：',
      DIRECTOR: '导演',

      ORIGINAL_NAME: '原剧名',
      NAME: '剧名',
      FIRST_AIR_DATE: '首次上演时间',
      LAST_AIR_DATE: '最近上演时间',
      NETWORK: '网络',
      NUMBER_OF_SEASONS: '总季数',
      NUMBER_OF_EPISODES: '总集数',
      TOTAL_SE: '总季集',
      THIS_SE: '本资源季集',
      UNIT_EPISODES: '集',
      UNIT_SEASONS: '季',
      EPISODES_INPUT_TIP: '提示：输入只接受0-9的数字以及减号字符，如 9 表示第9集，1-30 表示1到30集集合，像 001 12 01-30 12-45 45-127 等.'
    },

    //forum
    FORUMS: {
      FORUM_TITLE: 'meanTorrent 官方论坛',
      FORUM_SUB_TITLE: '欢迎您进入 meanTorrent 官方论坛，请文明发言，谢谢!',
      HOME_INDEX: '论坛首页',
      BTN_ADD_FORUM: '添加版块',
      BTN_EDIT_FORUM: '编辑版块',
      BTN_ADD: '添加',
      BTN_EDIT: '编辑',
      BTN_SAVE: '保存',
      BTN_CANCEL: '取消',
      LINK_EDIT: '编辑',
      BTN_DELETE: '删除',
      BTN_SUBMIT_TOPIC: '提交话题',
      BTN_SUBMIT_REPLY: '提交回复',
      BTN_POST_NEW_TOPIC: '发起新话题 ',
      BTN_POST_NEW_REPLY: '回复',
      BTN_SET_READONLY: '设为只读',
      BTN_UNSET_READONLY: '取消只读',
      ADD_SUCCESSFULLY: '版块添加成功',
      ADD_FAILED: '版块添加失败',
      EDIT_SUCCESSFULLY: '版块编辑成功',
      EDIT_FAILED: '版块编辑失败',
      DELETE_SUCCESSFULLY: '版块删除成功',
      DELETE_FAILED: '版块删除失败',
      DELETE_CONFIRM_OK: '删除',
      DELETE_CONFIRM_CANCEL: '取消',
      DELETE_CONFIRM_HEADER_TEXT: '删除确认',
      DELETE_CONFIRM_BODY_TEXT: '您确定要删除这个版块吗?',
      MODERATOR_TITLE: '添加版主',
      ADD_MODERATOR_SUCCESSFULLY: '添加版主成功',
      ADD_MODERATOR_FAILED: '添加版主失败',
      REMOVE_MODERATOR_SUCCESSFULLY: '删除版主成功',
      REMOVE_MODERATOR_FAILED: '删除版主失败',
      REMOVE_CONFIRM_BODY_TEXT: '您确定要删除该版主吗?',
      PT_REQUIRED: '请输入话题标题',
      PC_REQUIRED: '请输入话题内容',
      PRC_REQUIRED: '请输入回复内容',
      POST_TOPIC_SUCCESSFULLY: '新话题发布成功',
      POST_TOPIC_FAILED: '新话题发布失败',
      POST_REPLY_SUCCESSFULLY: '回复内容提交成功',
      POST_REPLY_FAILED: '回复内容提交失败',
      TOPIC_EDIT_SUCCESSFULLY: '话题内容编辑成功',
      TOPIC_EDIT_FAILED: '话题内容编辑失败',
      TOPIC_TOGGLE_READONLY_SUCCESSFULLY: '只读状态切换成功',
      TOPIC_TOGGLE_READONLY_FAILED: '只读状态切换失败',
      TOPIC_SEARCH_FAILED: '搜索失败',
      TOPIC_TOGGLE_TOP_SUCCESSFULLY: '置顶状态切换成功',
      TOPIC_TOGGLE_TOP_FAILED: '置顶状态切换失败',
      TOPIC_TOGGLE_GLOBAL_SUCCESSFULLY: '全局状态切换成功',
      TOPIC_TOGGLE_GLOBAL_FAILED: '全局状态切换失败',
      REPLY_EDIT_SUCCESSFULLY: '回复内容修改成功',
      REPLY_EDIT_FAILED: '回复内容修改失败',
      DELETE_TOPIC_SUCCESSFULLY: '话题删除成功',
      DELETE_TOPIC_FAILED: '话题删除失败',
      DELETE_TOPIC_CONFIRM_OK: '删除',
      DELETE_TOPIC_CONFIRM_CANCEL: '取消',
      DELETE_TOPIC_CONFIRM_HEADER_TEXT: '删除话题',
      DELETE_TOPIC_CONFIRM_BODY_TEXT: '您确定要删除这个话题?',
      DELETE_REPLY_SUCCESSFULLY: '回复删除成功',
      DELETE_REPLY_FAILED: '回复删除失败',
      DELETE_REPLY_CONFIRM_HEADER_TEXT: '删除回复',
      DELETE_REPLY_CONFIRM_BODY_TEXT: '您确定要删除这条回复?',
      READ_ONLY_POST: '*** 只读版块，不能发表话题!',
      READ_ONLY_REPLY: '*** 只读话题，不能发表回复!',
      TITLE_READONLY: '只读',
      TODAY_NEW_COUNT_ALL: '(今日: <mark class="text-danger">{{topic}}</mark> 话题, <mark class="text-danger">{{reply}}</mark> 回复)',
      TODAY_NEW_COUNT_TOPIC: '(今日: <mark class="text-danger">{{topic}}</mark> 话题)',
      TODAY_NEW_COUNT_REPLY: '(今日: <mark class="text-danger">{{reply}}</mark> 回复)',
      UPLOAD_ATTACH_SUCCESSFULLY: '文件上传成功',
      UPLOAD_ATTACH_FAILED: '文件上传失败',
      ATTACH_UPLOAD_TOOLTIP1: '如需上传附件请将文件直接拖到这里或',
      ATTACH_UPLOAD_TOOLTIP2: '选择文件',
      ATTACH_UPLOAD_TOOLTIP3: ', 图片文件将会被自动显示, 其它类文件只能被下载.',
      ATTACH_UPLOADING: '正在上传',
      ATTACH_LIST_HEADER: '附件清单:',
      THUMBS_LIST_HEADER: '点赞用户请单 ({{number}}):',
      ATTACH_FILE_SIZE: '文件大小:',
      ATTACH_DOWN_COUNT: '下载次数:',
      ATTACHE_DOWNLOAD_SUCCESSFULLY: '附件文件下载成功',
      ATTACHE_DOWNLOAD_FAILED: '附件文件下载失败',
      FLOOR_POSTER: '楼主',
      ALL_FORUMS: '所有论坛',
      SEARCH_RESULT_LIST: '搜索结果',
      SEARCH_LOADING: '正在装载搜索结果，请稍候...',
      SEARCH_EMPTY: '没有匹配的搜索结果',

      CATEGORY: {
        AFFAIRS: '站务区',
        DISCUSS: '讨论区',
        BUSINESS: '商务区'
      },
      FIELDS: {
        NAME: '版块名称',
        ORDER: '版块序号',
        CMD: '操作选项',
        MODERATORS: '版主',
        DESC: '描述',
        CATEGORY: '分类',
        READONLY_POST: '只有管理员可以发起新话题',
        READONLY_REPLY: '禁止普通用户回复该话题',
        TOPIC: '主题',
        GLOBAL_TOPIC: '全局主题',
        TOPICS: '主题数',
        REPLIES: '回贴数',
        VIEWS: '查看数',
        LAST_REPLY: '最近回复',
        TITLE: '标题',
        CONTENT: '内容',
        REPLY_BY_1: '由',
        REPLY_BY_2: '回复于 {{createdAt}}',
        REPLY_BY_3: '发表于 {{createdAt}}'
      },
      TITLES: {
        REPLY_QUOTE: '引用并回复',
        REPLY_EDIT: '编辑回复',
        REPLY_DELETE: '删除回复',
        TOPIC_EDIT: '编辑话题',
        TOPIC_DELETE: '删除话题',
        TOPIC_TOP_TOPIC: '置顶话题',
        TOPIC_GLOBAL_TOPIC: '全局话题',
        TOPIC_THUMBS_UP: '点赞并赠送积分: {{number}}',
        HAS_ATTACH: '包含附件'
      }
    },

    /////////////////////////resources tag fields///////////////////////////////////
    RESOURCESTAGS: {
      TYPE: {
        SELF: '类型',
        BLU_RAY: 'BLU_RAY',
        WEB_DL: 'WEB_DL',
        REMUX: 'REMUX',
        ENCODE: 'ENCODE'
      },

      RESOLUTION: {
        SELF: '解析度',
        S4K: '4K',
        S1080P: '1080p',
        S1080I: '1080i',
        S720P: '720p'
      },

      VIDEO: {
        SELF: '视频编码',
        AVC: 'AVC',
        X265: 'X265',
        X264: 'X264'
      },

      AUDIO: {
        SELF: '音频编码',
        AAC: 'AAC',
        AC3: 'AC3',
        LPCM: 'LPCM',
        DTS: 'DTS',
        DTS_HD: 'DTS HD',
        ATMOS_TRUEHD: 'Atmos TrueHD'
      },

      AUDIOFORMATS: {
        SELF: '声音格式',
        WAV: 'WAV',
        FLAC: 'FLAC',
        APE: 'APE'
      },

      CHANNEL: {
        SELF: '声道',
        C20: '2.0 声道',
        C51: '5.1 声道',
        C71: '7.1 声道'
      },

      THREED: {
        SELF: '2D/3D',
        T2D: '2D',
        T3D: '3D',
        T2D_3D: '2D-3D'
      },

      RANKING: {
        SELF: '排行榜',
        IMDB_TOP100: 'IMDB TOP100',
        IMDB_TOP250: 'IMDB TOP250',
        DOUBAN_TOP100: '豆瓣 TOP100',
        DOUBAN_TOP250: '豆瓣 TOP250'
      },

      REGION: {
        SELF: '地区',
        CHINA: '中国',
        USA: '美国',
        JAPAN: '日本',
        KOREA: '韩国',
        INDIA: '印度',
        ARAB: '阿拉伯'
      },

      MODIFY: {
        SELF: '后期编辑',
        DIY: 'DIY',
        GUOPEI: '国配',
        ZHONGZI: '中字'
      },

      MUSIC_SUB_CAT: {
        SELF: '音乐类型',
        CD: 'CD',
        MTV: 'MTV'
      },

      MOVIE_SUB_CAT: {
        SELF: '视频分类',
        CARTOON: '卡通片',
        DOCUMENTARY: '记录片'
      },

      SPORTS_SUB_CAT: {
        SELF: '运动项目',
        FOOTBALL: '篮球',
        BASKETBALL: '足球',
        RUGBY: '橄榄球',
        TENNIS: '网球',
        BOXING: '拳击',
        SNOOKER: '斯诺克',
        F1: 'F1赛车'
      },

      PICTURE_SUB_CAT: {
        SELF: '图片分类',
        SCENERY: '风光',
        FASHION: '时尚',
        SPORTS: '体育运动',
        ART_PORTRAIT: '艺术人像'
      },

      SOFT_SUB_CAT: {
        SELF: '软件分类',
        OS: '操作系统',
        OFFICE: '办公软件',
        TOOLS: '工具软件',
        MEDIA: '多媒体',
        DEVELOPMENT_IDE: '编程开发',
        MAP: '地图'
      },

      EBOOK_FORMAT: {
        SELF: 'eBook Format',
        PDF: 'PDF',
        WDL: 'WDL',
        ABM: 'ABM',
        CEB: 'CEB',
        PDG: 'PDG',
        CHM: 'CHM',
        TXT: 'TXT'
      },

      EBOOK_SUB_CAT: {
        SELF: 'eBook Category',
        PROGRAMMING: '编程',
        COMPUTER: '计算机',
        MAGAZINE: '杂志',
        STORY: '故事小说',
        BIOGRAPHY: '人物传记'
      },

      PLATFORM: {
        SELF: 'Platform',
        WINDOWS: 'Windows',
        MACOS: 'MacOS',
        LINUX: 'Linux',
        IOS: 'iOS',
        ANDROID: 'Android',
        CAR: 'Car'
      }
    }
  };

  // **************************************************
  // 中文翻译结束
  // **************************************************

  // config $translateProvider
  transConfig.$inject = ['$translateProvider'];
  function transConfig($translateProvider) {
    $translateProvider.translations('zh', string_zh);
  }

}(ApplicationConfiguration));
