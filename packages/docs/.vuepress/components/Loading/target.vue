<template>
  <div ref="target" id="target" class="center">
    <div class="con-btns">
      <vs-button ref="button" flat @click="openLoadingButton">Open Loading <b>Button</b></vs-button>
      <vs-button border @click="openLoading">Open Loading <b>Target</b></vs-button>
    </div>

    <div ref="content" class="content-div">
      I am the container <br> of the <b>loading</b>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        target: this.$refs.content
      })
      setTimeout(() => {
        loading.close()
      }, 3000)
    },
    openLoadingButton() {
      console.log(this.$refs.button.$el)
      const loading = this.$vs.loading({
        target: this.$refs.button,
        scale: '0.6',
        background: 'primary',
        opacity: 1,
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
.con-btns
  display flex
  align-items center
  justify-content center
  b
    margin-left 5px
.center
  flex-direction column
  .content-div
    width 200px
    height 200px
    box-shadow 0px 6px 25px -10px rgba(0,0,0,.1)
    border-radius 20px
    position relative
    display flex
    align-items center
    justify-content center
    flex-direction column
    text-align center
    font-size .6rem
</style>
