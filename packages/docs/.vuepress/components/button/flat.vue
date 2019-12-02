<template>
  <div class="center">
    <vs-button flat :active="active == 0" @click="active = 0" >Active</vs-button>
    <vs-button flat :active="active == 1" @click="active = 1" >Default</vs-button>
    <vs-button flat disabled >Disabled</vs-button>
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
