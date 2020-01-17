<template>
  <div class="center content-inputs">
    <vs-input v-model="value1" placeholder="User name">
      <template #icon>
        <i class='bx bx-user'></i>
      </template>
    </vs-input>

    <vs-input type="password" icon-after v-model="value2" placeholder="Password">
      <template #icon>
        <i class='bx bx-lock-open-alt'></i>
      </template>
    </vs-input>
  </div>
</template>
<script>
export default {
  data:() => ({
    value1: '',
    value2: ''
  })
}
</script>
<style lang="stylus" scoped>
.content-inputs
  >>>.vs-input-parent
    margin 10px
</style>
