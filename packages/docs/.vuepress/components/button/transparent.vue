<template>
  <div class="center">
    <vs-button transparent :active="active == 0" @click="active = 0" >Active</vs-button>
    <vs-button transparent :active="active == 1" @click="active = 1" >Default</vs-button>
    <vs-button transparent disabled >Disabled</vs-button>
    <vs-button transparent color="danger" >Disabled</vs-button>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: 0
  })
}
</script>
<style lang="stylus" scoped>
.center
  display flex
  align-items center
  justify-content center
  padding 20px
</style>
