<template>
  <div class="center con-pagination">
    <vs-pagination only-arrows v-model="page" :length="10" />
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
  code
    margin 10px
  .vs-pagination-content
    margin 10px 0px
</style>
