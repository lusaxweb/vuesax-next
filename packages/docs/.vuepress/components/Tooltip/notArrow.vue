<template>
  <div class="center">
    <vs-tooltip not-arrow left>
      <vs-button border>
        left not-arrow
      </vs-button>
      <template #tooltip>
        This is a beautiful button
      </template>
    </vs-tooltip>
    <vs-tooltip not-arrow>
      <vs-button border>
        Top not-arrow
      </vs-button>
      <template #tooltip>
        This is a beautiful button
      </template>
    </vs-tooltip>
    <vs-tooltip not-arrow bottom>
      <vs-button border>
        Bottom not-arrow
      </vs-button>
      <template #tooltip>
        This is a beautiful button
      </template>
    </vs-tooltip>
    <vs-tooltip not-arrow right>
      <vs-button border>
        right not-arrow
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
    margin 5px
</style>
