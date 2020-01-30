<template>
  <div class="center con-selects">
    <vs-select
      placeholder="Success"
      v-model="value1"
      loading
    >
      <vs-option label="Vuesax" value="1">
        Vuesax
      </vs-option>
      <vs-option label="Vue" value="2">
        Vue
      </vs-option>
      <vs-option label="Javascript" value="3">
        Javascript
      </vs-option>
      <vs-option label="Sass" value="4">
        Sass
      </vs-option>
      <vs-option label="Typescript" value="5">
        Typescript
      </vs-option>
      <vs-option label="Webpack" value="6">
        Webpack
      </vs-option>
      <vs-option label="Nodejs" value="7">
        Nodejs
      </vs-option>
    </vs-select>

    <vs-select
      placeholder="Warn"
      v-model="value2"
      loading
      multiple
    >
      <vs-option label="Vuesax" value="1">
        Vuesax
      </vs-option>
      <vs-option label="Vue" value="2">
        Vue
      </vs-option>
      <vs-option label="Javascript" value="3">
        Javascript
      </vs-option>
      <vs-option label="Sass" value="4">
        Sass
      </vs-option>
      <vs-option label="Typescript" value="5">
        Typescript
      </vs-option>
      <vs-option label="Webpack" value="6">
        Webpack
      </vs-option>
      <vs-option label="Nodejs" value="7">
        Nodejs
      </vs-option>
    </vs-select>
  </div>
</template>
<script>
export default {
  data:() => ({
    value1: '3',
    value2: ['4','1','3'],
  })
}
</script>
<style scoped lang="stylus">
.con-selects
  align-items flex-start
  .vs-select-content
    margin 10px
    max-width 40%

@media ( max-width: 500px )
  .con-selects
    .vs-select-content
      max-width 100%
</style>
