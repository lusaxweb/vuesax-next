<template>
  <div class="con-components">
    <div class="con-logo vuesax-logo">
      <img class="not-darken" src="/vuesax-only.png" alt="">
      <img class="has-darken" src="/vuesax-only-b.png" alt="">
      <div class="github-logo__1"></div>
      <div class="github-logo__2"></div>
      <div class="github-logo__3"></div>
    </div>
    <div class="con-logo discord-logo">
      <i class='bx bxl-discord' ></i>
      <div class="github-logo__1"></div>
      <div class="github-logo__2"></div>
      <div class="github-logo__3"></div>
    </div>
    <div class="con-logo github-logo">
      <i class='bx bxl-github' ></i>
      <div class="github-logo__1"></div>
      <div class="github-logo__2"></div>
      <div class="github-logo__3"></div>
    </div>
    <div class="content-components">
      <div class="component1">
        <div class="avatar">
          <img class="not-darken" src="/foto1.png" alt="">
          <img class="back not-darken" src="/foto1.png" alt="">
          <img class="has-darken" src="/foto12.png" alt="">
          <img class="back has-darken" src="/foto12.png" alt="">
          <span class="badge">
            8
          </span>
        </div>

        <div class="con-text">
          <h4>
            Segoe cute
          </h4>
          <p>
            Do you want to participate in our initiative? We are open.
          </p>

          <footer>
            <vs-button danger>
              Open
            </vs-button>
            <vs-button dark shadow>
              cancel
            </vs-button>
          </footer>
        </div>
      </div>

      <div class="component2">
        <img class="not-darken" src="/vuesax-only.png" alt="">
        <img class="has-darken" src="/vuesax-only-b.png" alt="">
      </div>

      <div class="component3">
        <div
          :class="{'active': switch1}"
          @click="switch1 = !switch1"
          class="con-switch">
          <span class="circle" />
          <p>
            {{ switch1? 'on' : 'off' }}
          </p>
        </div>
        <div
          :class="{'active': switch2}"
          @click="switch2 = !switch2"
          class="con-switch">
          <span class="circle" />
          <p>
            {{ switch2? 'on' : 'off' }}
          </p>
        </div>
      </div>

      <div class="component4">
        <img class="not-darken" src="/foto3.png" alt="">
        <img class="has-darken" src="/foto10.png" alt="">
        <h4>
          <span class="not-darken">
            Potted cactus
          </span>
          <span class="has-darken">
            Red Shoes
          </span>
        </h4>

        <vs-button block>
          Button
        </vs-button>
      </div>

      <div class="component5">
        <i class='bx bxs-star'></i>
        <div class="con-img">
          <img src="/vue-logo.png" alt="">
        </div>
        <h4>
          Vuejs Components
        </h4>

        <p>
          Framework components for VueJS. Create instances quickly with a few lines of code.
        </p>
      </div>

      <div class="component6">
        <vs-button icon dark transparent>
          <i class='bx bx-dots-vertical-rounded' ></i>
        </vs-button>

        <div class="con-load">

        </div>
      </div>

      <div class="component7">
        <div class="con-img">
          <i class='bx bx-video' ></i>
          <img class="not-darken" src="/foto4.png" alt="">
          <img class="has-darken" src="/foto11.png" alt="">
        </div>

        <header>
          <button icon dark shadow>
            <i class='bx bxs-heart'></i>
          </button>
          <button dark shadow>
            <i class='bx bxs-chat' ></i> 12
          </button>
        </header>

        <div class="content-text">
          <h4>
            Get Started
          </h4>
          <p>
            Vuesax is an open source framework and you can help even in simple details
          </p>
        </div>

        <footer>
          <vs-input v-model="input1" placeholder="Comment" />
          <!-- <input placeholder="Comment" type="text" name="" id="comment"> -->
          <vs-button icon flat>
            <i class='bx bx-send' ></i>
          </vs-button>
        </footer>
      </div>

      <div class="component8">
        <div class="con-icon">
          <i class='bx bxs-heart' ></i>
        </div>

        <div class="con-img">
          <img class="not-darken" src="/foto2.jpg" alt="">
          <img class="has-darken" src="/foto13.png" alt="">

          <div class="play">
            <!-- <i class='bx bx-play' ></i> -->
            <i class='bx bxs-right-arrow'></i>
          </div>
        </div>

        <footer>
          <div>
            <h4>
              Vuesax 4.0
            </h4>
            <p>
              Framework
            </p>
          </div>

          <div class="con-avatars">
            <img src="/foto9.png" alt="">
            <img src="/foto8.png" alt="">
            <img src="/foto7.png" alt="">
          </div>
        </footer>
      </div>

      <div :class="{'active': focusSelect}" class="component9">
        <header>
          <input v-model="selectValue" placeholder="Select" @blur="handleBur" @click="handleClick" readonly type="text" name="" id="select">
          <i class='bx bx-chevron-down'></i>
        </header>

        <ul
          :class="{'active': focusSelect}"
        >
          <li @click="handleClickOption('Bruno Hoffman')">
            Bruno Hoffman
          </li>
          <li @click="handleClickOption('Chad kerley')">
            Chad kerley
          </li>
          <li @click="handleClickOption('Summer rose')">
            Summer rose
          </li>
        </ul>
      </div>

      <div class="component10">
        <vs-button danger icon>
          <i class='bx bx-play'></i>
        </vs-button>
        <vs-button warn icon>
          <i class='bx bx-git-pull-request' ></i>
        </vs-button>
        <vs-button icon>
          <i class='bx bxl-github' ></i>
        </vs-button>
      </div>

      <div :class="{'active': focusDrop}" class="component11">
        <header>
          <input placeholder="Dropdown" @blur="handleBurDrop" @click="handleClickDrop" readonly type="text" name="" id="">
          <i class='bx bx-chevron-down'></i>
        </header>

        <div class="liquid">

        </div>

        <ul
          :class="{'active': focusDrop}"
        >
          <li>
            😉
          </li>
          <li>
            😺
          </li>
          <li>
            😽
          </li>
          <li>
            😎
          </li>
          <li>
            😂
          </li>
        </ul>
      </div>

      <div class="component12">
        <vs-input v-model="input2" placeholder="Search" />
        <!-- <input placeholder="Search" type="text" name="" id="search"> -->
        <vs-button icon>
          <i class='bx bx-search'></i>
        </vs-button>
      </div>

      <div class="component13">
        <header>
          <vs-input v-model="input3" placeholder="location"></vs-input>
          <!-- <input placeholder="Location" type="text" name="" id="location"> -->
          <button>
            <i class='bx bx-chevron-right'></i>
          </button>
        </header>

        <ul>
          <li>
            <!-- <input checked type="checkbox" name="" id="checkbox1">
            <span class="check">
              <i class='bx bx-check'></i>
            </span>

            <label for="">
              Spain
            </label> -->
            <vs-checkbox>
              Spain
            </vs-checkbox>
          </li>
          <li>
            <!-- <input type="checkbox" name="" id="checkbox2">
            <span class="check">
              <i class='bx bx-check'></i>
            </span>

            <label for="">
              Germany
            </label> -->
            <vs-checkbox>
              Germany
            </vs-checkbox>
          </li>
          <li>
            <!-- <input type="checkbox" name="" id="checkbox3">
            <span class="check">
              <i class='bx bx-check'></i>
            </span>

            <label for="">
              Italy
            </label> -->
            <vs-checkbox>
              Italy
            </vs-checkbox>
          </li>
          <li>
            <!-- <input type="checkbox" name="" id="checkbox4">
            <span class="check">
              <i class='bx bx-check'></i>
            </span>

            <label for="">
              Japan
            </label> -->
            <vs-checkbox>
              Japan
            </vs-checkbox>
          </li>
        </ul>

        <vs-button block >
          Lets Go!
        </vs-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data:() => ({
    switch1: false,
    switch2: true,
    focusSelect: true,
    focusDrop: true,
    selectValue: '',
    input1: '',
    input2: '',
    input3: ''
  }),
  methods: {
    handleClickOption(val) {
      this.selectValue = val
    },
    handleClick() {
      this.focusSelect = !this.focusSelect
    },
    handleBur() {
      setTimeout(() => {
        this.focusSelect = false
      }, 100);
    },
    handleClickDrop() {
      this.focusDrop = !this.focusDrop
    },
    handleBurDrop() {
      setTimeout(() => {
        this.focusDrop = false
      }, 100);
    }
  }
}
</script>
<style scoped lang="stylus">
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")

@keyframes rotate-load
  0%
    transform: rotate(45deg)
  10%
    transform: rotate(405deg)
  100%
    transform: rotate(405deg)

@keyframes waveslogo
  0%
    width: 100px
    height: 100px
  100%
    height: 500px
    width: 500px
    opacity: 0

@keyframes componentAnimate
  0%
    transform translate(0px)
  30%
    transform translate(0,-10px)
  50%
    transform translate(0,4px)
  70%
    transform translate(0,-15px)
  100%
    transform translate(0px)

.has-darken
  display none

.darken
  .component13
    header
      input
        background getVar(theme-bg) !important

  .con-logo
    .github-logo__1, .github-logo__2, .github-logo__3
      box-shadow: 0px 0px 10px 0px rgba(255,255,255,.25)
  .not-darken
    display none
  .has-darken
    display block
  .circle
    background getVar(theme-bg2) !important
  .bxs-star
    fill #fff !important
    opacity 1 !important
  .component13
    header
      button
        border 2px solid rgba(255,255,255,.1) !important
        color #fff !important
        opacity 1 !important
  .component7
    footer
      button
        background getColor('primary')
        color #fff !important
  *::placeholder
    color getVar(theme-color)

.con-logo
  position absolute
  transform scale(.3)
  opacity 0
  font-size 9rem
  z-index 20
  width 200px
  height 200px
  display flex
  align-items center
  justify-content center
  border-radius 50%
  box-shadow 0px 8px 20px 0px rgba(0,0,0,.04)
  transition all .25s ease
  &.vuesax-logo
    border-radius 50px
    img
      width 50%
      z-index 100
  &.discord-logo
    width 180px
    height 180px
    border-radius 40px 40px 5px 40px
    i
      transform translate(5px)
  i
    z-index 30
  &:after
    content ''
    position absolute
    width 100%
    height 100%
    border-radius inherit
    background getVar(theme-layout)
    z-index 20
  .github-logo__1
    width: 0px
    background: transparent
    height: 0px
    position: absolute
    animation: waveslogo .7s ease infinite
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,.1)
    border-radius: inherit
    z-index 10
  .github-logo__2
    z-index 10
    width: 0px
    background: transparent
    height: 0px
    position: absolute
    animation: waveslogo 1.4s linear infinite
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,.1)
    border-radius: inherit
  .github-logo__3
    z-index 10
    width: 0px
    background: transparent
    height: 0px
    position: absolute
    animation: waveslogo 1.75s ease infinite
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,.1)
    border-radius: inherit

.con-components
  width 60%
  position absolute
  right 0px
  height 80vh
  // background getVar(theme-bg)
  // background-color: #FFFFFF;
  // background-image: linear-gradient(180deg, getVar(theme-layout) 0%, getVar(theme-bg2) 30%, getVar(theme-bg2) 80%, getVar(theme-layout) 100%);

  display flex
  align-items center
  justify-content center
  transform scale(.8)
  z-index 100
  // overflow hidden
  .content-components
    position relative
    width 1100px
    height 100%

    .component13
      width 300px
      padding 15px
      background getVar(theme-layout)
      border-radius 20px
      top 180px
      left 0px
      position absolute
      box-shadow 0px 8px 20px 0px rgba(0,0,0,.04)
      transition all .25s ease
      animation componentAnimate 18s infinite ease
      &:hover
        box-shadow 0px 0px 0px 0px rgba(0,0,0,.1)
        transform translate(0, 5px)
      .vs-input-parent
        width calc(100% - 50px)
        >>>input
          width 100% !important
      ul
        margin 0px
        padding 10px 0px
        list-style none
        li
          position relative
          display flex
          align-items center
          justify-content flex-start
          padding 3px 3px
          cursor pointer
          transition all .25s ease
          &:hover
            label
              opacity .6
          label
            transition all .25s ease
          .check
            width 22px
            height 22px
            display block
            background  getVar(theme-bg2)
            border-radius 5px
            display flex
            align-items center
            justify-content center
            transition all .25s ease
            margin-right 10px
            i
              transition all .3s ease
              font-size 1.1rem
              transform scale(.5)
              opacity 0
          input
            position absolute
            width 100%
            height 100%
            opacity 0
            z-index 100
            cursor pointer

            &:checked
              ~ .check
                background getColor('primary')
                i
                  opacity 1
                  color #fff
                  transform scale(1)
      header
        display flex
        align-items center
        justify-content center
        width 100%
        button
          border 2px solid rgba(0,0,0,.15)
          width 38px
          height 38px
          opacity .5
          background transparent
          padding 0px
          margin-left 10px
          display flex
          align-items center
          transition all .25s ease
          justify-content center
          &:hover
            background getColor('primary')
            border 2px solid getColor('primary')
            color #fff
            opacity 1
          i
            font-size 1.5rem
        input
          padding 9px 20px
          border 0px
          background getVar(theme-bg2)
          width calc(100% - 50px)
          border-radius 14px
          transition all .25s ease
          &:focus
            padding-left 25px
      button
        margin 0px
        padding 2px 0px
        border-radius 16px

    .component12
      display flex
      align-items center
      justify-content center
      position absolute
      top 540px
      left 0px
      transition all .25s ease
      animation componentAnimate 20s infinite ease alternate
      >>>input
        background getVar(theme-layout)
        padding 10px 15px
        box-shadow 0px 8px 20px 0px rgba(0,0,0,.04)
        width 275px
        &:focus
          padding-left 20px
          ~ button
            transform translate(-5px,-9px)
            box-shadow 0px 10px 20px -10px getColor('primary', .8)
      button
        position absolute
        right 0px
        top -3px
        border-radius 17px
        width 40px
        height 40px
        margin 0px
        box-shadow 0px 0px 0px 0px getColor('primary', .8)
        i
          font-size 1rem

    .component11
      position absolute
      top 640px
      left 100px
      transition all .25s ease
      border-radius 15px
      user-select none
      animation componentAnimate 16s infinite ease reverse
      .liquid
        width 20px
        background getVar(theme-layout)
        height 15px
        right 30px
        position absolute
        bottom 0px
        transform translate(0,80%) scaleX(.4)
        z-index 200
        opacity 0
        transition all .25s ease
        &:after
          content: ''
          position absolute
          top -5px
          left -20px
          width 20px
          height 15px
          background transparent
          border-radius 0px 50% 50% 0px
          border-right 5px solid getVar(theme-layout)
          border-bottom 5px solid getVar(theme-layout)
          border-top 5px solid getVar(theme-layout)
        &:before
          content: ''
          position absolute
          top -5px
          right -20px
          width 20px
          height 15px
          background transparent
          border-radius 0px 50% 50% 0px
          border-right 5px solid getVar(theme-layout)
          border-bottom 5px solid getVar(theme-layout)
          border-top 5px solid getVar(theme-layout)
          transform rotate(180deg)
      &.active
        .liquid
          opacity 1
          transform translate(0, 100%)
        input
          border-radius 15px
          user-select none
        i
          transform rotate(-180deg)
      ul
        width 100%
        position absolute
        top 0px
        background getVar(theme-layout)
        list-style none
        border-radius 15px
        padding-bottom 5px
        opacity 0
        visibility hidden
        transition all .25s ease
        z-index 100
        transform translate(0, 10px)
        padding-top 7px
        display flex
        align-items center
        justify-content center
        padding-left 0px
        box-shadow 0px 8px 20px 0px rgba(0,0,0,.04)
        &.active
          opacity 1
          visibility visible
          transform translate(0, 40px)
        li
          padding 7px 4px
          font-size .8rem
          transition all .25s ease
          cursor pointer
          &:hover
            transform scale(1.3)
      header
        z-index 200
        display flex
        align-items center
        justify-content center
        position relative
        input
          background getVar(theme-layout)
          padding 12px 15px
          width 100%
          border 0px
          border-radius 15px
          cursor pointer
          transition all .25s ease
          box-shadow 0px 0px 0px 0px rgba(0,0,0,.05)
          font-size .8rem
          box-shadow 0px 8px 20px 0px rgba(0,0,0,.04)
          max-width 170px
          &::selection
           background transparent
        i
          position absolute
          right 12px
          pointer-events none
          font-size 1.4rem
          transition all .25s ease

    .component10
      top 600px
      position absolute
      left 360px
      background getVar(theme-layout)
      border-radius 18px
      box-shadow 0px 8px 20px 0px rgba(0,0,0,.04)
      transition all .25s ease
      animation componentAnimate 14s infinite ease
      &:hover
        box-shadow 0px 0px 0px 0px rgba(0,0,0,.1)
        transform translate(0, 5px)
      button
        margin 15px
        &:first-child
          i
            transform translate(1px)

    .component9
      position absolute
      top 580px
      left 490px
      box-shadow 0px 8px 20px 0px rgba(0,0,0,.04)
      transition all .25s ease
      border-radius 15px
      user-select none
      animation componentAnimate 19s infinite ease-out alternate
      min-width 200px
      &:hover
        box-shadow 0px 0px 0px 0px rgba(0,0,0,.1)
        transform translate(0, 5px)
      &.active
        input
          border-radius 15px 15px 0px 0px
          box-shadow 0px 10px 25px -10px rgba(0,0,0,.08)
          user-select none

        i
          transform rotate(-180deg)
      ul
        width 100%
        position absolute
        top 0px
        background getVar(theme-layout)
        list-style none
        border-radius 0px 0px 15px 15px
        padding-bottom 5px
        opacity 0
        visibility hidden
        transition all .25s ease
        z-index 100
        transform translate(0, 10px)
        padding-top 7px
        &.active
          opacity 1
          visibility visible
          transform translate(0, 28px)
        li
          padding 7px
          font-size .8rem
          transition all .25s ease
          cursor pointer
          &:hover
            padding-left 12px
            color getColor('primary')
      header
        z-index 200
        display flex
        align-items center
        justify-content center
        position relative
        input
          background getVar(theme-layout)
          padding 14px 15px
          width 100%
          border 0px
          border-radius 15px
          cursor pointer
          transition all .25s ease
          box-shadow 0px 0px 0px 0px rgba(0,0,0,.05)
          font-size .8rem
          color getVar(theme-color)
          &::selection
           background transparent
        i
          position absolute
          right 12px
          pointer-events none
          font-size 1.4rem
          transition all .25s ease

    .component8
      width 260px
      background getVar(theme-layout)
      border-radius 30px
      padding 15px
      position absolute
      left 365px
      top 180px
      z-index 100
      box-shadow 0px 15px 30px -8px rgba(0,0,0,.08)
      transition all .25s ease
      animation componentAnimate 22s infinite ease reverse
      &:hover
        box-shadow 0px 0px 0px 0px rgba(0,0,0,.1)
        transform translate(0, 7px)
      footer
        display flex
        align-items center
        justify-content space-between
        padding 10px 0px
        h4
          margin 0px
        p
          font-size .8rem
          margin 0px
        .con-avatars
          display flex
          align-items center
          justify-content center
          img
            border 2px solid getVar(theme-layout)
            width 45px
            border-radius 50%
            margin-left -23px
            transition all .25s ease
            z-index 5
            &:hover
              box-shadow 0px 10px 15px 0px rgba(0,0,0,.1)
              transform scale(1.1)
            ~ img
              z-index 10
      .con-icon
        position absolute
        top -20px
        left -20px
        width 60px
        height 60px
        border-radius 22px
        background getVar(theme-layout)
        box-shadow 10px 12px 50px -6px rgba(0,0,0,.3)
        z-index 300
        display flex
        align-items center
        justify-content center
        i
          color getColor('danger')
          font-size 1.4rem
          text-shadow 0px 4px 15px getColor('danger', .4)
      .con-img
        width 230px
        height 250px
        position relative
        overflow hidden
        border-radius 30px 30px 30px 8px
        z-index 100
        display flex
        align-items center
        justify-content center
        cursor pointer
        &:hover
          .play
            width 80px
            height 80px
            border-radius 25px
        .play
          width 60px
          height 60px
          background rgba(255,255,255,.3)
          position absolute
          border-radius 50%
          backdrop-filter blur(6px)
          display flex
          align-items center
          justify-content center
          transition all .25s ease
          i
            font-size 1.5rem
            color #fff
            transition all .25s ease
            transform rotate(0deg) translate(0px)
        img
          height 100%

    .component7
      width 260px
      background getVar(theme-layout)
      border-radius 30px
      padding 15px
      position absolute
      left 760px
      top 410px
      z-index 100
      box-shadow 0px 15px 30px -8px rgba(0,0,0,.08)
      transition all .25s ease
      animation componentAnimate 15s infinite ease
      &:hover
        box-shadow 0px 0px 0px 0px rgba(0,0,0,.1)
        transform translate(0, 7px)
      footer
        display flex
        align-items center
        justify-content center
        margin-top 15px
        button
          width 41px
          height 41px
          margin-left 10px
        >>>.vs-input-parent
          width calc(100% - 60px)
        >>>input
          width 100%
          padding 12px 14px
          border 0px
          background getVar(theme-bg)
          border-radius 10px
          font-size .7rem
          transition all .25s ease
          &:focus
            background getVar(theme-bg2)

      .content-text
        h4
          margin 0px
          margin-top 15px
        p
          margin 5px 0px
          font-size .7rem
          opacity .6
      header
        display flex
        align-items center
        justify-content flex-start
        padding-left 10px
        margin-top -20px
        z-index 200
        position relative
        button
          padding 5px 12px
          display flex
          align-items center
          justify-content center
          min-height 40px
          border-radius 16px
          border 0px
          margin 0px 5px
          background getVar(theme-layout)
          color getVar(theme-color)
          box-shadow 0px 5px 15px 0px rgba(0,0,0,.08)
          font-weight bold
          font-size .75rem
          transition all .25s ease
          &:hover
            background getColor('danger')
            i
              color #fff
          i
            font-size 1.1rem
            color getColor('danger')
            text-shadow 0px 4px 15px getColor('danger', .4)
          &:last-child
            &:hover
              background getColor('primary')
              color #fff
              i
                color #fff
            i
              color getColor('primary')
              text-shadow 0px 4px 15px getColor('primary', .4)
              margin-right 5px


      .con-img
        width 230px
        height 200px
        position relative
        overflow hidden
        border-radius 30px 30px 30px 8px
        z-index 100
        i
          position absolute
          top 20px
          left 20px
          color #fff
          font-size 1.2rem
        img
          width 100%

    .component6
      display flex
      align-items center
      justify-content center
      flex-direction column
      position absolute
      width 160px
      height 160px
      background getVar(theme-layout)
      padding 20px
      border-radius 30px
      left 920px
      top 350px
      user-select none
      box-shadow 0px 15px 30px -8px rgba(0,0,0,.08)
      transition all .25s ease
      z-index 200
      animation componentAnimate 18s infinite ease alternate
      &:hover
        box-shadow 0px 0px 0px 0px rgba(0,0,0,.1)
        transform translate(0, 7px)
      .con-load
        width 85px
        height 85px
        border-radius 50%
        border 8px solid getColor('primary', 1)
        box-shadow 0px 0px 20px 0px getColor('primary', .1), inset 0px 0px 20px 0px getColor('primary', .1)
        border-left 8px solid getColor('primary', .1)
        transform rotate(45deg)
        animation rotate-load infinite 8s ease

      button
        position absolute
        top 5px
        right 5px
        padding 0px
        i
          font-size 1.1rem
          color getVar(theme-color) !important

    .component5
      display flex
      align-items center
      justify-content center
      flex-direction column
      position absolute
      width 220px
      background getVar(theme-layout)
      padding 20px
      border-radius 30px
      left 860px
      top 85px
      user-select none
      box-shadow 0px 15px 30px -8px rgba(0,0,0,.08)
      transition all .25s ease
      animation componentAnimate 13s infinite ease reverse
      &:hover
        box-shadow 0px 0px 0px 0px rgba(0,0,0,.1)
        transform translate(0, 7px)
        .con-img
          transform scale(1.2) translate(0px, -10px)
      i
        position absolute
        top 15px
        right 15px
        fill getVar(theme-color)
        opacity .2
      p
        font-size .7rem
        opacity .6
        text-align center
        margin 0px
      h4
        margin 0px
        margin-top 8px
        margin-bottom 6px
        font-size .8rem
        margin 10px 0px
      .con-img
        width 90px
        height 90px
        border-radius 25px
        overflow hidden
        background alpha(#41b883, .08)
        transition all .25s ease
      img
        padding 20px
        width 100%

    .component4
      display flex
      align-items center
      justify-content center
      flex-direction column
      position absolute
      width 140px
      background getVar(theme-layout)
      padding 10px
      border-radius 30px
      user-select none
      box-shadow 0px 15px 30px -8px rgba(0,0,0,.08)
      transition all .25s ease
      animation componentAnimate 16s infinite ease
      left 668px
      top 120px
      &:hover
        box-shadow 0px 0px 0px 0px rgba(0,0,0,.1)
        transform translate(0, 7px)
        img
          transform scale(1.2) translate(0px, -10px)
      h4
        margin 0px
        margin-top 8px
        margin-bottom 6px
        font-size .8rem
      img
        width 120px
        height 120px
        border-radius 30px
        transition all .25s ease
      button
        border-radius 20px

    .component3
      position absolute
      left 650px
      top 25px
      display flex
      align-items center
      justify-content center
      transition all .25s ease
      animation componentAnimate 21s infinite ease alternate
      .con-switch
        width 65px
        height 35px
        background getVar(theme-layout)
        box-shadow 0px 5px 15px 0px rgba(0,0,0,.04)
        border-radius 25px
        display flex
        align-items center
        justify-content space-between
        padding 5px
        margin 10px 12px
        cursor pointer
        transition all .25s ease
        &:active
          &.active
            .circle
              transform translate(25px) !important
          .circle
            width 35px !important
            border-radius 20px
        &:hover
          transform translate(0,-5px)
          box-shadow 0px 10px 15px 0px rgba(0,0,0,.08)
        &.active
          background getColor('primary')
          .circle
            transform translate(30px)
            background getVar(theme-layout) !important
            box-shadow -3px 3px 20px 0px rgba(255,255,255,.35)
          p
            color rgba(255,255,255,1)
            opacity 1
            transform translate(-30px)
        .circle
          width 25px
          height 25px
          background getVar(theme-layout)
          box-shadow 5px 5px 15px 0px rgba(0,0,0,.08)
          border-radius 50%
          position relative
          display block
          transition all .25s ease
          z-index 10
        p
          z-index 5
          transition all .25s ease
          font-size .7rem
          font-weight bold
          margin 0px
          width calc(100% - 35px)
          text-align center
          margin 0px 5px
          opacity .5
          user-select none

    .component2
      width 140px
      height 140px
      position absolute
      left 460px
      top 0px
      box-shadow 0px 15px 30px -8px rgba(0,0,0,.08)
      border-radius 30%
      background getVar(theme-layout)
      padding 35px
      transition all .25s ease
      animation componentAnimate 19s infinite ease reverse
      &:hover
        box-shadow 0px 0px 0px 0px rgba(0,0,0,.1)
        transform translate(0, 7px)
      img
        width 100%
        height 100%


    .component1
      border-radius 35px
      width 400px
      box-shadow 0px 15px 30px -8px rgba(0,0,0,.08)
      display flex
      align-items center
      justify-content center
      padding 8px 10px
      background getVar(theme-layout)
      transition all .25s ease
      animation componentAnimate 15s infinite ease
      position absolute
      top 0px
      left 0px
      .con-text
        padding 0px 20px
        position relative
        background transparent
        width calc(100% - 100px)
        padding-left 23px
        footer
          display flex
          align-items center
          justify-content center
          position absolute
          bottom -30px
          button
            min-width 100px
          .vs-button--shadow
            background getVar(theme-layout) !important
            color getVar(theme-color) !important
        p
          font-size .8rem
          padding-bottom 20px
          margin 0px
          opacity .6
        h4
          margin 0px
          padding 0px
          padding-bottom 5px
      .avatar
        border-radius 30%
        position relative
        width 100px
        height 100px
        z-index 200
        img
          border-radius inherit
          z-index 100
          position relative
          width 100%
          &.back
            opacity .25
            position absolute
            bottom -20px
            left 0px
            filter blur(15px)
            z-index 10
        .badge
          position absolute
          bottom 4px
          right -6px
          background getColor('danger')
          box-shadow 0px 4px 10px 0px getColor('danger', .6)
          width 20px
          height 20px
          color #fff
          font-weight bold
          display flex
          align-items center
          justify-content center
          font-size .6rem
          border-radius 50%
          z-index 120
          user-select none

@media (min-width: 1150px)
  .con-components
    width 60%
    position absolute
    right 0px
    height 80vh
    // background getVar(theme-bg)
    // background-color: #FFFFFF;
    // background-image: linear-gradient(180deg, getVar(theme-layout) 0%, getVar(theme-bg2) 30%, getVar(theme-bg2) 80%, getVar(theme-layout) 100%);

    display flex
    align-items center
    justify-content center
    transform scale(.8)
    z-index 100
    // overflow hidden
    &.btn-hover
      &.vuesax-hover
        .vuesax-logo
          transform scale(1)
          opacity 1

      &.discord-hover
        .discord-logo
          transform scale(1)
          opacity 1
      &.github-hover
        .github-logo
          transform scale(1)
          opacity 1
      .component13
        top 160px !important
        left -150px !important
        // transform translate(-150px, -20px) !important
        z-index 20
        // animation: none !important
      .component12
        top 560px !important
        left -90px !important
        // transform translate(-90px, 20px) !important
      .component11
        top 710px !important
        left 10px !important
        // transform translate(-90px, 70px) !important
      .component10
        top 650px !important
        left 320px !important
        // transform translate(-40px, 50px) !important
      .component9
        top 660px !important
        left 490px !important
        // transform translate(0px, 80px) !important
      .component8
        top 20px !important
        left 120px !important
        // transform translate(-270px, -160px) !important
        z-index 10
      .component7
        top 450px !important
        left 810px !important
        // transform translate(50px, 40px) !important
      .component6
        top 330px !important
        left 960px !important
        // transform translate(40px, -20px) !important
      .component5
        top 15px !important
        left 920px !important
        // transform translate(60px, -70px) !important
      .component4
        top 60px !important
        left 748px !important
        // transform translate(80px, -60px) !important
      .component3
        top -75px !important
        left 680px !important
        // transform translate(30px, -100px) !important
      .component2
        top -70px !important
        left 430px !important
        // transform translate(-30px, -70px) !important
      .component1
        top -100px !important
        left -100px !important
        transform translate(-100px, -100px) !important

@media (max-width: 1150px)
  .content-components
    transform scale(.7)
@media (max-width: 960px)
  .con-components
    width 100%
    .content-components
      transform scale(.7)
      left -7%
      right auto
      bottom 0px
      width 100% !important
      margin-top 250px
@media (max-width: 960px)
  .con-components
    .content-components
      left -12%
@media (max-width: 760px)
  .con-components
    display none
    .content-components
      left -18%
@media (max-width: 470px)
  .con-components
    .content-components
      margin-top 280px
      transform scale(.6)
      left -25%
</style>
