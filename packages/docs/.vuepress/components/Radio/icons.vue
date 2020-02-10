<template>
  <div class="center">
    <vs-radio v-model="picked" val="1">
      Yen
      <template #icon>
        <i class='bx bx-yen' ></i>
      </template>
    </vs-radio>
    <vs-radio v-model="picked" val="2">
      Won
      <template #icon>
        <i class='bx bx-won' ></i>
      </template>
    </vs-radio>
    <vs-radio v-model="picked" val="3">
      Pound
      <template #icon>
        <i class='bx bx-pound' ></i>
      </template>
    </vs-radio>
    <vs-radio v-model="picked" val="4">
      Euro
      <template #icon>
        <i class='bx bx-euro' ></i>
      </template>
    </vs-radio>
    <vs-radio v-model="picked" val="5">
      Rupee
      <template #icon>
        <i class='bx bx-rupee' ></i>
      </template>
    </vs-radio>
    <vs-radio v-model="picked" val="6">
      Bitcoin
      <template #icon>
        <i class='bx bx-bitcoin' ></i>
      </template>
    </vs-radio>
    <vs-radio v-model="picked" val="7">
      Dollar
      <template #icon>
        <i class='bx bx-dollar' ></i>
      </template>
    </vs-radio>
  </div>
</template>
<script>
export default {
  data:() => ({
    picked: 1,
  })
}
</script>
<style lang="stylus" scoped>
.center
  flex-direction column
  align-items flex-start
  .vs-radio-content
    margin 5px 0px
</style>
