<template>
  <div
    class="dropdown-wrapper"
    :class="{ open }"
  >
    <a
      class="dropdown-title"
      v-if="!item.link"
      @click="toggle"
    >
      <span
        :class="item.text"
        class="title">
        <span v-if="item.text != '...'">
          {{ item.text }}
        </span>
        <i v-else class="bx bx-dots-horizontal-rounded">

        </i>
        <i v-if="hasFle" class="bx bx-chevron-down not-remove"></i>
      </span>
    </a>

    <NavLink
      v-else
      :item="item"
      :arrow="true"
    />

    <DropdownTransition>
      <ul
        class="nav-dropdown"
        v-show="open"
      >
        <li
          class="dropdown-item"
          :key="subItem.link || index"
          v-for="(subItem, index) in item.items"
        >
          <h4 v-if="subItem.type === 'links'">{{ subItem.text }}</h4>

          <ul
            class="dropdown-subitem-wrapper"
            v-if="subItem.type === 'links'"
          >
            <li
              class="dropdown-subitem"
              :key="childSubItem.link"
              v-for="childSubItem in subItem.items"
            >
              <NavLink
                :exact="$route.path.indexOf('/guide/components/') !== -1 || childSubItem.text === 'Button'"
                :item="childSubItem"/>
            </li>
          </ul>

          <NavLink
            v-else
            :item="subItem"
          />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import DropdownTransition from '@theme/components/DropdownTransition.vue'

export default {
  components: { NavLink, DropdownTransition },

  data () {
    return {
      open: false
    }
  },

  props: {
    item: {
      required: true
    },
    hasFle: {}
  },

  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="stylus">
getVar(var)
    unquote("var(--vs-"+var+")")
.dropdown-wrapper
  .dropdown-title
    display flex !important
    align-items center
    justify-content center
    .title
      display flex !important
      align-items center
      justify-content center¨
      &.Languages
        span
          font-size .7rem
    i.bx
      font-size 1.3rem
      transition all .25s ease
    .nav-link
      i.bx
        max-width 18px !important
        max-height 18px !important
        transition all .25s ease
        margin-bottom -4px
  &:hover
    border-color transparent
    .nav-link
      i.bx
        transform rotate(-180deg)
  .nav-dropdown
    .dropdown-item
      color inherit
      line-height 1.7rem
      h4
        margin 0.45rem 0 0
        // border-top 1px solid #eee
        padding 0.45rem 1.5rem 0 1.25rem
        margin-bottom 6px
        font-weight bold
        cursor default
        color getVar(theme-color)
      .dropdown-subitem-wrapper
        padding 0
        list-style none
        .dropdown-subitem
          font-size 0.9em
      a
        display block
        position relative
        border-bottom none !important
        margin-bottom 0 !important
        padding 3px 25px
        opacity .5
        font-weight bold !important
        transform translate(0) !important
        &::after
          content ""
          width 5px
          height 5px
          position absolute
          top calc(50% - 2px)
          left 0px
          opacity 0
        &:hover
          opacity 1
        &.router-link-active
          opacity 1 !important
          &::after
            position absolute
            top calc(50% - 2px)
            left 14px !important
            width 5px !important
            opacity 1
      &:first-child h4
        margin-top 0
        padding-top 0
        border-top 0

@media (max-width: $MQMobile)
  .dropdown-wrapper
    &.open .dropdown-title
      margin-bottom 0.5rem
    .nav-dropdown
      transition height .1s ease-out
      overflow hidden
      .dropdown-item
        h4
          border-top 0
          margin-top 0
          padding-top 0
        h4, & > a
          font-size 15px
          line-height 2rem
        .dropdown-subitem
          font-size 14px
          padding-left 1rem

@media (min-width: $MQMobile)
  .dropdown-wrapper
    position relative
    &:after
      content ''
      position absolute
      bottom -12px
      width 100%
      height 20px
      background transparent
      display none
    &:hover
      // override the inline style.
      display block !important
      &:after
        display block
      .nav-dropdown
        transform translate(0, calc(100% + 10px)) !important
        visibility visible !important
        opacity 1 !important
    .dropdown-title .arrow
      // make the arrow always down at desktop
      border-left 4px solid transparent
      border-right 4px solid transparent
      border-top 6px solid $arrowBgColor
      border-bottom 0
    .nav-dropdown
      min-width 200px
      display block !important
      visibility hidden
      opacity 0
      // Avoid height shaked by clicking
      height auto !important
      box-sizing border-box;
      max-height calc(100vh - 2.7rem)
      overflow-y auto
      position absolute
      bottom 0px
      transform translate(0, 100%)
      left 0
      background-color getVar(theme-layout)
      padding 0.5rem 0
      // border 1px solid #ddd
      // border-bottom-color #ccc
      text-align left
      border-radius 7px 20px 20px 20px
      white-space nowrap
      margin 0
      margin-top -10px
      transition all .25s ease
      box-shadow 0px 10px 20px -10px rgba(0,0,0,.1)
</style>
