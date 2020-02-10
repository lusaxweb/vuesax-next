<template>
  <div class="center grid">
    <vs-row>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
      100%
    </vs-col>
  </vs-row>

  <vs-row>
    <vs-col :key="index" v-for="col,index in 2" vs-type="flex" vs-justify="center" vs-align="center" w="6">
      50%
    </vs-col>
  </vs-row>

  <vs-row>
    <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" w="4">
      33.3%
    </vs-col>
  </vs-row>

  <vs-row>
    <vs-col :key="index" v-for="col,index in 4" vs-type="flex" vs-justify="center" vs-align="center" w="3">
      25%
    </vs-col>
  </vs-row>

  <vs-row>
    <vs-col :key="index" v-for="col,index in 6" vs-type="flex" vs-justify="center" vs-align="center" w="2">
      16.6%
    </vs-col>
  </vs-row>

  <vs-row>
    <vs-col :key="index" v-for="col,index in 12" vs-type="flex" vs-justify="center" vs-align="center" w="1">
      8.3%
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
  border-radius 20px
  overflow hidden
  padding 0px
.vs-row
  &:first-child
    border-top 2px solid getVar(theme-layout)
.vs-col
  padding 10px
  text-align center
  background getVar(theme-bg2)
  border-left 2px solid getVar(theme-layout)
  border-bottom 2px solid getVar(theme-layout)
  cursor default
  transition all .25s ease
  box-shadow inset 0px 0px 0px 0px rgba(0,0,0,.1)
  &:hover
    transform scale(.93)
    box-shadow inset 0px 10px 20px -10px rgba(0,0,0,.1)
  &:last-child
    border-right 2px solid getVar(theme-layout)


@media ( max-width: 500px )
  .vs-col
    font-size .58rem
    font-weight bold
    padding 10px 0px
</style>
