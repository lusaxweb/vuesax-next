<template>
  <div class="center con-avatars">
    <vs-avatar square>
      <template #text>
        Joel
      </template>
    </vs-avatar>
    <vs-avatar square danger>
      <template #text>
        Fanny
      </template>
    </vs-avatar>
    <vs-avatar square>
      <img src="/avatars/avatar-1.png" alt="">
    </vs-avatar>
    <vs-avatar square badge>
      <img src="/avatars/avatar-2.png" alt="">
    </vs-avatar>
    <vs-avatar square badge writing badge-color="success">
      <img src="/avatars/avatar-3.png" alt="">
    </vs-avatar>
    <vs-avatar badge square badge-color="warn" badge-position="top-right">
      <img src="/avatars/avatar-5.png" alt="">
    </vs-avatar>
    <vs-avatar history history-gradient square>
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
