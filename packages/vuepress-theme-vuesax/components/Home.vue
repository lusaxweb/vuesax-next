<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

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
    min-height 600px
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
