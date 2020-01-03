<template>
  <div class="docs-home">
    <Sidebar
      :items="sidebarItems"
      :fixed="true"
    />

    <Footer />
  </div>
</template>
<script>
import Sidebar from '../components/Sidebar2.vue'
import Footer from './Footer.vue'
export default {
  components: {
    Sidebar,
    Footer
  },
  props: ['sidebarItems'],
}
</script>
<style lang="stylus">
getVar(var)
    unquote("var(--vs-"+var+")")
.docs-home
  ~ .config
    left 0px
  ~ .sidebar
    display none
  .sidebar
    position relative
    margin 0px
    left 0px
    width 100%
    background transparent
    padding 20px
    padding-bottom 100px !important
    > svg
      display none
    > .content-sidebar > .sidebar-links > li
      width 100%
    .sidebar-group-items
      width 100%
    .sidebar-links
      max-width 880px
      margin auto
      .sidebar-heading
        margin-top 40px
    .nav-links
      display none !important
    ul
      display flex
      align-items flex-start
      justify-content flex-start
      flex-wrap wrap
      li
        a
          width 200px
          height 200px
          background getVar(theme-bg)
          margin 10px
          display block
          border-radius 30px
          opacity 1
          font-weight bold
          display flex
          align-items flex-end
          justify-content flex-start
          padding 20px
          &:hover
            transform translate(0, -5px)
            padding-bottom 30px

@media (max-width: 1000px)
  .docs-home
    ~ .sidebar
      display block
    .sidebar
      z-index 8 !important
      transform translateX(0%) !important

@media (max-width: 600px)
  .docs-home
    .sidebar
      box-shadow none !important
      padding-bottom 0px !important
      ul
        li
          width 50%
          a
            width calc(100% - 10px)
            padding 20px 10px
            border-radius 10px
            margin 5px
            height auto
</style>
