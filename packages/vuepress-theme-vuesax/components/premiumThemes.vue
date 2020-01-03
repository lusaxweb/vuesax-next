<template>
  <div class="con-themes">
    <header>
      <h2><b>Vuesax</b> Premium Themes</h2>
      <p>
        Create great projects with a higher level saving time and work with the themes created with vuesax
      </p>
    </header>
    <a target="_blank" href="https://www.wrappixel.com/templates/xtreme-vuesax-admin-pro/?ref=102">
      <img class="bg" src="https://www.wrappixel.com/wp-content/uploads/edd/2019/10/xtrene-vuesax-admin-template-nw.jpg" alt="">
      <img class="logo" src="wrappixel-logo.png" alt="">
    </a>
  </div>
</template>
<style lang="stylus">
getVar(var)
    unquote("var(--vs-"+var+")")
.con-themes
  display flex
  align-items center
  justify-content center
  margin-bottom 100px
  background getVar(theme-bg)
  padding 40px
  header
    max-width 600px
    padding 30px
    padding-right 60px
    h2
      font-weight normal
      border 0px
    p
      opacity .5
  a
    display flex
    align-items center
    justify-content center
  .logo
    position absolute
    opacity 0
    pointer-events none
    transition all .35s ease
    transform translate(0,20px)
    max-width 150px
  img.bg
    width 300px
    border-radius 20px
    box-shadow 0px 10px 20px -10px rgba(0,0,0,.1)
    margin-top 20px
    transition all .25s ease
    transform translate(0,0px)
    border 6px solid getVar(theme-layout)
    &:hover
      transform translate(0,-20px)
      box-shadow 0px 20px 20px -10px rgba(0,0,0,.15)
      opacity .4
      ~ img
        opacity 1
        transform translate(0,-10px)

</style>
