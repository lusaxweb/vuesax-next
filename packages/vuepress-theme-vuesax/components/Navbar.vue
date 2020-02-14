<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

    <router-link
      :to="$localePath"
      class="home-link"
    >
      <!-- <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      >
      <span
        ref="siteName"
        class="site-name"
        v-if="$siteTitle"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span>
      Vuesax -->
      <svg class="logo-nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 401.69 98.4"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path d="M105.79,27.23h12.78l16.12,44.65L150.9,27.23h12.77L141.48,85.56h-13.4Z"/><path d="M168.29,82.12Q164,77.77,164,69.53V42.63h12.23V69.26q0,4.26,2,6.25c1.36,1.33,3.45,2,6.29,2a13.73,13.73,0,0,0,5.75-1.22A16,16,0,0,0,195,73.06V42.63h12.22V85.56H195.91l-.45-4.08a23.47,23.47,0,0,1-15.12,5Q172.54,86.47,168.29,82.12Z"/><path d="M222.22,80.8q-6.37-5.65-6.38-16.8,0-10.5,5.57-16.39t16.26-5.89q9.78,0,15.17,5.12t5.39,13.72v7.79H227.16c.6,3.32,2.13,5.65,4.57,7s6.06,2,10.83,2a39.59,39.59,0,0,0,7-.64,31.7,31.7,0,0,0,6.11-1.63v8.7q-6,2.72-15.67,2.72Q228.61,86.47,222.22,80.8Zm25.32-20V58.48q0-8-9.51-8c-4,0-6.79.8-8.42,2.4s-2.45,4.24-2.45,7.92Z"/><path d="M272.81,85.83a31.36,31.36,0,0,1-7.07-1.72V74a31.67,31.67,0,0,0,7,1.94,44,44,0,0,0,7.52.68,23.39,23.39,0,0,0,6.47-.59,2.33,2.33,0,0,0,1.77-2.4,2.8,2.8,0,0,0-1.63-2.53,39.68,39.68,0,0,0-6.25-2.36c-.91-.24-2.06-.6-3.44-1.08q-6.35-2.09-9.29-5c-2-1.93-2.94-4.64-2.94-8.15q0-6.24,4.57-9.51t14.36-3.26a47.58,47.58,0,0,1,7.29.55,34.85,34.85,0,0,1,6.2,1.45V53.77a24.42,24.42,0,0,0-5.52-1.72,30.87,30.87,0,0,0-6-.64,25.74,25.74,0,0,0-6.43.59c-1.39.4-2.08,1.17-2.08,2.31a2.47,2.47,0,0,0,1.49,2.31,38.75,38.75,0,0,0,5.75,2l3,.91A34.78,34.78,0,0,1,295.63,63a10.69,10.69,0,0,1,4,4.21,13.91,13.91,0,0,1,1.23,6.25q0,6.43-4.8,9.74t-14.22,3.31A63,63,0,0,1,272.81,85.83Z"/><path d="M312,83q-4.39-3.49-4.39-9.83A12.49,12.49,0,0,1,312.16,63q4.57-3.75,13.18-3.76H338V58a8.13,8.13,0,0,0-.95-4.26,5.63,5.63,0,0,0-3.35-2.26,24.6,24.6,0,0,0-6.84-.73A44.66,44.66,0,0,0,312.75,53v-8.6a36,36,0,0,1,7.47-2,55.67,55.67,0,0,1,9.19-.73q20.29,0,20.29,16.58V85.56H339.11l-.64-3.89q-5.25,4.8-15.58,4.8A17,17,0,0,1,312,83Zm21.19-5.89A12.69,12.69,0,0,0,338,73.6V66.81H325.61q-7.16,0-7.15,5.89,0,5.7,7.78,5.7A17.2,17.2,0,0,0,333.17,77.09Z"/><path d="M372,63.73l-15.85-21.1h13.23l9.24,12.5,9.23-12.5h13.23L385.3,63.73l16.39,21.83H388.38L378.6,72.43l-9.79,13.13H355.5Z"/><polygon points="92.25 8.05 75.25 8.05 46.14 53.12 17.04 8.05 0.04 8.05 46.15 79.45 92.25 8.05"/><polygon points="46.15 87.39 7.11 26.94 0 26.94 46.14 98.4 92.29 26.94 85.18 26.94 46.15 87.39"/><polygon points="70.34 1.37 46.14 38.17 21.95 1.37 39.75 5.87 39.75 0 52.54 0 52.54 5.87 70.34 1.37"/></g></g></svg>
    </router-link>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <!-- <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      /> -->

      <NavLinks class="can-hide"/>
    </div>

    <div
      :class="{'remove-links': focused}"
      class="external-links-search">
      <a
        title="Previous Version"
        class="v-old"
        target="_blank" :href="$site.themeConfig.linkPrevVersion">
        v3.x
      </a>

      <div class="con-links">
        <a title="Github" target="_blank" href="https://github.com/lusaxweb/vuesax-next">
          <i class="bx bxl-github"></i>
        </a>
        <a title="Twitter" target="_blank" href="https://twitter.com/vuesax">
          <i class="bx bxl-twitter"></i>
        </a>
        <a title="Discord" target="_blank" href="https://discord.gg/6AZNXEa">
          <i class="bx bxl-discord"></i>
        </a>
      </div>

      <SearchBox
        @focus="focused = true"
        @blur="focused = false"
        @showSuggestions="handleShowSuggestions"
        v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
      <!-- <NavLinksLanguages class="can-hide"/> -->
      <!-- <button @click="handlePaddle">
        Buy Now!
      </button> -->
      <div class="user-info">
        <!-- <button class="btn-login" v-if="!$user.user" @click="handleLogin">
          Login
        </button>

        <div v-else class="user-dropdown">
          <div class="user">
            <img :src="$user.user.photoURL" alt="">
          </div>

          <div class="dropdown">
            <div class="dropdown-content">
              <span class="name-user">
                {{ $user.user.displayName }}
              </span>
              <button class="logout" @click="handleLogOut">
                Logout
              </button>
            </div>
          </div>
        </div> -->

        <!-- <button @click="handleVuesaxPass" v-if="$user.user">
          Comprar Components Pass
        </button> -->
      </div>
    </div>
  </header>
</template>

<script>
// import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from './NavLinks.vue'
// import NavLinksLanguages from '@theme/components/NavLinksLanguages.vue'
import SearchBox from './SearchBox.vue'

import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCO1X9AaKblBqNA3OL1HvAC-7n9xhJxmdU",
  authDomain: "vuesax-framework.firebaseapp.com",
  databaseURL: "https://vuesax-framework.firebaseio.com",
  projectId: "vuesax-framework",
  storageBucket: "vuesax-framework.appspot.com",
  messagingSenderId: "150226273019",
  appId: "1:150226273019:web:0f4faefcb7549d5cbe665e",
  measurementId: "G-ELFGE3FQQF"
};
// Initialize Firebase

// Vue.prototype.$firebase = firebase

export default {
  components: { SidebarButton, NavLinks, SearchBox },

  data () {
    return {
      linksWrapMaxWidth: null,
      showSuggestions: false,
      focused: false
    }
  },

  created() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  },

  mounted () {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        // this.$user.user = user
        const userId = firebase.auth().currentUser.uid
        firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
          // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
          this.$user.user = snapshot.val()
          // ...
        });
        // ...
      } else {
        // User is signed out.
        // ...
        this.$user.user = null
      }
    });

    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)

    window.addEventListener('scroll',() => {
      if(window.pageYOffset > 0) {
        this.$el.classList.add('fixed')
      } else {
        this.$el.classList.remove('fixed')
      }
    })
    // Paddle.Setup({
    //   vendor: 106600,
    // })
    // console.log(Paddle)
  },

  computed: {

    getUserPass() {
      if(this.$user.user) {
        return Object.keys(this.$user.user.pass) || []
      }
    },

    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },

  methods:{
    // handleVuesaxPass() {
    //   Paddle.Checkout.open({
    //     product: 579772,
    //     successCallback: (data) => {
    //       const db = firebase.database()
    //       const userId = firebase.auth().currentUser.uid
    //       db.ref('users/' + userId + '/pass/' + data.product.name).set(data).then(() => {
    //         firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
    //         // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //           this.$user.user = snapshot.val()
    //           // ...
    //         });
    //       })
    //     }
    //   })
    // },
    handleLogOut() {
      firebase.auth().signOut().then(() => {
        this.$user.user = null
      }).catch(function(error) {
        // An error happened.
      });
    },
    handleLogin() {
      const provider = new firebase.auth.GithubAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        this.handleUserDB(user)
        // ...
      })
    },
    handleUserDB(user) {
      const userId = firebase.auth().currentUser.uid
      firebase.database().ref(`users/${userId}`).once("value", snapshot => {
        if (!snapshot.exists()){
          const db = firebase.database()
          const userId = firebase.auth().currentUser.uid
          db.ref('users/' + userId).set({
            displayName: user.displayName,
            email: user.email,
            photoURL : user.photoURL,
            uid: user.uid
          }).then(() => {
            firebase.database().ref(`users/${userId}`).once("value", snapshot => {
              this.$user.user = snapshot.val()
            })
          })
        } else {
          this.$user.user = snapshot.val()
        }
      })
    },
    // handlePaddle() {
    //   Paddle.Checkout.open({ product: 579742 })
    // },
    handleShowSuggestions(active) {
      this.showSuggestions = active
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem
getVar(var)
    unquote("var(--vs-"+var+")")

.user-info
  position relative
  margin-left 10px
  .user-dropdown
    display flex
    align-items center
    justify-content center
    padding-right 10px
    &:hover
      .dropdown
        opacity 1
        visibility visible
    .dropdown
      width 160px
      visibility hidden
      opacity 0
      position absolute
      right 10px
      bottom 0px
      transform translate(0,100%)
      box-shadow 0px 10px 20px -10px rgba(0,0,0,.15)
      transition all .25s ease
      .dropdown-content
        width 160px
        border-radius 15px 5px 15px 15px
        padding 10px
        background getVar(theme-layout)
        margin-top 15px
        position relative
      .name-user
        border-bottom 1px solid getVar(theme-bg2)
        margin-bottom 10px
        width 100%
        padding 5px 10px
        padding-top 0px
        font-size .8rem
        text-align center
      .logout
        background: getVar(theme-color)
        color: getVar(theme-layout)
        border 0px
        padding 8px 25px
        border-radius 10px
        transition all .25s ease
        box-shadow 0px 0px 0px 0px getVar(theme-color)
        width 100%
        &:hover
          box-shadow 0px 5px 15px -5px getVar(theme-color)
          transform translate(0,-4px)
    .user
      img
        width 40px
        border-radius 30%
  .btn-login
    background: getVar(theme-color)
    color: getVar(theme-layout)
    border 0px
    padding 10px 15px
    border-radius 10px 10px 20px 10px
    margin-right 10px
    padding-right 17px
    transition all .25s ease
    box-shadow 0px 0px 0px 0px getVar(theme-color)
    &:hover
      box-shadow 0px 5px 15px -5px getVar(theme-color)
      transform translate(0,-4px)

.logo-nav
  fill getVar(theme-color)
  height 28px
.home-link
  position absolute
  left 0px
  font-weight bold
  padding-left 30px
.v-old
  padding 10px
  color inherit
  opacity .5
  transition all .25s ease
  &:hover
    opacity 1

.external-links-search
  display flex
  align-items center
  justify-content center
  position absolute
  right 0px
  &.remove-links
    // width calc(100% - 60px)
    .con-links, .v-old
      display none
  .con-links
    display flex
    align-items center
    justify-content center
    margin-right 10px
    a
      list-style none
      display flex
      align-items center
      justify-content center
      padding 4px
      box-sizing border-box
      box-icon
        width 20px !important
        height 20px !important

.navbar
  // padding $navbar-vertical-padding $navbar-horizontal-padding
  padding 0px 20px
  // line-height $navbarHeight - 1.4rem
  display flex
  align-items center
  justify-content center
  border-radius 0px 0px 30px 0px
  transition all .25s ease
  &.transparent
    background transparent
  &.fixed
    border-radius 0px
    background getVar(theme-layout)
    .btn-login
      border-radius 10px
    // backdrop-filter blur(20px)
    // background rgba(255,255,255,0.6) !important
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color getVar(theme-color)
    position relative
  .links
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    // right $navbar-horizontal-padding
    position relative
    display flex
    align-items center
    justify-content center
    // left 50%
    // transform translate(-50%)
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: 1500px)
  .navbar
    justify-content flex-start
  .home-link
    position relative
    padding-left 0px
    padding-right 20px

@media (max-width: 1000px)
  .navbar
    padding 9px
    padding-top 8px
    padding-left 2.5rem
    display flex
    justify-content space-between
    .home-link
      position relative
      padding-left 0px
      margin-left 25px
    .external-links-search
      position relative
      padding-left 0px
      right 0px
    .can-hide
      display none
    .links
      padding-left 1.5rem
      display none

@media (max-width: 500px)
  .home-link
    width 24px !important
    overflow hidden
    padding 0px
    margin-top 3px
    .logo-nav
      height 24px
  .user-info
    .btn-login
      margin-right 0px

@media (max-width: 390px)
  .external-links-search
    .con-links
      display none

</style>
