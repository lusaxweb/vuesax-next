<template>
  <div class="center example-nav">
    <vs-navbar text-white :color="active" right-collapsed v-model="active">
      <template #left>
        <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="">
      </template>
      <template #right>
        <vs-navbar-item :active="active == 'primary'" id="primary">
          Primary
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'success'" id="success">
          Success
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'danger'" id="danger">
          Danger
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'warn'" id="warn">
          Warn
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'dark'" id="dark">
          Dark
        </vs-navbar-item>
        <vs-navbar-item :active="active == '#7d33ff'" id="#7d33ff">
          HEX
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'rgb(59,222,200)'" id="rgb(59,222,200)">
          RGB
        </vs-navbar-item>
      </template>
    </vs-navbar>
    <div class="square">
      <div class="child">
        child 1
      </div>
      <div class="child">
        child 2
      </div>
      <div class="child">
        child 3
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: 'primary'
  })
}
</script>
<style lang="stylus">
  .square
    height 400px
    position relative
    overflow auto
    width 100%
    .child
      height 400px
      display flex
      align-items center
      justify-content center
      width 100%
  .example-nav
    background rgb(240,240,240) !important
    padding 0px !important
    position relative
    img
      max-height 22px
</style>
