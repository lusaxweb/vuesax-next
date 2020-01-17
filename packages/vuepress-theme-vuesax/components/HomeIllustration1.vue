<template>
  <div class="content-i">
    <div class="con-ilus">
      <img class="not-darken" src="/vuesax-white-1.svg" alt="">
      <img class="has-darken" src="/vuesax-dark-1.svg" alt="">
    </div>

    <div class="con-text">
      <h2 v-html="data.title" />

      <p v-html="data.details" />

      <button @click="$router.push(data.action)" class="btn-action">
        {{ data.actionText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped lang="stylus">
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")

.btn-action
  display inline-block
  font-size 1rem
  color #fff
  // background-color $accentColor
  background transparent
  padding 13px 25px
  border-radius 15px
  transition background-color .1s ease
  box-sizing border-box
  transition all .25s ease
  box-shadow 0px 0px 0px 0px getColor('primary', .6)
  font-size .8rem
  // border 2px solid getVar(theme-color, 1)
  background getColor('primary')
  border 0px
  margin-top 10px
  i
    display none
  &:hover
    box-shadow 0px 10px 20px -10px getColor('primary', .6)
    transform translate(0,-5px)
.content-i
  width 100%
  padding 120px 70px
  display flex
  align-items center
  justify-content center
  max-width 1400px
  margin auto
  .con-text
    padding-left 50px
    width 50%
    h2
      border 0px
      font-size 2rem
      font-weight normal
  .con-ilus
    width 50%
    height 450px
    padding-right 50px
    max-width 600px
    img
      width 100%
      height auto

@keyframes svg1
  0%
    opacity 0
  50%
    opacity 1
  100%
    opacity 0

#Trazado_2429,#Trazado_2430,#Trazado_2431,#Trazado_2432,#Trazado_2433,,#Trazado_2434,,#Trazado_2435,,#Trazado_2436,#Trazado_2446,#Trazado_2593,#Trazado_2434,#Trazado_2436,#Trazado_2437,#Trazado_2438,#Trazado_2441,#Trazado_2442,#Trazado_2445,#Trazado_2428
  // fill #000
  animation 5s svg1 infinite
#Trazado_2416,#Trazado_2417,#Trazado_2418,#Trazado_2419,#Trazado_2420,#Trazado_2587,#Trazado_2422,#Trazado_2421,#Trazado_2423,#Trazado_2424,#Trazado_2425,#Trazado_2426,#Trazado_2427,#Trazado_2415
  // fill #000
  animation 5s svg1 infinite alternate

</style>
