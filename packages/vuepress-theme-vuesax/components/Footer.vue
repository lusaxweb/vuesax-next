<template>
  <footer class="footer">
    <!-- Begin Mailchimp Signup Form -->
    <div class="subscribe-content" id="mc_embed_signup">
      <div class="con-form">
        <h4 v-if="data" v-html="data" />
        <h4 v-else>
          <b>Subscribe</b> to our <br> Weekly Newsletter
        </h4>
        <form action="https://lusaxweb.us19.list-manage.com/subscribe/post?u=0437617d8716e89975fcc0f14&amp;id=8188b99f63" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">

          <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email" required>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_0437617d8716e89975fcc0f14_8188b99f63" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="SUSCRIBE!" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
            </div>
        </form>
      </div>
    </div>
    <!--End mc_embed_signup-->
    <div class="footer__uls">
      <ul
        v-for="(link, index) in links"
        :key="index"
        >
        <li class="title">
          {{ link.title }}
        </li>
        <li
          v-for="(item, i) in link.items"
          :key="i"
        >
          <a target="_blank" :href="item.link">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>

    <div class="copy">
      <span class="span-copy">
        Copyright © 2020 Vuesax
      </span>
      <span class="span-lusaxweb">
        <span>
          Created By
        </span>
        <a target="_blank" href="http://lusaxweb.net">Lusaxweb</a>
      </span>
    </div>
  </footer>
</template>
<script>
export default {
  props: ['data'],
  data() {
    return {
      links:[
        {
          title: 'Vuesax',
          items: [
            {
              text: 'What is Vuesax?',
              link: '/docs/guide/#whats-is-vuesax'
            },
            {
              text: 'Why Vuesax?',
              link: '/docs/guide/#why-vuesax'
            },
            {
              text: 'What\'s new in v4',
              link: '/docs/guide/#features'
            },
            {
              text: 'FAQ',
              link: '/license/#faq'
            }
          ]
        },
        {
          title: 'Resources',
          items: [
            // {
            //   text: 'Blog',
            //   link: '/'
            // },
            {
              text: 'Documentation',
              link: '/docs/'
            },
            {
              text: 'Github',
              link: 'https://github.com/lusaxweb/vuesax-next'
            },
            {
              text: 'Privacy Policy',
              link: '/license/'
            }
          ]
        },
        {
          title: 'Help',
          items: [
            {
              text: 'Github Issues',
              link: 'https://github.com/lusaxweb/vuesax-next/issues'
            },
            // {
            //   text: 'Latest Releases',
            //   link: '/'
            // },
            {
              text: 'FAQ',
              link: '/license/#faq'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              text: 'Discord',
              link: 'https://discord.gg/6AZNXEa'
            },
            {
              text: 'Github',
              link: 'https://github.com/lusaxweb/vuesax-next/'
            }
          ]
        }
      ]
    }
  },
}
</script>
<style lang="stylus" scoped>
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")

.darken
  .subscribe-content
    #mc_embed_signup_scroll
      input
        &[type="email"]
          background getVar(theme-bg) !important

.subscribe-content
  width 100%
  height auto
  overflow hidden
  padding 100px 40px
  display flex
  align-items center
  justify-content center
  flex-direction column
  .con-form
    width 400px
  h4
    padding 0px
    margin 0px
    padding-bottom 15px
    text-align left
    padding-left 10px
    >>>b
      color getColor('primary',1) !important
  #mc_embed_signup_scroll
    display flex
    align-items center
    justify-content center
    input
      padding 14px 20px
      border 0px
      border-radius 17px
      transition all .25s ease
      box-shadow 0px 8px 40px -5px rgba(0,0,0,.09)
      &[type="email"]
        width 400px
        margin-right -30px
        padding-right 30px
        border 2px solid transparent
        padding 14px 20px
        z-index 100
        position relative
        min-width 250px
        background getVar(theme-layout)
        &:focus
          box-shadow 0px 5px 10px 0px rgba(0,0,0,.1)
          transform translate(0,4px)
          ~ .clear
            input
              box-shadow 0px 0px 0px 0px getColor('primary',.6)
              transform translate(0,0px)
      &[type="submit"]
        background getColor('primary')
        color #fff
        box-shadow 0px 10px 20px -10px getColor('primary',.6)
        cursor pointer
        position relative
        z-index 200
        margin-left -85px
        transform translate(0%,-10px)
        &:hover
          box-shadow 0px 10px 20px -10px getColor('primary',.6) !important
          transform translate(0,-5px) !important


.footer
  width 100%
  margin 0px
  display flex
  align-items center
  justify-content center
  flex-direction column
  border-radius 0px 30px 0px 0px
  .footer__uls
    display flex
    align-items flex-start
    justify-content center
  .copy
    position relative
    bottom 0px
    width 100%
    max-width 1000px
    display flex
    align-items center
    justify-content space-between
    font-size .8rem
    padding 20px
    .span-copy
      opacity .5
    .span-lusaxweb
      span
        opacity .5
      a
        opacity .8
        &:hover
          opacity 1
  ul
    padding 30px
    list-style none
    margin 0px
    margin 30px 20px
    .title
      margin-bottom 15px
    li
      font-size 1.1rem
      font-weight bold
      opacity .8
      margin 10px 0px
      a
        font-size .85rem
        opacity .5
        transition all .25s ease
        font-weight normal
        padding 5px
        display block
        &:hover
          opacity 1
          color getColor('primary') !important

@media (max-width: 1200px)
  .footer
    ul
      margin 30px 10px
      padding 15px
@media (max-width: 800px)
  .footer
    .footer__uls
      flex-wrap wrap
    ul
      margin 30px 10px
      padding 15px
      width calc(50% - 20px)
@media (max-width: 600px)
  .footer
    padding-bottom 100px !important
@media (max-width: 500px)
  .footer
    p
    .subscribe-content
      padding 40px 10px
      .con-form
        width 100%
        input[type="email"]
          width calc(100% - 50px) !important
@media (max-width: 400px)
  .footer
    .subscribe-content
      padding 40px 20px
      #mc-embedded-subscribe-form
        display block
        width 100%
      #mc_embed_signup_scroll
        display block
        width 100%
      .con-form
        input[type="email"]
          width 100% !important
          margin-bottom 10px !important
      input
        width 100% !important
        margin-right 0px
        margin-top 10px
        margin-left 0px !important
    ul
      padding  0px 30px
      width calc(100% - 20px)


</style>
