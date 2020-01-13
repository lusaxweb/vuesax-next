<template>
  <div class="home-init">
    <div class="con-text">
      <slot></slot>
    </div>
    <div class="con-animation">
      <div class="con-desk">

          <div class="code1">
           <pre class="language-html"><code>  <span class="token comment">&lt;!-- vuesax component --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span><span class="token punctuation">&gt;</span></span>
    Share
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">&gt;</span></span>
</code></pre>
          </div>

        <div class="content-desk-components">
          <div class="menu-desk">
            <ul>
              <li>
                <i class='bx bx-search-alt' ></i>
              </li>
              <li>
                <i class='bx bxs-chat' ></i>
              </li>
              <li>
                <i class='bx bxs-landscape' ></i>
              </li>
              <li>
                <i class='bx bxs-comment-error' ></i>
              </li>
            </ul>
          </div>

          <header class="header">
            <div class="con-input">
              <input placeholder="Search" type="text">
              <vs-button icon active>
                <i class='bx bx-search' ></i>
              </vs-button>
            </div>

            <ul>
              <li class="active">
                Home
              </li>
              <li>
                Friends
              </li>
              <li>
                Events
              </li>
              <li>
                live
              </li>
            </ul>

            <div class="con-user">
              <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="">
              <i class='bx bx-dots-horizontal-rounded'></i>
            </div>
          </header>

          <div class="menu-items">

          </div>

          <div class="con-app">
            <vs-row>
              <vs-col w="7">
                <div class="con-create-posts">
                  <div class="card-post">
                    <header>
                      Create Post

                      <i class='bx bx-dots-horizontal-rounded'></i>
                    </header>
                    <div class="text-post">
                      <textarea placeholder="Write a comment..." name="" id="" cols="30" rows="10"></textarea>
                      <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="">
                    </div>
                    <footer>
                      <vs-button>
                        Share
                      </vs-button>
                      <vs-button border icon>
                        <i class='bx bx-plus' ></i>
                      </vs-button>
                      <vs-button border icon>
                        <i class='bx bx-image' ></i>
                      </vs-button>
                      <vs-button border icon>
                        <i class='bx bx-video' ></i>
                      </vs-button>
                    </footer>
                  </div>
                </div>

                <div class="con-create-posts-public">
                  <div class="card-post">
                    <header>
                      <div class="name">
                        <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="">
                        <h5>
                          Roxie Mills
                        </h5>
                        <p>
                          December 26, 2018
                        </p>
                      </div>

                      <i class='bx bx-dots-horizontal-rounded'></i>
                    </header>

                    <div class="con-images">
                      <p>
                        Being a <b>#frontend</b> <b>#programmer</b> is the best thing I love the development experience and the whole ecosystem.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="con-create-posts-public">
                  <div class="card-post">
                    <header>
                      <div class="name">
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="">
                        <h5>
                          Daniel Churchill
                        </h5>
                        <p>
                          August 16, 2019
                        </p>
                      </div>

                      <i class='bx bx-dots-horizontal-rounded'></i>
                    </header>

                    <div class="con-images">
                      <p>
                        I love new Wallpapers minimal 💻😍 <b>#photo</b> <b>#Models</b>
                      </p>

                      <div class="content-images">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>

                    <footer>

                    </footer>
                  </div>
                </div>
              </vs-col>
              <vs-col w="5">
                <div class="con-create-posts-public only-post">
                  <div class="card-post">
                    <header>
                      <div class="name">
                        <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="">
                        <h5>
                          Bruno Hoffman
                        </h5>
                        <p>
                          April 25, 2019
                        </p>
                      </div>

                      <i class='bx bx-dots-horizontal-rounded'></i>
                    </header>

                    <div class="con-images">
                      <p>
                        New Render 👇 <b>#cinema4d</b> <b>#bender3d</b>
                      </p>

                      <div class="content-images">
                        <img src="https://cdn.pixabay.com/photo/2017/01/09/12/08/office-1966384_960_720.jpg" alt="">
                      </div>
                    </div>

                    <footer>

                    </footer>
                  </div>
                </div>
              </vs-col>
            </vs-row>
          </div>
        </div>

        <svg class="desktop" xmlns="http://www.w3.org/2000/svg" width="988" height="556" viewBox="0 0 988 556">
          <g id="Grupo_48" data-name="Grupo 48" transform="translate(-1109 -295)">
            <rect id="Rectángulo_97" data-name="Rectángulo 97" width="988" height="544" rx="20" transform="translate(1109 307)"/>
            <path id="Rectángulo_96" data-name="Rectángulo 96" d="M12,0H976a12,12,0,0,1,12,12V42a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V12A12,12,0,0,1,12,0Z" transform="translate(1109 295)"/>
            <g id="Grupo_33" data-name="Grupo 33" transform="translate(0 1)">
              <circle id="Elipse_100" data-name="Elipse 100" cx="4" cy="4" r="4" transform="translate(1165 311)" fill="#7de49b"/>
              <circle id="Elipse_101" data-name="Elipse 101" cx="4" cy="4" r="4" transform="translate(1147 311)" fill="#ffe09d"/>
              <circle id="Elipse_102" data-name="Elipse 102" cx="4" cy="4" r="4" transform="translate(1129 311)" fill="#ffb2b2"/>
            </g>
          </g>
        </svg>
      </div>

      <div class="con-mobile">
        <div class="con-app-mobile">
          <header>
            <vs-button icon transparent>
              <i class='bx bx-menu'></i>
            </vs-button>
            <div class="con-user">
              <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="">
              <i class='bx bx-dots-horizontal-rounded'></i>
            </div>
          </header>

          <vs-row>
            <vs-col w="12">
              <div class="con-create-posts">
                <div class="card-post">
                  <header>
                    Create Post

                    <i class='bx bx-dots-horizontal-rounded'></i>
                  </header>
                  <div class="text-post">
                    <textarea placeholder="Write a comment..." name="" id="" cols="30" rows="10"></textarea>
                    <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="">
                  </div>
                  <footer>
                    <vs-button>
                      Share
                    </vs-button>
                    <vs-button border icon>
                      <i class='bx bx-plus' ></i>
                    </vs-button>
                    <vs-button border icon>
                      <i class='bx bx-image' ></i>
                    </vs-button>
                    <vs-button border icon>
                      <i class='bx bx-video' ></i>
                    </vs-button>
                  </footer>
                </div>
              </div>

              <div class="con-create-posts-public">
                <div class="card-post">
                  <header>
                    <div class="name">
                      <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="">
                      <h5>
                        Roxie Mills
                      </h5>
                      <p>
                        December 26, 2018
                      </p>
                    </div>

                    <i class='bx bx-dots-horizontal-rounded'></i>
                  </header>

                  <div class="con-images">
                    <p>
                      Being a <b>#frontend</b> <b>#programmer</b> is the best thing I love the development experience and the whole ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              <div class="con-create-posts-public">
                <div class="card-post">
                  <header>
                    <div class="name">
                      <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="">
                      <h5>
                        Daniel Churchill
                      </h5>
                      <p>
                        August 16, 2019
                      </p>
                    </div>

                    <i class='bx bx-dots-horizontal-rounded'></i>
                  </header>

                  <div class="con-images">
                    <p>
                      I love new Wallpapers minimal 💻😍 <b>#photo</b> <b>#Models</b>
                    </p>

                    <div class="content-images">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>

                  <footer>

                  </footer>
                </div>
              </div>
            </vs-col>
            <vs-col w="12">
              <div class="con-create-posts-public only-post">
                <div class="card-post">
                  <header>
                    <div class="name">
                      <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="">
                      <h5>
                        Bruno Hoffman
                      </h5>
                      <p>
                        April 25, 2019
                      </p>
                    </div>

                    <i class='bx bx-dots-horizontal-rounded'></i>
                  </header>

                  <div class="con-images">
                    <p>
                      New Render 👇 <b>#cinema4d</b> <b>#bender3d</b>
                    </p>

                    <div class="content-images">
                      <img src="https://cdn.pixabay.com/photo/2017/01/09/12/08/office-1966384_960_720.jpg" alt="">
                    </div>
                  </div>

                  <footer>

                  </footer>
                </div>
              </div>
            </vs-col>
          </vs-row>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="180" height="359" viewBox="0 0 180 359">
          <defs>
            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#fff"/>
              <stop offset="1" stop-color="#fff"/>
            </linearGradient>
            <linearGradient id="linear-gradient-3" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#f3f3f3"/>
              <stop offset="1" stop-color="#fff"/>
            </linearGradient>
            <linearGradient id="linear-gradient-4" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#fff"/>
              <stop offset="1" stop-color="#f3f3f3"/>
            </linearGradient>
          </defs>
          <g id="Grupo_46" data-name="Grupo 46" transform="translate(-1019 -517)">
            <g id="Grupo_40" data-name="Grupo 40" transform="translate(1019 517)">
              <path id="Case" d="M23.794,0h128.99a23.794,23.794,0,0,1,23.794,23.794V335.206A23.794,23.794,0,0,1,152.784,359H23.794A23.794,23.794,0,0,1,0,335.206V23.794A23.794,23.794,0,0,1,23.794,0Z" transform="translate(1.252 0)" fill="var(--vs-theme-layout)"/>
              <path id="Glass" d="M18.552,0H149.677a18.5,18.5,0,0,1,18.552,18.455V332.2a18.5,18.5,0,0,1-18.552,18.455H18.552A18.5,18.5,0,0,1,0,332.2V18.455A18.5,18.5,0,0,1,18.552,0Z" transform="translate(5.427 4.174)" fill="var(--vs-theme-layout)"/>
              <g id="Button" transform="translate(177.79 83.767)">
                <g id="Grupo_39" data-name="Grupo 39" transform="translate(0 0)">
                  <path id="Rectángulo_21" data-name="Rectángulo 21" d="M0,0H0A2,2,0,0,1,2,2V38a2,2,0,0,1-2,2H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(0.21 0.233)" fill="var(--vs-theme-layout)"/>
                  <path id="Rectángulo_101" data-name="Rectángulo 101" d="M0,0H0A2,2,0,0,1,2,2V38a2,2,0,0,1-2,2H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(0.21 0.233)" fill="var(--vs-theme-layout)"/>
                </g>
              </g>
              <g id="Button-2" data-name="Button" transform="translate(0 75.219)">
                <path id="Rectángulo_28" data-name="Rectángulo 28" d="M2,0H2A0,0,0,0,1,2,0V25a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z" transform="translate(0 -0.219)" fill="var(--vs-theme-layout)"/>
                <path id="Rectángulo_103" data-name="Rectángulo 103" d="M0,0H0A2,2,0,0,1,2,2V23a2,2,0,0,1-2,2H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(2 24.781) rotate(180)" fill="var(--vs-theme-layout)"/>
              </g>
              <g id="Button-3" data-name="Button" transform="translate(0 107.7)">
                <path id="Rectángulo_29" data-name="Rectángulo 29" d="M2,0H2A0,0,0,0,1,2,0V24a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z" transform="translate(0 0.3)" fill="var(--vs-theme-layout)"/>
                <path id="Rectángulo_104" data-name="Rectángulo 104" d="M0,0H0A2,2,0,0,1,2,2V22a2,2,0,0,1-2,2H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(2 24.3) rotate(180)" fill="var(--vs-theme-layout)"/>
              </g>
              <g id="Button-4" data-name="Button" transform="translate(0 48.721)">
                <path id="Rectángulo_31" data-name="Rectángulo 31" d="M1,0H2A0,0,0,0,1,2,0V13a0,0,0,0,1,0,0H1a1,1,0,0,1-1-1V1A1,1,0,0,1,1,0Z" transform="translate(0 0.279)" fill="var(--vs-theme-layout)"/>
                <path id="Rectángulo_149" data-name="Rectángulo 149" d="M0,0H1A1,1,0,0,1,2,1V12a1,1,0,0,1-1,1H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(2 13.279) rotate(180)" fill="var(--vs-theme-layout)"/>
              </g>
              <g id="Camera" transform="translate(107.7 10.257)">
                <circle id="Elipse_7" data-name="Elipse 7" cx="3" cy="3" r="3" transform="translate(0.3 -0.257)" fill="var(--vs-theme-bg2)"/>
                <circle id="Elipse_8" data-name="Elipse 8" cx="2.5" cy="2.5" r="2.5" transform="translate(0.3 0.743)" fill="var(--vs-theme-bg2)"/>
                <circle id="Elipse_10" data-name="Elipse 10" cx="1.5" cy="1.5" r="1.5" transform="translate(1.3 1.743)" fill="var(--vs-theme-bg2)"/>
                <circle id="Elipse_9" data-name="Elipse 9" cx="0.5" cy="0.5" r="0.5" transform="translate(2.3 1.743)" fill="var(--vs-theme-bg2)"/>
              </g>
              <path id="Ear_Piece" data-name="Ear Piece" d="M1.961.5H24.92a1.461,1.461,0,1,1,0,2.922H1.961A1.461,1.461,0,0,1,1.961.5Z" transform="translate(76.101 11.815)" fill="var(--vs-theme-bg2)" stroke-width="1"/>
              <path id="Screen" d="M140.678,338.963H15.863A15.881,15.881,0,0,1,0,323.1V15.863A15.881,15.881,0,0,1,15.863,0H32.67a2.844,2.844,0,0,1,2.183,2.158c.069.3.14.7.223,1.155.16.88.358,1.972.654,3.076a7.914,7.914,0,0,0,7.735,6.148c2.137.022,15.464.027,26.267.027,19.873,0,42.675-.016,43.742-.027a7.914,7.914,0,0,0,7.735-6.148c.3-1.106.495-2.2.654-3.078.084-.46.155-.852.223-1.153A2.752,2.752,0,0,1,124.25,0h16.427A15.881,15.881,0,0,1,156.54,15.863V323.1A15.881,15.881,0,0,1,140.678,338.963Z" transform="translate(11.271 10.019)" fill="var(--vs-theme-bg)"/>
              <path id="Home" d="M1.044,0h52.18a1.044,1.044,0,1,1,0,2.087H1.044A1.044,1.044,0,0,1,1.044,0Z" transform="translate(62.616 341.885)" fill="var(--vs-theme-layout)"/>
            </g>
          </g>
        </svg>

      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
getVar(var)
    unquote("var(--vs-"+var+")")

@keyframes btn1
  0%
    opacity 1
    width 60px
  10%
    opacity 0
    width 0px
  55%
    opacity 0
    width 0px
  73%
    opacity 1
    width 60px
  80%
    opacity 1
    width 60px
  95%
    opacity 1
    width 60px
  100%
    opacity 1
    width 60px

.darken
  svg.desktop, .con-mobile
    box-shadow 0px 10px 30px 0px rgba(0,0,0,0.17) !important
.con-user
  display flex
  align-items center
  justify-content center
  img
    width 20px
    height 20px
    border-radius 5px
  i
    transform rotate(90deg)

.only-post
  margin-top 15px !important

.con-create-posts-public
  max-width 100%
  background getVar(theme-layout)
  margin 10px 15px
  border-radius 15px
  padding 10px
  margin-top 0px
  overflow hidden
  .con-images
    p
      font-size .6rem
      margin 3px
      b
        cursor pointer
        transition all .25s ease
        &:hover
          opacity .6
  .content-images
    img
      width 100%
      border-radius 0px 15px 15px 15px
      transition all .25s ease
      &:hover
        transform scale(.95)
        opacity .8
    div
      width 50%
      float left
      transition all .25s ease
      &:hover
        transform scale(.95)
        opacity .8
      &:nth-child(1)
        width calc(60% - 5px)
        margin-right 5px
        border-radius 0px 15px 15px 15px
        background-image url('https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_960_720.jpg')
        height 100px
        background-size cover
        border 0px
        display block
        position relative
      &:nth-child(2)
        background-image url('https://cdn.pixabay.com/photo/2016/12/19/21/36/winters-1919143_960_720.jpg')
        width 40%
        margin-bottom 5px
        border-radius 15px 15px 15px 15px
        height 50px
        background-size cover
      &:nth-child(3)
        background-size cover
        width 40%
        height 45px
        border-radius 15px 15px 0px 15px
        background-image url('https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265_960_720.jpg')

  header
    position relative
    display flex
    align-items center
    justify-content space-between
    padding-right 5px
    i
      font-size .8rem
      transition all .25s ease
      &:hover
        opacity .5
    .name
      display flex
      align-items flex-start
      justify-content center
      flex-direction column
      padding-left 30px
      h5
        font-size .7rem
        margin 0px
        padding 0px
      p
        font-size .5rem
        margin 0px
      img
        position absolute
        top 2px
        left 0px
        border-radius 7px
        width 24px
        transition all .25s ease
        box-shadow 0px 0px 0px 0px rgba(0,0,0,.2)

.con-create-posts
  max-width 100%
  background getVar(theme-layout)
  margin 10px 15px
  margin-top 15px
  border-radius 15px
  padding 10px
  footer
    display flex
    align-items center
    justify-content flex-start
    padding 0px 10px
    .vs-button--default
      animation 5s btn1 infinite
    button
      margin 2px !important
      border-radius 8px
      font-weight bold
    .vs-button__content
      padding 5px 10px
      font-size .55rem
    .vs-button--icon
      opacity .3
      filter grayscale(100%)
      &:hover,&:focus
        opacity 1
        filter grayscale(0%)
      .vs-button__content
        padding 5px
        i
          font-size .7rem

  .text-post
    display flex
    align-items flex-start
    justify-content center
    padding 10px
    position relative
    padding-bottom 5px
    textarea
      padding-left 20px
      border 0px
      resize none
      border-bottom 1px solid getVar(theme-bg2)
      background transparent
      font-size .6rem
      font-family Arial, Helvetica, sans-serif
      height 40px
      outline none
      transition all .25s ease
      width 100%
      &:focus
        height 60px
        border-bottom 1px solid #1a5bff
        ~ img
          box-shadow 0px 4px 10px 0px rgba(0,0,0,.2)
          transform translate(0, -2px)
    img
      position absolute
      top 10px
      left 0px
      border-radius 7px
      width 20px
      transition all .25s ease
      box-shadow 0px 0px 0px 0px rgba(0,0,0,.2)

  header
    display flex
    align-items center
    justify-content space-between
    padding 0px 5px
    font-size .6rem
    font-weight bold
    i
      font-size .8rem


.code1
  width 200px
  z-index 300
  position absolute
  top -100px
  left 100px
  animation 5s code1 infinite
  code
    font-size .75rem !important
  pre
    box-shadow 0px 5px 20px 0px rgba(0,0,0,.1)
    border-radius 20px !important
    padding 8px !important
    // background getVar(theme-color) !important
    // color: getVar(theme-color)
  .inline-block
    display inline-block


@keyframes code1
  0%
    top -80px
    left 100px
    opacity 0
    transform scale(.7)
  5%
    top -80px
    left 100px
    opacity 1
    transform scale(1)
  40%
    top -80px
    left 100px
    opacity 1
    transform scale(1)
  50%
    top -80px
    left 100px
    opacity 1
    transform scale(.8)
  60%
    top 110px
    left 80px
    opacity 1
    transform scale(.5)
  65%
    top 130px
    left 70px
    transform scale(.15)
    opacity 0
  100%
    top -80px
    left 100px
    transform scale(1)
    opacity 0


.content-desk-components
  width 100%
  position absolute
  height calc(100% - 40px)
  background getVar(theme-layout)
  z-index 10
  top 40px
  border-radius 0px 0px 10px 10px
  .con-app
    width calc(100% - 105px)
    height calc(100% - 32px)
    position absolute
    background getVar(theme-bg)
    top 32px
    left 105px
    border-radius 20px 0px 0px 0px
    overflow hidden
  .menu-items
    width 80px
    height calc(100% - 35px)
    background getVar(theme-layout)
    left 30px
    position absolute
    top 35px
  .header
    width calc(100% - 30px)
    box-sizing border-box
    position absolute
    height 32px
    background getVar(theme-layout)
    left 30px
    padding 0px 10px
    display flex
    align-items center
    justify-content space-between
    .con-input
      display flex
      align-items center
      justify-content center

      input
        border-radius 6px
        font-size .6rem
        background transparent
        padding 5px 10px
        border 0px
        color getVar(theme-text)
        transition all .25s ease
        width 130px
        border 0px
        background getVar(theme-bg2)
        &:focus
          padding-left 15px
      button
        background #1a5bff
        border 0px
        border-radius 7px
        padding 0px !important
        width 20px
        height 20px
        color #fff
        margin 0px
        transform translate(-10px, -3px)
        i
          font-size .6rem
          margin-top 2px
        .vs-button__content
          display flex
          align-items center
          justify-content center
          padding 0px
    ul
      display flex
      align-items center
      justify-content center
      li
        padding 7px 6px
        font-size .6rem
        font-weight 600
        margin 5px 7px
        list-style none
        transition all .25s ease
        cursor pointer
        opacity .6
        &.active
          opacity 1
          border-bottom 2px solid #1a5bff
        &:hover
          opacity 1
  .menu-desk
    width 30px
    height 100%
    position absolute
    top 0px
    left 0px
    background #1a5bff
    border-radius 0px 10px 10px 0px

    ul
      padding 0px
      margin 0px
      margin-top 70px
      li
        list-style none
        width 20px
        height 20px
        display flex
        align-items center
        justify-content center
        background rgba(255,255,255,.1)
        border-radius 6px
        margin 5px
        margin-top 7px
        color rgba(255,255,255,1)
        transition all .25s ease
        cursor pointer
        i
          font-size .6rem
        &:hover
          background rgba(255,255,255,1)
          box-shadow 0px 5px 10px 0px rgba(255,255,255,.3)
          color #1a5bff

.home-init
  display flex
  align-items center
  justify-content space-between
  background getVar(theme-layout)
  overflow hidden
  // max-width 1450px
  margin-left auto
  min-height 100vh
  .con-text
      width 100%
  .con-animation
    display flex
    align-items center
    justify-content center
    position relative
  .con-desk
    height 556px
    width 800px
    position relative
    .desktop
      // height 100%
      // width 100%
      box-shadow 0px 10px 30px 0px rgba(0,0,0,.06)
      border-radius 10px
      position absolute
      fill getVar(theme-bg2)

  .con-mobile
    position absolute
    width 200px
    height 400px
    box-shadow 0px 10px 30px 0px rgba(0,0,0,.06)
    border-radius 20px
    left -70px
    bottom -70px
    z-index 200
    display flex
    align-items center
    justify-content center
    svg
      width 100%
      height 100%

    .con-app-mobile
      border-radius 20px
      height calc(100% - 18px)
      position absolute
      width calc(100% - 18px)
      .vs-row
        overflow auto
        height 100%
        padding-top 35px
        &::-webkit-scrollbar
          width 0px
      .con-create-posts
        margin 10px 10px
        border-radius 5px
        margin-top 0px
        padding 5px
        .text-post
          img
            width 15px
            border-radius 4px
          textarea
            font-size .5rem
            padding-left 12px
        header
          font-size .5rem
        footer
          padding 0px
          flex-wrap wrap
      .con-create-posts-public
        margin 10px 10px
        border-radius 5px
        padding 5px
        .con-images
          p
            font-size .5rem
        header
          .name
            padding-left 18px
            h5
              font-size .5rem
            p
              font-size .4rem
            img
              width 15px
              border-radius 4px
      >header
        width 100%
        display flex
        align-items center
        justify-content space-between
        position absolute
        top -2px
        left 0px
        background getVar(theme-layout)
        z-index 200
        button
          padding 0px
          width 30px
          height 30px
          border-radius 5px
          margin 0px
          .vs-button__content
            padding 0px
          i
            font-size 1rem
        .con-user
          display flex
          align-items center
          padding 5px 3px
          img
            width 15px
            height 15px
          i
            font-size .8rem
@media (max-width: 1350px)
  .home-init
    overflow hidden
    .con-text
      width 50%
    .con-animation
      .con-mobile
        width 150px
        height 300px
        left -40px
      .con-desk
        height 560px
        width 600px
        svg
          height 100%
@media (max-width: 1100px)
  .home-init
    margin-bottom 140px
    .con-text
      width 100%
      z-index 200
      .hero
        background transparent
        display block
        .content-hero
          padding 20px
    .con-animation
      position absolute
      z-index 100
      right 0px
      bottom -60px
@media (max-width: 800px)
  .home-init
    .con-text
      .hero
        .content-hero
          padding 20px 20px
          h1
            font-size 2rem !important

@media (max-width: 670px)
  .home-init
    margin-bottom 0px
    .con-text
      .hero
        display flex
        padding 30px
    .con-animation
      display none
@media (max-width: 450px)
  .home-init
    .con-text
      .hero
        padding 0px
    .con-btns
      flex-wrap wrap
      justify-content flex-start
      width 100%
      a
        margin 0px
        margin-top 10px
        max-width auto
        width 100%
        text-align center
        &.discord
          width calc(50% - 5px)
          padding 9px
          margin-right 10px
        &.github
          width calc(50% - 5px)
          .badge-star
            position relative
            top 0px
            right 0px
</style>
