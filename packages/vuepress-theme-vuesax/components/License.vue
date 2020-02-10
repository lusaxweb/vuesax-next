<template>
  <div class="con-license">
    <header>
      <div class="con-img-header">
        <img class="not-darken" src="/licence-white-vuesax.svg" alt="">
        <img class="has-darken" src="/licence-dark-vuesax.svg" alt="">
      </div>

      <div class="con-text-header">
        <h1 v-html="data.header.title" />

        <p v-html="data.header.text" />

        <footer>
          <button @click="handleRoute('#plans')" class="see">
            {{ data.header.button }}
          </button>
          <button @click="handleRoute('#faq')" class="faq">
            FAQ
          </button>
        </footer>
      </div>
    </header>

    <div id="plans" class="con-plans">
      <h2 v-html="data.cards.title" />

      <div class="con-cards">
        <div
          v-for="(card, index) in data.cards.items"
          :key="index"
          class="card">
          <h3 v-html="card.title" />
          <p v-html="card.text" />
          <button @click="card.contact ? openContact() : $router.push('/docs/guide/gettingStarted')">
            {{ card.button }}
          </button>
        </div>
      </div>
    </div>

    <div class="table-plans">
      <h2>
        {{ data.table.title }}
      </h2>

      <div class="con-tabla">
        <table>
          <thead>
            <tr>
              <th>
                {{ data.table.thead[0] }}
              </th>
              <th>
                {{ data.table.thead[1] }}
              </th>
              <th>
                {{ data.table.thead[2] }}
              </th>
              <th>
                {{ data.table.thead[3] }}
              </th>
            </tr>
          </thead>
          <tbody>
              <tr
                v-for="(tr, index) in data.table.tbody"
                :key="index"
              >
                <td>
                  {{ tr[0] }}
                </td>
                <td :class="{'none': !tr[1] && typeof tr[1] !== 'string'}">
                  <i v-if="tr[1] && typeof tr[1] !== 'string'" class='bx bx-check'></i>
                  <i v-else-if="!tr[1] && typeof tr[1] !== 'string'" class='bx bx-x' ></i>
                  <span v-else>
                    {{ tr[1] }}
                  </span>
                </td>
                <td :class="{'none': !tr[2] && typeof tr[2] !== 'string'}">
                  <i v-if="tr[2] && typeof tr[2] !== 'string'" class='bx bx-check'></i>
                  <i v-else-if="!tr[2] && typeof tr[2] !== 'string'" class='bx bx-x' ></i>
                  <span v-else>
                    {{ tr[2] }}
                  </span>
                </td>
                <td :class="{'none': !tr[3] && typeof tr[3] !== 'string'}">
                  <i v-if="tr[3] && typeof tr[3] !== 'string'" class='bx bx-check'></i>
                  <i v-else-if="!tr[3] && typeof tr[3] !== 'string'" class='bx bx-x' ></i>
                  <span @click="openContact" v-else>
                    {{ tr[3] }}
                  </span>
                </td>
              </tr>
          </tbody>
          <tr></tr>
        </table>
      </div>
    </div>

    <div id="faq" class="con-faq">
      <h2>
        Got Questions? Check the FAQs
      </h2>
      <ul>
        <li
          v-for="(li, index) in data.faqs"
          :key="index"
          >
          <h4>
            {{ li.title }}
          </h4>
          <p v-html="li.text" />
        </li>
      </ul>
    </div>

    <Footer />
  </div>
</template>
<script>
import Footer from './Footer.vue'
export default {
  components: {
    Footer
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
  },
  methods: {
    handleRoute(hash) {
      this.$router.replace('').catch(err => {})
      this.$nextTick(() => {
        this.$router.replace(hash).catch(err => {})
      })
    },
    openContact() {
      window.open('mailto:luisdanielrovira8@gmail.com', '_self')
    }
  }
}
</script>
<style lang="stylus">
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")

.darken
  .con-faq
    ul
      li
        &:hover
          box-shadow 0px 5px 30px 0px rgba(0,0,0,.5)

.con-faq
  position relative
  display flex
  align-items center
  justify-content center
  min-height 100vh
  flex-direction column
  padding-top 70px
  h2
    text-align center
    width 100%
    border 0px
  ul
    width 100%
    display flex
    align-items flex-start
    justify-content flex-start
    max-width 1000px
    flex-wrap wrap
    padding 0px
    li
      width calc(50% - 40px)
      margin 10px 20px
      list-style none
      overflow hidden
      box-shadow 0px 0px 0px 0px rgba(0,0,0,.07)
      transition all .25s ease
      border-radius 20px
      padding 20px
      padding-top 10px
      position relative
      &:after
        content ''
      &:hover
        background getVar(theme-layout)
        box-shadow 0px 5px 30px 0px rgba(0,0,0,.1)
        transform translate(0,-5px)
      h4
        font-size 1rem
        margin-bottom 0px
      p
        font-size .8rem
        opacity .7
        a
          text-decoration underline !important
          font-weight bold

.table-plans
  display flex
  align-items center
  justify-content center
  min-height auto
  flex-direction column
  margin 0px 20px
  margin-top 100px
  margin-bottom 100px
  h2
    border 0px
    text-align left
    width 100%
    max-width 1000px
    padding 0px 30px
  .con-tabla
    width 100%
    max-width 1000px
    background getVar(theme-bg)
    padding 20px
    border-radius 30px
  table
    width 100%
    position relative
    display table
    border 0px
    tbody
      tr
        &:hover
          background getVar(theme-bg2)
    tr
      border 0px
      transition all .25s ease
      border-radius 20px
      td
        border 0px
        text-align center
        padding 12px 10px
        font-size .8rem
        &:last-child
          span
            color getColor('primary')
            text-decoration underline
            cursor pointer
            &:hover
              opacity .6
        &:first-child
          font-size .9rem
          text-align left
        i
          font-size 1.3rem
          color getColor('primary')
        &.none
          i
            color getVar(theme-color)
            opacity .2
      th
        border 0px
        padding 30px 10px
        padding-top 10px
        &:first-child
          text-align left


.con-license
  width 100%
  ~ >>>.config
    left 0px
  header
    display flex
    align-items center
    justify-content center
    min-height 50vh
    padding-top 100px
    .con-img-header
      width 50%
      padding 50px
      max-width 600px
      img
        width 100%
    .con-text-header
      max-width 500px
      width 50%
      padding 20px
      footer
        margin-top 30px
        display block
        position relative
        button
          padding 10px 20px
          border 0px
          min-width 110px
          border-radius 15px
          margin 0px 3px
          &.see
            background getColor('primary')
            color #fff
            transition all .25s ease
            box-shadow 0px 0px 0px 0px getColor('primary',.3)
            transform translate(0px)
            &:hover
              transform translate(0,-4px)
              box-shadow 0px 8px 20px 0px getColor('primary',.3)
          &.faq
            background getColor('primary', .1)
            color getColor('primary')
            font-weight bold
            box-sizing border-box
            transition all .25s ease
            box-shadow 0px 0px 0px 0px getColor('primary',.2)
            transform translate(0px)
            &:hover
              transform translate(0,-4px)
              box-shadow 0px 8px 15px 0px getColor('primary',.2)
      h1
        font-weight normal
      p
        opacity .6

.darken
  .con-plans
    .card
      &:hover
        box-shadow 0px 15px 40px 0px rgba(0,0,0,.7) !important

.con-plans
  display flex
  align-items center
  justify-content center
  flex-direction column
  margin 40px 0px
  margin-top 0px
  padding-top 60px
  h2
    border 0px
    padding 20px
    font-weight normal
  .con-cards
    display flex
    align-items flex-start
    justify-content center
    .card
      width 30%
      background getVar(theme-bg)
      max-width 350px
      margin 20px
      border-radius 25px
      cursor default
      min-height 350px
      position relative
      transition all .25s ease
      box-shadow 0px 0px 0px 0px rgba(0,0,0,.1)
      &:hover
        background getVar(theme-layout)
        box-shadow 0px 15px 40px 0px rgba(0,0,0,.08)
        transform translate(0, -8px)
        button
          color #fff
          background getColor('primary')
          box-shadow 0px 10px 30px 0px getColor('primary', .3)
      a
        text-decoration underline
        font-weight bold
      h3
        padding 20px
        padding-top 10px
        text-align center
        font-size 1.2rem
        border-bottom 1px solid getVar(theme-bg2)
      p
        padding 25px
        font-size .8rem
        padding-top 5px
        margin-bottom 50px
        text-align center
      button
        width 100%
        border 0px
        padding 12px
        transition all .25s ease
        background getVar(theme-bg2)
        color getVar(theme-color)
        position absolute
        bottom 0px
        font-weight bold
        left 50%
        transform translate(-50%)
        border-radius 0px 0px 25px 25px
        &:hover
          color #fff
          background getColor('primary')

@media (max-width: 800px)
  .con-license
    header
      .con-text-header
        h1
          font-size 1.6rem
        footer
          margin-top 15px
      .con-img-header
        padding 20px
  .con-plans
    flex-wrap: wrap
    .con-cards
      width 100%
      flex-wrap wrap
      .card
        width calc(50% - 40px)
        margin 20px
  .table-plans
    table
      tr
        td
          font-size .75rem !important
          padding-left 0px
          padding-right 0px
        th
          padding-left 0px
          padding-right 0px
          font-size .75rem
@media (max-width: 700px)
  .con-plans
    .con-cards
      .card
        width 100%
        max-width none
        min-height auto
@media (max-width: 600px)
  .con-license
    header
      .con-img-header
        position absolute
        z-index 100
        width 100%
        opacity .35
      .con-text-header
        z-index 200
  .con-faq
    ul
      li
        width 100%

@media (max-width: 560px)
  .table-plans
    margin 100px 8px
    .con-tabla
      padding 10px
    table
      tr
        td
          font-size .75rem !important
          padding-left 0px
          padding-right 0px
        th
          padding-left 0px
          padding-right 0px
          font-size .75rem
</style>
