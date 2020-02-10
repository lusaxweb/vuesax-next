<template>
  <div class="grid">
    <vs-row>
      <vs-col :key="index" v-for="col,index in 3" w="2">
        Default {{ index + 1 }}
      </vs-col>
    </vs-row>

    <vs-row justify="center">
      <vs-col :key="index" v-for="col,index in 3" w="2">
        Center {{ index + 1 }}
      </vs-col>
    </vs-row>

    <vs-row justify="flex-end">
      <vs-col :key="index" v-for="col,index in 3" w="2">
        Flex-end {{ index + 1 }}
      </vs-col>
    </vs-row>


    <vs-row justify="space-around">
      <vs-col :key="index" v-for="col,index in 3" w="2">
        Space-around {{ index + 1 }}
      </vs-col>
    </vs-row>

    <vs-row justify="space-between">
      <vs-col :key="index" v-for="col,index in 3" w="2">
        Space-between {{ index + 1 }}
      </vs-col>
    </vs-row>
  </div>
</template>
<style scoped lang="stylus">
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.grid
  border-radius 15px
  overflow hidden
  padding 0px
.vs-row
  background getVar(theme-layout)
  border-bottom 1px dashed getVar(theme-bg2)
.vs-col
  padding 15px 10px
  text-align center
  background getVar(theme-bg2)
  cursor default
  transition all .25s ease
  box-shadow inset 0px 0px 0px 0px rgba(0,0,0,.1)
  font-size .75rem
  &:hover
    transform scale(.93)
    box-shadow inset 0px 10px 20px -10px rgba(0,0,0,.1)

@media ( max-width: 500px )
  .vs-col
    font-size .5rem
    font-weight bold
    padding 10px 2px
</style>
