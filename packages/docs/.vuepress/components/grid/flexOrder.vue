<template>
  <div>
    <vs-row vs-w="12">
      <vs-col w="3">
        1
      </vs-col>
      <vs-col w="3">
        2
      </vs-col>
      <vs-col order="-1" w="3">
        3
      </vs-col>
      <vs-col w="3">
        4
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
.vs-row
  background getVar(theme-layout)
.vs-col
  padding 10px
  text-align center
  background getVar(theme-bg2)
  cursor default
  transition all .25s ease
  box-shadow inset 0px 0px 0px 0px rgba(0,0,0,.1)
  border 2px solid getVar(theme-layout)
  &:hover
    transform scale(.93)
    box-shadow inset 0px 10px 20px -10px rgba(0,0,0,.1)
</style>
