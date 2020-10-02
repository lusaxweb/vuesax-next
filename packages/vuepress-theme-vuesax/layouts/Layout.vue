<template>
  <div
    id="vs-app"
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <transition name="fade-code">
      <div
        @click="handleClickCodeSandbox"
        v-if="codesandbox.url" class="con-codesandbox">
        <div class="con-iframe">
          <iframe
            :src="codesandbox.url"
            style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
            title="vuesax-buttons-default"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </transition>

    <HeaderNotification />

    <ClientOnly>
      <Navbar
        v-if="shouldShowNavbar"
        v-show="!$page.frontmatter.navbar"
        @toggle-sidebar="toggleSidebar"
        :class="{'transparent': $page.frontmatter.branding, isSidebarOpen: isSidebarOpen}"
      />
    </ClientOnly>

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Home v-if="$page.frontmatter.home"/>

    <Docs-home :sidebar-items="sidebarItems" v-else-if="$page.frontmatter.docsHome"/>

    <Pass-layout :sidebar-items="sidebarItems" v-else-if="$page.frontmatter.passLayout"/>

    <license :sidebar-items="sidebarItems" v-else-if="$page.frontmatter.license"/>

    <Branding :sidebar-items="sidebarItems" v-else-if="$page.frontmatter.branding"/>

    <navbar v-else-if="$page.frontmatter.navbar"/>

    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>

    <Carbon ref="carbon" />
    <!-- <Codefund ref="codefund" /> -->
    <VuesaxAds v-if="ads == 'vuesax'" />

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>
    <ClientOnly>
      <Config v-if="!$page.frontmatter.navbar" />
    </ClientOnly>
  </div>
</template>

<script>
import Vue from 'vue'
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'
import Carbon from '../components/Carbon'
import DocsHome from '../components/DocsHome'
import Config from '../components/Config.vue'
import PassLayout from '../components/PassLayout.vue'
import License from '../components/License.vue'
import HeaderNotification from '../components/HeaderNotification.vue'
import Codefund from '../components/Codefund.vue'
import VuesaxAds from '../components/VuesaxAds.vue'
import Branding from '../components/Branding.vue'
import navbar from '../components/navbarLayout.vue'
export default {
  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    Carbon,
    DocsHome,
    Config,
    PassLayout,
    HeaderNotification,
    License,
    Codefund,
    VuesaxAds,
    Branding,
    navbar
  },

  data () {
    return {
      isSidebarOpen: false,
      ads: 'codefund',
      noAdvertiser: false,
      codesandbox: null
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      const { frontmatter } = this.$page
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar || frontmatter.passLayout
        },
        userPageClass
      ]
    }
  },

  watch: {
    // 'codesandbox': {
    //   deep: true,
    //   handler(val) {
    //     // if (!this.noAdvertiser) {
    //     //   this.loadCodeFund()
    //     // } else {
    //   if (val) {
    //     this.ads = 'carbon'
    //     this.$refs.carbon.load()
    //   }
    //     // }
    //   }
    // },
    '$route' (to, from) {
      if (
        to.path !== from.path
      ) {
        Vue.observable(this.$codesandbox)
        this.ads = 'carbon'
        this.$refs.carbon.load()
      }
    }
  },

  created() {
    this.codesandbox = Vue.observable(this.$codesandbox)
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
    this.$refs.carbon.clean()
    this.$refs.carbon.load()
    this.loadDarkModeFavicon()
  },

  methods: {
    loadDarkModeFavicon() {
      (function(mod){
        function collectLinks() {
          return Array.prototype.slice.apply(
            document.head.querySelectorAll('link[rel*="icon"]')
          )
        }

        function applyLink(source, target) {
          target.setAttribute('type', source.getAttribute('type'))
          target.setAttribute('href', source.getAttribute('href'))
        }

        // eslint-disable-next-line no-unused-vars
        function initSwitcher(delay) {
          // Exit if media queries aren't supported
          if (typeof window.matchMedia !== 'function') {
            return function noop() {}
          }

          var links = collectLinks()
          var current = document.createElement('link')
          var prevMatch

          current.setAttribute('rel', 'shortcut icon')
          document.head.appendChild(current)

          function faviconApplyLoop() {
            var matched

            links.forEach(function(link) {
              if (window.matchMedia(link.media).matches) {
                matched = link
              }
            })

            if (! matched) {
              return
            }

            if (matched.media !== prevMatch) {
              prevMatch = matched.media
              applyLink(matched, current)
            }
          }

          var intervalId = setInterval(faviconApplyLoop, delay || 300)

          function unsubscribe() {
            clearInterval(intervalId)
            links.forEach(function(link) {
              document.head.appendChild(link)
            })
          }

          faviconApplyLoop()
          links.forEach(function(link) {
            document.head.removeChild(link)
          })

          return unsubscribe
        }

        initSwitcher()
        })()
    },
    handleClickCodeSandbox() {
      document.body.style.overflow = ''
      this.codesandbox.url = null
    },
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.fade-code-enter-active, .fade-code-leave-active
  transition: opacity .5s;

.fade-code-enter, .fade-code-leave-to
  opacity: 0

.darken
  .con-codesandbox
    background rgba(0,0,0,.7)
.con-codesandbox
  width 100%
  height 100%
  position fixed
  z-index 100001
  top 0px
  left 0px
  background rgba(0,0,0,.4)
  display flex
  align-items center
  justify-content center
  .con-iframe
    max-width 1200px
    width 100%
</style>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
