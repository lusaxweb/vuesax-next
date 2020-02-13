<template>
  <div class="center">
    <vs-tooltip loading>
      <vs-button flat>
        Do hover here loading
      </vs-button>
      <template #tooltip>
        This is a beautiful button
      </template>
    </vs-tooltip>
    <vs-tooltip loading>
      <vs-button flat>
        Do hover here loading
      </vs-button>
      <template #tooltip></template>
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
    margin 5px
</style>
