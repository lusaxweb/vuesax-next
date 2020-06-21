<template>
  <div class="center con-checkbox">
    <vs-checkbox :val="{ github: 'https://github.com/webpack/webpack', name: 'Webpack' }" v-model="options">
      Webpack
    </vs-checkbox>
    <vs-checkbox :val="{ github: 'https://github.com/microsoft/TypeScript', name: 'Typescript' }" v-model="options">
      Typescript
    </vs-checkbox>
    <vs-checkbox :val="{ github: 'https://github.com/sass/sass', name: 'Sass' }" v-model="options">
      Sass
    </vs-checkbox>

    <pre class="data-check">
  {{ options }}
    </pre>
  </div>
</template>
<script>
export default {
  data:() => ({
    options: [
      {
        "github": "https://github.com/webpack/webpack",
        "name": "Webpack"
      }
    ],
  }),
}
</script>
<style scoped lang="stylus" scoped>
.con-checkbox
  flex-direction column
  align-items flex-start
  >>>.vs-checkbox-content
    min-width 80px
  .data-check
    background rgba(0,0,0,.03)
    padding 10px
    border-radius 18px
    margin-top 20px
    font-size .9rem
    width 100%
    pre
      background transparent
      padding 0px 10px
      overflow hidden
</style>
