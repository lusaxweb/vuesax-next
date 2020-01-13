<template>
  <div ref="target" id="target" class="center">
    <vs-button flat @click="openLoading">Open Loading <b>Percent</b></vs-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    percent: 0
  }),
  methods: {
    openLoading() {

      const loading = this.$vs.loading({
        percent: this.percent
      })
      const interval = setInterval(() => {
        if (this.percent <= 100) {
          loading.changePercent(`${this.percent++}%`)
        }
      }, 40)
      setTimeout(() => {
        loading.close()
        clearInterval(interval)
        this.percent = 0
      }, 4800)
    }
  }
}
</script>
<style scoped lang="stylus">
  b
    margin-left 5px
</style>
