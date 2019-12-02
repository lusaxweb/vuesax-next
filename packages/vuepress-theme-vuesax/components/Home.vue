<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <!-- <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      > -->
      <svg class="logo-vuesax" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271.62 195.86"><title>vuesax1</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path d="M0,141.49H11.72l14.8,41,14.88-41H53.13L32.76,195H20.45Z"/><path d="M57.37,191.87q-3.91-4-3.91-11.55V155.63H64.68v24.44c0,2.6.63,4.52,1.87,5.74s3.18,1.82,5.78,1.82a12.47,12.47,0,0,0,5.28-1.12,14.52,14.52,0,0,0,4.28-2.95V155.63H93.12V195H82.73l-.42-3.74a21.58,21.58,0,0,1-13.89,4.57Q61.28,195.86,57.37,191.87Z"/><path d="M106.88,190.67Q101,185.48,101,175.25q0-9.65,5.11-15.05t14.92-5.41q9,0,13.93,4.7t4.94,12.6v7.15H111.41q.82,4.57,4.2,6.4t9.93,1.83a37.6,37.6,0,0,0,6.44-.58,30,30,0,0,0,5.62-1.5v8q-5.49,2.49-14.39,2.49Q112.74,195.86,106.88,190.67Zm23.23-18.33v-2.17q0-7.3-8.73-7.31-5.47,0-7.73,2.2t-2.24,7.28Z"/><path d="M153.31,195.28a28.63,28.63,0,0,1-6.49-1.58v-9.31a28.91,28.91,0,0,0,6.41,1.79,40.62,40.62,0,0,0,6.9.62,21.73,21.73,0,0,0,5.94-.54,2.14,2.14,0,0,0,1.62-2.2,2.58,2.58,0,0,0-1.49-2.33,36.56,36.56,0,0,0-5.74-2.16c-.83-.22-1.89-.55-3.16-1q-5.82-1.9-8.52-4.57c-1.8-1.77-2.7-4.27-2.7-7.48a10,10,0,0,1,4.19-8.73q4.2-3,13.18-3a45,45,0,0,1,6.7.5,34,34,0,0,1,5.69,1.33v9.23a23.13,23.13,0,0,0-5.07-1.58,27.89,27.89,0,0,0-5.49-.58,23.51,23.51,0,0,0-5.9.54c-1.28.36-1.91,1.07-1.91,2.12a2.26,2.26,0,0,0,1.37,2.12,34.88,34.88,0,0,0,5.28,1.87l2.74.83a32.35,32.35,0,0,1,7.4,3.12,9.8,9.8,0,0,1,3.7,3.87,12.74,12.74,0,0,1,1.12,5.73,10.16,10.16,0,0,1-4.4,8.94q-4.41,3-13.06,3A57.26,57.26,0,0,1,153.31,195.28Z"/><path d="M189.27,192.66a10.85,10.85,0,0,1-4-9,11.47,11.47,0,0,1,4.2-9.35q4.2-3.45,12.1-3.45h11.64v-1.08a7.45,7.45,0,0,0-.87-3.91,5.25,5.25,0,0,0-3.08-2.08,23,23,0,0,0-6.28-.66,40.64,40.64,0,0,0-13,2.08v-7.9a33.16,33.16,0,0,1,6.86-1.83,51.2,51.2,0,0,1,8.44-.67q18.63,0,18.62,15.22v25h-9.72l-.59-3.57q-4.82,4.41-14.29,4.4A15.54,15.54,0,0,1,189.27,192.66Zm19.45-5.4a11.68,11.68,0,0,0,4.45-3.2v-6.24H201.78c-4.38,0-6.57,1.81-6.57,5.41s2.38,5.24,7.15,5.24A16,16,0,0,0,208.72,187.26Z"/><path d="M244.35,175,229.8,155.63h12.14l8.48,11.47,8.48-11.47H271L256.57,175l15.05,20H259.39l-9-12.05-9,12.05H229.21Z"/><polygon points="197.85 10.82 174.99 10.82 135.85 71.44 96.71 10.82 73.84 10.82 135.85 106.85 197.85 10.82"/><polygon points="135.85 117.53 83.35 36.23 73.79 36.23 135.85 132.33 197.91 36.23 188.35 36.23 135.85 117.53"/><polygon points="168.39 1.85 135.85 51.33 103.31 1.85 127.25 7.89 127.25 0 144.44 0 144.44 7.89 168.39 1.85"/></g></g></svg>

      <h1 v-if="data.heroText !== null" v-html="data.heroText || $title || 'Hello'" id="main-title" />

      <p v-html="data.tagline || $description || 'Welcome to your VuePress site'" class="description" />

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>

    <div
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

    <Content class="custom"/>

    <!-- <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div> -->
    <Footer />
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import Footer from './Footer.vue'

export default {
  components: { NavLink, Footer },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
getVar(var)
    unquote("var(--vs-"+var+")")

.logo-vuesax
  max-width 260px
  fill getVar(theme-color)
.home
  margin 0px auto
  display block
  width 100%
  ~ .config
    left 0px
  ~ .carbon-ads
    opacity 0
    visibility hidden
    display none
  #main-title
    font-size 2rem
    font-weight normal
    a
      text-decoration underline
  .description
    font-size 1.3rem !important
    margin-top 0px !important
  .hero
    display flex
    align-items center
    justify-content center
    flex-direction column
    text-align center
    min-height 800px
    background getVar(theme-bg2)
    padding-top 60px
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color getVar(theme-color)
      opacity .6
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff !important
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 15px
      transition background-color .1s ease
      box-sizing border-box
      transition all .25s ease
      &:hover
        background-color lighten($accentColor, 10%)
        box-shadow 0px 10px 20px -10px lighten($accentColor, 10%)
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
    flex-basis 30%
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
    padding-left 1.5rem
    padding-right 1.5rem
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
</style>
