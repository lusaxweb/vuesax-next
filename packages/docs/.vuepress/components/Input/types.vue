<template>
  <div class="center content-inputs">
    <vs-input
      type="text"
      v-model="value1"
      label="Text"
    />
    <vs-input
      type="password"
      v-model="value2"
      label="Password"
    />
    <vs-input
      type="search"
      v-model="value3"
      label="Search"
    />
    <vs-input
      type="number"
      v-model="value4"
      label="Number"
    />
    <vs-input
      type="url"
      v-model="value5"
      label="Url"
    />
    <vs-input
      type="time"
      v-model="value6"
      label="time"
    />
    <vs-input
      type="date"
      v-model="value7"
      label="Date"
    />
  </div>
</template>
<script>
export default {
  data:() => ({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
  })
}
</script>
<style scoped lang="stylus">
.content-inputs
  >>> .vs-input-parent
    margin 10px
</style>
