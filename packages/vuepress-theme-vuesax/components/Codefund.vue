<template>
  <div ref="codefund" class="codefund" id="codefund">
  </div>
</template>

<script>
export default {
  name: "CodeFund",
};
</script>
<style lang="stylus">
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.codefund
  position fixed
  right 0px
  bottom 0px
  width 145px
  background getVar('theme-layout')
  z-index 90000
  // padding 8px
  border-radius 25px 0px 0px 0px
  transition all .25s ease
  &:empty
    background transparent
    pointer-events none
  &:hover
    transform translate(-10px,-10px)
    border-radius 20px
  &.hidden
    visibility hidden
    opacity 0
  img
    border-radius 20px
    margin 8px
    margin-bottom 5px
  .cf-text
    width calc(100% - 10px)
    display inline-block
    margin 0px 5px
    strong,span
      position relative
      display inline-block
  .cf-wrapper
    font-size .7rem
    line-height 1.3
  .cf-powered-by
    font-size .6rem
  a
    display block
    width 100%
    text-align center !important
    &:last-child
      margin-top 2px
      padding-bottom 8px
    .cf-impression
      position absolute

@media (max-width: 600px)
  .codefund
    width 100%
    padding 0px 30px
    min-height 48px
    border-radius 0px
    bottom: auto
    position absolute
    top 62px
    z-index 100
    background transparent
    &:hover
      transform translate(0) !important
    img
      border-radius 0px 0px 10px 10px !important
    .cf-text
      text-align left
      span
        font-size .6rem
    .cf-sponsored-by
      display flex
      align-items center
      justify-content center
    .cf-powered-by
      display none
    img
      height 46px
      width auto
      margin 0px
      border-radius 7px
      margin-right 10px
</style>
