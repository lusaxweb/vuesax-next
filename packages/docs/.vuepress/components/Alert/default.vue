<template>
  <div class="center">
    <vs-button @click="active=!active">Open / Close</vs-button>
    <vs-button danger @click="content=!content">content</vs-button>
    <vs-alert closable :hidden-content.sync="content" v-model="active">
      <template #close>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/></svg>
      </template>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final

      <template #footer>
        <vs-button border circle>Cancelar</vs-button>
        <vs-button flat circle>Resolver Problema</vs-button>
      </template>
    </vs-alert>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: true,
    content: false
  })
}
</script>
