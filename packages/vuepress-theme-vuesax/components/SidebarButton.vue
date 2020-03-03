<template>
  <button :class="{'openSidebar': isOpenSidebar}" class="sidebar-button" @click="$emit('toggle-sidebar')">
    <i class='bx bx-menu'></i>
  </button>
</template>

<script>
export default {
  props:['openSidebar'],
  computed: {
    isOpenSidebar() {
      return this.$parent.isSidebarOpen
    }
  }
}
</script>

<style lang="stylus">
getColor(vsColor, alpha = 1)
    unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.isSidebarOpen
  .sidebar-button
    transform rotate(90deg)
.sidebar-button
  cursor pointer
  display none
  position absolute
  padding 0.6rem
  top 0.6rem
  left .2rem
  outline none
  user-select none
  background transparent
  appearance: none
  box-shadow: none
  border 0px
  transition all .25s ease
  color: getColor('theme-color') !important
  &:focus
    outline 0
  i
    display block
    font-size 1.8rem

@media (max-width: 1000px)
  .sidebar-button
    display block
</style>
