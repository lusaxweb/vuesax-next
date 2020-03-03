<template>
  <div class="center">
    <vs-button @click="active=!active">
      Alert
    </vs-button>
    <vs-button flat @click="active2=!active2">
      Confirm
    </vs-button>
    <vs-button border @click="active3=!active3">
      Prompt
    </vs-button>
    <vs-dialog width="550px" not-center v-model="active">
      <template #header>
        <h4 class="not-margin">
          Welcome to <b>Vuesax</b>
        </h4>
      </template>


      <div class="con-content">
        <p>
          Vuesax is a relatively new framework with a refreshing design and in the latest trends, vuesax based on vuejs which means that we go hand in hand with one of the most popular javascript frameworks in the world and with a huge community with which you will have all the help and documentation to create and make your project
        </p>
      </div>

      <template #footer>
        <div class="con-footer">
          <vs-button @click="active=false" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog width="550px" not-center v-model="active2">
      <template #header>
        <h4 class="not-margin">
          Welcome to <b>Vuesax</b>
        </h4>
      </template>


      <div class="con-content">
        <p>
          Vuesax is a relatively new framework with a refreshing design and in the latest trends, vuesax based on vuejs which means that we go hand in hand with one of the most popular javascript frameworks in the world and with a huge community with which you will have all the help and documentation to create and make your project
        </p>
      </div>

      <template #footer>
        <div class="con-footer">
          <vs-button @click="active2=false" transparent>
            Ok
          </vs-button>
          <vs-button @click="active2=false" dark transparent>
            Cancel
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog width="300px" not-center v-model="active3">
      <template #header>
        <h4 class="not-margin">
          Welcome what is your <b>Name</b>
        </h4>
      </template>


      <div class="con-content">
        <vs-input v-model="input1" placeholder="Name"></vs-input>
      </div>

      <template #footer>
        <div class="con-footer">
          <vs-button @click="active3=false" transparent>
            Ok
          </vs-button>
          <vs-button @click="active3=false" dark transparent>
            Cancel
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: false,
    active2: false,
    active3: false,
    input1: '',
  })
}
</script>
<style lang="stylus">
getColor(vsColor, alpha = 1)
    unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.con-footer
  display flex
  align-items center
  justify-content flex-end
  .vs-button
    margin 0px
    .vs-button__content
      padding 10px 30px
    ~ .vs-button
      margin-left 10px
.not-margin
  margin 0px
  font-weight normal
  padding 10px
  padding-bottom 0px
.con-content
  width 100%
  p
    font-size .8rem
    padding 0px 10px
  .vs-checkbox-label
    font-size .8rem
  .vs-input-parent
    width 100%
  .vs-input-content
    margin 10px 0px
    width calc(100%)
    .vs-input
      width 100%
.footer-dialog
  display flex
  align-items center
  justify-content center
  flex-direction column
  width calc(100%)
  .new
    margin 0px
    margin-top 20px
    padding: 0px
    font-size .7rem
    a
      color getColor('primary') !important
      margin-left 6px
      &:hover
        text-decoration underline
  .vs-button
    margin 0px
</style>
