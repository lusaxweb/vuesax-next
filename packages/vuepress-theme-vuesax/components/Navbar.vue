<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

    <router-link
      :to="$localePath"
      class="home-link"
    >
      <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      >
      <span
        ref="siteName"
        class="site-name"
        v-if="$siteTitle"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span>
      Vuesax
    </router-link>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      />

      <NavLinks class="can-hide"/>
    </div>

    <div class="external-links-search">
      <a
        title="Previous Version"
        class="v-old"
        target="_blank" :href="$site.themeConfig.linkPrevVersion">
        v3.x
      </a>

      <div class="con-links">
        <a title="Github" target="_blank" href="https://github.com/lusaxweb/vuesax">
          <box-icon type='logo' name='github'></box-icon>
        </a>
        <a title="Twitter" target="_blank" href="https://twitter.com/vuesax">
          <box-icon name='twitter' type='logo' ></box-icon>
        </a>
        <a title="Discord" target="_blank" href="https://discordapp.com/invite/9dsKtvB">
          <box-icon name='discord' type='logo' ></box-icon>
        </a>
      </div>

      <SearchBox
        @focus="focused = true"
        @blur="focused = false"
        @showSuggestions="handleShowSuggestions"
        v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
    </div>
  </header>
</template>

<script>
import 'boxicons'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import SearchBox from './SearchBox.vue'

export default {
  components: { SidebarButton, NavLinks, AlgoliaSearchBox, SearchBox },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)

    window.addEventListener('scroll',() => {
      if(window.pageYOffset > 0) {
        this.$el.classList.add('fixed')
      } else {
        this.$el.classList.remove('fixed')
      }
    })
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },

  methods:{
    handleShowSuggestions(active) {
      this.showSuggestions = active
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem
getVar(var)
    unquote("var(--vs-"+var+")")
.home-link
  position absolute
  left 0px
  font-weight bold
  padding-left 30px

.v-old
  padding 10px
  color inherit
  opacity .5
  transition all .25s ease
  &:hover
    opacity 1

.external-links-search
  display flex
  align-items center
  justify-content center
  position absolute
  right 20px
  .con-links
    display flex
    align-items center
    justify-content center
    margin-right 10px
    a
      list-style none
      display flex
      align-items center
      justify-content center
      padding 4px
      box-sizing border-box
      box-icon
        width 20px !important
        height 20px !important

.navbar
  // padding $navbar-vertical-padding $navbar-horizontal-padding
  padding 0px 20px
  // line-height $navbarHeight - 1.4rem
  display flex
  align-items center
  justify-content center
  border-radius 0px 0px 30px 0px
  transition all .25s ease
  &.fixed
    border-radius 0px
    // backdrop-filter blur(20px)
    // background rgba(255,255,255,0.6) !important
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color getVar(theme-color)
    position relative
  .links
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    // right $navbar-horizontal-padding
    position relative
    display flex
    align-items center
    justify-content center
    // left 50%
    // transform translate(-50%)
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
</style>
