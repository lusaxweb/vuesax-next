---
PROPS:
  - name: v-model
    type: Number
    values: Number
    description: Determina la pagina en la que se encuentra el usuario.
    default: 1
    link: null
    usage: '#default'
    code: >
            <vs-pagination v-model="page" :length="20" />
  - name: length
    type: Number
    values: Number
    description: Es el numero total de paginas que tiene el componente.
    default: null
    link: null
    usage: '#default'
    code: >
            <vs-pagination v-model="page" :length="20" />
  - name: color
    type: Vuesax colors, RGB, HEX
    values: String
    description: Cambia el color base de el componente.
    default: primary
    link: null
    usage: '#color'
    code: >
            <vs-pagination color="danger" v-model="page" :length="20" />
  - name: disabled
    type: Boolean
    values: true, false
    description: Determina si todo el componente se encuentra en estado de disabled.
    default: false
    link: null
    usage: '#disabled'
    code: >
            <vs-pagination disabled v-model="page" :length="20" />
  - name: not-arrows
    type: Boolean
    values: true, false
    description: Remueve las flechas (siguiente y atrás) de el componente.
    default: false
    link: null
    usage: '#not-arrows'
    code: >
            <vs-pagination not-arrows v-model="page" :length="20" />
  - name: only-arrows
    type: Boolean
    values: true, false
    description: Remueve los items dejando solo las flechas (siguiente y atrás).
    default: false
    link: null
    usage: '#only-arrows'
    code: >
            <vs-pagination only-arrows v-model="page" :length="20" />
  - name: circle
    type: Boolean
    values: true, false
    description: Cambia el estilo de los botones haciéndolos totalmente redondos.
    default: false
    link: null
    usage: '#circle'
    code: >
            <vs-pagination circle v-model="page" :length="20" />
  - name: square
    type: Boolean
    values: true, false
    description: Cambia el estilo de los botones haciéndolos totalmente cuadrados.
    default: false
    link: null
    usage: '#square'
    code: >
            <vs-pagination square v-model="page" :length="20" />
  - name: buttons-dotted
    type: Boolean
    values: true, false
    description: Hace que los botones no tengan el numero interno y cambia su tamaño.
    default: false
    link: null
    usage: '#buttons-dotted'
    code: >
            <vs-pagination buttons-dotted v-model="page" :length="20" />
  - name: disabled-items
    type: Boolean
    values: true, false
    description: Determina cuales elementos se encuentran en estado de disabled.
    default: false
    link: null
    usage: '#disabled-items'
    code: >
            <vs-pagination :disabled-items="[3,4,9,10,11,12,19]" v-model="page" :length="20" />
  - name: loading-items
    type: Boolean
    values: true, false
    description: Determina cuales elementos se encuentran en estado de cargando.
    default: false
    link: null
    usage: '#loading-items'
    code: >
            <vs-pagination :loading-items="[3,4,9,10,11,12,19]" v-model="page" :length="20" />
  - name: not-margin
    type: Boolean
    values: true, false
    description: Cambia el margin entre los items haciendo que estén totalmente pegados y se elimina el radius haciéndolos cuadrados.
    default: false
    link: null
    usage: '#not-margin'
    code: >
            <vs-pagination not-margin v-model="page" :length="20" />
  - name: progress
    type: Boolean
    values: true, false
    description: Agrega una barra de progreso al componente determinada por la pagina actual y el total (length) de paginas.
    default: false
    link: null
    usage: '#progress'
    code: >
            <vs-pagination progress v-model="page" :length="20" />
  - name: dotted-number
    type: Number
    values: Number
    description: Cambia el total de paginas que se van a agregar o restar al darle click a los puntos.
    default: false
    link: null
    usage: '#dotted-number'
    code: >
            <vs-pagination :dotted-number="10" v-model="page" :length="100" />
  - name: infinite
    type: Boolean
    values: true,false
    description: Determina si la pagination es infinita.
    default: false
    link: null
    usage: '#infinite'
    code: >
            <vs-pagination infinite v-model="page" :length="100" />

SLOTS:
  - name: default
    type: slot
    values: null
    description: Espacio entre las dos flechas (siguiente y atrás).
    default: null
    link: null
    usage: '#slot'
    code: >
            <vs-pagination v-model="page" :length="20">
              <vs-select v-model="page">
                <vs-option
                  v-for="numberPage in 20"
                  :label="numberPage"
                  :value="numberPage">
                  {{ numberPage }}
                </vs-option>
              </vs-select>
            </vs-pagination>

NEWS:
  - disabled
  - not-arrows
  - only-arrows
  - circle
  - square
  - buttons-dotted
  - disabled-items
  - loading-items
  - not-margin
  - slot
  - progress
  - dotted-number
  - infinite
---

# Pagination

<card>

## Default

<docs-warn />

Agrega una pagination fácilmente con el componente `vs-pagination`, las propiedaes requeridas son `length` y `v-model`

<div slot="example">
  <Pagination-default />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-pagination v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1
      })
    }
    </script>
  ```

</div>

</card>

<card>

## Color

<Color />

<div slot="example">
  <Pagination-color />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center con-pagination">
        <div class="con-radio">
          <vs-radio success v-model="color" val="success">
            Success
          </vs-radio>
          <vs-radio danger v-model="color" val="danger">
            Danger
          </vs-radio>
          <vs-radio warn v-model="color" val="warn">
            Warning
          </vs-radio>
          <vs-radio dark v-model="color" val="dark">
            Dark
          </vs-radio>
          <vs-radio color="#7d33ff" v-model="color" val="#7d33ff">
            HEX
          </vs-radio>
          <vs-radio color="rgb(59,222,200)" v-model="color" val="rgb(59,222,200)">
            RGB
          </vs-radio>
        </div>
        <vs-pagination :color="color" v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4,5}
    <script>
    export default {
      data:() => ({
        page: 1,
        color: 'success'
      }),
    }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
    .con-pagination
      .con-radio
        display flex
        align-items center
        justify-content flex-start
        .vs-radio-content
          margin 10px
      .vs-pagination-content
        margin 10px 0px
    </style>
  ```

</div>

</card>

<card>

## Disabled

Cambia el estado disabled de el componente con la propiedad `disabled`, esta propiedad es un boolean y puedes agregarla sin valor

<div slot="example">
  <Pagination-disabled />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination disabled v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Not Arrows

Puedes eliminar las flechas de atrás y siguiente con la propiedad `not-arrows`

<div slot="example">
  <Pagination-not-arrows />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination not-arrows v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      })
    }
    </script>
  ```

</div>

</card>

<card>

## Only Arrows

Puedes necesitar en espacios reducidos eliminar los botones y dejar solo las flechas para ello tenemos la propiedad `only-arrows`

<div slot="example">
  <Pagination-only-arrow />
</div>

<div slot="template">

  ```html{3,5}
    <template>
      <div class="center con-pagination">
        <vs-pagination only-arrows v-model="page" :length="10" />
        <code>
          Page: <b>{{ page }}</b>
        </code>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Circle

Cambia el radius de todos los elementos que componen al componente haciendo que sean circulares con la propiedad `circle`, esta propiedad es un boolean por lo cual no necesita valor

<div slot="example">
  <Pagination-circle />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination circle v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Square

Cambia el radius de todos los elementos que componen al componente haciendo que sean cuadrados con la propiedad `square`, esta propiedad es un boolean por lo cual no necesita valor

<div slot="example">
  <Pagination-square />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination square v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Buttons Dotted

Cambia por completo el estilo de el componente y elimina los números internos en cada botón con la propiedad `buttons-dotted`

<div slot="example">
  <Pagination-buttons-dotted />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination buttons-dotted v-model="page" :length="6" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Disabled Items

Puedes poner en estado de disabled botones específicos de el componente pagination con la propiedad `disabled-items`, esta propiedad es un array con el numero de el botón que se desea poner en estado de disabled

:::tip
Los botones que se encuentran en disabled se van a saltar al cambiar el valor por ejemplo en los botones de siguiente o atrás
:::

<div slot="example">
  <Pagination-disabledItems />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination :disabled-items="[3,4,9,10,11,12,19]" v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Loading Items

Puedes hacer que un botón dentro de la pagination este en estado de loading con la propiedad `loading-items`, esta propiedad es un array con el numero de el botón que se desea poner en estado de disabled

:::tip
Los botones que se encuentran en loading se van a saltar al cambiar el valor por ejemplo en los botones de siguiente o atrás
:::

<div slot="example">
  <Pagination-loadingItems />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination :loading-items="[3,4,9,10,11,12,19]" v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Not Margin

Cambia el estilo de todo el componente eliminando el margin entre los botones y cambiando el radius con la propiedad `not-margin`

<div slot="example">
  <Pagination-not-margin />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination not-margin v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Slot

Puedes necesitar personalizar tu pagination y para ello puedes usar el slot `default` que se encuentra entre las flechas y sustituye los items de las paginas

<div slot="example">
  <Pagination-slot />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination v-model="page" :length="20">
          <vs-select v-model="page">
            <vs-option
              v-for="numberPage in 20"
              :label="numberPage"
              :value="numberPage">
              {{ numberPage }}
            </vs-option>
          </vs-select>
        </vs-pagination>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
    .con-pagination
      .vs-select-content
        max-width 60px
        margin 0px 4px
      .vs-pagination-content
        margin 10px 0px
    </style>
  ```

</div>

</card>

<card>

## Progress

Agrega una barra de progreso a la pagination haciendo referencia en donde se encuentra a la ultima pagina con la propiedad `progress`

<div slot="example">
  <Pagination-progress />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination progress v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Dotted Number

Puedes cambiar el numero de paginas que se suman cuando el usuario hace click en los puntos para avanzar mas paginas rápidamente, esto lo puedes hacer con la propiedad `dotted-number` y el valor seria el numero de paginas que se suman o se restan (por defecto es **5**)

<div slot="example">
  <Pagination-dotted-number />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination :dotted-number="10" v-model="page" :length="100" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Infinite

Puedes hacer que la pagination sea infinita con la propiedad `infinite`, esto genera que ya los botones de flecha no se encuentren en estado disabled

<div slot="example">
  <Pagination-infinite />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-pagination infinite v-model="page" :length="10" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1
      })
    }
    </script>
  ```

</div>

</card>

<card>

## API

</card>
