<template>
  <button class="config">
    <!-- <box-icon name='cog' ></box-icon> -->
    <i class="bx bx-cog"></i>
    <svg class="effect1config" xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
      <path id="Trazado_200" data-name="Trazado 200" d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z" transform="translate(0 10)" />
    </svg>

    <ul class="options">
      <svg class="effect1config" xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
        <path id="Trazado_200" data-name="Trazado 200" d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z" transform="translate(0 10)" />
      </svg>
      <li @click="reloadConfig">
        <!-- <box-icon name='rotate-left'></box-icon> -->
        <i title="reload config" class="bx bx-rotate-left"></i>
      </li>
      <li @click="ChangeSidebar">
        <!-- <box-icon :title="`Hidden Sidebar`" class="hidden-sidebar-hidden" name='left-indent'></box-icon> -->
        <i title="Hidden Sidebar" class="bx bx-left-indent hidden-sidebar-hidden"></i>
        <!-- <box-icon :title="`Open Sidebar`" class="visible-sidebar-hidden" name='right-indent' ></box-icon> -->
        <i title="Open Sidebar" class="bx bx-right-indent visible-sidebar-hidden"></i>
      </li>
      <li :title="`${ !$vsTheme.sidebarCollapseOpen ? 'Open' : 'Close'} sidebar items`" @click="ChangeMenu" :class="{'active': !$vsTheme.sidebarCollapseOpen}">
        <!-- <box-icon v-if="$vsTheme.sidebarCollapseOpen" name='list-minus'></box-icon> -->
        <i v-if="$vsTheme.sidebarCollapseOpen" class="bx bx-list-minus"></i>
        <!-- <box-icon v-else name='list-plus'></box-icon> -->
        <i v-else class="bx bx-list-plus"></i>
      </li>
      <!-- <li title="View examples mobile style" @click="ChangeMobile" :class="{'active': $vsTheme.mobileActive}">
        <i class="bx bx-mobile-alt"></i>
      </li> -->
      <li :title="`${ !$vsTheme.openCode ? 'Open' : 'Close'} all Code`" @click="ChangeOpenCode" :class="{'active': $vsTheme.openCode}">
        <i class="bx bx-code-block"></i>
      </li>
      <li class="theme-color-layout" title="Theme Color Layout">
        <i class="bx bx-paint-roll"></i>
        <input @change="ChangeColorLayout($event.target.value)" type="color" value="#2564ff">
      </li>
      <li :title="`Theme ${ !$vsTheme.themeDarken ? 'Dark' : 'Light'}`" class="li-darken" @click="ChangeTheme" :class="{'active': $vsTheme.themeDarken}">
        <i v-if="!$vsTheme.themeDarken" class="bx bx-brightness-half"></i>
        <i v-else class="bx bx-brightness"></i>
      </li>
      <li class="theme-color-primary" title="Theme Primary Color">
        <i class="bx bxs-color-fill"></i>
        <input @change="ChangeColor" type="color" value="#2564ff">
      </li>

      <li class="theme-translate" title="Theme translate">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>

        <ul class="lang">
          <li
            v-for="(item, i) in lang[0].items"
            :key="i"
            v-show="item.link !== $page.path"
            >
            <router-link :to="item.link">
              {{ item.text }}
            </router-link>
          </li>
        </ul>
      </li>

      <svg class="effect1config invert" xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
        <path id="Trazado_200" data-name="Trazado 200" d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z" transform="translate(0 10)" />
      </svg>
    </ul>
  </button>
</template>
<script>
import Vue from 'vue'
export default {
  computed: {
    lang () {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [ languageDropdown]
      }
      return []
    }
  },
  methods:{
    reloadConfig() {
      const sidebar = document.querySelector('.theme-container > .sidebar')
      const navbar = document.querySelector('.theme-container > .navbar')
      const config = document.querySelector('.theme-container > .config')
      const effect1 = document.querySelector('.header-page > .effect1')

      sidebar.style.removeProperty(`--vs-theme-layout`)
      navbar.style.removeProperty(`--vs-theme-layout`)
      navbar.style.removeProperty(`--vs-theme-bg2`)
      config.style.removeProperty(`--vs-theme-layout`)
      sidebar.style.removeProperty(`--vs-theme-color`)
      navbar.style.removeProperty(`--vs-theme-color`)
      config.style.removeProperty(`--vs-theme-color`)
      document.body.classList.remove('hidden-sidebar')
      document.body.style.setProperty(`--vs-primary`, '26, 92, 255')
      this.$vsTheme.mobileActive = false
      localStorage.mobile = false

      this.$vsTheme.sidebarCollapseOpen = true
      localStorage.sidebarCollapseOpen = true

      this.$vsTheme.openCode = false

      localStorage.theme = 'darken'
      this.ChangeTheme()
    },
    ChangeSidebar() {
      if (document.body.classList.contains('hidden-sidebar')) {
        document.body.classList.remove('hidden-sidebar')
      } else {
        document.body.classList.add('hidden-sidebar')
      }
    },
    hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });

      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    },
    contrastColor(element) {
      let c = element
      if(/[#]/g.test(element)){
        let rgb = this.hexToRgb(element)
        c = `rgb(${rgb.r},${rgb.g},${rgb.b})`
      }
      var rgb = c.replace(/^(rgb|rgba)\(/,'').replace(/\)$/,'').replace(/\s/g,'').split(',');
      var yiq = ((rgb[0]*299)+(rgb[1]*587)+(rgb[2]*114))/1000;
      if(yiq >= 128){
        return true
      } else {
        return false
      }
    },
    ChangeColorLayout(colorBase) {
      document.body.classList.add('all-transition')
      this.$el.focus()

      const sidebar = document.querySelector('.theme-container > .sidebar')
      const navbar = document.querySelector('.theme-container > .navbar')
      const config = document.querySelector('.theme-container > .config')
      const effect1 = document.querySelector('.header-page > .effect1')

      sidebar.style.setProperty(`--vs-theme-layout`, colorBase)
      navbar.style.setProperty(`--vs-theme-layout`, colorBase)
      navbar.style.setProperty(`--vs-theme-bg2`, colorBase)
      config.style.setProperty(`--vs-theme-layout`, colorBase)

      if (this.contrastColor(colorBase)) {
        sidebar.style.setProperty(`--vs-theme-color`, '#2c3e50')
        navbar.style.setProperty(`--vs-theme-color`, '#2c3e50')
        config.style.setProperty(`--vs-theme-color`, '#2c3e50')
      } else {
        sidebar.style.setProperty(`--vs-theme-color`, '#fff')
        navbar.style.setProperty(`--vs-theme-color`, '#fff')
        config.style.setProperty(`--vs-theme-color`, '#fff')
      }

      setTimeout(() => {
        document.body.classList.remove('all-transition')
      }, 100);
    },
    ChangeColor(evt) {
      evt.target.closest('button').focus()
      const rgb = this.hexToRgb(evt.target.value)
      const color = `${rgb.r},${rgb.g},${rgb.b}`
      document.body.style.setProperty(`--vs-primary`, color)
    },
    ChangeMenu() {
      this.$vsTheme.sidebarCollapseOpen = !this.$vsTheme.sidebarCollapseOpen
      localStorage.sidebarCollapseOpen = !this.$vsTheme.sidebarCollapseOpen
    },
    ChangeMobile() {
      this.$vsTheme.mobileActive = !this.$vsTheme.mobileActive
      localStorage.mobile = !this.$vsTheme.mobileActive
    },
    ChangeOpenCode() {
      this.$vsTheme.openCode = !this.$vsTheme.openCode
    },
    ChangeTheme() {
      document.body.classList.add('all-transition')
      const isDarken = localStorage.theme === 'darken'
      document.body.classList.remove(!isDarken ? 'lighten' : 'darken')
      document.body.classList.add(isDarken ? 'lighten' : 'darken')
      if (isDarken) {
        document.body.style.setProperty(`--vs-theme-bg`, '#f4f7f8')
        document.body.style.setProperty(`--vs-theme-color`, '#2c3e50')
        document.body.style.setProperty(`--vs-theme-layout`, '#fff')
         document.body.style.setProperty(`--vs-theme-bg2`, '#eef2f5')
         document.body.style.setProperty(`--vs-theme-code`, '#363449')
         document.body.style.setProperty(`--vs-theme-code2`, '#3f3d56')
        localStorage.theme = 'lighten'
        this.$vsTheme.themeDarken = false
      } else {
        localStorage.theme = 'darken'
        this.$vsTheme.themeDarken = true
        document.body.style.setProperty(`--vs-theme-bg`, '#18191c')
        document.body.style.setProperty(`--vs-theme-color`, '#fff')
        document.body.style.setProperty(`--vs-theme-layout`, '#1e2023')
        document.body.style.setProperty(`--vs-theme-bg2`, '#141417')
        document.body.style.setProperty(`--vs-theme-code`, '#141417')
        document.body.style.setProperty(`--vs-theme-code2`, '#161619')
      }

      setTimeout(() => {
        document.body.classList.remove('all-transition')
      }, 100);
    }
  },
  mounted() {
    const isDarken = localStorage.theme === 'darken'
    if (!isDarken) {
      document.body.style.setProperty(`--vs-theme-bg`, '#f4f7f8')
      document.body.style.setProperty(`--vs-theme-color`, '#2c3e50')
      document.body.style.setProperty(`--vs-theme-layout`, '#fff')
      document.body.style.setProperty(`--vs-theme-bg2`, '#eef2f5')
      document.body.style.setProperty(`--vs-theme-code`, '#363449')
      document.body.style.setProperty(`--vs-theme-code`, '#3f3d56')
    } else {
      document.body.style.setProperty(`--vs-theme-bg`, '#18191c')
      document.body.style.setProperty(`--vs-theme-color`, '#fff')
      document.body.style.setProperty(`--vs-theme-layout`, '#1e2023')
      document.body.style.setProperty(`--vs-theme-bg2`, '#141417')
      document.body.style.setProperty(`--vs-theme-code`, '#141417')
      document.body.style.setProperty(`--vs-theme-code2`, '#161619')
    }

    document.body.classList.remove(isDarken ? 'lighten' : 'darken')
    document.body.classList.add(!isDarken ? 'lighten' : 'darken')
  },
  created() {
    Vue.prototype.$mobile = { active: (localStorage.mobile != 'true') || false }
    // Vue.prototype.$menu = { active: (localStorage.menu != 'true') || false }
    // Vue.observable(this.$site.sidebarCollapseOpen)
    Vue.observable(this.$vsTheme)
    Vue.observable(this.$mobile)
    Vue.observable(this.$site.themeConfig)
  },
}
</script>
<style lang="stylus">
getColor(vsColor, alpha = 1)
    unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.theme-translate
  &:hover
    .lang
      opacity 1
      transform translate(100%)
  svg
    width 18px
    fill getVar(theme-color)
  .lang
    transition all .25s ease
    position absolute
    bottom 5px
    background getVar(theme-layout)
    min-width 80px
    right -5px
    transform translate(90%)
    border-radius 0px 20px 20px 0px
    padding 0px
    opacity 0
    li
      text-align center
      font-weight bold
      padding 0px !important
      a
        padding 4px
        font-weight bold

.theme-color-layout
  position relative
  input
    position absolute
    top 0px
    left 0px
    width 100%
    height 100%
    opacity 0

.theme-color-primary
  position relative
  input
    position absolute
    top 0px
    left 0px
    width 100%
    height 100%
    opacity 0

  i.bx
    color getColor(primary)
.config
  position fixed
  bottom 0px
  left 260px
  width 50px
  height 50px
  z-index 12000
  border 0px
  border-radius 0px 20px 0px 0px
  background getVar(theme-layout)
  transition all .25s ease
  outline none
  &:focus, &:hover
    >i.bx
      transform rotate(60deg)
    ul.options
      opacity 1
      visibility visible
      transform translate(0px, calc(-100% - 25px))
  .effect1config
    width 40px
    height 40px
    top -38px
    left -3px
    position absolute
    transform rotate(179deg)
    fill getVar(theme-layout)
    stroke getVar(theme-layout)
    &.invert
      transform rotate(-90deg)
      bottom -38px
      top auto

  i.bx
    font-size 1.2rem
    transition all .25s ease
    color getVar(theme-color)
  ul.options
    position absolute
    top 0px
    left 0px
    transform translate(-15px, calc(-100% - 25px))
    background getVar(theme-layout)
    list-style none
    padding-left 0px
    margin 0px
    border-radius 0px 20px 20px 0px
    opacity 0
    visibility hidden
    transition all .25s ease
    li
      padding 8px
      display flex
      align-items center
      justify-content center
      border-radius 12px 12px 12px 12px
      margin 4px
      border 2px solid transparent
      position relative
      &.active
        background rgba(0,0,0,.05)
        border 2px solid getVar(theme-bg2)
      .visible-sidebar-hidden
        display none

@media (max-width: 1000px)
  .config
    left 0px
@media (max-width: 600px)
  .config
    display none
    left 0px
</style>
