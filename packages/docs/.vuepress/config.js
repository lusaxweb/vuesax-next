module.exports = {
  base: '/vuesax-next/',
  title: 'Vue.js Framework Components - Vuesax',
  theme: require.resolve('../../vuepress-theme-vuesax/'),
  head: [
    ['link', { rel: 'icon', href: `/favicon2_1.png` }]
  ],
  themeConfig: {
    repo: 'git@github.com:lusaxweb/vuesax-next.git',
    lastUpdated: true,
    linkPrevVersion: 'https://lusaxweb.github.io/vuesax/',
    searchPlaceholder: 'Vuesax Search',
    nav: [
      {
        text: 'Guide',
        link: '/docs/guide/',
        items: [
          { text: 'Introduction', link: '/docs/guide/introduction' },
          { text: 'Getting Started', link: '/docs/guide/gettingStarted' },
          { text: 'Configuration', link: '/docs/guide/configuration' },
          { text: 'Migration', link: '/docs/guide/migration' },
        ]
      },
      {
        text: 'Documentation',
        link: '/docs/',
        items: [
          {
            text: 'Theme',
            items: [
              { text: 'Color', link: '/docs/theme/' },
              { text: 'Icons', link: '/docs/theme/icons' },
              { text: 'Font', link: '/docs/theme/font' },
              { text: 'Generate', link: '/docs/theme/generate' },
            ]
          },
          {
            text: 'Layout',
            items: [
              { text: 'Grid', link: '/docs/layout/' },
            ]
          },
          {
            text: 'Components',
            items: [
              { text: 'Button', link: '/docs/components/button' },
              { text: 'Avatar', link: '/docs/components/avatar' },
              { text: 'Dropdown', link: '/docs/components/dropdown' },
              { text: 'checkbox', link: '/docs/components/checkbox' },
              { text: 'input', link: '/docs/components/input' },
            ]
          }
        ]
      },
      {
        text: 'Examples',
        link: '/examples/',
        items: [
          { text: 'Hello World', link: '' },
          { text: 'Nuxt', link: '' },
          { text: 'Vue CLI', link: '' },
          { text: 'Custom Theme Colors', link: '' },
          { text: 'Responsive', link: '' },
          { text: 'Add Icons', link: '' },
          { text: 'CDN', link: '' },
          { text: 'I18n', link: '' },
          { text: 'Typescript', link: '' },
          { text: 'Vuepress', link: '' },
          { text: 'Form', link: '' },
          { text: 'Vuelidate', link: '' },
          { text: 'SSR', link: '' },
        ]
      },
      {
        text: 'Ecosystem',
        link: '/ecosystem/',
        items: [
          {
            text: 'Social',
            items: [
              { text: 'GitHub', link: 'https://github.com/lusaxweb/vuesax' },
              { text: 'Discord', link: 'https://discord.gg/9dsKtvB' },
              { text: 'Twitter', link: 'https://twitter.com/vuesax' },
              { text: 'Codepen', link: 'https://codepen.io/lusaxweb/' },
              { text: 'Medium', link: 'https://medium.com/@luisdanielrovira8' }
            ]
          },
          {
            text: 'Help',
            items: [
              { text: 'Issues', link: 'https://github.com/lusaxweb/vuesax/issues' },
              { text: 'Edit Page', link: 'https://github.com/lusaxweb/vuesax' },
              { text: 'Latest Releases', link: 'https://github.com/lusaxweb/vuesax/releases' },
              { text: 'FAQ', link: 'https://github.com/lusaxweb/vuesax/wiki' }
            ]
          },
          {
            text: 'Contact',
            items: [
              { text: 'Lusaxweb', link: 'http://lusaxweb.net' },
              { text: 'Chat', link: 'https://discordapp.com/invite/9dsKtvB' },
              { text: 'Pull Request', link: 'https://github.com/lusaxweb/vuesax/pulls' },
              { text: 'Codepen Template', link: 'https://codepen.io/lusaxweb/pen/mxMKYr' }
            ]
          }
        ]
      },
      {
        text: '...',
        items: [
          {
            text: 'More',
            items: [
              { text: 'Team', link: '/team/' },
              { text: 'Support Vuesax', link: '/support/' },
              { text: 'API', link: '/api/' },
              { text: 'Blog', link: '/blog/' },
              { text: 'Chat', link: 'https://discordapp.com/invite/9dsKtvB' },
              { text: 'Brand', link: '/branding/' },
              { text: 'Shop', link: '/shop/' },
              { text: 'Resources', link: '/resource/' },
              { text: 'Contributors', link: '/contributors/' },
            ]
          }
        ]
      },
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '/docs/guide/',
            '/docs/guide/gettingStarted',
            '/docs/guide/configuration',
            '/docs/guide/migration',
          ]
        },
        {
          title: 'Theme',
          collapsable: false,
          children: [
            '/docs/theme/',
            '/docs/theme/icons',
            '/docs/theme/font',
            '/docs/theme/generate',
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            '/docs/components/',
            '/docs/components/button',
            '/docs/components/avatar'
          ]
        },
        {
          title: 'Layout',
          collapsable: false,
          children: [
            '/docs/layout/',
          ]
        },
        {
          title: 'Functions',
          collapsable: false,
          children: [
            '/docs/functions/',
          ]
        },
        {
          title: 'Directives',
          collapsable: false,
          children: [
            '/docs/functions/',
          ]
        },
        {
          title: 'Animations',
          collapsable: false,
          children: [
            '/docs/animations/',
          ]
        },
      ],
      '/examples/': [{
        title: 'Examples',
        collapsable: false,
        children: [
          ''
        ]
      }]
    }
  }
}
