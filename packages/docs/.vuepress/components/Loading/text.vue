<template>
  <div ref="target" id="target" class="center">
    <vs-button flat @click="openLoading">Open Loading <b>Text</b></vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        text: 'Loading...'
      })
      setTimeout(() => {
        loading.close()
      }, 3000)
    }
  }
}
</script>
<style scoped lang="stylus">
  b
    margin-left 5px
</style>
