<template>
  <div class="center">
    <vs-button shadow square icon @click="openNotification(null, '')">
      <i class='bx bx-border-radius b-r'></i>
    </vs-button>
    <vs-button square border icon @click="openNotification(null, 'primary')">
      <i class='bx bx-border-radius b-r'></i>
    </vs-button>
    <vs-button square border success icon @click="openNotification('top-right', 'success')">
      <i class='bx bx-border-radius t-r'></i>
    </vs-button>
    <vs-button square border danger icon @click="openNotification('top-left', 'danger')">
      <i class='bx bx-border-radius t-l'></i>
    </vs-button>
    <vs-button square border warn icon @click="openNotification('bottom-left', 'warn')">
      <i class='bx bx-border-radius b-l'></i>
    </vs-button>
    <vs-button square border dark icon @click="openNotification('bottom-center', 'dark')">
      <i class='bx bx-border-bottom' ></i>
    </vs-button>
    <vs-button square border color="#7d33ff" icon @click="openNotification('top-center', '#7d33ff')">
      <i class='bx bx-border-top' ></i>
    </vs-button>
    <vs-button square border color="rgb(59,222,200)" icon @click="openNotification(null, 'rgb(59,222,200)')">
      <i class='bx bx-border-radius b-r'></i>
    </vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotification(position = null, color) {
      const noti = this.$vs.notification({
        square: true,
        color,
        position,
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
  font-size 1.4rem
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
