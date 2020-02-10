<template>
  <div class="grid">
    <vs-row justify="center">
      <vs-col :key="index" v-for="col,index in 3" w="2">
        Default {{ index + 1 }}
      </vs-col>
    </vs-row>

    <vs-row align="center" justify="center">
      <vs-col :key="index" v-for="col,index in 3" w="2">
        Center {{ index + 1 }}
      </vs-col>
    </vs-row>

    <vs-row align="flex-end" justify="center">
      <vs-col :key="index" v-for="col,index in 3" w="2">
        Flex-end {{ index + 1 }}
      </vs-col>
    </vs-row>


    <vs-row class="mh" align="center" justify="space-around" direction="column">
      <vs-col :key="index" v-for="col,index in 3" w="2">
        Space-around {{ index + 1 }}
      </vs-col>
    </vs-row>

    <vs-row class="mh" align="center" justify="space-between" direction="column">
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
  min-height 70px
.mh
  min-height 170px

.vs-col
  padding 5px 10px
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
