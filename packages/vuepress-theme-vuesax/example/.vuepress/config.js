module.exports = {
    title: 'Vuesax Theme',
    description: 'Vuesax',
    theme: require.resolve('../..'),
    feed: true,
    author: 'ldrovira',
    email: 'luisdanielrovira8@gmail.com',
    themeConfig: {
      headerTitle: 'Prueba',
      website: 'https://github.com/lusaxweb/vuesax',
      repo: 'lusaxweb/vuesax',
      nav: [
        { text: 'about', link: '/about.html' },
        { text: 'girls', link: '/girls.html' },
        { text: 'donate', link: '/donate.html' },
        { text: 'tag', link: '/tag/' },
        { text: 'category', link: '/category/' },
      ]
    },
  }