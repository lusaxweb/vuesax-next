<template>
  <div class="center con-checkbox">
    <vs-checkbox v-model="option1">
      {{ option1 }}
    </vs-checkbox>
    <vs-checkbox v-model="option2">
      {{ option2 }}
    </vs-checkbox>
  </div>
</template>
<script>
export default {
  data:() => ({
    option1: true,
    option2: false,
  })
}
</script>
<style scoped lang="stylus">
.con-checkbox
  >>>.vs-checkbox-content
    min-width 80px
</style>
