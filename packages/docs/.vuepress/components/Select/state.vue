<template>
  <div class="center con-selects">
    <vs-select
      v-for="(color, i) in colors"
      :key="i"
      :state="color.color"
      :label="color.color"
      placeholder="Select"
      v-model="color.value"
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
    colors: [
      {
        color: 'primary',
        value: '1'
      },
      {
        color: 'danger',
        value: '1'
      },
      {
        color: 'success',
        value: '2'
      },
      {
        color: 'warn',
        value: '3'
      },
      {
        color: 'dark',
        value: '4'
      }
    ]
  })
}
</script>
<style scoped lang="stylus">
.con-selects
  .vs-select-content
    margin 10px
</style>
