<template>
  <div class="center con-pagination">
    <vs-pagination buttons-dotted v-model="page" :length="6" />
    <code>
      Page: <b>{{ page }}</b>
    </code>
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
