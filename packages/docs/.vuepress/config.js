module.exports = ctx => ({
  locales: {
    '/': {
      // lang: 'English',
      lang: 'en-US',
      text: 'English',
    },
    '/es/': {
      // lang: 'Español',
      lang: 'es-ES',
      text: 'Español',
    }
  },
  plugins: [
    ['vuepress-plugin-typescript']
  ],
  base: '/',
  title: 'Vue.js Framework Components - Vuesax',
  theme: require.resolve('../../vuepress-theme-vuesax/'),
  head: [
    ['link', { rel: 'icon', href: `/favicon2_1.png` }],
    // ['script', {
    //   src: 'https://cdn.paddle.com/paddle/paddle.js'
    // }],
    ['script', {
      'data-ad-client': 'ca-pub-4283907298344887',
      sync: true,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    }]
  ],
  themeConfig: {

    locales: {
      '/': {
        ...getNavbar(),
        ...getSidebar()
      },
      '/es/': {
        ...getNavbar('/es/'),
        ...getSidebar('/es/')
      }
    },

    repo: 'git@github.com:lusaxweb/vuesax-next.git',
    lastUpdated: true,
    linkPrevVersion: 'https://lusaxweb.github.io/vuesax/',
    searchPlaceholder: 'Vuesax Search',
  }
})

function getNavbar (lang = '/') {

  return {
    nav: [
      {
        text: `Guide`,
        link: `${lang}docs/guide/`,
        items: [
          { text: `Introduction`, link: `${lang}docs/guide/` },
          { text: `Getting Started`, link: `${lang}docs/guide/gettingStarted` },
        ]
      },
      {
        text: `Documentation`,
        link: `${lang}docs/`,
        items: [
          {
            text: `Theme`,
            items: [
              { text: `Color`, link: `${lang}docs/theme/` },
            ]
          },
          {
            text: `Layout`,
            items: [
              { text: `Grid`, link: `${lang}docs/layout/` },
            ]
          },
          {
            text: `Components`,
            items: [
              { text: `Button`, link: `${lang}docs/components/` },
              { text: `Alert`, link: `${lang}docs/components/Alert` },
              { text: `Loading`, link: `${lang}docs/components/Loading` },
              { text: `Input`, link: `${lang}docs/components/Input` },
							// new component slot 1
            ]
          }
        ]
      },
      // {
      //   text: `Vuesax Pass`,
      //   link: `${lang}pass/`,
      //   items: []
      // },
      {
        text: `License`,
        link: `${lang}license/`
      },
      {
        text: `Ecosystem`,
        link: `${lang}ecosystem/`,
        items: [
          {
            text: `Social`,
            items: [
              { text: `GitHub`, link: `https://github.com/lusaxweb/vuesax` },
              { text: `Discord`, link: `https://discord.gg/9dsKtvB` },
              { text: `Twitter`, link: `https://twitter.com/vuesax` },
              { text: `Medium`, link: `https://medium.com/@luisdanielrovira8` }
            ]
          },
          {
            text: `Help`,
            items: [
              { text: `Issues`, link: `https://github.com/lusaxweb/vuesax/issues` },
              { text: `Edit Page`, link: `https://github.com/lusaxweb/vuesax` },
              { text: `Latest Releases`, link: `https://github.com/lusaxweb/vuesax/releases` },
            ]
          },
          {
            text: `Contact`,
            items: [
              { text: `Lusaxweb`, link: `http://lusaxweb.net` },
              { text: `Chat`, link: `https://discordapp.com/invite/9dsKtvB` },
              { text: `Pull Request`, link: `https://github.com/lusaxweb/vuesax/pulls` },
              { text: `Codepen Template`, link: `https://codepen.io/lusaxweb/pen/mxMKYr` }
            ]
          }
        ]
      }
    ]
  }
}

function getSidebar (lang = '/') {
  return {
    sidebar: {
      [`${lang}docs/`]: [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            `${lang}docs/guide/`,
            `${lang}docs/guide/gettingStarted`,
          ]
        },
        {
          title: `Theme`,
          collapsable: false,
          children: [
            `${lang}docs/theme/`,
          ]
        },
        {
          title: `Components`,
          collapsable: false,
          children: [
            `${lang}docs/components/`,
            `${lang}docs/components/Alert`,
            `${lang}docs/components/Loading`,
            `${lang}docs/components/Input`,
						// new component slot 2
          ]
        },
        {
          title: `Layout`,
          collapsable: false,
          children: [
            `${lang}docs/layout/`,
          ]
        },
      ],
    }
  }
}
