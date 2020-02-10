<template>
  <div class="center">
    <vs-button @click="openNotification">
      Open Notification
    </vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotification() {
      this.$vs.notification({
        title: 'Documentation Vuesax 4.0+',
        text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax3.x'
      })
    }
  }
}
</script>
