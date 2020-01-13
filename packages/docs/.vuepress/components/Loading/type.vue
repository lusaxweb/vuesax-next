<template>
  <div
    :class="{ hasOpenLoading }"
    class="center">
    <div
      v-for="(type, i) in types"
      :ref="`box${i}`"
      @click="handleClickLoading(type)"
      class="box-loading" />
  </div>
</template>
<script>
export default {
  data: () => ({
    hasOpenLoading: false,
    types: [
      'default',
      'waves',
      'corners',
      'border',
      'points',
      'square',
      'gradient',
      'rectangle',
      'circles',
      'square-rotate',
      'scale'
    ]
  }),
  methods: {
    handleClickLoading(type) {
      const loading = this.$vs.loading({
        type
      })
      this.hasOpenLoading = true
      setTimeout(() => {
        loading.close()
        this.hasOpenLoading = false
      }, 3000)
    },
    openLoading(type, ref) {
      this.$vs.loading({
        target: this.$refs[ref][0],
        text: type,
        type
      })
    }
  },
  mounted() {
    this.types.forEach((type, i) => {
      this.openLoading(type, `box${i}`)
    })
  }
}
</script>
<style scoped lang="stylus">
getColor(vsColor, alpha = 1)
    unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.center
  flex-wrap wrap
  z-index 200
  position relative
  padding 20px 10px
  &.hasOpenLoading
    .box-loading
      opacity 0
      transform scale(.7)
.box-loading
  width 120px
  height 120px
  position relative
  margin 5px
  border-radius 20px
  box-shadow 0px 10px 20px -10px rgba(0,0,0,.07)
  overflow hidden
  cursor pointer
  transition all .25s ease
  &:hover
    transform translate(0,-5px)
    box-shadow 0px 15px 20px -10px rgba(0,0,0,.09)
  >>>.vs-loading
    padding 0px
    background transparent !important
    &.vs-loading--gradient, &.vs-loading--square
      .vs-loading__load__animation__2
        background getVar(theme-layout) !important
</style>
