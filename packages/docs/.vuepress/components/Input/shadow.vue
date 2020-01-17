<template>
  <div class="center content-inputs">
    <vs-input shadow v-model="value" placeholder="Name" />

    <vs-input color="#7d33ff" shadow type="password" v-model="value2" placeholder="Password">
      <template #icon>
        <i class='bx bx-lock-open-alt'></i>
      </template>
    </vs-input>

    <vs-input shadow warn type="email" icon-after v-model="value3" label-placeholder="Address">
      <template #icon>
        <i class='bx bxl-bitcoin'></i>
      </template>
    </vs-input>
  </div>
</template>
<script>
export default {
  data:() => ({
    value: '',
    value2: '',
    value3: '',
  })
}
</script>
<style lang="stylus" scoped>
.content-inputs
  display flex
  align-items center
  justify-content center
  >>>.vs-input-parent
    margin 10px
</style>
