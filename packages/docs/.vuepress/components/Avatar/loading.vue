<template>
  <div class="center con-avatars">
    <vs-avatar loading badge>
      <img src="/avatars/avatar-5.png" alt="">
    </vs-avatar>
    <vs-avatar loading badge badge-color="danger">
      <img src="/avatars/avatar-6.png" alt="">
    </vs-avatar>
    <vs-avatar loading badge badge-color="success">
      <img src="/avatars/avatar-2.png" alt="">
      <template #badge>
        28
      </template>
    </vs-avatar>
    <vs-avatar loading badge badge-color="warn">
      <img src="/avatars/avatar-8.png" alt="">
      <template #badge>
        <i class='bx bxs-bell-off' ></i>
      </template>
    </vs-avatar>
    <vs-avatar loading writing badge badge-color="primary">
      <img src="/avatars/avatar-3.png" alt="">
    </vs-avatar>
    <vs-avatar loading badge-position="top-right" badge badge-color="#7d33ff">
      <img src="/avatars/avatar-1.png" alt="">
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
