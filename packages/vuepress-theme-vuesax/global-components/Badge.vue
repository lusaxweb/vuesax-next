<template>
  <span :class="['badge', type, vertical]">
    {{ text || $slots.default }}
  </span>
</template>

<script>
export default {
  // functional: true,
  props: {
    type: {
      type: String,
      default: 'tip'
    },
    text: String,
    vertical: {
      type: String,
      default: 'top'
    }
  }
  // render (h, { props, slots }) {
  //   return h('span', {
  //     class: ['badge', props.type, props.vertical]
  //   }, props.text || slots().default)
  // }
}
</script>

<style lang="stylus" scoped>
getVar(var)
    unquote("var(--vs-"+var+")")
.badge
  display inline-block
  font-size .7rem
  // height 16px
  // line-height 18px
  border-radius 5px
  padding 1px 5px
  color white
  margin-right 0px
  background-color #42b983
  cursor default
  pointer-events none
  user-select none
  // font-weight 600
  &.middle
    vertical-align middle
  &.top
    vertical-align top

  &.accent
    background $accentColor
  &.tip, &.green, &.success
    background-color alpha(#42b983,1)
    color #ff
    // background #42b983
  &.error, &.danger
    background alpha(rgb(255, 71, 87),1) //#f66
    color #fff //#f66
    border 0px
  &.warning, &.warn, &.yellow
    background alpha(rgb(255, 186, 0),1)
    color #fff
  &.text
    background getVar(theme-color)
    color #fff
    // background-color darken(#ffe564, 35%)
</style>
