<template>
  <div class="center">
    <vs-button>
      Home
      <template #animate >
        <i class='bx bx-home-alt' ></i>
      </template>
    </vs-button>
    <vs-button flat color="success" animation-type="vertical" >
      Message
      <template #animate >
        <i class='bx bx-mail-send' ></i> Send
      </template>
    </vs-button>
    <vs-button gradient style="min-width: 60px" color="warn" animation-type="scale" >
      <i class='bx bxs-shopping-bag' ></i>
      <template #animate >
        Store
      </template>
    </vs-button>
    <vs-button icon relief color="danger" animation-type="rotate" >
      <i class='bx bxs-like' ></i>
      <template #animate >
        <i class='bx bxs-trophy' ></i>
      </template>
    </vs-button>
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
  display flex
  align-items center
  justify-content center
  padding 20px
  max-width 400px
  margin auto
</style>

