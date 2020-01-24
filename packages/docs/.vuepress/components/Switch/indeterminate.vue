
<template>
  <div class="center con-switch">
    <vs-switch indeterminate v-model="active" />
    <vs-switch indeterminate v-model="active2" />
    <vs-switch indeterminate v-model="active3" disabled />
  </div>
</template>
<script>
export default {
  data:() => ({
    active: false,
    active2: true,
    active3: false,
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
