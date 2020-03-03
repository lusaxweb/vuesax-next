<template>
  <div class="con-twits">
    <header>
      <h2>
        <span>Some Words validating</span> <b>Vuesax</b> <span>are oxygen for us Thanks!</span>
      </h2>
    </header>

    <ul
      @mousedown="mousedownx"
      @mousemove="mousemovex"
      @mouseleave="mouseleaveUl"
      @mouseup="mouseupx"
      class="con-projects-ul"
      >
      <!-- @mousewheel="scrollH" -->
      <li
        v-for="(item,index) in twits"
        :key="index"
        >
        <div class="con-img-t">
          <img :src="item.img" alt="">
          <img class="filter" :src="item.img" alt="">
        </div>
        <h5>
          <a target="_blank" :href="item.link">
            {{ item.user }}
          </a>
        </h5>
        <p v-html="item.text" />
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
        name: 'Sébastien Chopin',
        user: 'Author of @nuxt_js',
        link: 'https://twitter.com/Atinux',
        text: 'I have to say, Vuesax 4 is 😍',
        img: 'https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg'
      },
      {
        name: 'Paurakh Sharma',
        user: '@PaurakhSharma',
        link: 'https://twitter.com/PaurakhSharma',
        text: 'Awesome news 🎉 Best looking Vue component library 🔥',
        img: 'https://pbs.twimg.com/profile_images/1160037349037768704/dtk4DCfv_400x400.jpg'
      },
      {
        name: 'illy',
        user: '@__illy___',
        link: 'https://twitter.com/__illy___',
        text: 'Create a serverless mobile web application with Vue (ts), <b>Vuesax</b> and Firebase',
        img: 'https://pbs.twimg.com/profile_images/1184434161873870848/9e37ffmP_400x400.jpg'
      },
      {
        name: 'lvzy',
        user: '@lvzy12',
        link: 'https://twitter.com/lvzy12',
        text: 'Vuesax 4.0 UI components are very beautiful, look forward to your continuous updates 😻😻😻',
        img: 'https://pbs.twimg.com/profile_images/1210388192207097857/Xj8nbZKE_400x400.jpg'
      },
      {
        name: 'Gusto',
        user: '@gustojs',
        link: 'https://twitter.com/gustojs',
        text: `<b>@vuesax</b> is one of more unique UI libraries for <b>@vuejs</b>. Its author <b>@luisdfly</b> would want to focus on the upcoming 4.x release, but with a responsibility to maintain 3.x version, it's not easy. You can help him a lot by taking over some of those tasks.`,
        img: 'https://pbs.twimg.com/profile_images/1169194630241341445/Mwnt1Rqv_400x400.jpg'
      },
      {
        name: 'Luis Pedraz',
        user: '@PedrazL',
        link: 'https://twitter.com/PedrazL',
        text: `Love the work you do, this looks great. Is this going to be part of <b>@vuesax</b> 4.0 or it's just a stand-alone component`,
        img: 'https://pbs.twimg.com/profile_images/1031481292507033600/7Cg3Oei5_400x400.jpg'
      },
      {
        name: 'Sergio Márquez',
        user: '@Undervane',
        link: 'https://twitter.com/Undervane',
        text: `I personally like <b>@vuesax</b> , although it's not mature yet, but nothing that could not be resolved by contributing to make it better!`,
        img: 'https://pbs.twimg.com/profile_images/1210437765906812929/_4nXz0Cw_400x400.jpg'
      },
      {
        name: 'Stattick',
        user: '@Stattick_',
        link: 'https://twitter.com/Stattick_',
        text: `I recently discovered <b>#vuesax</b>, my favorite component library for <b>#VueJS</b> and that is not complete yet.`,
        img: 'https://pbs.twimg.com/profile_images/1089337790456836096/YY7YjWzs_400x400.jpg'
      },
      {
        name: '新井 モノ',
        user: '@araimonokaiy',
        link: 'https://twitter.com/araimonokaiy',
        text: 'Create modern and modern sites with <b>Vuesax</b>!',
        img: 'https://pbs.twimg.com/profile_images/1167749700667133954/qcnRP65y_400x400.jpg'
      },
      {
        name: 'Woterix',
        user: '@woterix',
        link: 'https://twitter.com/woterix',
        text: '<b>Vuesax</b> is a library of Vuejs components that facilitates front-end development and streamlines work with great visual quality',
        img: 'https://pbs.twimg.com/profile_images/980674833800286208/SNzLa2L8_400x400.jpg'
      },
      {
        name: 'Laravel VueJs',
        user: '@LaravelVueJs',
        link: 'https://twitter.com/LaravelVueJs',
        text: '<b>@vuesax</b>: A new awesome component library based on Vue js 2.0',
        img: 'https://pbs.twimg.com/profile_images/1132817919405113345/2nQsnCip_400x400.png'
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
      const element = document.querySelector('.con-projects-ul'),
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
      const element = e.target.closest('.con-projects-ul');
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
      const element = e.target.closest('.con-projects-ul');
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
      const element = document.querySelector('.con-projects-ul');
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
      const element = e.target.closest('.con-projects-ul');
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
      width 320px
      list-style-type none
      display flex
      align-items center
      justify-content center
      flex-direction column
      position relative
      box-shadow 0px 10px 30px -5px rgba(0,0,0,.05)
      border-radius 40px
      padding 20px
      padding-top 0px
      transition all .25s ease
      margin 20px
      &:hover
        background getColor('primary')
        box-shadow 0px 10px 30px -5px getColor('primary', .4)
        transform translate(0,-10px)
        color #fff
        h5
          a
            color #fff !important
        .con-img-t
          transform translate(0,-5px)
        p
          opacity 1
      h5
        margin 0px
        margin-top 12px
        a
          font-weight bold
      p
        opacity .7
        font-size .8rem
        text-align center
      .con-img-t
        width 90px
        position relative
        transition all .3s ease
      img
        width 100%
        border-radius 35%
        margin-top -40px
        z-index 100
        position relative
        &.filter
          z-index 50
          position absolute
          left 0px
          top 10px
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
    .con-projects-ul
      overflow auto
      width 100%
      li
        position relative
        min-width 320px
      &::-webkit-scrollbar
        height 0px
</style>
