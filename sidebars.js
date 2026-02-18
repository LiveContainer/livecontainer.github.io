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
        'guides/add-to-home-screen',
        'guides/sources',
        'guides/app-settings',
        'guides/containers-and-external-data',
        'guides/data-management',
        'guides/jit-support',
        'guides/tweaks',
        'guides/multiple-livecontainers',
        'guides/multitask',
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
      link: {
        type: 'doc',
        id: 'faq',
      },
      items: [
        'faq/installing-livecontainer',
        'faq/jit-less-mode-setup',
        'faq/app-crashes',
        'faq/using-guest-apps',
        'faq/other-questions',
      ],
    },
  ],
};

export default sidebars;
