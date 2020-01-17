<template>
  <div class="center content-inputs">
    <vs-input
      v-model="value"
      state="primary"
      placeholder="Primary" />

    <vs-input state="success" v-model="value2" placeholder="Success Icon">
      <template #icon>
        <i class='bx bx-user'></i>
      </template>
    </vs-input>

    <vs-input state="danger" icon-after v-model="value2" placeholder="Danger icon after">
      <template #icon>
        <i class='bx bx-mail-send' ></i>
      </template>
    </vs-input>

    <vs-input
      state="warn"
      v-model="value4"
      placeholder="Label Warn"
      label="Warn" />

    <vs-input
      state="dark"
      v-model="value5"
      label-placeholder="Dark" />
  </div>
</template>
<script>
export default {
  data:() => ({
    value: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: ''
  })
}
</script>
<style lang="stylus" scoped>
.content-inputs
  >>>.vs-input-parent
    margin 10px
</style>
