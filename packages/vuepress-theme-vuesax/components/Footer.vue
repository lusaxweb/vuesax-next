<template>
  <footer class="footer">
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
          <a href="">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>

    <div class="copy">
      <span class="span-copy">
        Copyright © 2019 Vuesax
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
  data() {
    return {
      links:[
        {
          title: 'Vuesax',
          items: [
            {
              text: 'What is Vuesax?',
              link: '/'
            },
            {
              text: 'Why Vuesax?',
              link: '/'
            },
            {
              text: 'What\'s new in v4',
              link: '/'
            },
            {
              text: 'FAQ',
              link: '/'
            }
          ]
        },
        {
          title: 'Resources',
          items: [
            {
              text: 'Blog',
              link: '/'
            },
            {
              text: 'Documentation',
              link: '/'
            },
            {
              text: 'Github',
              link: '/'
            },
            {
              text: 'Privacy Policy',
              link: '/'
            }
          ]
        },
        {
          title: 'Help',
          items: [
            {
              text: 'Github Issues',
              link: '/'
            },
            {
              text: 'Latest Releases',
              link: '/'
            },
            {
              text: 'FAQ',
              link: '/'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              text: 'Discord',
              link: '/'
            },
            {
              text: 'Github',
              link: '/'
            }
          ]
        }
      ]
    }
  },
}
</script>
<style lang="stylus" scoped>
getVar(var)
    unquote("var(--vs-"+var+")")
.footer
  width 100%
  background getVar(theme-bg2)
  margin 0px
  margin-top 100px
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
      a
        font-size .9rem
        opacity .5
        transition all .25s ease
        font-weight normal
        padding 5px
        display block
        &:hover
          opacity 1
</style>
