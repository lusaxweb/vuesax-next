<template>
  <div class="center">
    <vs-tooltip left>
      <vs-button border>
        left
      </vs-button>
      <template #tooltip>
        This is a beautiful button
      </template>
    </vs-tooltip>
    <vs-tooltip>
      <vs-button border>
        Top
      </vs-button>
      <template #tooltip>
        This is a beautiful button
      </template>
    </vs-tooltip>
    <vs-tooltip bottom>
      <vs-button border>
        Bottom
      </vs-button>
      <template #tooltip>
        This is a beautiful button
      </template>
    </vs-tooltip>
    <vs-tooltip right>
      <vs-button border>
        right
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
    margin 0px 5px
</style>
