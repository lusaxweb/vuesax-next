<template>
  <div class="center">
    <vs-button success flat @click="active=!active">
      Open Dialog Loading
    </vs-button>
    <vs-dialog loading v-model="active">
      <template #header>
        <h4 class="not-margin">
          Welcome to <b>Vuesax</b>
        </h4>
      </template>


      <div class="con-form">
        <vs-input v-model="input1" placeholder="Email">
          <template #icon>
            @
          </template>
        </vs-input>
        <vs-input type="password" v-model="input2" placeholder="Password">
          <template #icon>
            <i class='bx bxs-lock'></i>
          </template>
        </vs-input>
        <div class="flex">
          <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
          <a href="#">Forgot Password?</a>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block>
            Sign In
          </vs-button>

          <div class="new">
            New Here? <a href="#">Create New Account</a>
          </div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: false,
    input1: '',
    input2: '',
    checkbox1: false
  })
}
</script>
<style lang="stylus">
getColor(vsColor, alpha = 1)
    unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.not-margin
  margin 0px
  font-weight normal
  padding 10px
.con-form
  width 100%
  .flex
    display flex
    align-items center
    justify-content space-between
    a
      font-size .8rem
      opacity .7
      &:hover
        opacity 1
  .vs-checkbox-label
    font-size .8rem
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
