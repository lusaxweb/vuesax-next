
<template>
  <div class="center con-switch">
    <vs-switch v-model="active1" />
    <vs-switch success v-model="active2" />
    <vs-switch danger v-model="active3" />
    <vs-switch warn v-model="active4" />
    <vs-switch dark v-model="active5" />
    <vs-switch color="#7d33ff" v-model="active6" />
    <vs-switch color="rgb(59,222,200)" v-model="active7" />
  </div>
</template>
<script>
export default {
  data:() => ({
    active1: true,
    active2: true,
    active3: true,
    active4: true,
    active5: true,
    active6: true,
    active7: true,
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

