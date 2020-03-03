<template>
  <div class="center">
    <vs-tooltip border>
      <vs-button transparent>
        Do hover here
      </vs-button>
      <template #tooltip>
        This is a beautiful button
      </template>
    </vs-tooltip>
    <vs-tooltip danger border>
      <vs-button danger transparent>
        Do hover here
      </vs-button>
      <template #tooltip>
        This is a beautiful button
      </template>
    </vs-tooltip>
    <vs-tooltip color="#7d33ff" border-thick>
      <vs-button color="#7d33ff" transparent>
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
    .vs-tooltip-content
      margin 10px
</style>
