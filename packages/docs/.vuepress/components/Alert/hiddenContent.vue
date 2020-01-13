<template>
  <div class="center">
    <vs-alert :hidden-content.sync="hidden" >
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
    hidden: true
  })
}
</script>
