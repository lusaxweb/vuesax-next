<template>
  <div class="center con-pagination">
    <vs-pagination progress v-model="page" :length="20" />
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
