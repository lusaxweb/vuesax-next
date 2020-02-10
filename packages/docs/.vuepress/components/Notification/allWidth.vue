<template>
  <div class="center">
    <vs-button shadow icon @click="openNotification(null, '')">
      <i class='bx bx-border-bottom' ></i>
    </vs-button>
    <vs-button flat icon @click="openNotification('top-center', 'primary', 'auto')">
      <i class='bx bx-border-radius b-r'></i>
    </vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotification(position = null, color, width = '100%') {
      const noti = this.$vs.notification({
        width,
        color,
        title: 'Documentation Vuesax 4.0+',
        text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
      })
    }
  }
}
</script>
<style scoped lang="stylus">
.vs-button
  margin 10px
i
  margin 2px
  font-size 1.2rem
  &.b-r
    transform rotate(90deg)
</style>
