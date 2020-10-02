# Colors

<card>

  ## Default Colors

  Vuesax has the main colors that are maintained throughout the application to facilitate change and effective operation

  The main colors can be changed and customized to the taste of each developer for a more personalized application

  Default colors:

  - primary
  - success
  - danger
  - warn
  - dark

  <colors-default />

</card>

<card>

  ## Customize Theme Colors

  You can change the colors as you want and at any time, vuesax uses native css variables which means you can access them and change them whenever you want

  equal vuesax gives you several ways to change the main colors either by css or javascript

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

  You can change the vuesax variables by means of css like any other css variable

  ::: warning HEX Format Numbers Only

  It is important that the colors are in HEX format and only the numerical value for example: `rgb (255,100,50)` is equivalent to `255,100,50`

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

  You can change the main colors at any point of your application but only on the client side with the existence of the `document object` with the function of vuesax` $ vs. setColor`

  ::: warning

  You can only use this function when you can obtain the document object, for example it cannot be used in the `created ()` of vuejs since the document and the elements are not yet rendered

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

