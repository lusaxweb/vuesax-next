<template>
  <div class="con-twits">
    <header>
      <h2>
        These are some of the <b>libraries</b>, <b>languages ​</b> and <b>technologies</b> <br>that we use to create this beautiful <b>framework</b>
      </h2>
    </header>

    <ul
      @mousedown="mousedownx"
      @mousemove="mousemovex"
      @mouseleave="mouseleaveUl"
      @mouseup="mouseupx"
      class="con-projects-ul-uses"
      >
      <!-- @mousewheel="scrollH" -->
      <li
        v-for="(item,index) in twits"
        :key="index"
        >
        <div class="con-img-t">
          <img :class="{'not-darken': item.img2}" :src="item.img" alt="">
          <img v-if="item.img2" class="has-darken" :src="item.img2" alt="">
          <img v-if="!item.notShadow" class="filter" :class="{'not-darken': item.img2}" :src="item.img" alt="">
          <img v-if="item.img2" class="filter" :class="{'has-darken': item.img2}" :src="item.img2" alt="">
        </div>
        <p v-html="item.name" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => ({
    leftx: 0,
    notPulse: true,
    translatex: 0,
    scrolling: false,
    drag: false,
    activeView: false,
    active: 0,
    delta: 0,
    mousex: 0,
    change: 0,
    moving: false,
    notScrolling: false,
    twits: [
      {
        name: 'Vuejs',
        link: 'https://vuejs.org/',
        img: '/use/vuejs-vuesax-1.png'
      },
      {
        name: 'Javascript',
        link: null,
        img: '/use/js-javaScript-vuesax.png'
      },
      {
        name: 'Typescript',
        link: 'https://www.typescriptlang.org/',
        img: '/use/typescript-vuesax.png'
      },
      {
        name: 'Sass',
        link: 'https://sass-lang.com/',
        img: '/use/sass-vuesax-4.png'
      },
      {
        name: 'Vuepress',
        link: 'https://vuepress.vuejs.org/',
        img: '/use/vuepress-vuesax-5.png'
      },
      {
        name: 'Babel',
        link: 'https://babeljs.io/',
        img: '/use/babel-vuesax-6.png'
      },
      {
        name: 'Jest',
        link: 'https://jestjs.io/',
        img: '/use/jest-vuesax-8-w.svg',
        img2: '/use/jest-vuesax-8.svg',
        notShadow: true
      },
      {
        name: 'Boxicons',
        link: 'https://boxicons.com/',
        img: '/use/boxicons-vuesax-10.png',
        img2: '/use/boxicons-vuesax-9.png'
      },
      {
        name: 'Adobe XD',
        link: 'https://www.adobe.com/es/products/xd.html',
        img: '/use/adobe-xd-1.svg'
      },
      {
        name: 'Webpack',
        link: 'https://webpack.js.org/',
        img: '/use/webpack-vuesax-13.png',
        img2: '/use/webpack-vuesax-12.png'
      },
      {
        name: 'Illustrator',
        link: 'https://www.adobe.com/products/illustrator.html',
        img: '/use/illustrator-vuesax-11.png'
      },
    ]
  }),
  watch:{
    translatex() {
      if(this.translatex > 100) {
        this.notScrolling = true
      } else {
        this.notScrolling = false

      }
    }
  },
  mounted() {
    this.smooth()
    document.addEventListener('keydown', this.keydownx)
  },
  methods: {
    smooth() {
      const element = document.querySelector('.con-projects-ul-uses'),
      speed = 0.08

      var raf

      var offset = 0

      let _this = this
      function smoothScroll() {
        let leftx = _this.translatex
        offset += (leftx - offset) * speed

        var scroll = "translateX(-" + offset + "px) translateZ(0)"
        element.style.transform = scroll

        raf = requestAnimationFrame(smoothScroll)
      }
      smoothScroll()
    },
    mouseleaveUl() {
      this.mousex = 0
      this.notPulse = true
      setTimeout(() => {
        this.moving = false
      }, 50)
    },
    mousemovex(e) {
      if(this.notPulse) {
        return
      }
      // }, 10)
      const element = e.target.closest('.con-projects-ul-uses');
      const parent = element.parentNode
      let move
      if(e.type=='touchmove'){
        move = this.mousex - (e.targetTouches[0].clientX - 200)
      } else {
        move = this.mousex - (e.clientX - 200)
      }
      if(move > 40 || move < -40) {
        this.moving = true
      }
      if(move > 50) {
        this.translatex -= -80
        if(this.translatex > element.clientWidth - parent.clientWidth) {
          this.translatex = element.clientWidth - parent.clientWidth
        }
        // element.style.transform = `translate(-${this.translatex}px)`
        if(e.type=='touchmove'){
          this.mousex = (e.targetTouches[0].clientX - 200)
        } else {
          this.mousex = (e.clientX - 200)
        }
      } else if (move < -50) {
        this.translatex -= 80
        if(this.translatex < 0) {
          this.translatex = 0
        }
        // element.style.transform = `translate(-${this.translatex}px)`
        if(e.type=='touchmove'){
          this.mousex = (e.targetTouches[0].clientX - 200)
        } else {
          this.mousex = (e.clientX - 200)
        }
      }
    },
    mouseupx(e) {
      e.preventDefault()
      const element = e.target.closest('.con-projects-ul-uses');
      const parent = element.parentNode
      // if(e.type=='touchend'){
      //   // this.translatex -= -this.mousex + (e.targetTouches[0].clientX - 200)
      // } else {
      //   // this.translatex -= -this.mousex + (e.clientX - 200)
      // }

      if(this.translatex < 0) {
        this.translatex = 0
      }

      if(this.translatex > element.clientWidth - parent.clientWidth) {
        this.translatex = element.clientWidth - parent.clientWidth
      }



      // element.style.transform = `translate(-${this.translatex}px)`
      this.mousex = 0
      this.notPulse = true
      setTimeout(() => {
        this.moving = false
      }, 1);

    },
    mousedownx(e) {
      e.preventDefault()
      setTimeout(() => {
        this.notPulse = false
      }, 20)
      if(e.type=='touchstart'){
        this.mousex = e.targetTouches[0].clientX - 200
      } else {
        this.mousex = e.clientX - 200
      }
    },
    keydownx(evt) {
      let keyx = evt.key
      const element = document.querySelector('.con-projects-ul-uses');
      const parent = document.querySelector('.con-projects')

      if(keyx == 'ArrowRight') {
        this.translatex -= -300
        if(this.translatex > element.clientWidth - parent.clientWidth) {
          this.translatex = element.clientWidth - parent.clientWidth
        }
      } else if (keyx == 'ArrowLeft') {
        this.translatex -= 300
        if(this.translatex < 0) {
          this.translatex = 0
        }
      }
    },
    scrollH(e) {
      this.scrolling = true
      let _this = this
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      const element = e.target.closest('.con-projects-ul-uses');
      const parent = element.parentNode
      // console.dir(element)
      if (delta == 1 && this.translatex > 0) {

        this.translatex -= 250
        if(this.translatex < 0) {
          this.translatex = 0
        }

      } else if (delta == -1 && this.translatex < (element.clientWidth - parent.clientWidth)) {
        this.translatex += 250
        if(this.translatex > element.clientWidth - parent.clientWidth) {
          this.translatex = element.clientWidth - parent.clientWidth
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")

.darken
  .con-twits
    ul
      li
        .con-img-t
          background getVar(theme-bg)
        .filter
          opacity .2

.con-twits
  display flex
  align-items flex-start
  justify-content center
  flex-direction column
  overflow hidden
  position relative
  margin-top 150px
  margin-bottom 70px
  header
    width 100%
    text-align center
    position absolute
    top 0px
    h2
      font-size 1.2rem
      font-weight normal
      border 0px
      padding 0px
      margin 0px
      padding 50px
      span
        opacity .6
  ul
    display flex
    align-items center
    justify-content flex-start
    padding-bottom 100px
    padding-top 130px
    li
      width auto
      list-style-type none
      display flex
      align-items center
      justify-content center
      flex-direction column
      position relative
      border-radius 40px
      padding 0px
      padding-top 0px
      transition all .25s ease
      margin 25px
      p
        font-weight bold
      .con-img-t
        width 140px
        height 140px
        position relative
        transition all .3s ease
        box-shadow 0px 10px 30px -5px rgba(0,0,0,.05)
        border-radius 25px
        box-sizing border-box
        background getVar(theme-layout)
        display flex
        align-items center
        justify-content center
      img
        width auto
        z-index 100
        position relative
        // max-width 80px
        max-height 70px
        max-width 90%
        &.filter
          z-index 50
          position absolute
          opacity .35
          filter blur(12px)

@media (max-width: 600px)
  .con-twits
    margin-top 50px
    margin-bottom 0px
    ul
      padding 50px 20px
      padding-top 100px
    header
      h2
        padding 10px
    .con-projects-ul-uses
      overflow auto
      width 100%
      li
        position relative
      &::-webkit-scrollbar
        height 0px
</style>
