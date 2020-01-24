<template>
  <div class="center con-switch">
    <vs-switch val="html" v-model="options">
      Html
    </vs-switch>
    <vs-switch val="css" v-model="options">
      Css
    </vs-switch>
    <vs-switch val="javascript" v-model="options">
      Javascript
    </vs-switch>
    <vs-switch val="vue" v-model="options">
      Vue
    </vs-switch>
    <vs-switch val="vuesax" v-model="options">
      Vuesax
    </vs-switch>

    <span class="data">
      {{ options }}
    </span>
  </div>
</template>
<script>
export default {
  data:() => ({
    options: [
      'javascript',
      'vue'
    ],
  }),
}
</script>
<style lang="stylus" scoped>
.con-switch
  display flex
  align-items flex-start
  justify-content flex-start
  flex-direction column
  >>>.vs-switch
    margin 5px
  .data
    background rgba(0,0,0,.03)
    padding 10px 20px
    border-radius 18px
    margin-top 20px
</style>
