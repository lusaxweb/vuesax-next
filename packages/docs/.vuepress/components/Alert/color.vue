<template>
  <div class="center alert-example">
    <vs-alert :color="color">
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>

    <vs-button :active="color == 'primary'" @click="color = 'primary'" flat>
      Primary
    </vs-button>
    <vs-button :active="color == 'success'" @click="color = 'success'" success flat>
      Success
    </vs-button>
    <vs-button :active="color == 'danger'" @click="color = 'danger'" danger flat>
      Danger
    </vs-button>
    <vs-button :active="color == 'warn'" @click="color = 'warn'" warn flat>
      Warn
    </vs-button>
    <vs-button :active="color == 'dark'" @click="color = 'dark'" dark flat>
      Dark
    </vs-button>
    <vs-button :active="color == '#7d33ff'" @click="color = '#7d33ff'" color="#7d33ff" flat>
      HEX
    </vs-button>
    <vs-button :active="color == 'rgb(59,222,200)'" @click="color = 'rgb(59,222,200)'" color="rgb(59,222,200)" flat>
      RGB
    </vs-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    color: 'danger'
  })
}
</script>
<style scoped lang="stylus">
.alert-example
  .vs-button--active
    transform translate(0, -5px)
    border-radius 0px 0px 12px 12px
</style>
