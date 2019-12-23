<template>
  <div class="grid">
    <vs-row>
      <vs-col :w="num">
        {{ num }}
      </vs-col>
      <vs-col :w="num2">
        {{ num2 }}
      </vs-col>
      <vs-col :w="num">
        {{ num }}
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 2,
      num2: 8
    }
  },
  mounted() {
    setInterval(() => {
      if(this.num == 2) {
        this.num = 4
        this.num2 = 4
      } else if (this.num == 4) {
        this.num = 1
        this.num2 = 10
      } else if (this.num == 1) {
        this.num = 5
        this.num2 = 2
      } else if (this.num == 5) {
        this.num = 2
        this.num2 = 8
      }
    }, 2000)
  }
}
</script>
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
