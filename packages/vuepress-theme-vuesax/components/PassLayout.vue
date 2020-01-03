<template>
  <div class="pass">
    <header>
      <h1>
        Vuesax Components Pass
      </h1>
      <p>
        Componentes exclusivos y únicos, cada semana se van a crear componentes nuevos y geniales que solo podrás obtener teniendo el <b>Vuesax Pass</b>
        <br>
        también tendras muchos privilegios y mejoras como imágenes exclusivas descuentos en la tienda y un distintivo en nuestro discord canal aparte de muchas cosas mas
      </p>
    </header>

    <div class="title-pass">
      <h2>
        Season 1
      </h2>

      <footer>
        <button>
          <span>
            <i class='bx bxs-lock'></i>
          </span>
          Unlock Vuesax Pass
        </button>

        <div class="reloj">
          <i class='bx bx-stopwatch'></i>
          <span>
            Season end in
            <b>
              31/01/2020
            </b>
          </span>
        </div>
      </footer>
    </div>

    <div class="content-pass vuesax-pass-components">
      <div class="has-pass row">
        <h2>
          Vuesax Pass
        </h2>
      </div>
      <div class="no-pass row">
        <h2>
          Free
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    getUserPass() {
      if(this.$user.user) {
        return Object.keys(this.$user.user.pass) || []
      } else {
        return []
      }
    }
  }
}
</script>
<style lang="stylus">
getVar(var)
  unquote("var(--vs-"+var+")")
.pass
  padding-top 60px
  ~ .config
    left 0px
  .title-pass
    text-align center
    padding 40px !important
    background getVar(theme-bg2)
    margin-bottom 30px
    display flex
    align-items center
    justify-content center
    flex-direction column
    footer
      display flex
      align-items center
      justify-content space-between
      max-width 350px
      width 100%
      button
        padding 10px 20px
        border 0px
        background getVar(theme-color)
        color getVar(theme-layout)
        border-radius 15px
        padding-left 0px
        transition all .25s ease
        &:hover
          box-shadow 0px 5px 15px -5px getVar(theme-color)
          transform translate(0,-4px)
        span
          background rgba(0,0,0,.2)
          padding 10px
          border-radius 15px 0px 0px 15px
          margin-right 10px
          padding-left 12px
      .reloj
        display flex
        align-items center
        justify-content center
        font-size .8rem
        span
          display flex
          align-items flex-start
          justify-content center
          flex-direction column
          text-align left
        i
          font-size 1.5rem
          margin-right 10px
    h2
      border 0px
      margin-top 0px
  header
    background getVar(theme-bg)
    padding 40px 100px
    h1
      font-size 1.7rem
    p
      font-size .85rem
  .content-pass
    display flex
    align-items flex-start
    justify-content space-between
    padding 0px 20px
    max-width 1200px
    margin auto
    .row
      width calc(50% - 20px)
      h2
        text-align center
        border-bottom 2px solid getVar(theme-bg2)
        font-size 1.2rem
        font-weight 600
        padding 20px
        display flex
        align-items center
        justify-content center
        .badge
          width 22px
          height 22px
          border-radius 8px
          background getVar(theme-color)
          color getVar(theme-layout)
          font-size .8rem
          display flex
          align-items center
          justify-content center
          margin-left 5px
          transform translate(0,-8px)

</style>
