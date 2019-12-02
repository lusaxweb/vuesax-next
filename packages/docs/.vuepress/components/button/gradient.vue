<template>
  <div class="center">
    <vs-button gradient :active="active == 0" @click="active = 0" >Active</vs-button>
    <vs-button gradient :active="active == 1" @click="active = 1" >Default</vs-button>
    <vs-button gradient disabled >Disabled</vs-button>
    <vs-button gradient color="danger" >Disabled</vs-button>
    <vs-button gradient color="success" >Disabled</vs-button>
    <vs-button gradient color="dark" >Disabled</vs-button>
    <vs-button gradient color="warn" >Disabled</vs-button>
    <vs-button gradient color="#7d33ff" >Disabled</vs-button>
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
