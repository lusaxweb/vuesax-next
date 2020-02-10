<template>
  <div class="center">
    <vs-radio v-model="picked" val="1">
      Primary
    </vs-radio>
    <vs-radio success v-model="picked" val="2">
      Success
    </vs-radio>
    <vs-radio danger v-model="picked" val="3">
      Danger
    </vs-radio>
    <vs-radio warn v-model="picked" val="4">
      Warning
    </vs-radio>
    <vs-radio dark v-model="picked" val="5">
      Dark
    </vs-radio>
    <vs-radio color="#7d33ff" v-model="picked" val="6">
      HEX
    </vs-radio>
    <vs-radio color="rgb(59,222,200)" v-model="picked" val="7">
      RGB
    </vs-radio>
  </div>
</template>
<script>
export default {
  data:() => ({
    picked: 2,
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
