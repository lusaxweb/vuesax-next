<template>
  <div class="content-i">
    <div class="con-text">
      <h2 v-html="data.title" />

      <p v-html="data.details" />

      <button v-if="data.action" @click="$router.push(data.action)" class="btn-action">
        {{ data.actionText }}
      </button>
    </div>
    <div class="con-ilus">
      <img class="not-darken" src="/vuesax-white-3.svg" alt="">
      <img class="has-darken" src="/vuesax-dark-3.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped lang="stylus">
.content-i
  width 100%
  padding 120px 70px
  display flex
  align-items center
  justify-content center
  max-width 1400px
  margin auto
  .con-text
    padding-left 50px
    width 50%
    h2
      border 0px
      font-size 2rem
      font-weight normal
  .con-ilus
    width 50%
    height 450px
    padding-left 50px
    max-width 600px
    img
      width 100%
      height auto
</style>
