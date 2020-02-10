<template>
  <div class="center con-avatars">
    <vs-avatar>
      <img src="/avatars/avatar-1.png" alt="">
      <template #icons>
        <i class='bx bxl-facebook-square' ></i>
        <i class='bx bxl-github' ></i>
        <i class='bx bxl-twitter' ></i>
      </template>
    </vs-avatar>
    <vs-avatar badge badge-color="danger" badge-position="bottom-left">
      <img src="/avatars/avatar-8.png" alt="">
      <template #icons>
        <i class='bx bxl-twitch' ></i>
        <i class='bx bxl-discord' ></i>
      </template>
    </vs-avatar>
    <vs-avatar loading badge badge-color="success" badge-position="top-left">
      <img src="/avatars/avatar-2.png" alt="">
      <template #icons>
        <i class='bx bxl-patreon' ></i>
        <i class='bx bxl-linkedin-square' ></i>
        <i class='bx bx-link' ></i>
      </template>
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
    margin 20px
</style>
