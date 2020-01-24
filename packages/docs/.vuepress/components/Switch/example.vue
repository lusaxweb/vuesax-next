
<template>
  <div class="center con-switch">
    <ul>
      <li>
        <p>
          Email messages
        </p>
        <vs-switch v-model="active1" />
      </li>
      <li>
        <p>
          Change theme
        </p>
        <vs-switch v-model="active2">
          <template #circle>
              <i v-if="!active2" class='bx bxs-moon' ></i>
              <i v-else class='bx bxs-sun' ></i>
          </template>
        </vs-switch>
      </li>
      <li>
        <p>
          Desktop notifications
        </p>
        <vs-switch v-model="active3">
          <i class='bx bxs-message' ></i>
        </vs-switch>
      </li>
      <li>
        <p>
          Type of user
        </p>
        <vs-switch v-model="active4">
          <template #on>
            Admin
          </template>
          <template #off>
            Default
          </template>
        </vs-switch>
      </li>
      <li>
        <p>
          Allow to send test data to improve this product
        </p>
        <vs-switch success v-model="active5">
          <template #off>
              <i class='bx bx-x' ></i>
          </template>
          <template #on>
              <i class='bx bx-check' ></i>
          </template>
        </vs-switch>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data:() => ({
    active1: true,
    active2: false,
    active3: false,
    active4: true,
    active5: true,
  }),
}
</script>
<style lang="stylus" scoped>
.con-switch
  display flex
  align-items center
  justify-content center
  ul
    width 100%
    padding 0px
    li
      width 100%
      display flex
      align-items center
      justify-content space-between
      padding 0px
      p
        margin 0px
        font-size .85rem
  >>>.vs-switch
    margin 5px
</style>
