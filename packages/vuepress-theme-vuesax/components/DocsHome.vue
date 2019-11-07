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
import Sidebar from '../components/Sidebar.vue'
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
          background getVar(theme-layout)
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
            box-shadow 0px 10px 20px -10px rgba(0,0,0,.1)
</style>
