<template>
  <div class="center con-avatars">
    <vs-avatar circle>
      <template #text>
        Joel
      </template>
    </vs-avatar>
    <vs-avatar circle danger>
      <template #text>
        Fanny
      </template>
    </vs-avatar>
    <vs-avatar circle>
      <img src="/avatars/avatar-1.png" alt="">
    </vs-avatar>
    <vs-avatar circle badge>
      <img src="/avatars/avatar-2.png" alt="">
    </vs-avatar>
    <vs-avatar circle badge writing badge-color="success">
      <img src="/avatars/avatar-3.png" alt="">
    </vs-avatar>
    <vs-avatar badge circle badge-color="warn" badge-position="top-right">
      <img src="/avatars/avatar-5.png" alt="">
    </vs-avatar>
    <vs-avatar history history-gradient circle>
      <img src="/avatars/avatar-6.png" alt="">
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
