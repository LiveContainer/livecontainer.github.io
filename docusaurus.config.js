// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Node 25 exposes localStorage/sessionStorage accessors that throw unless a backing
// file is provided. Docusaurus (and plugins) probe these globals during build, so
// replace them with harmless stubs when running outside the browser.
if (typeof window === 'undefined') {
  ['localStorage', 'sessionStorage'].forEach((prop) => {
    const descriptor = Object.getOwnPropertyDescriptor(globalThis, prop);
    if (descriptor && typeof descriptor.get === 'function') {
      Object.defineProperty(globalThis, prop, {
        value: undefined,
        writable: true,
        configurable: true,
        enumerable: false,
      });
    }
  });
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LiveContainer',
  tagline: 'Run iOS apps in a sandbox without jailbreak',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://livecontainer.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployments, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'livecontainer', // Usually your GitHub org/user name.
  projectName: 'livecontainer.github.io', // Usually your repo name.

  // onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is in Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it', 'zh-CN'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      'it': {
        label: 'Italiano',
        direction: 'ltr',
      },
      'zh-CN': {
        label: '简体中文',
        direction: 'ltr',
        path: 'zh-CN',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/LiveContainer/livecontainer.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // 支持的语言（中文搜索效果更好）
        language: ['en', 'it','zh'],
        // 索引整个站点页面（不仅仅是 docs）
        indexPages: true,
        // 搜索框高亮
        highlightSearchTermsOnTargetPage: true,
        // 搜索结果限制
        searchResultLimits: 8,
        // 文档路径（默认就是 /docs，可根据你实际修改）
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'LiveContainer',
        logo: {
          alt: 'LiveContainer Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/khanhduytran0/LiveContainer',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Installation',
                to: '/docs/installation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/khanhduytran0/LiveContainer',
              },
              {
                label: 'Issues',
                href: 'https://github.com/khanhduytran0/LiveContainer/issues',
              },
            ],
          },
          {
            title: 'More',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LiveContainer Project. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
