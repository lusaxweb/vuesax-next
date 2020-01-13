<template>
  <div ref="target" id="target" class="center">
    <vs-button flat @click="openLoading">Open Loading</vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    openLoading() {
      const loading = this.$vs.loading()
      setTimeout(() => {
        loading.close()
      }, 3000)
    }
  }
}
</script>
