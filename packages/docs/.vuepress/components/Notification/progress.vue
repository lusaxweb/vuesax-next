<template>
  <div class="center">
    <vs-button shadow icon @click="openNotification(null, '')">
      <i class='bx bx-border-radius b-r'></i>
    </vs-button>
    <vs-button icon @click="openNotification(null, 'primary')">
      <i class='bx bx-border-radius b-r'></i>
    </vs-button>
    <vs-button success icon @click="openNotification('top-right', 'success')">
      <i class='bx bx-border-radius t-r'></i>
    </vs-button>
    <vs-button danger icon @click="openNotification('top-left', 'danger')">
      <i class='bx bx-border-radius t-l'></i>
    </vs-button>
    <vs-button warn icon @click="openNotification('bottom-left', 'warn')">
      <i class='bx bx-border-radius b-l'></i>
    </vs-button>
    <vs-button dark icon @click="openNotification('bottom-center', 'dark')">
      <i class='bx bx-border-bottom' ></i>
    </vs-button>
    <vs-button color="#7d33ff" icon @click="openNotification('top-center', '#7d33ff')">
      <i class='bx bx-border-top' ></i>
    </vs-button>
    <vs-button color="rgb(59,222,200)" icon @click="openNotification(null, 'rgb(59,222,200)')">
      <i class='bx bx-border-radius b-r'></i>
    </vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotification(position = null, color) {
      const noti = this.$vs.notification({
        progress: 'auto',
        color,
        position,
        title: 'Documentation Vuesax 4.0+',
        text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax3.x'
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
  transform-origin center
  &.b-r
    transform rotate(90deg)
  &.t-r
    transform rotate(0deg)
  &.t-l
    transform rotate(-90deg)
  &.b-l
    transform rotate(-180deg)
</style>
