<template>
  <div class="center">
    <vs-alert :page.sync="page" >
      <template #title>
        Vuesax Framework
      </template>

      <template #page-1>
        Pagina 1 - esta pagina es un slot y aquí adentro puedes agregar ya sea texto, elementos html o componentes
      </template>

      <template #page-2>
        Pagina 2 - En esta otra pagina puedes poner también lo que necesites y es dinámico osea que puedes agregar cuantas paginas necesites
      </template>

      <template #page-3>
        Pagina 3 - esta es la ultima pagina de el ejemplo
      </template>
    </vs-alert>
  </div>
</template>
<script>
export default {
  data:() => ({
    page: 1
  })
}
</script>
