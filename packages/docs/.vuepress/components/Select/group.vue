<template>
  <div class="center con-selects">
    <vs-select
      label="Group"
      placeholder="Group"
      v-model="value1"
    >
      <vs-option-group>
        <div slot="title">
          Vuejs
        </div>
        <vs-option label="Vuesax" value="1">
          Vuesax
        </vs-option>
        <vs-option label="Vue" value="2">
          Vue
        </vs-option>
        <vs-option label="Javascript" value="3">
          Javascript
        </vs-option>
      </vs-option-group>
      <vs-option-group>
        <div slot="title">
          Others
        </div>
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
      </vs-option-group>
    </vs-select>

    <vs-select
      label="Group Filter"
      filter
      placeholder="Filter"
      v-model="value2"
    >
      <vs-option-group>
        <div slot="title">
          Vuejs
        </div>
        <vs-option label="Vuesax" value="1">
          Vuesax
        </vs-option>
        <vs-option label="Vue" value="2">
          Vue
        </vs-option>
        <vs-option label="Javascript" value="3">
          Javascript
        </vs-option>
      </vs-option-group>
      <vs-option-group>
        <div slot="title">
          Others
        </div>
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
      </vs-option-group>
    </vs-select>

    <vs-select
      label="Group Multiple Filter"
      filter
      multiple
      placeholder="Group Multiple Filter"
      v-model="value3"
    >
      <vs-option-group>
        <div slot="title">
          Vuejs
        </div>
        <vs-option label="Vuesax" value="1">
          Vuesax
        </vs-option>
        <vs-option label="Vue" value="2">
          Vue
        </vs-option>
        <vs-option label="Javascript" value="3">
          Javascript
        </vs-option>
      </vs-option-group>
      <vs-option-group>
        <div slot="title">
          Others
        </div>
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
      </vs-option-group>
    </vs-select>
  </div>
</template>
<script>
export default {
  data:() => ({
    value1: ['3'],
    value2: ['4'],
    value3: ['1'],
  })
}
</script>
<style scoped lang="stylus">
.con-selects
  .vs-select-content
    margin 20px 10px
    max-width calc(40% - 20px)

@media ( max-width: 500px )
  .con-selects
    .vs-select-content
      max-width 100%
</style>
