<template>
  <div class="center">
    <vs-tooltip>
      <vs-button gradient>
        Whats is Vuesax?
      </vs-button>
      <template #tooltip>
        <div class="content-tooltip">
          <h4>
            Whats is Vuesax?
          </h4>
          <p>
            Vuesax is a framework of UI components created with Vuejs
          </p>
        </div>
      </template>
    </vs-tooltip>
    <vs-tooltip bottom shadow not-hover v-model="activeTooltip1">
      <vs-button danger @click="activeTooltip1=!activeTooltip1">
        Click Delete User
      </vs-button>
      <template #tooltip>
        <div class="content-tooltip">
          <h4 class="center">
            Confirm
          </h4>
          <p>
            You are sure to delete this user, by doing so you cannot recover the data
          </p>
          <footer>
            <vs-button @click="activeTooltip1=false" danger block>
              Delete
            </vs-button>
            <vs-button @click="activeTooltip1=false" transparent dark block>
              Cancel
            </vs-button>
          </footer>
        </div>
      </template>
    </vs-tooltip>
    <vs-tooltip shadow interactivity>
      <vs-avatar>
        <img src="/avatars/avatar-5.png" alt="">
      </vs-avatar>
      <template #tooltip>
        <div class="content-tooltip">
          <div class="body">
            <div class="text">
                Closed Tasks
              <span>
              89
              </span>
            </div>
            <vs-avatar circle size="80" @click="activeTooltip1=!activeTooltip1">
              <img src="/avatars/avatar-5.png" alt="">
            </vs-avatar>
            <div class="text">
                Open Tasks
              <span>
              8
              </span>
            </div>
          </div>
          <footer>
            <vs-button circle icon border>
              <i class='bx bxs-share-alt'></i>
            </vs-button>
            <vs-button circle>
              Message
            </vs-button>
            <vs-button circle icon border>
              <i class='bx bx-like' ></i>
            </vs-button>
          </footer>
        </div>
      </template>
    </vs-tooltip>
  </div>
</template>
<script>
export default {
  data:() => ({
    activeTooltip1: false
  })
}
</script>
<style lang="stylus">
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")

.content-tooltip
  .body
    display flex
    align-items flex-start
    justify-content center
    .vs-avatar-content
      margin-top -30px
      border 3px solid getVar('theme-layout')
      box-shadow 0px 4px 15px 0px rgba(0,0,0,.1)
    .text
      display flex
      align-items center
      justify-content center
      flex-direction column
      font-size .55rem
      padding 10px
      font-weight normal
      span
        font-weight bold
        font-size .7rem
  footer
    display flex
    align-items center
    justify-content center
  h4
    padding 8px
    margin 0px
    text-align left
  p
    text-align left
    padding 0px
    margin 0px
    line-height 1rem
    padding-bottom 5px
    padding-left 8px
</style>
