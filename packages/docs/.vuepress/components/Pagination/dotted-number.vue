<template>
  <div class="center con-pagination">
    <vs-pagination :dotted-number="10" v-model="page" :length="100" />
  </div>
</template>
<script>
export default {
  data:() => ({
    page: 1,
  }),
}
</script>
<style lang="stylus">
.con-pagination
  .vs-pagination-content
    margin 10px 0px
</style>
