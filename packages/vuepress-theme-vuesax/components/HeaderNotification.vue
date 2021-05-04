<template>
  <div
    v-if="active == number"
    class="header-notification">
    <div
      @click="handleClick"
      class="con-text-n">
      <div class="icon-n">
        <i class='bx bxs-megaphone'></i>
      </div>
      <div class="text-n">
        <h3>
          New component <b>Card</b> 🎉
        </h3>
        <p>
          See the examples and the new documentation
        </p>
      </div>
    </div>
    <div class="con-btn-n">
      <button
        class="btn-info"
        @click="handleClick"
      >
        👉 More information
      </button>
      <button
        @click="handleRemove"
        class="btn-x">
        <i class='bx bx-x'></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: 0,
    number: 12
  }),
  methods: {
    handleClick() {
      this.$router.push('/docs/components/Card')
      this.active = 0

      localStorage.notificationHidden = this.number
    },
    handleRemove() {
      this.active = 0
      localStorage.notificationHidden = this.number
    }
  },
  mounted() {
    if(localStorage.notificationHidden == this.number) {
      this.active = 0
    } else {
      this.active = this.number
    }
  }
}
</script>
<style lang="stylus">
getVar(var)
    unquote("var(--vs-"+var+")")

.header-notification
  width 100%
  position fixed
  height 40px
  background getVar(theme-bg2)
  z-index 10000
  display flex
  align-items center
  justify-content space-between
  top 0px
  cursor pointer
  overflow hidden
  transition all .3s ease
  &:hover
    .con-text-n
      .icon-n
        width 60px
  .con-text-n
    display flex
    align-items center
    justify-content flex-start
    width calc(100% - 200px)
    .icon-n
      width 40px
      height 40px
      display flex
      align-items center
      justify-content center
      color getVar(theme-color)
      background rgba(0,0,0,.05)
      margin-right 20px
      transition all .25s ease
    .text-n
      h3
        margin 0px
        padding 0px
        font-size .7rem
        color getVar(theme-color)
        font-weight normal
        b
          text-decoration underline
          font-weight 600
      p
        margin 0px
        padding 0px
        font-size .55rem
        color getVar(theme-color)
  .con-btn-n
    display flex
    align-items center
    justify-content flex-end
    button
      padding 5px 10px
      height 30px
      border-radius 20px
      border 0px
      background transparent
      color getVar(theme-color)
      font-size .65rem
      background rgba(0,0,0,.05)
      transition all .25s ease
      margin-right 10px
      &.btn-x
        margin-right 20px
        font-size 1rem
        padding 0px
        width 30px
        height 30px
      &:hover
        background rgba(0,0,0,.3)
  ~
    .navbar:not(.fixed)
      top 40px !important
      ~
        .page
          margin-top 97px
      ~
        .sidebar
          top 97px

@media (max-width: 500px)
  .header-notification
    ~ .navbar.fixed
      ~ .carbon-ads
        margin-top 6px
    ~ .carbon-ads
      margin-top 42px
    .con-text-n
      width calc(100% - 30px)
    .con-btn-n
      .btn-info
        display none
      button.btn-x
        margin-right 10px
@media (max-width: 400px)
  .header-notification
    .con-text-n
      .icon-n
        margin-right 6px
        width 30px
@media (max-width: 300px)
  .header-notification
    .con-text-n
      padding-left 8px
      .icon-n
        display none

</style>
