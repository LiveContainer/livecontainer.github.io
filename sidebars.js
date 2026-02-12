// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Installation',
      link: {
        type: 'doc',
        id: 'installation',
      },
      items: [
        'installation/standalone',
        'installation/lc_sidestore'
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/multiple-livecontainers',
        'guides/multitask',
        'guides/app-settings',
        'guides/jit-support',
        'guides/tweaks',
        'guides/jit-less-diagnose-page',
        'guides/add-to-home-screen',
        'guides/lock-app',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'development/building',
        'development/architecture',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/common-issues',
        'faq/compatibility',
        'faq/troubleshooting',
        'faq/installing-livecontainer',
        'faq/jit-less-mode-setup',
        'faq/app-installation',
        'faq/app-crashes',
        'faq/container-management',
        'faq/jit-less-diagnose-page',
        'faq/tweaks',
        'faq/other-questions',
      ],
    },
  ],
};

export default sidebars;
