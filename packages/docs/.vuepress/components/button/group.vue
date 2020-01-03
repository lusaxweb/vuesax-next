<template>
  <div class="center">
    <vs-button-group>
      <vs-button>
        One
      </vs-button>
      <vs-button>
        Two
      </vs-button>
      <vs-button>
        Three
      </vs-button>
      <vs-button>
        four
      </vs-button>
    </vs-button-group>

    <span class="divider" />

    <vs-button-group>
      <vs-button flat icon>
        <i class='bx bx-play' ></i>
      </vs-button>
      <vs-button flat icon>
        <i class='bx bx-pause' ></i>
      </vs-button>
      <vs-button flat icon>
        <i class='bx bx-fast-forward' ></i>
      </vs-button>
      <vs-button flat icon>
        <i class='bx bx-shuffle' ></i>
      </vs-button>
    </vs-button-group>

    <span class="divider" />

    <vs-button-group>
      <vs-button border>
        <i class='bx bxs-pencil' ></i> Edit
      </vs-button>
      <vs-button border icon>
        <i class='bx bx-font-color' ></i>
      </vs-button>
      <vs-button border icon>
        <i class='bx bx-align-middle' ></i>
      </vs-button>
      <vs-button border>
        <i class='bx bx-font-size' ></i> Font size
      </vs-button>
    </vs-button-group>

    <span class="divider" />

    <vs-button-group>
      <vs-button relief>
        <i class='bx bx-home-alt' ></i> Home
      </vs-button>
      <vs-button relief>
        <i class='bx bxs-phone-call' ></i> Contact
      </vs-button>
      <vs-button relief loading>
        <i class='bx bxs-cart-alt' ></i> Products
      </vs-button>
      <vs-button relief upload>
        <i class='bx bxs-envelope' ></i> Send
      </vs-button>
    </vs-button-group>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: 0
  })
}
</script>
<style lang="stylus" scoped>
.center
  flex-wrap wrap
  >>>.vs-button-group
    margin 20px 20px
</style>

