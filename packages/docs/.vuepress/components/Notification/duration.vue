<template>
  <div class="center con-avatars">
    <vs-button border @click="openNotification(null)">
      Duration default (4s)
    </vs-button>
    <vs-button border @click="openNotification(6000)">
      Duration 6s
    </vs-button>
    <vs-button border @click="openNotification(10000)">
      Duration 10s
    </vs-button>
    <vs-button border @click="openNotification('none')">
      Duration none
    </vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotification(duration) {
      const noti = this.$vs.notification({
        duration,
        progress: 'auto',
        title: 'Documentation Vuesax 4.0+',
        text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax3.x',
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
