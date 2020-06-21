# Getting Started

<card>

  ## Installation

  Vuesax is a framework of UI components based on Vuejs which means that vuejs has to be in your project so that Vuesax can do the magic.

</card>

<card>

  ## NPM

  You can install vuesax through npm with the command:

  ```bash
  npm install vuesax@next # OR yarn add vuesax@next
  ```

</card>

<card>

  ## Uso

  To use vuesax in your vuejs project, add this code:

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

  ## Individual components (on demand)

  There are cases that in your project you only need some components of vuesax and for this you can add them as follows

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

  You can use vuesax by loading it via cdn by adding a `<script>` tag to your project

  ```html
    <!DOCTYPE html>
    <html>
    <head>
      <link href="https://unpkg.com/vuesax@4.0.1-alpha.16/dist/vuesax.min.css" rel="stylesheet">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
    </head>
    <body>
      <div id="app">
        <vs-button>Hello World</vs-button>
      </div>

      <script src="https://unpkg.com/vue/dist/vue.js"></script>
      <script src="https://unpkg.com/vuesax@4.0.1-alpha.16/dist/vuesax.min.js"></script>
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
