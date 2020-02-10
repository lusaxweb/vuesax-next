<template>
  <div class="call">
    <img src="/woman.jpg" alt="">
    <footer>
      <vs-button dark icon>
        <i class='bx bx-video-off' ></i>
      </vs-button>
      <vs-button success icon>
        <i class='bx bxs-phone-call' ></i>
      </vs-button>
      <vs-button dark icon>
        <i class='bx bx-microphone-off' ></i>
      </vs-button>
    </footer>
  </div>
</template>
<style lang="stylus" scoped>
.call
  img
    min-height 250px
    max-height 250px
  footer
    position absolute
    bottom 0px
    display flex
    align-items center
    justify-content center
    width 100%
    background-image: linear-gradient(180deg, transparent 0%, #000 100%);
    padding 10px
    .vs-button
      margin 10px

</style>
