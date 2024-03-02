export type SiteConfig = typeof siteConfig

export const siteConfig = {
    site: "https://goout.tools", // 你的网站域名
    feed_url: "https://goout.tools/feed.xml", // 尽可能用绝对 URL
    title: "GoOut | 出海去 | 独立开发者出海工具集合大全",
    description:
        "出海第一步，搞定技术栈, 聚合全网独立开发者出海技术栈和工具, 技术出海相关的技术实践经验、合规解读、方案选型等，独立开发者出海技术栈和工具, 收集的一些有用的出海工具和资源，可以帮助你更好地了解和进入海外市场。",
    icons: "/logo.svg",
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
    image_url: "/opengraph-image.png", // 放一个叫 opengraph-image.png 的1200x630尺寸的图片到你的 app 目录下即可
    official_image: "/officialWechat.png",
    generator: "https://goout.tools", // 想写什么就写什么，也可以不提供
    copyright: `&copy; 2024 - ${new Date().getFullYear().toString()} by AmbroseX`,
    mainNav: [],
    googleId: "G-DQV98M9BYP",
    baiduId: "4f821b90b96b98cd3ac1b18a38310037",
    baiduVerifi: "codeva-dSoeVdJhKG",
    yandexVerifi: "0d0e0b71c05af6ae",
    links: {
        rss: "https://goout.tools/feed.xml",
        twitter: "https://twitter.com/FlytoAGI",
        github_web: "https://github.com/SoraFlows/GoOut.tools",
        github_collect: "https://github.com/weijunext/indie-hacker-tools",
    }
}