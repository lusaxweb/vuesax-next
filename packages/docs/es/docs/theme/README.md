# Colors

<card>

  ## Colores Predeterminados

  Vuesax tiene los colores principales que se mantienen durante toda la aplicación para facilitar el cambio y la operación efectiva

  Los colores principales se pueden cambiar y personalizar al gusto de cada desarrollador para una aplicación mas personalizada

  Colores por defecto:

  - primary
  - success
  - danger
  - warn
  - dark

  <colors-default />

</card>

<card>
  
  ## Customize Theme Colors

  Puedes cambiar los colores como tu quieras y en cualquier momento, vuesax usa variables de css nativas lo que significa que puedes acceder a ellas y cambiarlas cuando quieras 

  igual vuesax te proporciona varias formas de cambiar los colores principales ya sea por css o javascript

</card>

<card>

  ## javascript

  ```js
    Vue.use(Vuesax, {
      colors: {
        primary:'#5b3cc4',
        success:'rgb(23, 201, 100)',
        danger:'rgb(242, 19, 93)',
        warning:'rgb(255, 130, 0)',
        dark:'rgb(36, 33, 69)'
      }
    })
  ```
  
</card>

<card>

  ## css

  Puedes cambiar las variables de vuesax por medio de css como cualquier otra variable css

  ::: warning Formato HEX solo Números

  Es importante que los colores sean en formato HEX y solo el valor numerico por ejemplo: `rgb(255,100,50)` es equivalente a `255,100,50`

  :::

  ```css
    :root {
      --vs-primary: 91, 60, 196
      --vs-success: 23, 201, 100
      --vs-danger: 242, 19, 93
      --vs-warn: 254, 130, 0
      --vs-dark: 36, 33, 69
    }
  ```

</card>

<card>

  ## VS Function

  Puedes cambiar los colores principales en cualquier punto de tu aplicación pero solo del lado del cliente con la existencia del `document object`  con la funcion de vuesax `$vs.setColor`

  ::: warning

  Solo puedes usar esta funcion cuando se puede obtener el objeto document, por ejemplo no se puede usar en el `created()` de vuejs ya que todavia no esta renderizado el documento ni los elementos

  :::

  ```html

    <script>
      export default {
        mounted() {
          this.$vs.setColor('primary', '#000')
        }
      }
    </script>

  ```

</card>

