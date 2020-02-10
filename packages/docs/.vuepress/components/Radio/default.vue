<template>
  <div class="center">
    <vs-radio v-model="picked" val="1">
      Option A
    </vs-radio>
    <vs-radio v-model="picked" val="2">
      Option B
    </vs-radio>
    <vs-radio disabled v-model="picked" val="3">
      Option C
    </vs-radio>
    <vs-radio v-model="picked" val="4">
      Option D
    </vs-radio>
  </div>
</template>
<script>
export default {
  data:() => ({
    picked: 1,
  })
}
</script>
<style lang="stylus" scoped>
.center
  flex-direction column
  align-items flex-start
  .vs-radio-content
    margin 5px 0px
</style>
