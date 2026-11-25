/**
 * 书签数据源：后续新增工具 / 分类只需修改本文件，页面会自动渲染。
 *
 * 分类字段：
 *   id    分类锚点 id（唯一，用于侧边栏跳转，如 cat-preview）
 *   name  分类名称（显示在标题与侧边栏）
 *   hue   主题色相 0-360（决定该分类图标/卡片的强调色，190 青 / 262 紫 / 330 粉 / 28 橙 / 158 绿）
 *   icon  分类图标（24x24 viewBox 内的 SVG path 片段）
 *   tools 工具数组
 *
 * 工具字段：
 *   name    工具名称（必填）
 *   url     链接（必填，建议 https + 结尾斜杠）
 *   desc    一句话描述（必填，卡片最多显示 3 行）
 *   domain  展示的域名（可省略，默认从 url 解析）
 *   tags    搜索关键词（可省略，建议把中英文别名、用途都写进来）
 *   abbr    卡片左上角缩写（可省略，默认取名称首字母，如 EP / TP）
 */
window.BOOKMARKS = [
  {
    id: 'cat-preview',
    name: '文件预览',
    hue: 190,
    icon: '<path d="M14 3v5h5"/><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2z"/><path d="M8 13h8M8 17h5"/>',
    tools: [
      {
        name: 'EmbedPDF',
        abbr: 'EP',
        url: 'https://www.embedpdf.com/docs/viewer/vue',
        domain: 'embedpdf.com',
        tags: 'PDF 阅读器 查看器 嵌入 工具栏 缩略图 搜索 批注 评论 表单 签名 图章',
        desc: '可直接嵌入的完整 PDF 阅读器，集工具栏、缩略图、搜索、批注、评论、表单、签名与图章于一体，适配手机与宽屏，支持多语言及键盘与屏幕阅读器操作。'
      },
      {
        name: 'File Viewer',
        abbr: 'FV',
        url: 'https://doc.file-viewer.app/zh',
        domain: 'doc.file-viewer.app',
        tags: 'Flyfish 文件 在线预览 浏览器端 渲染 Office PDF',
        desc: '浏览器端完成核心解析与渲染，为业务系统快速补齐文件在线预览能力，无需后端转码、临时文件清理或异步转换任务。'
      },
      {
        name: 'BaseMetas Fileview',
        abbr: 'BM',
        url: 'https://fileview.basemetas.cn/',
        domain: 'fileview.basemetas.cn',
        tags: '在线文件预览 解决方案 200种文件 API 开源 独立部署',
        desc: '在线文件预览解决方案，支持超过 200 种文件格式，API 调用简单快捷，支持独立部署，开源免费。'
      }
    ]
  },
  {
    id: 'cat-font',
    name: '字体工具',
    hue: 262,
    icon: '<path d="M4 7V5h16v2"/><path d="M12 5v14"/><path d="M9 19h6"/>',
    tools: [
      {
        name: 'Fontsource 开源字体包',
        abbr: 'FS',
        url: 'https://fontsource.org/docs/getting-started/install',
        domain: 'fontsource.org',
        tags: '开源字体包 NPM 自托管 字体',
        desc: '开源字体集合，字体被打包成独立的 NPM 包，可在网页应用中自行托管使用。'
      },
      {
        name: 'transfonter',
        abbr: 'TR',
        url: 'https://transfonter.org/',
        domain: 'transfonter.org',
        tags: 'web 字体转换 webfont 转换器',
        desc: '在线 web 字体转换工具，可将字体文件转成多种浏览器兼容格式并生成对应的 CSS。'
      },
      {
        name: '免费商用字体下载',
        abbr: 'FZ',
        url: 'https://font.sucai999.com/',
        domain: 'font.sucai999.com',
        tags: '免费商用字体 字体下载 中文字体 字体库 可商用 素材',
        desc: '汇集可免费商用的中文字体资源，支持在线预览与打包下载，适合设计、海报与网页排版使用。'
      }
    ]
  },
  {
    id: 'cat-icon',
    name: '字体图标 / 图标库',
    hue: 330,
    icon: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    tools: [
      {
        name: 'Remix Icon',
        abbr: 'RI',
        url: 'https://www.remixicon.com/',
        domain: 'remixicon.com',
        tags: '图标库 开源 svg 图标',
        desc: '开源中性风格图标库，提供成套的线性与面性图标，支持多种使用方式。'
      },
      {
        name: 'Iconfont',
        abbr: 'IF',
        url: 'https://www.iconfont.cn/',
        domain: 'iconfont.cn',
        tags: '阿里巴巴 矢量图标库 图标 字体图标',
        desc: '阿里矢量图标库，支持图标搜索、收藏、批量下载与在线项目管理。'
      }
    ]
  },
  {
    id: 'cat-image',
    name: '图片处理',
    hue: 28,
    icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m21 15-4.5-4.5L7 20"/>',
    tools: [
      {
        name: 'Favicon 图标制作',
        abbr: 'BB',
        url: 'https://www.bitbug.net/',
        domain: 'bitbug.net',
        tags: 'Favicon 图标制作 网站图标 ico 生成',
        desc: '在线生成网站 Favicon 图标，上传图片即可输出多种尺寸的 ico 文件。'
      },
      {
        name: '图片合成 Gif',
        abbr: 'GIF',
        url: 'https://www.matools.com/gif',
        domain: 'matools.com',
        tags: '图片合成 Gif 动图 制作',
        desc: '将多张静态图片在线合成为 GIF 动图，可调整播放速度与尺寸。'
      },
      {
        name: 'TinyPNG 图片压缩',
        abbr: 'TP',
        url: 'https://tinypng.com/zh',
        domain: 'tinypng.com',
        tags: 'TinyPNG 图片压缩 AVIF JPEG XL WebP PNG 无损压缩',
        desc: '智能 AVIF、JPEG XL、WebP、PNG 和 JPEG 压缩，让网站加载更快。'
      },
      {
        name: '抠抠抠 免费抠图工具',
        abbr: 'KK',
        url: 'https://koukoukou.cn/',
        domain: 'koukoukou.cn',
        tags: '抠抠抠 免费抠图 去背景 人像分割',
        desc: '免费在线抠图工具，自动识别主体并去除背景，适合人像与商品图。'
      },
      {
        name: '图片转 BASE64 编码',
        abbr: 'B64',
        url: 'https://www.jyshare.com/front-end/59/',
        domain: 'jyshare.com',
        tags: '图片转 BASE64 编码 data URI 转换',
        desc: '把本地图片转换为 BASE64 / Data URI 字符串，方便直接嵌入代码。'
      },
      {
        name: 'picsum 在线随机图片',
        abbr: 'PS',
        url: 'https://picsum.photos/',
        domain: 'picsum.photos',
        tags: 'picsum 在线随机图片 素材 占位图 placeholder',
        desc: '按 URL 参数返回指定尺寸的随机图片，适合做占位图与原型素材。'
      }
    ]
  },
  {
    id: 'cat-wechat',
    name: '公众号排版',
    hue: 158,
    icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h6M7 13h10M7 17h7"/>',
    tools: [
      {
        name: '小墨鹰编辑器',
        abbr: 'XM',
        url: 'https://xiaomoyingbianjiqi.wzdh.me/',
        domain: 'xiaomoyingbianjiqi.wzdh.me',
        tags: '公众号 排版 图文 编辑器',
        desc: '公众号图文排版编辑器，提供模板与样式组件，一键排版并同步到公众号。'
      },
      {
        name: '秀米 XIUMI',
        abbr: 'XI',
        url: 'https://xiumi.us/#/studio/papers',
        domain: 'xiumi.us',
        tags: '秀米 XIUMI 公众号 排版 图文 编辑器',
        desc: '图文排版工具，拥有丰富的模板与组件，适合公众号文章与 H5 页面制作。'
      }
    ]
  },
  {
    id: 'cat-dev',
    name: '开发辅助',
    hue: 210,
    icon: '<path d="m9 8-4 4 4 4"/><path d="m15 16 4-4-4-4"/>',
    tools: [
      {
        name: 'UUID 生成器',
        abbr: 'UU',
        url: 'https://uuid.580tea.com/',
        domain: 'uuid.580tea.com',
        tags: 'UUID GUID 生成器 唯一标识 随机 ID 批量',
        desc: '在线生成 UUID 通用唯一识别码，支持多种版本与批量生成，可一键复制用于开发调试。'
      },
      {
        name: 'CMD5 加解密',
        abbr: 'MD5',
        url: 'https://www.cmd5.com/',
        domain: 'cmd5.com',
        tags: 'CMD5 MD5 加密 解密 反查 哈希 校验 批量',
        desc: '在线 MD5 加密与解密查询平台，支持批量加密、哈希反查与多种算法校验，常用于开发调试与数据核对。'
      },
      {
        name: '云效 Codeup',
        abbr: 'CU',
        url: 'https://codeup.aliyun.com/',
        domain: 'codeup.aliyun.com',
        tags: '云效 Codeup 阿里云 代码管理 代码托管 Git 仓库 分支 合并请求 CI CD 流水线',
        desc: '阿里云代码管理与托管平台，支持 Git 仓库、分支保护、合并请求评审及流水线集成，适合团队协作开发。'
      },
      {
        name: 'UI/UX Pro Max',
        abbr: 'UX',
        url: 'https://www.uupm.cc/',
        domain: 'uupm.cc',
        tags: 'UI UX Pro Max 设计 界面 用户体验 交互 设计规范 灵感 组件',
        desc: '面向前端与产品设计的 UI/UX 资源站，提供界面设计灵感、交互参考与设计规范，帮助快速确定页面风格。'
      },
      {
        name: 'Base64 在线编码解码',
        abbr: 'B64',
        url: 'https://base64.us/',
        domain: 'base64.us',
        tags: 'Base64 编码 解码 加密 转换 在线工具 data URI',
        desc: '在线 Base64 编码与解码工具，支持文本与文件互转，编码结果可一键复制，常用于接口调试与数据传输。'
      }
    ]
  },
  {
    id: 'cat-utility',
    name: '实用工具',
    hue: 96,
    icon: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.6 4 5.6 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.6-4-9s1.4-6.4 4-9z"/>',
    tools: [
      {
        name: 'DNSHE 免费域名',
        abbr: 'DN',
        url: 'https://www.dnshe.com/',
        domain: 'dnshe.com',
        tags: 'DNSHE 免费域名 域名申请 解析 注册 建站',
        desc: '提供免费域名申请与管理服务，可用于测试环境、个人项目或临时站点绑定解析。'
      },
      {
        name: '草料二维码',
        abbr: 'CL',
        url: 'https://cli.im/',
        domain: 'cli.im',
        tags: '草料 二维码 生成器 活码 扫码 短链接 美化',
        desc: '在线二维码生成与管理平台，支持文本、网址、文件等内容，可美化样式并统计扫码数据。'
      },
      {
        name: '在线屏幕录制',
        abbr: 'REC',
        url: 'https://toolwa.com/record/',
        domain: 'toolwa.com',
        tags: '屏幕录制 录屏 录像 在线录制 摄像头 麦克风 音视频 导出',
        desc: '浏览器内即可完成屏幕录制，支持选择录制区域、摄像头与麦克风，录完直接导出视频文件，无需安装软件。'
      },
      {
        name: 'KMS 激活',
        abbr: 'KMS',
        url: 'https://kms.cx/',
        domain: 'kms.cx',
        tags: 'KMS 激活 Office Windows 密钥 激活服务器 批量授权',
        desc: '提供 KMS 激活服务地址与相关说明，用于 Windows 与 Office 批量授权版本的激活。'
      }
    ]
  }
];