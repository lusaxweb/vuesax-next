<template>
  <div class="con-user-example">
    <header>
      <vs-avatar>
        <img src="/avatars/avatar-5.png" alt="">
      </vs-avatar>
      <p>
        Sally Willis
      </p>

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
    </header>

    <div class="content-user">
      <p>
        <b>Sally Willis</b> liked your post and <b>9</b> other users
      </p>
      <vs-button dark transparent icon>
        <i class='bx bx-chevron-right'></i>
      </vs-button>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
.con-user-example
  header
    display flex
    align-items center
    justify-content center
    p
      min-width 100px
      margin-left 10px
      font-size .9rem
  .content-user
    display flex
    align-items center
    justify-content space-between
    p
      font-size .7rem
      max-width 200px
      padding 0px
      margin 0px
</style>
