<template>
  <aside
    class="sidebar"
    >
    <!-- <svg class="effect1" xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
      <path id="Trazado_200" data-name="Trazado 200" d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z" transform="translate(0 10)" />
    </svg> -->
    <div class="content-sidebar">
      <!-- <NavLinks/> -->
      <!-- <slot name="top"/> -->
      <SidebarLinks :fixed="fixed" :depth="1" :items="items"/>
      <!-- <slot name="bottom"/> -->
    </div>
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'

export default {
  name: 'Sidebar2',

  components: { SidebarLinks },

  props: ['items', 'fixed']
}
</script>

<style lang="stylus">
// vuesax-theme
getVar(var)
    unquote("var(--vs-"+var+")")
.effect1
  transform rotate(-90deg)
  position absolute
  max-width 40px
  max-height 40px
  z-index 200
  right -37px
  top -2px
  // stroke #000
  pointer-events none
  fill getVar(theme-layout)

.header__btns
  display flex
  align-items center
  justify-content center
  padding 0px 10px
  transition all .25s ease
  max-width 90px
  overflow hidden
  button
    background transparent
    border 0px
    width 35px
    padding 0px
    display flex
    align-items center
    justify-content center
    height $navbarHeight
    cursor pointer
    transition all .25s ease
    outline none
    opacity .4
    position relative
    &:after
      content ''
      position absolute
      bottom 0px
      left 50%
      transform translate(-50%)
      background $textColor
      width 0px
      height 2px
      transition all .25s ease
    &.active
      opacity 1
      &:after
        width 60%
    svg
      max-width 20px
      max-height 20px
// vuesax-theme



.sidebar
  padding-right 5px
  z-index 12000 !important
  transition all .25s ease
  overflow inherit !important
  .content-sidebar
    overflow auto
    max-height 100%
    &::-webkit-scrollbar
      width 0px
      height 0px
  &::-webkit-scrollbar
    width 0px
    height 0px
  .sidebar-sub-headers
    display none
  .sidebar-links
    transition all .15s ease
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & .content-sidebar > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top .75rem

@media (max-width: 1000px)
  .no-sidebar
    .sidebar
      .nav-links
        display block !important
        >.nav-item
          &:nth-child(1)
            display block
          &:nth-child(2)
            display block
        .nav-item
          .dropdown-wrapper .nav-dropdown
            display block !important
            transform translate(0px) !important
            box-shadow none !important
            opacity 1 !important
            visibility visible !important
            h4
              padding-left 0px !important
  .sidebar
    .nav-links
      display block !important
      >.nav-item
        &:nth-child(1)
          display none
        &:nth-child(2)
          display none
        >.dropdown-wrapper>a
          pointer-events none
      .nav-item
        .nav-dropdown
          padding-left .4rem
          li
            padding 5px
            font-weight normal
            font-size .95rem
        &:hover
          .dropdown-wrapper .nav-dropdown
            display block !important
            transform translate(0px) !important
            box-shadow none !important
            h4
              padding-left 0px !important
      .dropdown-wrapper .nav-dropdown
        position relative
        display none !important
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & .content-sidebar > .sidebar-links
      padding 1rem 0
@media (max-width: 400px)
  .back-link
    display none
</style>
