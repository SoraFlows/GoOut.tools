export type SiteConfig = typeof siteConfig

export const siteConfig = {
    site: "https://goout.tools", // 你的网站域名
    feed_url: "https://goout.tools/feed.xml", // 尽可能用绝对 URL
    name: "独立开发者出海技术栈和工具集合",
    description:
        "出海第一步，搞定技术栈, 聚合全网独立开发者出海技术栈和工具, 技术出海相关的技术实践经验、合规解读、方案选型等",
    keywords: [
        "技术出海",
        "工具出海",
        "品牌出海",
        "独立开发者",
        "科技出海",
        "独立开发者出海技术栈和工具",
        "独立开发者出海工具",
        "独立开发者出海技术栈",
        "出海营销",
        "独立开发者出海",
        "独立开发者出海业务",
        "面向海外用户开发产品",
        "出海第一步，搞定工具库",
    ],
    language: "zh-CN", // 网站语言代码
    icons: "/favicon.ico",
    image_url: "/opengraph-image.png", // 放一个叫 opengraph-image.png 的1200x630尺寸的图片到你的 app 目录下即可
    official_image: "/officialWechat.png",
    generator: "goout.tools", // 想写什么就写什么，也可以不提供
    copyright: `&copy; 2024 - ${new Date().getFullYear().toString()} by AmbroseX`,
    mainNav: [],
    links: {
        rss: "https://goout.tools/feed.xml",
        twitter: "https://twitter.com/FlytoAGI",
        github: "https://github.com/weijunext/indie-hacker-tools",
    },
}
export interface NavLink {
    /** 站点图标 */
    icon?: string
    /** 站点名称 */
    title: string
    /** 站点名称 */
    desc?: string
    /** 站点链接 */
    link: string
    /** 嵌套的导航数据 */
    items?: NavLink[] // 新增
}

export interface NavData {
    title: string
    items: NavLink[]
}