<template>
  <div class="center con-avatars">
    <vs-avatar-group max="7">
      <vs-avatar>
        <img src="/avatars/avatar-1.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-6.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-2.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-7.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-3.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-8.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-4.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-9.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-5.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-10.png" alt="">
      </vs-avatar>
    </vs-avatar-group>

    <vs-avatar-group float max="8">
      <vs-avatar>
        <img src="/avatars/avatar-1.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-6.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-2.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-7.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-3.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-8.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-4.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-9.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-5.png" alt="">
      </vs-avatar>
      <vs-avatar>
        <img src="/avatars/avatar-10.png" alt="">
      </vs-avatar>
    </vs-avatar-group>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="stylus">
  .con-avatars
    align-items flex-start
    .vs-avatar__group
      margin 10px
      &.float
        max-width 300px

@media (max-width: 500px)
  .con-avatars
    align-items flex-start
    justify-content flex-start
    .vs-avatar__group
      margin 10px
      &.float
        max-width 100%
</style>
