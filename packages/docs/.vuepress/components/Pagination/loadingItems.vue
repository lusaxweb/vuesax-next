<template>
  <div class="center con-pagination">
    <vs-pagination :loading-items="[3,4,9,10,11,12,19]" v-model="page" :length="20" />
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
