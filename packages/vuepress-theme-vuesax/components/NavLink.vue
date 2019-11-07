<template>
  <router-link
    class="nav-link"
    :to="link"
    v-if="!isExternal(link)"
    :exact="exact || $route.path.indexOf('/guide/') !== -1 && item.text === 'Documentation'"
  >
  {{ item.text }}
    <box-icon v-if="arrow" name='chevron-down'></box-icon>
  </router-link>
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    {{ item.text }}
    <!-- <OutboundLink/> -->
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../util'

export default {
  props: {
    item: {
      required: true
    },
    arrow: {}
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel
  }
}
</script>
<style lang="stylus">
.nav-item
  > div > .nav-link
    display flex !important
    align-items center
    justify-content center
    box-icon
      max-width 18px
      max-height 18px
      transition all .25s ease
      margin-bottom -4px
</style>
