<template>
  <div class="center con-pagination">
    <div class="con-radio">
      <vs-radio success v-model="color" val="success">
        Success
      </vs-radio>
      <vs-radio danger v-model="color" val="danger">
        Danger
      </vs-radio>
      <vs-radio warn v-model="color" val="warn">
        Warning
      </vs-radio>
      <vs-radio dark v-model="color" val="dark">
        Dark
      </vs-radio>
      <vs-radio color="#7d33ff" v-model="color" val="#7d33ff">
        HEX
      </vs-radio>
      <vs-radio color="rgb(59,222,200)" v-model="color" val="rgb(59,222,200)">
        RGB
      </vs-radio>
    </div>
    <vs-pagination :color="color" v-model="page" :length="20" />
  </div>
</template>
<script>
export default {
  data:() => ({
    page: 1,
    color: 'success'
  }),
}
</script>
<style lang="stylus">
.con-pagination
  .con-radio
    display flex
    align-items center
    justify-content flex-start
    flex-wrap: wrap
    .vs-radio-content
      margin 10px
  .vs-pagination-content
    margin 10px 0px
</style>
