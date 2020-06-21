# Vuesax + Nuxtjs

<card>

  ## Instalación

  Vuesax 4 tiene un complemento para [create-nuxt-app](https://nuxtjs.org/guide/installation#using-code-create-nuxt-app-code-) con lo cual para iniciar un proyecto es relativamente rápido solo tenemos que seleccionar la opción Vuesax dentro de frameworks UI.

  <img src="/nuxt-ui-vuesax.png" >

</card>

<card>

  ## Version

  Genial ya tenemos vuesax en nuestro proyecto, pero puede que la version no este actualizada ya que esta en constante cambio antes de una version estable.

  Por eso vamos a ejecutar después de terminar de instalar todo `npm install vuesax@next` con esto nos vamos a bajar lo ultimo de vuesax y no debería romper nada

</card>

<card>

  ## Probar un componente

  Ahora que tenemos todo correcto vamos a probar y verificar que todo este listo

  para ello puedes entrar en la carpeta de paginas y agregar una nueva llamada prueba o elegir el `index.vue` que representa la pagina principal de nuestro proyecto

  ### Agregar un componente

  Vamos a probar agregando un componente simple como es el [vsButton](/docs/components/) el código final podría ser algo como esto

  ```html
    <template>
      <div class="app">
        <vs-button>
          Hello World Vuesax + Nuxtjs
        </vs-button>
      </div>
    </template>

    <script>
    export default {}
    </script>

    <style>
    .app {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    </style>
  ```

  y si vemos la pagina `/test` nos encontramos con algo parecido a esto

  <img src="/nuxt-test-page.png" >
</card>

<card>

  ## Tips

  #### nuxt-purgecss

  Por alguna razón este complemento elimina el css de vuesax y hace que en producción después de ejecutar `npm run build` los componentes no funcionen correctamente, si esta usando este complemento por el momento no se puede usar con vuesax 4 para no tener este error

  #### Instalar la ultima version

  Vuesax 4 esta en constante actualización antes de llegar a una version estable y por ello siempre que inicie un proyecto después de instalar todos los paquetes tiene que ejecutar `npm install vuesax@next`

</card>
