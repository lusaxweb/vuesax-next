<template>
  <div class="center">
    <vs-radio v-model="picked" val="1">
      Label
    </vs-radio>
    <vs-radio label-before v-model="picked" val="2">
      label Before
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
