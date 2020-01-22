<template>
  <div class="con-vuesax-ads">
    <a target="_blank" :href="selected.url">
      <img :src="selected.img" alt="">
      <p v-html="selected.text">

      </p>
    </a>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: null,
    ads: [
      {
        img: 'https://www.wrappixel.com/wp-content/uploads/edd/2019/10/xtrene-vuesax-admin-template-nw.jpg',
        text: 'Create large projects with a higher level with the themes created with vuesax',
        url: 'https://www.wrappixel.com/templates/xtreme-vuesax-admin-pro/?ref=102'
      },
      {
        img: '/vuesax-store.png',
        text: 'Great vuesax clothes with shipping anywhere and the best quality',
        url: 'https://vuesax.threadless.com/'
      }
    ],
  }),
  created() {
    this.selected = this.ads[Math.round(Math.random() * (1 - 0) + 0)]
  }
}
</script>
<style lang="stylus">
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.con-vuesax-ads
  position fixed
  bottom 0px
  right 0px
  width 145px
  height auto
  background getVar('theme-layout')
  border-radius 30px 0px 0px 0px
  z-index 100000
  padding 8px
  padding-bottom 8px
  transition all .25s ease
  &:hover
    transform translate(-10px,-10px)
    border-radius 20px
  img
    width 100%
    border-radius 15px
  p
    font-size .7rem
    padding 0px
    margin 0px
    line-height 1.5
    text-align center
    font-weight 500

@media (max-width: 600px)
  .con-vuesax-ads
    width 100%
    border-radius 0px
    height 48px
    padding 0px
    a
      display flex
      align-items center
      justify-content center
    img
      max-width 47px
      margin-right 20px
</style>
