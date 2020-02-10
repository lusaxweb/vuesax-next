<template>
  <div>
    <vs-row vs-w="12">
      <vs-col offset="5" w="6">
        offset = 6
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col offset="0" w="2">
        offset = 2
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col offset="2" w="8">
        offset = 8
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col offset="9" w="3">
        offset = 7
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col offset="4" w="4">
        offset = 4
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
  background getVar(theme-layout)
  border-bottom 1px dashed getVar(theme-bg2)
.vs-col
  padding 10px
  text-align center
  background getVar(theme-bg2)
  cursor default
  transition all .25s ease
  box-shadow inset 0px 0px 0px 0px rgba(0,0,0,.1)
  &:hover
    transform scale(.93)
    box-shadow inset 0px 10px 20px -10px rgba(0,0,0,.1)
@media ( max-width: 500px )
  .vs-col
    font-size .6rem
    font-weight bold
    padding 10px 2px
</style>
