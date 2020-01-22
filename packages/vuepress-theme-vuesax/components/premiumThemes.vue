<template>
  <div class="con-themes">
    <a target="_blank" href="https://www.wrappixel.com/templates/xtreme-vuesax-admin-pro/?ref=102">
      <img class="bg not-darken" src="https://www.wrappixel.com/wp-content/uploads/edd/2019/10/xtrene-vuesax-admin-template-nw.jpg" alt="">
      <img class="bg has-darken" src="https://www.wrappixel.com/demos/vuejs-admin-templates/xtreme-vuesax-pro/landingpage/assets/images/dark-demo.jpg" alt="">
      <img class="logo not-darken" src="/wrappixel-logo.png" alt="">
      <img class="logo has-darken" src="/wrappixel-logo2.png" alt="">
      <img class="svg not-darken" src="/vuesax-white-6.svg" alt="">
      <img class="svg has-darken" src="/vuesax-dark-5.svg" alt="">
    </a>
    <header>
      <h2 v-html="data.title" />
      <p v-html="data.details" />

      <footer>
        <vs-button active @click="open('https://www.wrappixel.com/templates/xtreme-vuesax-admin-pro/?ref=102')" >
          See more
        </vs-button>
        <vs-button flat @click="open('https://www.wrappixel.com/demos/vuejs-admin-templates/xtreme-vuesax-pro/main/login/?ref=102')" >
          Live Demo
        </vs-button>
      </footer>
    </header>
  </div>
</template>
<script>
export default {
  props: ['data'],
  methods: {
    open(url) {
      open(url)
    }
  }
}
</script>
<style lang="stylus">
getVar(var)
    unquote("var(--vs-"+var+")")

.darken
  .con-themes
    header
      footer
        button
          box-shadow none !important
          &:last-child
            background getVar(theme-bg)
            color #fff !important

.svg
  position absolute
  width 100%
  z-index -1
  left -8%
  &.has-darken
    width 90%
    left -10%
.con-themes
  display flex
  align-items center
  justify-content center
  background getVar(theme-layout)
  padding 40px
  z-index 400
  position relative
  min-height 60vh
  header
    max-width 600px
    padding 30px
    padding-left 80px
    footer
      display flex
      align-items center
      justify-content flex-start
      button
        transform translate(0px) !important
        font-size .8rem !important
        border-radius 18px
        .vs-button__content
          padding 13px 30px
    h2
      font-weight normal
      border 0px
      font-size 2rem
    p
      opacity .5
  a
    display flex
    align-items center
    justify-content center
    position relative
    padding-left 100px
  .logo
    position absolute
    opacity 0
    pointer-events none
    transition all .35s ease
    transform translate(0,20px)
    max-width 160px
    background getVar(theme-layout)
    padding 20px
    border-radius 24px
    top -10px
    box-shadow 0px 10px 30px -10px rgba(0,0,0,.1)
  img.bg
    width 350px
    border-radius 20px
    box-shadow 0px 10px 20px -10px rgba(0,0,0,.1)
    margin-top 20px
    transition all .25s ease
    transform translate(0,0px)
    border 6px solid getVar(theme-layout)
    &:hover
      transform translate(0,-20px)
      box-shadow 0px 20px 20px -10px rgba(0,0,0,.15)
      ~ img:not(.svg)
        opacity 1
        transform translate(0,-10px)

@media (max-width: 1050px)
  .con-themes
    padding 40px 20px
    a
      padding-left 0px
    header
      padding-left 30px

@media (max-width: 850px)
  .con-themes
    padding 40px 20px
    header
      padding-right 20px
@media (max-width: 800px)
  .con-themes
    flex-wrap wrap
    margin-bottom 80px
    header
      padding-bottom 0px
</style>
