<template>
  <div ref="target" id="target" class="center">
    <div :style="`background: ${color};`" class="con-input">
      <input v-model="color" type="color">
      <i class='bx bxs-color-fill'></i>
    </div>
    <vs-button flat :color="color" @click="openLoading">Open Loading</vs-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    color: '#7a76cb',
  }),
  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        background: this.color,
        // opacity: 1,
        color: '#fff'
      })
      setTimeout(() => {
        loading.close()
      }, 3000)
    }
  }
}
</script>
<style scoped lang="stylus">
getColor(vsColor, alpha = 1)
    unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.con-input
  border-radius 10px
  border 4px solid getVar(theme-layout)
  box-shadow 0px 4px 10px 0px rgba(0,0,0,.1)
  display flex
  align-items center
  justify-content center
  transition all .25s ease
  &:hover
    transform translate(0, -4px)
    box-shadow 0px 8px 10px 0px rgba(0,0,0,.1)
  input
    opacity 0
    width 30px
    height 30px
    border 0px
    cursor pointer
  i
    position absolute
    color getVar(theme-layout)
    pointer-events none
</style>
