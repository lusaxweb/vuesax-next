<template>
  <button :class="{'openSidebar': isOpenSidebar}" class="sidebar-button" @click="$emit('toggle-sidebar')">
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512">
      <path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z" class=""></path>
    </svg>
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
.isSidebarOpen
  .sidebar-button
    transform rotate(90deg)
.sidebar-button
  cursor pointer
  display none
  position absolute
  padding 0.6rem
  top 0.6rem
  left 1rem
  outline none
  user-select none
  background transparent
  appearance: none
  box-shadow: none
  border 0px
  transition all .25s ease
  &:focus
    outline 0
  .icon
    display block
    width 1.25rem
    height 1.25rem

@media (max-width: 1000px)
  .sidebar-button
    display block
</style>
