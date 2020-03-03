<template>
  <div class="code">
    <div
      :class="{'copied': check}"
      class="noti-code"
    >
      <i class='bx bx-check' ></i> Code copied
    </div>
    <header class="header-codex">
      <ul>
        <li title="Codepen" v-if="codepen" @click="openCodepen" class="con-link">
           <i class='bx bxl-codepen'></i>
        </li>

        <li title="Codesandbox" v-if="codesandbox" @click="openCodesandbox">
          <svg t="1514359261842" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" p-id="9197" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="15px"><path d="M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z" p-id="9198"></path></svg>
        </li>

        <li title="Copy code" :class="{'copied': check}" @click="copy">
          <i v-if="!check" class='bx bx-copy' ></i>
          <i v-else class='bx bx-check' ></i>
        </li>

        <!-- <li class="con-api-link">
          <a href="#vs-api">
            <!API
            <i class='bx bx-list-ul' ></i>
          </a>
        </li> -->

        <li
          :title="active ? 'hide code' : 'View code'"
          :class="{'active': active}"
          class="not-a con-link" @click="toggleCode">

          <i v-if="!active" class='bx bx-code-alt' ></i>

          <i v-else class='bx bx-hide' ></i>
        </li>
      </ul>
    </header>
    <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    >
      <div ref="codex" v-show="active" class="con-code">
        <ul ref="ul" class="ul-codes">
          <li
            v-if="$slots.template"
            :class="{'active': activeSlot == 0}" @click="activeSlot = 0">Template</li>
          <li
            v-if="$slots.script"
            :class="{'active': activeSlot == 1}" @click="activeSlot = 1">Script</li>
          <li
            v-if="$slots.style"
            :class="{'active': activeSlot == 2}"
            @click="activeSlot = 2">
            Style
          </li>
          <li v-if="Object.keys(this.$slots).length > 1" :class="{'active': activeSlot == 3}" @click="activeSlot = 3">All</li>
        </ul>
        <div class="con-codes">


        <transition
          v-on:before-enter="beforeEntercodes"
          v-on:enter="entercodes"
          v-on:leave="leavecodes"
          >
          <div ref="slot0" key="0" v-if="activeSlot == 0" class="slot-template slots">
            <slot name="template" />

            <footer
              @click="toggleCode"
              :title="active ? 'Hide code' : 'View code'"
              class="footer-code">
              <i class='bx bx-hide' ></i>
            </footer>
          </div>
        </transition >
        <transition
          v-on:before-enter="beforeEntercodes"
          v-on:enter="entercodes"
          v-on:leave="leavecodes"
          >
          <div ref="slot1" key="1" v-if="activeSlot == 1" class="slot-script slots">
            <slot name="script"/>

            <footer
              @click="toggleCode"
              :title="active ? 'Hide code' : 'View code'"
              class="footer-code">
              <i class='bx bx-hide' ></i>
            </footer>
          </div>
        </transition >

        <transition
          v-on:before-enter="beforeEntercodes"
          v-on:enter="entercodes"
          v-on:leave="leavecodes"
          >
          <div ref="slot2" key="2" v-if="activeSlot == 2" class="slot-style slots">
            <slot name="style"/>

            <footer
              @click="toggleCode"
              :title="active ? 'Hide code' : 'View code'"
              class="footer-code">
              <i class='bx bx-hide' ></i>
            </footer>
          </div>
        </transition >

        <transition
          v-on:before-enter="beforeEntercodes"
          v-on:enter="entercodes"
          v-on:leave="leavecodes"
          >
          <div ref="slot3" key="3" v-if="activeSlot == 3" class="slot-all slots">
            <slot name="template"/>
            <slot name="script"/>
            <slot name="style"/>

            <footer
              @click="toggleCode"
              :title="active ? 'Hide code' : 'View code'"
              class="footer-code">
              <i class='bx bx-hide' ></i>
            </footer>
          </div>
        </transition >
        </div>
      </div>
    </transition >
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  props: ['codepen', 'codesandbox'],
  data:() => ({
    active: false,
    check: false,
    activeSlot: 0
  }),
  watch:{
    '$vsTheme.openCode': function (val) {
      this.active = val
      localStorage.openCode = val
    },
    activeSlot() {
      this.$nextTick(() => {
        let ul = this.$refs.ul.scrollHeight
        let h = this.$refs['slot'+this.activeSlot].scrollHeight
        this.$refs.codex.style.height = (h + ul) - 1 + 'px'
      })
    }
  },
  created() {
    Vue.observable(this.$site.themeConfig)
  },
  mounted() {
    this.$vsTheme.openCode = (localStorage.openCode == 'true')
  },
  methods:{
    toggleCode() {
      this.active = !this.active
      // this.$router.replace(!this.active ? `${this.$route.hash.replace('-view', '')}-hide` : `${this.$route.hash.replace('-hide', '')}-view`)
    },
    openCodepen(url) {
      window.open(this.codepen)
    },
    openCodesandbox(url) {
      document.body.style.overflow = 'hidden'
      this.$codesandbox.url = this.codesandbox
    },
    clipboard(text) {

      var aux = document.createElement("textarea");
      aux.value = text
      aux.className = "vs-clipboard"
      document.body.appendChild(aux);
      aux.focus();
      aux.select();
      document.execCommand("copy");
      document.body.removeChild(aux);
    },
    copy(){
      let slot = 'template'
      if(this.activeSlot == 1) {
        slot = 'script'
      } else if (this.activeSlot == 2) {
        slot = 'style'
      }

      let text = this.$slots[slot][0].elm.innerText
      if (this.activeSlot == 3) {
        text = `
${this.$slots['template'] ? this.$slots['template'][0].elm.innerText.trim() : ''}
${this.$slots['script'] ? this.$slots['script'][0].elm.innerText.trim() : ''}
${this.$slots['style'] ? this.$slots['style'][0].elm.innerText.trim() : ''}
        `
      }

      this.clipboard(text)

      this.check = true
      setTimeout(() => {
        this.check = false
      }, 1000);

      this.$router.replace(`${this.$route.hash}-c`)
    },
    // animation
    beforeEnter(el) {
      el.style.height = 0
    },
    enter(el, done){
      let h = el.scrollHeight
      el.style.height = h - 1 + 'px'
      done()
    },
    leave: function (el, done) {
      el.style.height = '0px'
    },
    beforeEntercodes(el) {
      el.style.height = 0
      el.style.opacity = 0
      el.style.position = 'absolute'
    },
    entercodes(el, done){
      let h = el.scrollHeight
      el.style.height = h - 1 + 'px'
      el.style.opacity = 1
      el.style.position = 'relative'
      done()
    },
    leavecodes: function (el, done) {
      el.style.height = '0px'
      el.style.opacity = 0
      el.style.position = 'absolute'
    },
  }
}
</script>
<style lang="stylus">
getVar(var)
    unquote("var(--vs-"+var+")")

.noti-code
  position fixed
  bottom 0px
  width 100%
  max-width 500px
  background getVar(theme-color)
  left 50%
  transform translate(-50%, 100%)
  padding 10px 20px
  text-align center
  color getVar(theme-layout)
  border-radius 20px 20px 0px 0px
  opacity 0
  visibility hidden
  transition all .25s ease
  z-index 1000
  i
    position absolute
    left 0px
    top 0px
    font-size 20px
    width 45px
    height 45px
    background rgba(0,0,0,.1)
    border-radius 20px 0px 0px 0px
    display flex
    align-items center
    justify-content center
  &.copied
    opacity 1
    visibility visible
    transform translate(-50%, 0%)

.footer-code
  display flex
  align-items center
  justify-content center
  padding 6px
  color #fff
  cursor pointer
  transition all .25s ease
  &:hover
    opacity .4

.slot-all
  >div
    &:nth-last-child(2)
      pre
        margin-bottom 0px
    &:last-child
      div[class*="language-"]
        border-radius 0px 0px 20px 20px
        pre
          margin-bottom 0px !important

.con-codes
  position relative
  width 100%
  // overflow hidden
.slots
  transition all .25s ease
  width 100%
  overflow hidden
  top 0px
  left 0px
  div
    width 100%
    // overflow hidden
    pre
      width 100%
      // overflow hidden
  >div
    &:last-child
      div[class*="language-"]
        border-radius 0px 0px 20px 20px

.ul-codes
  position relative
  display flex
  align-items center
  justify-content center
  padding 0px 20px
  margin 0px
  li
    list-style none
    padding 10px
    font-size .75rem
    opacity .4
    transition all .25s ease
    cursor pointer
    position relative
    color #fff
    user-select none
    &:after
      content ''
      position absolute
      bottom 0px
      left 50%
      transform translate(-50%)
      height 2px
      width 0%
      background #fff
      transition all .25s ease
    &:hover
      opacity 1
    &.active
      opacity 1
      &:after
        width 100%

.code
  background getVar(theme-layout)
  z-index 300
  position relative
  padding-bottom 10px
  transition all .25s ease
.input-transparent
  position absolute
  z-index 0
  opacity 0
  bottom 0px
  right 0px
.con-code
  display: block;
  transition: all .25s ease;
  background getVar(theme-code2)
  border-radius 20px
  width calc(100% - 20px)
  margin 0px 10px

  div[class*="language-"]
    border-radius 0px
  pre
    margin-top 0px !important
.header-codex
  width 100%
  display flex
  align-items center
  justify-content center

  ul
    display flex
    align-items center
    margin 0px
    padding 0px
    justify-content center
    width 100%
    padding 0px 4px
    align-items: stretch
    padding-top 10px

    li
      list-style none
      color getVar(theme-color)
      opacity .6
      padding 3px 10px
      transition all .25s ease
      display flex
      align-items center
      cursor pointer
      border-radius 12px
      background transparent
      outline none !important
      &.copied
        transform scale(1.3)
        opacity 1 !important
        i
          color rgb(70, 201, 58) !important
      &:nth-last-child(3)
        position relative
        padding-right 15px
        margin-right 5px
        &:after
          content ''
          position absolute
          right 0px
          height 60%
          top 20%
          width 1px
          background alpha($borderColor, 1)
          display block
      &.active
        color $accentColor !important
        opacity 1
        border-radius 12px 12px 0px 0px
        background getVar(theme-code2)
        i
          color #fff !important
      // &.not-a
      svg, i
        max-width 18px
        fill getVar(theme-color) !important
      &:hover
        opacity 1
      &:not(.not-a)
        svg
          transition all .25s ease
          fill alpha($textColor, .6)
          pointer-events none
@media (max-width: 500px)
  .code
    .con-code
      width: 100%
      margin 0px
</style>
