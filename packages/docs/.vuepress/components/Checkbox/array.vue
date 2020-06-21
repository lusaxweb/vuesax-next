<template>
  <div class="center con-checkbox">
    <vs-checkbox val="html" v-model="options">
      Html
    </vs-checkbox>
    <vs-checkbox val="css" v-model="options">
      Css
    </vs-checkbox>
    <vs-checkbox val="javascript" v-model="options">
      Javascript
    </vs-checkbox>
    <vs-checkbox val="vue" v-model="options">
      Vue
    </vs-checkbox>
    <vs-checkbox val="vuesax" v-model="options">
      Vuesax
    </vs-checkbox>

    <span class="data-check">
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
<style scoped lang="stylus">
.con-checkbox
  flex-direction column
  align-items flex-start
  >>>.vs-checkbox-content
    min-width 80px
  .data-check
    background rgba(0,0,0,.03)
    padding 10px 20px
    border-radius 18px
    margin-top 20px
</style>
