<template>
  <div class="center con-avatars">
    <vs-avatar size="30">
      <template #text>
        Lily
      </template>
    </vs-avatar>
    <vs-avatar size="40">
      <template #text>
        Evan You
      </template>
    </vs-avatar>
    <vs-avatar>
        <i class='bx bx-user'></i>
    </vs-avatar>
    <vs-avatar size="60" primary badge badge-color="danger">
        <i class='bx bxs-hot' ></i>
    </vs-avatar>
    <vs-avatar size="70" badge badge-color="success">
      <img src="/avatars/avatar-4.png" alt="">
    </vs-avatar>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="stylus">
  .con-avatars
    .vs-avatar-content
      margin 10px
</style>
