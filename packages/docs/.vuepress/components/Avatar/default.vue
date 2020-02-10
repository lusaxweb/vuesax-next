<template>
  <div class="center con-avatars">
    <vs-avatar>
      <template #text>
        Lily
      </template>
    </vs-avatar>
    <vs-avatar>
      <template #text>
        Evan You
      </template>
    </vs-avatar>
    <vs-avatar>
        <i class='bx bx-user'></i>
    </vs-avatar>
    <vs-avatar primary>
        <i class='bx bxs-hot' ></i>
    </vs-avatar>
    <vs-avatar>
      <img src="/avatars/avatar-5.png" alt="">
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
