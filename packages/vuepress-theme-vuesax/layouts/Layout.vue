<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >

    <HeaderNotification />

    <ClientOnly>
      <Navbar
        v-if="shouldShowNavbar"
        @toggle-sidebar="toggleSidebar"
        :class="{'transparent': $page.frontmatter.branding}"
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
    <Codefund ref="codefund" />
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
      <Config />
    </ClientOnly>
  </div>
</template>

<script>
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
    Branding
  },

  data () {
    return {
      isSidebarOpen: false,
      ads: 'codefund',
      noAdvertiser: false
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
    '$route' (to, from) {
      if (
        to.path !== from.path
      ) {
        this.$refs.carbon.$el.innerHTML = ''
        this.$refs.codefund.$el.innerHTML = ''
        // if (this.$route.path !== '/') {
        if (!this.noAdvertiser) {
          this.loadCodeFund()
        } else {
          this.$refs.codefund.$el.innerHTML = ''
          window.removeEventListener('codefund', this.handlerCodefound);
          const number = Math.round(Math.random() * (4) + 1)
          if (number == 1) {
            this.ads = 'vuesax'
            this.$refs.carbon.$el.innerHTML = ''
            this.$refs.carbon.$el.classList.add('hidden')
          } else {
            this.ads = 'carbon'
            this.$refs.carbon.load()
            this.$refs.carbon.$el.classList.remove('hidden')
          }
        }
        // }
      }
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
    // if (this.$route.path !== '/') {
    this.loadCodeFund()
    // }
  },

  methods: {
    handlerCodefound(event) {
      if (event.detail.status === 'no-advertiser') {
        this.noAdvertiser = true
        this.$refs.codefund.$el.innerHTML = ''
        window.removeEventListener('codefund', this.handlerCodefound);
        const number = Math.round(Math.random() * (4) + 1)
        if (number == 1) {
          this.ads = 'vuesax'
          this.$refs.carbon.$el.innerHTML = ''
          this.$refs.carbon.$el.classList.add('hidden')
        } else {
          this.ads = 'carbon'
          this.$refs.carbon.load()
          this.$refs.carbon.$el.classList.remove('hidden')
        }
      } else {
        this.ads = 'codefund'
        this.$refs.carbon.$el.innerHTML = ''
        this.$refs.carbon.$el.classList.add('hidden')
      }
    },
    loadCodeFund() {
      this.$refs.codefund.$el.innerHTML = ''
      const script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute(
        "src",
        `https://app.codefund.io/properties/677/funder.js`
      )

      window.removeEventListener('codefund', this.handlerCodefound);

      window.addEventListener('codefund', this.handlerCodefound);
      this.$refs.codefund.$el.appendChild(script);
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

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
