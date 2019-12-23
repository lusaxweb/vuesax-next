<template>
  <div class="center colors">
    <div class="primary">
      Primary
    </div>
    <div class="success">
      Success
    </div>
    <div class="danger">
      Danger
    </div>
    <div class="warn">
      Warn
    </div>
    <div class="dark">
      Dark
    </div>
  </div>
</template>

<style scoped lang="stylus">
vs-color(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
.colors
  padding-bottom 50px
  div
    color #fff
    width 100px
    height 100px
    display flex
    align-items center
    justify-content center
    font-weight 600
    margin 10px
    border-radius 6px 20px 20px 20px
    transition all .25s ease
    cursor default
    &.primary
      box-shadow 0px 20px 35px -10px vs-color('primary', .5)
      background vs-color('primary')
      &:hover
        box-shadow 0px 0px 0px 0px vs-color('primary', .5)
    &.success
      box-shadow 0px 20px 35px -10px vs-color('success', .5)
      background vs-color('success')
      &:hover
        box-shadow 0px 0px 0px 0px vs-color('success', .5)
    &.danger
      box-shadow 0px 20px 35px -10px vs-color('danger', .5)
      background vs-color('danger')
      &:hover
        box-shadow 0px 0px 0px 0px vs-color('danger', .5)
    &.warn
      box-shadow 0px 20px 35px -10px vs-color('warn', .5)
      background vs-color('warn')
      &:hover
        box-shadow 0px 0px 0px 0px vs-color('warn', .5)
    &.dark
      box-shadow 0px 20px 35px -10px vs-color('dark', .5)
      background vs-color('dark')
      &:hover
        box-shadow 0px 0px 0px 0px vs-color('dark', .5)
    &:hover
      transform translate(0, 5px)
</style>
