import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const defaultThemes = ["@docusaurus/theme-live-codeblock"]; // "@docusaurus/theme-live-codeblock"
// 搜索插件只在正式环境可用！
const themes =
  process.env.NODE_ENV === "development"
    ? defaultThemes
    : [
        ...defaultThemes,
        // 搜索 https://getcanary.dev/docs/integrations/docusaurus
        require.resolve("@getcanary/docusaurus-theme-search-pagefind"),
      ];

const config: Config = {
  title: "陈科衡的个人博客",
  tagline: "分享知识，但不只是知识",
  favicon: "img/favicon.ico",

  url: "https://can-dy-jack.github.io",
  baseUrl: "/",

  organizationName: "can-dy-jack",
  projectName: "can-dy-jack.github.io",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/can-dy-jack/can-dy-jack.github.io/edit/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/can-dy-jack/can-dy-jack.github.io/edit/main/",
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
    },
  ],

  themes,
  plugins: ['docusaurus-plugin-sass'],

  themeConfig: {
    image: "img/kj.png",
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: "陈科衡的个人博客",
      logo: {
        alt: "陈科衡的个人博客",
        src: "img/kj.png",
      },
      // hideOnScroll: true,
      items: [
        {
          type: "docSidebar",
          sidebarId: "sidebar",
          position: "left",
          label: "知识库",
        },
        { to: "/blog", label: "博客", position: "left" },
        {
          type: "docSidebar",
          sidebarId: "sidebar2",
          label: "奇闻趣事",
          position: "left"
        },
        // { to: "/news", label: "时事新闻", position: "left" },

        // { to: "/rss", label: "RSS订阅", position: "left" },
        {
          type: "search",
          position: "left",
        },
        {
          href: "https://github.com/can-dy-jack",
          // label: "GitHub",
          position: "right",
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "知识库",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "友链",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com",
            },
            {
              label: "Discord",
              href: "https://discordapp.com",
            },
            {
              label: "Docusaurus",
              href: "https://docusaurus.io/zh-CN/",
            },
            {
              label: "Github",
              href: "https://github.com",
            },
            {
              label: "阮一峰的网络日志",
              href: "https://www.ruanyifeng.com/blog",
            },
          ],
        },
        {
          title: "资源",
          items: [
            {
              label: "Bootcdn",
              href: "https://www.bootcdn.cn/",
            },
            {
              label: "react-spring",
              href: "https://www.react-spring.dev/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight, // github oneDark oneLight vsDark
      darkTheme: prismThemes.oneDark, // dracula nightOwl oceanicNext oneDark
      additionalLanguages: ["Makefile", "bash", "json"],
    },
    announcementBar: {
      id: "self-announce",
      content:
        '原先博客内容暂时迁移至 <a target="_blank" target="_blank" href="https://kartjim.github.io/">kartjim.github.io</a>，后续会陆续迁移回来',
      backgroundColor: "#aaa",
      textColor: "#fff",
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
