<template>
  <div class="center">
    <vs-button border icon @click="openNotification">
      <i class='bx bx-border-radius b-r'></i>
    </vs-button>
    <vs-button border icon @click="openNotification('top-right')">
      <i class='bx bx-border-radius t-r'></i>
    </vs-button>
    <vs-button border icon @click="openNotification('top-left')">
      <i class='bx bx-border-radius t-l'></i>
    </vs-button>
    <vs-button border icon @click="openNotification('bottom-left')">
      <i class='bx bx-border-radius b-l'></i>
    </vs-button>
    <vs-button border icon @click="openNotification('bottom-center')">
      <i class='bx bx-border-bottom' ></i>
    </vs-button>
    <vs-button border icon @click="openNotification('top-center')">
      <i class='bx bx-border-top' ></i>
    </vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotification(position = null) {
      const noti = this.$vs.notification({
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
