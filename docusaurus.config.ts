import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const themes = process.env.NODE_ENV === "development" ? [] : [
  // 搜索 https://getcanary.dev/docs/integrations/docusaurus
  require.resolve("@getcanary/docusaurus-theme-search-pagefind"),
]

const config: Config = {
  title: '陈科衡的个人博客',
  tagline: '分享知识，但不只是知识',
  favicon: 'img/favicon.ico',

  url: 'https://kartjim.cn',
  baseUrl: '/',

  organizationName: 'can-dy-jack',
  projectName: 'can-dy-jack.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/can-dy-jack/can-dy-jack.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/can-dy-jack/can-dy-jack.github.io/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes,

  themeConfig: {
    image: 'img/kj.png',
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: '陈科衡的个人博客',
      logo: {
        alt: '陈科衡的个人博客',
        src: 'img/kj.png',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: '知识库',
        },
        { to: '/blog', label: '博客', position: 'left' },
        {
          type: 'search',
          position: 'left',
        },
        {
          href: 'https://github.com/candy-jack',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '知识库',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '友链',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com',
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io/zh-CN/',
            },
            {
              label: 'Github',
              href: 'https://github.com',
            },
            {
              label: '阮一峰的网络日志',
              href: 'https://www.ruanyifeng.com/blog',
            },
          ],
        },
        {
          title: '资源',
          items: [
            {
              label: 'Bootcdn',
              href: 'https://www.bootcdn.cn/',
            },
            {
              label: 'react-spring',
              href: 'https://www.react-spring.dev/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['Makefile', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
