<template>
  <div class="center">
    <vs-button flat @click="active=true">Open Alert 10s</vs-button>
    <vs-alert :progress="progress" v-model="active">
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: false,
    time: 6000,
    progress: 0
  }),
  watch: {
    active(val) {
      if(val) {
        var interval = setInterval(() => {
          this.progress++
        }, this.time / 100);

        setTimeout(() => {
          this.active = false
          clearInterval(interval)
          this.progress = 0
        }, this.time);
      }
    }
  }
}
</script>
