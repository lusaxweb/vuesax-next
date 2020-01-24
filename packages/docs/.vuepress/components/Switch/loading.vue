<template>
  <div class="center con-switch">
    <vs-switch v-model="activeLoading">
      Active Loading
    </vs-switch>
    <vs-switch :loading="activeLoading" v-model="active2" />
  </div>
</template>
<script>
export default {
  data:() => ({
    activeLoading: true,
    active2: false
  }),
}
</script>
<style lang="stylus" scoped>
.con-switch
  display flex
  align-items center
  justify-content center
  >>>.vs-switch
    margin 10px
</style>
