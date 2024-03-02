import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoOut | 出海去 | 独立开发者出海工具集合大全",
  description: "独立开发者出海技术栈和工具, 收集的一些有用的出海工具和资源，可以帮助你更好地了解和进入海外市场。",
  icons: "/logo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      {/* Yandex验证 */}
      <meta name="yandex-verification" content={siteConfig.yandexVerifi} />
      {/* 百度验证 */}
      <meta name="baidu-site-verification" content={siteConfig.baiduVerifi} />
      <Script
        src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.googleId}`}
        strategy='afterInteractive'
      />
      {/* 直接在页面中执行的脚本 */}
      <Script
        id='google-analytics'
        strategy='afterInteractive'>
        {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', ${siteConfig.googleId});
                  `}
      </Script>
      <Script
        src={`https://hm.baidu.com/hm.js?${siteConfig.baiduId}`}
        strategy='afterInteractive'
      />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
