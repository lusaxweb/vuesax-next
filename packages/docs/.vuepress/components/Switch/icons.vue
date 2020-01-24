
<template>
  <div class="center con-switch">
    <vs-switch v-model="active1">
      <template #off>
          <i class='bx bxs-volume-mute' ></i>
      </template>
      <template #on>
          <i class='bx bxs-volume-full' ></i>
      </template>
    </vs-switch>
    <vs-switch danger v-model="active2">
      <i class='bx bxs-microphone' ></i>
    </vs-switch>
    <vs-switch success v-model="active3">
      <template #off>
          <i class='bx bx-x' ></i>
      </template>
      <template #on>
          <i class='bx bx-check' ></i>
      </template>
    </vs-switch>
    <vs-switch warn v-model="active4">
      <template #off>
          <i class='bx bxs-plane-alt' ></i>
      </template>
      <template #on>
          Active
      </template>
    </vs-switch>
    <vs-switch dark v-model="active5">
      <template #circle>
          <i v-if="!active5" class='bx bxs-moon' ></i>
          <i v-else class='bx bxs-sun' ></i>
      </template>
    </vs-switch>
    <vs-switch color="#7d33ff" icon v-model="active6">
      <template #circle>
          <i v-if="active6" class='bx bxl-instagram-alt'></i>
          <i v-else class='bx bxl-instagram' ></i>
      </template>
    </vs-switch>
  </div>
</template>
<script>
export default {
  data:() => ({
    active1: false,
    active2: false,
    active3: false,
    active4: false,
    active5: false,
    active6: false,
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
