<template>
  <main class="home" aria-labelledby="main-title">

    <!-- <Adsense
      data-ad-client="ca-pub-4283907298344887"
      data-ad-slot="4634073296">
    </Adsense> -->
    <div class="init">
      <header class="hero">
        <div class="points-init">
          <span
            v-for="span in 16"
            :key="span"
          ></span>
        </div>
        <div class="circle-init"></div>
        <div class="content-hero">
          <h1 v-if="data.heroText !== null" v-html="data.heroText || $title || 'Hello'" id="main-title" />

          <p v-html="data.tagline || $description || 'Welcome to your VuePress site'" class="description" />

          <div class="con-btns">
            <NavLink
              @mouseleave.native="time('vuesax')"
              @mouseenter.native="vuesax = true, expand = true"
              title="Get Started"
              class="action-button"
              :item="actionLink"
            />

            <a
              @mouseleave="time('discord')"
              @mouseenter="discord = true, expand = true"
              title="Discord" class="discord" target="_blank" href="https://discord.gg/6AZNXEa">
              <i class='bx bxl-discord' ></i>
              Discord
            </a>

            <a
              @mouseleave="time('github')"
              @mouseenter="github = true, expand = true"
              title="Github" class="github" target="_blank" href="https://github.com/lusaxweb/vuesax">
              <i class='bx bxl-github' ></i>
              <span title="Stargazers" class="badge-star">
                <!-- <i class='bx bxs-star' ></i> -->
                {{ numberWithCommas }}
              </span>
            </a>
          </div>
        </div>
      </header>

      <components :class="{
        'github-hover':github,
        'discord-hover':discord,
        'vuesax-hover':vuesax,
        'btn-hover': expand,
        }" />
    </div>
    <!-- <home-init>
      <header class="hero">
        <div class="content-hero">
          <h1 v-if="data.heroText !== null" v-html="data.heroText || $title || 'Hello'" id="main-title" />

          <p v-html="data.tagline || $description || 'Welcome to your VuePress site'" class="description" />

          <div class="con-btns">
            <NavLink
              title="Get Started"
              class="action-button"
              :item="actionLink"
            />

            <a title="Discord" class="discord" target="_blank" href="https://discord.gg/9dsKtvB">
              <i class='bx bxl-discord' ></i>
              Discord
            </a>

            <a title="Github" class="github" target="_blank" href="https://github.com/lusaxweb/vuesax">
              <i class='bx bxl-github' ></i>
              <span title="Stargazers" class="badge-star">
                <!<i class='bx bxs-star' ></i>
                {{ numberWithCommas }}
              </span>
            </a>
          </div>
        </div>

      </header>
    </home-init> -->

    <Patrons />

    <Illustration1 :data="data.features[0]" />
    <Illustration2 :data="data.features[1]" />

    <Uses />
    <Illustration3 :data="data.features[2]" />
    <Illustration4 :data="data.features[3]" />

    <twitter />
    <Premium-themes :data="data.premiumThemes" />




    <!-- <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="custom"/> -->

    <!-- <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div> -->
    <Footer :data="data.suscribe" />
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import Footer from './Footer.vue'
import HomeInit from './homeInit.vue'
import Illustration1 from './HomeIllustration1.vue'
import Illustration2 from './HomeIllustration2.vue'
import Illustration3 from './HomeIllustration3.vue'
import Illustration4 from './HomeIllustration4.vue'
import components from './HomeComponents.vue'
import PremiumThemes from './premiumThemes.vue'
import Patrons from './HomePatrons.vue'
import twitter from './HomeTwiter.vue'
import Uses from './HomeUses.vue'

export default {
  components: { NavLink, Footer, HomeInit, Illustration1, Illustration2, Illustration3, Illustration4, Patrons, PremiumThemes, components, twitter, Uses },
  data:() => ({
    star: 0,
    github: false,
    discord: false,
    vuesax: false,
    expand: false
  }),
  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },
    numberWithCommas() {
        const x = this.star
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return parts.join(".");
    }
  },

  mounted(){
     fetch('https://api.github.com/repos/lusaxweb/vuesax')
    .then(response => response.json())
    .then(json => {
      this.star = json.stargazers_count
    })
  },
  methods: {
    time(name) {
      this.expand = false
      this[name] = false
    }
  }
}
</script>

<style lang="stylus">
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")

.darken
  .init
    &:after
      background-image: radial-gradient(getVar(theme-bg) 0%, getVar(theme-bg) 30%, transparent 70%);
  .discord
    background getVar(theme-bg)
    color #fff !important
    i
      color #fff !important
  .badge-star
    background getVar(theme-bg2)
    color #fff

.init
  display flex
  align-items center
  justify-content flex-start
  width 100%
  height 100vh
  position relative
  // &:after
  //   content ''
  //   background-image: radial-gradient(getVar(theme-bg2) 0%, getVar(theme-bg) 40%, transparent 75%);
  //   // background #000
  //   position absolute
  //   top 0px
  //   right 0px
  //   width 60%
  //   height 100%
  //   z-index 1
  .points-init
    width 100px
    height 100px
    top 200px
    left 10px
    position absolute
    display flex
    align-items center
    justify-content center
    flex-wrap wrap
    span

      width 25px
      height 25px
      display block
      transition all .25s ease
      display flex
      align-items center
      justify-content center
      &:hover
        &:after
          background getColor('primary')
          width 12px
          height 12px
          box-shadow 0px 4px 10px 0px getColor('primary', .2)
      &:after
        content: ''
        position relative
        width 6px
        height 6px
        background getVar(theme-bg2)
        border-radius 50%
        transition all .25s ease
  .circle-init
    position absolute
    width 430px
    height 430px
    border 40px solid getVar(theme-bg)
    border-radius 50%
    bottom -80px
    left -200px
    z-index -1
    transition all .25s ease
    &:hover
      border 40px solid getVar(theme-bg2)
  .hero
    width 50%

.badge-star
  position absolute
  top -8px
  right -25px
  font-size .7rem
  background getVar(theme-color)
  color getVar(theme-layout)
  border-radius 8px 8px 8px 4px
  padding 2px 5px
  font-weight normal
  z-index 100
  i
    font-size .6rem !important

.con-btns
  display flex
  align-items center
  justify-content center
.discord
  // background getColor('primary', .1)
  border 0px
  padding 11px 25px
  margin 0px 10px
  font-weight 600
  display flex
  align-items center
  justify-content center
  position relative
  border-radius 14px
  // color getColor('primary', 1) !important
  transition all .25s ease
  font-size .8rem
  &:after
    border-radius inherit
    content: ''
    position absolute
    top 0px
    left 0px
    width calc(100% - 4px)
    height calc(100% - 4px)
    border 2px solid getVar(theme-color)
    opacity .2
    transition all .25s ease
    background transparent
    box-shadow 0px 0px 0px 0px getVar(theme-color)
  &:hover
    &:after
      opacity 1
  i
    font-size 1.4rem
    margin-right 3px
.github
  padding 10px 20px
  margin 0px 10px
  font-weight 600
  display flex
  align-items center
  justify-content center
  position relative
  border-radius 14px
  &:hover
    &:after
      opacity 1
  &:after
    border-radius inherit
    content: ''
    position absolute
    top 0px
    left 0px
    width calc(100% - 4px)
    height calc(100% - 4px)
    border 2px solid getVar(theme-color)
    opacity .2
    transition all .25s ease
    background transparent
    box-shadow 0px 0px 0px 0px getVar(theme-color)
  i
    font-size 1.4rem
  &.github
    padding 10px
    margin-left 0px

.logo-vuesax
  max-width 260px
  fill getVar(theme-color)
.home
  margin 0px auto
  display block
  width 100%
  overflow hidden
  background getVar(theme-layout)
  ~ .config
    left 0px
  #main-title
    font-size 2rem
    font-weight normal
    a
      text-decoration underline
  .hero
    display flex
    align-items center
    justify-content center
    min-height 800px
    padding-top 60px
    padding 20px
    .content-hero
      display flex
      align-items flex-start
      justify-content center
      flex-direction column
      padding 40px 60px
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 2.3rem !important
      text-align left
      margin-bottom 15px
    h1, .description, .action
      text-align left
    .description
      max-width 35rem
      font-size 1.1rem
      line-height 1.3
      color getVar(theme-color)
      opacity .6
      margin-top 0px
    .action-button
      display inline-block
      font-size .8rem
      color #fff !important
      // background-color $accentColor
      background getColor('primary')
      padding 13px 25px
      border-radius 17px
      transition background-color .1s ease
      box-sizing border-box
      transition all .25s ease
      box-shadow 0px 10px 20px -10px getColor('primary', .5)
      i
        display none
      &:hover
        box-shadow 0px 20px 20px -10px getColor('primary', .5)
        transform translate(0,-5px)
  .features
    padding 1.2rem 0px
    margin auto
    max-width 1000px
    // margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%nav-link action-button
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color getVar(theme-color)
    p
      color getVar(theme-color)
      opacity .7
  // .footer
  //   padding 2.5rem
  //   border-top 1px solid $borderColor
  //   text-align center
  //   color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem

@media (max-width: 1400px)
  .home
    .content-i
      padding 100px 30px
      .con-text
        padding-left 0px
      .con-ilus
        height auto
        padding-right 20px
        width 50%
        svg
          height auto
          width 100%
@media (max-width: 1150px)
  .home
    .hero
      width 60%
      justify-content flex-start
      .content-hero
        padding 20px
        padding-right 30px
        .description
          font-size .95rem
        #main-title
          font-size 2rem !important
@media (max-width: 1000px)
  .home
    .content-i
      .con-text
        h2
          font-size 1.5rem
        p
          font-size .9rem
        .btn-action
          padding 7px 15px
          font-size .9rem
@media (max-width: 960px)
  .home
    .hero
      width 100%
      align-items center
      .content-hero
        width 100%
        align-items center
        padding-top 0px
        #main-title
          margin-top 0px
          text-align center
@media (max-width: 800px)
  .home
    .content-i
      position relative
      justify-content flex-start
      .con-text
        width 60%
        z-index 300
      .con-ilus
        position absolute
        width 50%
        top 40px
        right 0px

@media (max-width: 670px)
  .home
    min-height auto
    .content-i
      position relative
      justify-content flex-start
      padding 40px 20px
      flex-direction column
      .con-text
        width 90%
        z-index 300
      .con-ilus
        position relative
        width 100%
        max-width none
        opacity 1
        order: -1
        top 0px
        padding 10px !important
@media (max-width: 550px)
  .init
    min-height auto
  .home
    .hero
      z-index 120
      // align-items center
      // z-index 500
      .circle-init
        display none
      .points-init
        z-index -1
      .description
        text-align center
@media (max-width: 500px)
  .home
    .content-i
      .con-text
        width 100%
        h2
          font-size 1.2rem
        p
          font-size .8rem
@media (max-width: 470px)
  .home
    .hero
      padding 10px
      .content-hero
        z-index 1000
        padding-right 15px !important
        #main-title
          font-size 1.8rem !important
  .con-btns
    flex-wrap wrap
    width 100%
    a
      width calc(50% - 20px)
      margin 10px
      text-align center
      &:first-child
        width calc(100% - 30px)
</style>
