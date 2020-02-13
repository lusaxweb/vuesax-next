<template>
  <div class="center">
    <vs-tooltip circle>
      <vs-button circle flat>
        Do hover here
      </vs-button>
      <template #tooltip>
        This is a beautiful button
      </template>
    </vs-tooltip>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: false
  })
}
</script>
<style scoped lang="stylus">
  .vs-button
    margin 0px
</style>
