<template>
  <div class="clean">
      <!-- not-line-active -->
      <!-- background="primary"
      textWhite
      not-shadow
      hover-expand
      square -->
    <vs-sidebar
      :open="openSidebar"
      :reduce="reduce"
      v-model="active">
      <template #logo>
        <img src="/logos/logo-vuesax-logotipo-vuesax-png-3.png" alt="">
      </template>
      <template #header>
        <vs-avatar>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>
      </template>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class='bx bx-sitemap'></i>
            </template>
            Items
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="home">
          <template #icon>
            <i class='bx bx-home' ></i>
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-item id="docs">
          <template #icon>
            <i class='bx bx-book-open'></i>
          </template>
          Documents the new
        </vs-sidebar-item>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <i class='bx bx-archive' ></i>
              </template>
              Children
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="news">
            <template #icon>
              <i class='bx bx-news' ></i>
            </template>
            News
          </vs-sidebar-item>
          <vs-sidebar-item id="Playlist">
            <template #icon>
              <i class='bx bxs-playlist' ></i>
            </template>
            Playlist
          </vs-sidebar-item>
        </vs-sidebar-group>
      </vs-sidebar-group>

      <vs-sidebar-item id="Artist">
        <template #icon>
          <i class='bx bxs-bar-chart-alt-2' ></i>
        </template>
        Artist
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class='bx bx-chat' ></i>
        </template>
        Chat
      </vs-sidebar-item>
      <vs-sidebar-item id="Songs">
        <template #icon>
          <i class='bx bx-music' ></i>
        </template>
        Songs
      </vs-sidebar-item>
      <template #footer>
        <vs-button flat icon><i class='bx bxs-cog'></i></vs-button>
      </template>
    </vs-sidebar>

    <div class="div">
      <vs-button @click="reduce = !reduce">
        click toggle
      </vs-button>
      <vs-button @click="openSidebar = !openSidebar">
        Open sidebar
      </vs-button>
    </div>
  </div>
</template>
<script>
export default {
  data:() => ({
    reduce: false,
    activeSidebar: false,
    active: 'docs',
    openSidebar: false
  }),

  methods: {
    handleChange(val) {
      this.active = val
    }
  }
}
</script>
<style lang="stylus">
body
  margin 0px
  padding 0px
  border 0px
  background rgba(245,245,245,1)
  .div
    position relative
    width 100%
    display flex
    align-items center
    justify-content center
</style>
