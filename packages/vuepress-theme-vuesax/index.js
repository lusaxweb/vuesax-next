const path = require('path')
module.exports = (options, ctx) => ({
  alias () {
    const { themeConfig, siteConfig } = ctx
    // resolve algolia
    const isAlgoliaSearch = (
      themeConfig.algolia ||
      Object.keys(siteConfig.locales && themeConfig.locales || {})
        .some(base => themeConfig.locales[base].algolia)
    )
    return {
      '@AlgoliaSearchBox': isAlgoliaSearch
        ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
        : path.resolve(__dirname, 'noopModule.js')
    }
  },
  name: 'vuepress-theme-vuesax',
  // extend: '@vuepress/theme-default',
  plugins: [
    ['@vuepress/active-header-links'],
    ['container', {
      type: 'tip',
      defaultTitle: '',
    }],
    ['container', {
      type: 'warning',
      defaultTitle: '',
    }],
    ['container', {
      type: 'danger',
      defaultTitle: '',
    }]
  ]
})

