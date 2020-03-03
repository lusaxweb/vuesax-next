---
PROPS:
  - name: v-model
    type: boolean
    values: true,false
    description: Determina si el componente se encuentra activo (visible).
    default: false
    link: null
    usage: '#content'
    code: null

  - name: color
    type: String
    values: Vuesax colors, RGB, HEX
    description: Cambia el color de el tooltip.
    default: text
    link: null
    usage: '#color'
    code: >
            <vs-tooltip primary>
              <vs-button flat>
                Primary
              </vs-button>
              <template #tooltip>
                This is a beautiful button
              </template>
            </vs-tooltip>

  - name: left, right, bottom
    type: Boolean
    values: true,false
    description: Cambia la position de el tooltip.
    default: top
    link: null
    usage: '#position'
    code: >
            <vs-tooltip left>
              <vs-button border>
                left
              </vs-button>
              <template #tooltip>
                This is a beautiful button
              </template>
            </vs-tooltip>

  - name: border
    type: Boolean
    values: true,false
    description: Cambia el estilo de el tooltip agregando un borde.
    default: primary
    link: null
    usage: '#border'
    code: >
            <vs-tooltip border>
              <vs-button transparent>
                Do hover here
              </vs-button>
              <template #tooltip>
                This is a beautiful button
              </template>
            </vs-tooltip>

  - name: border-thick
    type: Boolean
    values: true,false
    description: Cambia el estilo de el tooltip agregando un borde grueso solo en la posición de la flecha.
    default: false
    link: null
    usage: '#border'
    code: >
            <vs-tooltip color="#7d33ff" border-thick>
              <vs-button color="#7d33ff" transparent>
                Do hover here
              </vs-button>
              <template #tooltip>
                This is a beautiful button
              </template>
            </vs-tooltip>

  - name: square
    type: Boolean
    values: trie,false
    description: Determina si el tooltip es rectangular sin border-radius.
    default: false
    link: null
    usage: '#square'
    code: >
            <vs-tooltip square>
              <vs-button square flat>
                Do hover here
              </vs-button>
              <template #tooltip>
                This is a beautiful button
              </template>
            </vs-tooltip>

  - name: circle
    type: boolean
    values: true,false
    description: Cambia el border radius a 20px haciendo que si es una sola linea de texto sea circular las esquinas.
    default: false
    link: null
    usage: '#circle'
    code: >
            <vs-tooltip circle>
              <vs-button circle flat>
                Do hover here
              </vs-button>
              <template #tooltip>
                This is a beautiful button
              </template>
            </vs-tooltip>

  - name: shadow
    type: boolean
    values: true,false
    description: Cambia el estilo de el tooltip agregando un shadow y cambiando el fondo.
    default: false
    link: null
    usage: '#shadow'
    code: >
            <vs-tooltip shadow>
              <vs-button flat>
                Do hover here
              </vs-button>
              <template #tooltip>
                This is a beautiful button
              </template>
            </vs-tooltip>

  - name: not-arrow
    type: boolean
    values: true,false
    description: Elimina la flecha de el tooltip.
    default: false
    link: null
    usage: '#not-arrow'
    code: >
            <vs-tooltip not-arrow left>
              <vs-button border>
                left not-arrow
              </vs-button>
              <template #tooltip>
                This is a beautiful button
              </template>
            </vs-tooltip>

  - name: not-hover
    type: boolean
    values: true,false
    description: El tooltip por defecto se genera el hacer hover en el elemento padre, esa funcionalidad se elimina y ya no aparece o desaparece al hacer hover.
    default: false
    link: null
    usage: '#content'
    code: >
            <vs-tooltip bottom shadow not-hover v-model="activeTooltip1">
              <vs-button danger @click="activeTooltip1=!activeTooltip1">
                Click Delete User
              </vs-button>
              <template #tooltip>
                <div class="content-tooltip">
                  <h4 class="center">
                    Confirm
                  </h4>
                  <p>
                    You are sure to delete this user, by doing so you cannot recover the data
                  </p>
                  <footer>
                    <vs-button @click="activeTooltip1=false" danger block>
                      Delete
                    </vs-button>
                    <vs-button @click="activeTooltip1=false" transparent dark block>
                      Cancel
                    </vs-button>
                  </footer>
                </div>
              </template>
            </vs-tooltip>

  - name: interactivity
    type: boolean
    values: true,false
    description: Determina si el tooltip es interactivo y hace que puedas hacer click sin que se oculte automáticamente.
    default: false
    link: null
    usage: '#content'
    code: >
            <vs-tooltip shadow interactivity>
              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="">
              </vs-avatar>
              <template #tooltip>
                <div class="content-tooltip">
                  <div class="body">
                    <div class="text">
                        Cosed Tasks
                      <span>
                      89
                      </span>
                    </div>
                    <vs-avatar circle size="80" @click="activeTooltip1=!activeTooltip1">
                      <img src="/avatars/avatar-5.png" alt="">
                    </vs-avatar>
                    <div class="text">
                        Open Tasks
                      <span>
                      8
                      </span>
                    </div>
                  </div>
                  <footer>
                    <vs-button circle icon border>
                      <i class='bx bxs-share-alt'></i>
                    </vs-button>
                    <vs-button circle>
                      Message
                    </vs-button>
                    <vs-button circle icon border>
                      <i class='bx bx-like' ></i>
                    </vs-button>
                  </footer>
                </div>
              </template>
            </vs-tooltip>

  - name: loading
    type: boolean
    values: true,false
    description: Determina si el tooltip tiene un estilo y animación de loading.
    default: false
    link: null
    usage: '#loading'
    code: >
                <template>
                  <div class="center">
                    <vs-tooltip loading>
                      <vs-button flat>
                        Do hover here loading
                      </vs-button>
                      <template #tooltip>
                        This is a beautiful button
                      </template>
                    </vs-tooltip>
                    <vs-tooltip loading>
                      <vs-button flat>
                        Do hover here loading
                      </vs-button>
                      <template #tooltip></template>
                    </vs-tooltip>
                  </div>
                </template>

SLOTS:
  - name: default
    type: slot
    values: null
    description: Agrega el elemento disparador de el tooltip.
    default: null
    link: null
    usage: '#default'
    code: >
            <vs-tooltip>
              <vs-button flat>
                Do hover here
              </vs-button>
              <template #tooltip>
                This is a beautiful button
              </template>
            </vs-tooltip>
  - name: tooltip
    type: slot
    values: null
    description: Es el contenido que va a ir dentro de el tooltip.
    default: null
    link: null
    usage: '#default'
    code: >
            <vs-tooltip>
              <vs-button flat>
                Do hover here
              </vs-button>
              <template #tooltip>
                This is a beautiful button
              </template>
            </vs-tooltip>

NEWS:
  - border
  - square
  - circle
  - shadow
  - not-arrow
  - loading
  - content
---

# Tooltip

<card>

## Default

<docs-warn />

Agrega un tooltip fácilmente con el componente `vs-tooltip` el contenido dentro de el slot `default` es el elemento padre de el tooltip y el que dispara el mostrarlo o ocultarlo

El slot `tooltip` es el contenido dentro de el tooltip

<div slot="example">
  <Tooltip-default />
</div>

<div slot="template">

  ```html{3-10}
    <template>
      <div class="center">
        <vs-tooltip>
          <vs-button flat>
            Do hover here
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Position

Cambia la posición de el tooltip con las propiedades

- top (default)
- bottom
- left
- right

<div slot="example">
  <Tooltip-position />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-tooltip left>
          <vs-button border>
            left
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip>
          <vs-button border>
            Top
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip bottom>
          <vs-button border>
            Bottom
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip right>
          <vs-button border>
            right
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Color

<color />

<div slot="example">
  <Tooltip-color />
</div>

<div slot="template">

  ```html{11}
    <template>
      <div class="center">
        <vs-tooltip>
          <vs-button shadow>
            Default
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip primary>
          <vs-button flat>
            Primary
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip success>
          <vs-button success flat>
            Success
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip danger>
          <vs-button danger flat>
            Danger
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip warn>
          <vs-button warn flat>
            Warning
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip dark>
          <vs-button dark flat>
            Dark
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip color="#7d33ff">
          <vs-button color="#7d33ff" flat>
            HEX
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip color="rgb(59,222,200)">
          <vs-button color="rgb(59,222,200)" flat>
            RGB
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    ...
  ```

</div>

</card>

<card>

## Border

Cambia el estilo de el tooltip agregando un borde y cambiando el color de el fondo con la propiedad `border` o `border-thick`

:::tip
Ahora la propiedad color cambiaría el color de el borde
:::

<div slot="example">
  <Tooltip-border />
</div>

<div slot="template">

  ```html{3,19}
    <template>
      <div class="center">
        <vs-tooltip border>
          <vs-button transparent>
            Do hover here
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip danger border>
          <vs-button danger transparent>
            Do hover here
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip color="#7d33ff" border-thick>
          <vs-button color="#7d33ff" transparent>
            Do hover here
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Square

Cambia el `border-radius` de el tooltip para que sea totalmente un rectángulo

<div slot="example">
  <Tooltip-square />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-tooltip square>
          <vs-button square flat>
            Do hover here
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Circle

Cambia el `border-radius` de el tooltip para que sea mas circular

:::tip
Esta propiedad solo aplica cuando el tooltip tiene menos de una linea de texto
:::

<div slot="example">
  <Tooltip-circle />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-tooltip circle>
          <vs-button circle flat>
            Do hover here
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Shadow

Cambia el estilo de el tooltip a tener un shadow y el color de fondo

<div slot="example">
  <Tooltip-shadow />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-tooltip shadow>
          <vs-button flat>
            Do hover here
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</div>

</card>


<card>

## Not Arrow

Puede que en algunos casos necesites eliminar la flecha de el tooltip para ello puedes usar la propiedad `not-arrow`

<div slot="example">
  <Tooltip-notArrow />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-tooltip not-arrow left>
          <vs-button border>
            left not-arrow
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip not-arrow>
          <vs-button border>
            Top not-arrow
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip not-arrow bottom>
          <vs-button border>
            Bottom not-arrow
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip not-arrow right>
          <vs-button border>
            right not-arrow
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Loading

Agrega una animación y estilo de cargando al tooltip

<div slot="example">
  <Tooltip-loading />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-tooltip loading>
          <vs-button flat>
            Do hover here loading
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip loading>
          <vs-button flat>
            Do hover here loading
          </vs-button>
          <template #tooltip></template>
        </vs-tooltip>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Content

Creamos el componente tooltip de tal manera que tengas mucha libertad de agregar cualquier cosa y crear todo tipo de interfaz adentro de el

<div slot="example">
  <Tooltip-content />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-tooltip>
          <vs-button gradient>
            Whats is Vuesax?
          </vs-button>
          <template #tooltip>
            <div class="content-tooltip">
              <h4>
                Whats is Vuesax?
              </h4>
              <p>
                Vuesax is a framework of UI components created with Vuejs
              </p>
            </div>
          </template>
        </vs-tooltip>
        <vs-tooltip bottom shadow not-hover v-model="activeTooltip1">
          <vs-button danger @click="activeTooltip1=!activeTooltip1">
            Click Delete User
          </vs-button>
          <template #tooltip>
            <div class="content-tooltip">
              <h4 class="center">
                Confirm
              </h4>
              <p>
                You are sure to delete this user, by doing so you cannot recover the data
              </p>
              <footer>
                <vs-button @click="activeTooltip1=false" danger block>
                  Delete
                </vs-button>
                <vs-button @click="activeTooltip1=false" transparent dark block>
                  Cancel
                </vs-button>
              </footer>
            </div>
          </template>
        </vs-tooltip>
        <vs-tooltip shadow interactivity>
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="">
          </vs-avatar>
          <template #tooltip>
            <div class="content-tooltip">
              <div class="body">
                <div class="text">
                    Cosed Tasks
                  <span>
                  89
                  </span>
                </div>
                <vs-avatar circle size="80" @click="activeTooltip1=!activeTooltip1">
                  <img src="/avatars/avatar-5.png" alt="">
                </vs-avatar>
                <div class="text">
                    Open Tasks
                  <span>
                  8
                  </span>
                </div>
              </div>
              <footer>
                <vs-button circle icon border>
                  <i class='bx bxs-share-alt'></i>
                </vs-button>
                <vs-button circle>
                  Message
                </vs-button>
                <vs-button circle icon border>
                  <i class='bx bx-like' ></i>
                </vs-button>
              </footer>
            </div>
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          activeTooltip1: false
        })
      }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
      getColor(colorx, alpha = 1)
          unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
      getVar(var)
          unquote("var(--vs-"+var+")")

      .content-tooltip
        .body
          display flex
          align-items flex-start
          justify-content center
          .vs-avatar-content
            margin-top -30px
            border 3px solid getVar('theme-layout')
            box-shadow 0px 4px 15px 0px rgba(0,0,0,.1)
          .text
            display flex
            align-items center
            justify-content center
            flex-direction column
            font-size .55rem
            padding 10px
            font-weight normal
            span
              font-weight bold
              font-size .7rem
        footer
          display flex
          align-items center
          justify-content center
        h4
          padding 8px
          margin 0px
          text-align left
        p
          text-align left
          padding 0px
          margin 0px
          line-height 1rem
          padding-bottom 5px
          padding-left 8px
      </style>
  ```

</div>

</card>

<card>

## API

</card>
