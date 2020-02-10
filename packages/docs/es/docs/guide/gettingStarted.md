# Getting Started

<card>

  ## Installation

  Vuesax es un framework de componentes UI basado en Vuejs lo que quiere decir que vuejs tiene que estar en su proyecto para que Vuesax pueda hacer la magia.

</card>

<card>

  ## NPM

  Puedes instalar vuesax por medio de npm con el comando:

  ```bash
  npm install vuesax@next # OR yarn add vuesax@next
  ```

</card>

<card>

  ## Uso

  Para usar vuesax en su proyecto de vuejs agrega este codigo:

  ```js
    import Vue from 'vue'
    import Vuesax from 'vuesax'

    import 'vuesax/dist/vuesax.css' //Vuesax styles
    Vue.use(Vuesax, {
      // options here
    })
  ```

</card>

<card>

  ## Componentes individuales (bajo demanda)

  Hay casos que en tu proyecto solo necesitas algunos componentes de vuesax y para ello puedes agregarlos de la siguiente manera

  ```js
    import Vue from 'vue'
    import { vsButton, vsSelect, vsPopup } from 'vuesax'
    import 'vuesax/dist/vuesax.css'

    Vue.use(vsButton)
    Vue.use(vsSelect)
    Vue.use(vsPopup)
  ```

</card>

<card>

  ## CDN

  Puedes usar vuesax cargandolo por medio de cdn agregando una etiqueta `<script>` a tu proyecto

  ```html
    <!DOCTYPE html>
    <html>
    <head>
      <link href="https://cdn.jsdelivr.net/npm/vuesax/dist/vuesax.css" rel="stylesheet">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
    </head>
    <body>
      <div id="app">
        <vs-button>Hello World</vs-button>
      </div>

      <script src="https://unpkg.com/vue/dist/vue.js"></script>
      <script src="https://unpkg.com/vuesax"></script>
      <script>
        new Vue({
          el: '#app'
        })
      </script>
    </body>
    </html>
  ```

</card>


<!-- ### New applications Vue CLI

### Vue UI Install

### Existing applications -->
