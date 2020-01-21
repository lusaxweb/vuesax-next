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

    <pre class="data">
      <code>
  {{ options }}
      </code>
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
<style scoped lang="stylus">
.con-checkbox
  flex-direction column
  align-items flex-start
  >>>.vs-checkbox-content
    min-width 80px
  .data
    // background rgba(0,0,0,.025)
    line-height 1rem
    display flex
    align-items center
    justify-content flex-start
    margin-top 10px
    width 100%
</style>
