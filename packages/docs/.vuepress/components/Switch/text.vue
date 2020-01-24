
<template>
  <div class="center con-switch">
    <vs-switch v-model="active">
      Suscribe
    </vs-switch>
    <vs-switch v-model="active2">
      <template #off>
          Off
      </template>
      <template #on>
          On
      </template>
    </vs-switch>
    <vs-switch v-model="active3">
      <template #off>
          default
      </template>
      <template #on>
          Premium
      </template>
    </vs-switch>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: false,
    active2: false,
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
