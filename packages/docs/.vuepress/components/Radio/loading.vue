<template>
  <div class="center">
    <vs-radio loading v-model="picked" val="1">
      Option 1
    </vs-radio>
    <vs-radio loading v-model="picked" val="2">
      Option 2
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
