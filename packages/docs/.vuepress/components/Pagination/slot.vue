<template>
  <div class="center con-pagination">
    <vs-pagination v-model="page" :length="20">
      <vs-select v-model="page">
        <vs-option
          v-for="numberPage in 20"
          :label="numberPage"
          :value="numberPage">
          {{ numberPage }}
        </vs-option>
      </vs-select>
    </vs-pagination>
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
  .vs-select-content
    max-width 60px
    margin 0px 4px
  .vs-pagination-content
    margin 10px 0px
</style>
