<template>
  <div class="center con-checkbox">
    <vs-checkbox v-model="option">
      Label
    </vs-checkbox>
    <vs-checkbox label-before v-model="option2">
      Label Before
    </vs-checkbox>
  </div>
</template>
<script>
export default {
  data:() => ({
    option: true,
    option2: true,
  })
}
</script>
<style scoped lang="stylus">
.con-checkbox
  flex-direction column
  align-items flex-start
</style>
