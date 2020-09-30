---
PROPS:
  - name: open
    type: Boolean
    values: true,false
    description: Determina si el componente es visible.
    default: false
    link: null
    usage: '#open'
    code: >
            :open.sync="activeSidebar"
  - name: v-model
    type: String
    values: id
    description: Determina el item que se encuentra en estado activo.
    default: null
    link: null
    usage: '#default'
    code: >
            v-model="active"
  - name: absolute
    type: boolean
    values: true,false
    description: Determina si el componente es de position absoluta.
    default: false
    link: null
    usage: '#default'
    code: >
            <vs-sidebar
              absolute
              v-model="active"
              :open.sync="activeSidebar"
              >
  - name: relative
    type: Boolean
    values: true,false
    description: Determina si el componente es de posición relativa.
    default: false
    link: null
    usage: '#default'
    code: >
            <vs-sidebar
              relative
              v-model="active"
              :open.sync="activeSidebar"
              >
  - name: reduce
    type: Boolean
    values: true,false
    description: Determina si el componente esta en estado reducido con un ancho de 50px.
    default: false
    link: null
    usage: '#reduce'
    code: >
            <vs-sidebar
              absolute
              reduce
              v-model="active"
              open
            >
  - name: hover-expand
    type: Boolean
    values: true,false
    description: Agrega la funcionalidad de expandir cuando el usuario entra dentro de el sidebar y viceversa.
    default: false
    link: null
    usage: '#hover-expand'
    code: >
            <vs-sidebar
              absolute
              reduce
              hover-expand
              v-model="active"
              open
            >
  - name: square
    type: Boolean
    values: true,false
    description: Determina si el componente no tiene border radius
    default: false
    link: null
    usage: null
    code: >
            <vs-sidebar
              square
              absolute
              v-model="active"
              open
            >
  - name: notShadow
    type: Boolean
    values: true,false
    description: Elimina el shadow de el sidebar
    default: false
    link: null
    usage: null
    code: >
            <vs-sidebar
              not-shadow
              absolute
              v-model="active"
              open
            >
  - name: background
    type: String
    values: Vuesax Colors, RGB, HEX
    description: Cambia el color de fondo de el sidebar
    default: false
    link: null
    usage: '#color'
    code: >
            <vs-sidebar
              background="primary"
              absolute
              v-model="active"
              open
            >
  - name: textWhite
    type: Boolean
    values: true,false
    description: Cambia el color de el texto a blanco
    default: false
    link: null
    usage: '#color'
    code: >
            <vs-sidebar
              text-white
              background="primary"
              absolute
              v-model="active"
              open
            >
  - name: notLineActive
    type: Boolean
    values: true,false
    description: Elimina la linea de el active de los items
    default: false
    link: null
    usage: null
    code: >
            <vs-sidebar
              not-line-active
              absolute
              v-model="active"
              open
            >
  - name: vs-sidebar-item:to
    type: String
    values: url
    description: Genera una nueva ruta de vue-router
    default: null
    link: null
    usage: null
    code: >
            <vs-sidebar-item
              to="/"
            >
  - name: vs-sidebar-item:href
    type: String
    values: url
    description: Genera una nueva ruta
    default: null
    link: null
    usage: null
    code: >
            <vs-sidebar-item
              href="http://vuesax.com/"
            >
  - name: right
    type: Boolean
    values: true,false
    description: Determina si el componente se posiciona hacia la derecha
    default: null
    link: null
    usage: null
    code: >
            <vs-sidebar right>
              ...
            </vs-sidebar>

SLOTS:
  - name: logo
    type: slot
    values: null
    description: Agrega los elementos en la parte superior de todo el sidebar.
    default: null
    link: null
    usage: '#default'
    code: >
            <template #logo>
              ...
            </template>
  - name: footer
    type: slot
    values: null
    description: Agrega los elementos en la parte inferior de el sidebar.
    default: null
    link: null
    usage: '#default'
    code: >
            <template #footer>
              ...
            </template>
  - name: header
    type: slot
    values: null
    description: Agrega los elementos debajo de el logo y sobre los items.
    default: null
    link: null
    usage: null
    code: >
            <template #header>
              ...
            </template>
  - name: vs-sidebar-item#icon
    type: slot
    values: null
    description: Es el espacio para agregar el icono o una letra representativa.
    default: null
    link: null
    usage: '#default'
    code: >
            <template #icon>
              <i class='bx bx-home' ></i>
            </template>

NEWS:
  - name
---

# Sidebar

<card>

## Default

<docs-warn />

Agrega un menu sidebar con el componente `vs-sidebar`, hay dos sub componentes `vs-sidebar-item` y `vs-sidebar-group`

<div slot="example">
  <Sidebar-default />
</div>

<div slot="template">

  ```html{4,5,6}
    <template>
      <div class="hidden">
        <vs-sidebar
          absolute
          v-model="active"
          open
          >
          <template #logo>
            <!-- ...img logo -->
          </template>
          <vs-sidebar-item id="home">
            <template #icon>
              <i class='bx bx-home'></i>
            </template>
            Home
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <i class='bx bx-grid-alt'></i>
            </template>
            Market Overview
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <i class='bx bxs-music'></i>
            </template>
            Music
          </vs-sidebar-item>
          <vs-sidebar-item id="donate">
            <template #icon>
              <i class='bx bxs-donate-heart' ></i>
            </template>
            Donate
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <i class='bx bx-drink'></i>
            </template>
            Drink
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <i class='bx bxs-shopping-bags'></i>
            </template>
            Shopping
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <i class='bx bx-chat' ></i>
            </template>
            Chat
          </vs-sidebar-item>
          <template #footer>
            <vs-row justify="space-between">
              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="">
              </vs-avatar>

              <vs-avatar badge-color="danger" badge-position="top-right">
                <i class='bx bx-bell' ></i>

                <template #badge>
                  28
                </template>
              </vs-avatar>
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          active: 'home',
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Group

Puedes agrupar los items y ocultarlos con el sub-componente `vs-sidebar-group`

:::tip
  El componente tiene un slot:header en el cual agregamos un sub-componente `vs-sidebar-item` con la propiedad **arrow** y sin la propiedad id para no cambiar el estado de active al hacer click
:::

<div slot="example">
  <Sidebar-group />
</div>

<div slot="template">

  ```html{4-6}
    <template>
      <div class="hidden">
        <vs-sidebar
          absolute
          v-model="active"
          open
          >
          <template #logo>
            <!-- ...img logo -->
          </template>
          <vs-sidebar-item id="home">
            <template #icon>
              <i class='bx bx-home'></i>
            </template>
            Home
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <i class='bx bx-grid-alt'></i>
            </template>
            Market Overview
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <i class='bx bxs-music'></i>
            </template>
            Music
          </vs-sidebar-item>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-group'></i>
                </template>
                Social media
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram">
              <template #icon>
                <i class='bx bxl-instagram'></i>
              </template>
              Instagram
            </vs-sidebar-item>
            <vs-sidebar-item id="twitter">
              <template #icon>
                <i class='bx bxl-twitter' ></i>
              </template>
              Twitter
            </vs-sidebar-item>
            <vs-sidebar-item id="Facebook">
              <template #icon>
                <i class='bx bxl-facebook' ></i>
              </template>
              Facebook
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-code-alt' ></i>
                </template>
                Coding
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github">
              <template #icon>
                <i class='bx bxl-github' ></i>
              </template>
              Github
            </vs-sidebar-item>
            <vs-sidebar-item id="codepen">
              <template #icon>
                <i class='bx bxl-codepen'></i>
              </template>
              Codepen
            </vs-sidebar-item>
            <vs-sidebar-item id="discord">
              <template #icon>
                <i class='bx bxl-discord'></i>
              </template>
              Discord
            </vs-sidebar-item>
            <vs-sidebar-item id="Javascript">
              <template #icon>
                <i class='bx bxl-javascript' ></i>
              </template>
              Javascript
            </vs-sidebar-item>
            <vs-sidebar-item id="git">
              <template #icon>
                <i class='bx bxl-git' ></i>
              </template>
              Git
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-item id="donate">
            <template #icon>
              <i class='bx bxs-donate-heart' ></i>
            </template>
            Donate
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <i class='bx bx-drink'></i>
            </template>
            Drink
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <i class='bx bxs-shopping-bags'></i>
            </template>
            Shopping
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <i class='bx bx-chat' ></i>
            </template>
            Chat
          </vs-sidebar-item>
          <template #footer>
            <vs-row justify="space-between">
              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="">
              </vs-avatar>

              <vs-avatar badge-color="danger" badge-position="top-right">
                <i class='bx bx-bell' ></i>

                <template #badge>
                  28
                </template>
              </vs-avatar>
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          active: 'home',
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Reduce

Puedes hacer que el componente sea de un ancho de 50px y que muestre solo los iconos con la propiedad `reduce` esta propiedad es dinámica

:::tip
  Para que el sidebar funcione correctamente es necesario agregar a los items el slot de icon ya sea con un icono o con por ejemplo la primera letra de el texto
:::

<div slot="example">
  <Sidebar-reduce />
</div>

<div slot="template">

  ```html{4-7}
    <template>
      <div class="hidden">
        <vs-sidebar
          absolute
          reduce
          v-model="active"
          open
          >
          <template #logo>
            <!-- ...img logo -->
          </template>
          <vs-sidebar-item id="home">
            <template #icon>
              <i class='bx bx-home'></i>
            </template>
            Home
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <i class='bx bx-grid-alt'></i>
            </template>
            Market Overview
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <i class='bx bxs-music'></i>
            </template>
            Music
          </vs-sidebar-item>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-group'></i>
                </template>
                Social media
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram">
              <template #icon>
                <i class='bx bxl-instagram'></i>
              </template>
              Instagram
            </vs-sidebar-item>
            <vs-sidebar-item id="twitter">
              <template #icon>
                <i class='bx bxl-twitter' ></i>
              </template>
              Twitter
            </vs-sidebar-item>
            <vs-sidebar-item id="Facebook">
              <template #icon>
                <i class='bx bxl-facebook' ></i>
              </template>
              Facebook
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-code-alt' ></i>
                </template>
                Coding
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github">
              <template #icon>
                <i class='bx bxl-github' ></i>
              </template>
              Github
            </vs-sidebar-item>
            <vs-sidebar-item id="codepen">
              <template #icon>
                <i class='bx bxl-codepen'></i>
              </template>
              Codepen
            </vs-sidebar-item>
            <vs-sidebar-item id="discord">
              <template #icon>
                <i class='bx bxl-discord'></i>
              </template>
              Discord
            </vs-sidebar-item>
            <vs-sidebar-item id="Javascript">
              <template #icon>
                <i class='bx bxl-javascript' ></i>
              </template>
              Javascript
            </vs-sidebar-item>
            <vs-sidebar-item id="git">
              <template #icon>
                <i class='bx bxl-git' ></i>
              </template>
              Git
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-item id="donate">
            <template #icon>
              <i class='bx bxs-donate-heart' ></i>
            </template>
            Donate
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <i class='bx bx-drink'></i>
            </template>
            Drink
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <i class='bx bxs-shopping-bags'></i>
            </template>
            Shopping
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <i class='bx bx-chat' ></i>
            </template>
            Chat
          </vs-sidebar-item>
          <template #footer>
            <vs-row justify="space-between">
              <vs-avatar badge-color="danger" badge-position="top-right">
                <i class='bx bx-bell' ></i>

                <template #badge>
                  28
                </template>
              </vs-avatar>

              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="">
              </vs-avatar>
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          active: 'home',
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Hover expand

Puedes agregar la funcionalidad de expandir y contraer el sidebar al pasar el mouse, con la propiedad `hoverExpand`

<div slot="example">
  <Sidebar-reduceExpand />
</div>

<div slot="template">

  ```html{4-8}
    <template>
      <div class="hidden">
        <vs-sidebar
          absolute
          hover-expand
          reduce
          v-model="active"
          open
          >
          <template #logo>
            <!-- ...img logo -->
          </template>
          <vs-sidebar-item id="home">
            <template #icon>
              <i class='bx bx-home'></i>
            </template>
            Home
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <i class='bx bx-grid-alt'></i>
            </template>
            Market Overview
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <i class='bx bxs-music'></i>
            </template>
            Music
          </vs-sidebar-item>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-group'></i>
                </template>
                Social media
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram">
              <template #icon>
                <i class='bx bxl-instagram'></i>
              </template>
              Instagram
            </vs-sidebar-item>
            <vs-sidebar-item id="twitter">
              <template #icon>
                <i class='bx bxl-twitter' ></i>
              </template>
              Twitter
            </vs-sidebar-item>
            <vs-sidebar-item id="Facebook">
              <template #icon>
                <i class='bx bxl-facebook' ></i>
              </template>
              Facebook
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-code-alt' ></i>
                </template>
                Coding
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github">
              <template #icon>
                <i class='bx bxl-github' ></i>
              </template>
              Github
            </vs-sidebar-item>
            <vs-sidebar-item id="codepen">
              <template #icon>
                <i class='bx bxl-codepen'></i>
              </template>
              Codepen
            </vs-sidebar-item>
            <vs-sidebar-item id="discord">
              <template #icon>
                <i class='bx bxl-discord'></i>
              </template>
              Discord
            </vs-sidebar-item>
            <vs-sidebar-item id="Javascript">
              <template #icon>
                <i class='bx bxl-javascript' ></i>
              </template>
              Javascript
            </vs-sidebar-item>
            <vs-sidebar-item id="git">
              <template #icon>
                <i class='bx bxl-git' ></i>
              </template>
              Git
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-item id="donate">
            <template #icon>
              <i class='bx bxs-donate-heart' ></i>
            </template>
            Donate
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <i class='bx bx-drink'></i>
            </template>
            Drink
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <i class='bx bxs-shopping-bags'></i>
            </template>
            Shopping
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <i class='bx bx-chat' ></i>
            </template>
            Chat
          </vs-sidebar-item>
          <template #footer>
            <vs-row justify="space-between">
              <vs-avatar badge-color="danger" badge-position="top-right">
                <i class='bx bx-bell' ></i>

                <template #badge>
                  28
                </template>
              </vs-avatar>

              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="">
              </vs-avatar>
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    <script>
    export default {
      data:() => ({
        active: 'home',
      })
    }
    </script>
  ```

</div>

</card>

<card>

## Color

Cambia le color de el sidebar, si es necesario también puedes cambiar el color de el texto a blanco con la propiedad `textWhite`

<div slot="example">
  <Sidebar-color />
</div>

<div slot="template">

  ```html{4-8}
    <template>
      <div class="hidden">
        <vs-sidebar
          background="primary"
          textWhite
          absolute
          v-model="active"
          open
          >
          <vs-sidebar-item id="home">
            <template #icon>
              <i class='bx bx-home'></i>
            </template>
            Home
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <i class='bx bx-grid-alt'></i>
            </template>
            Market Overview
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <i class='bx bxs-music'></i>
            </template>
            Music
          </vs-sidebar-item>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-group'></i>
                </template>
                Social media
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram">
              <template #icon>
                <i class='bx bxl-instagram'></i>
              </template>
              Instagram
            </vs-sidebar-item>
            <vs-sidebar-item id="twitter">
              <template #icon>
                <i class='bx bxl-twitter' ></i>
              </template>
              Twitter
            </vs-sidebar-item>
            <vs-sidebar-item id="Facebook">
              <template #icon>
                <i class='bx bxl-facebook' ></i>
              </template>
              Facebook
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-code-alt' ></i>
                </template>
                Coding
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github">
              <template #icon>
                <i class='bx bxl-github' ></i>
              </template>
              Github
            </vs-sidebar-item>
            <vs-sidebar-item id="codepen">
              <template #icon>
                <i class='bx bxl-codepen'></i>
              </template>
              Codepen
            </vs-sidebar-item>
            <vs-sidebar-item id="discord">
              <template #icon>
                <i class='bx bxl-discord'></i>
              </template>
              Discord
            </vs-sidebar-item>
            <vs-sidebar-item id="Javascript">
              <template #icon>
                <i class='bx bxl-javascript' ></i>
              </template>
              Javascript
            </vs-sidebar-item>
            <vs-sidebar-item id="git">
              <template #icon>
                <i class='bx bxl-git' ></i>
              </template>
              Git
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-item id="donate">
            <template #icon>
              <i class='bx bxs-donate-heart' ></i>
            </template>
            Donate
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <i class='bx bx-drink'></i>
            </template>
            Drink
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <i class='bx bxs-shopping-bags'></i>
            </template>
            Shopping
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <i class='bx bx-chat' ></i>
            </template>
            Chat
          </vs-sidebar-item>
        </vs-sidebar>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    <script>
    export default {
      data:() => ({
        active: 'home',
      })
    }
    </script>
  ```

</div>

</card>

<card>

## Open

Puedes definir si el sidebar es visible o esta oculto con la propiedad open, esta propiedad por defecto es `false`

<div slot="example">
  <Sidebar-open />
</div>

<div slot="template">

  ```html
    <template>
      <div class="hidden">
        <vs-navbar shadow square center-collapsed v-model="active">
          <template #left>
            <vs-button @click="activeSidebar = !activeSidebar" flat icon>
              <i class='bx bx-menu'></i>
            </vs-button>
          </template>
          <vs-navbar-item :active="active == 'guide'" id="guide">
            Guide
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'docs'" id="docs">
            Documents
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'components'" id="components">
            Components
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'license'" id="license">
            license
          </vs-navbar-item>
          <template #right>
            <vs-button flat >Login</vs-button>
            <vs-button>Get Started</vs-button>
          </template>
        </vs-navbar>
        <vs-sidebar
          absolute
          v-model="active"
          :open.sync="activeSidebar"
          >
          <template #logo>
            <!-- ...img logo -->
          </template>
          <vs-sidebar-item id="home">
            <template #icon>
              <i class='bx bx-home'></i>
            </template>
            Home
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <i class='bx bx-grid-alt'></i>
            </template>
            Market Overview
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <i class='bx bxs-music'></i>
            </template>
            Music
          </vs-sidebar-item>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-group'></i>
                </template>
                Social media
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram">
              <template #icon>
                <i class='bx bxl-instagram'></i>
              </template>
              Instagram
            </vs-sidebar-item>
            <vs-sidebar-item id="twitter">
              <template #icon>
                <i class='bx bxl-twitter' ></i>
              </template>
              Twitter
            </vs-sidebar-item>
            <vs-sidebar-item id="Facebook">
              <template #icon>
                <i class='bx bxl-facebook' ></i>
              </template>
              Facebook
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-code-alt' ></i>
                </template>
                Coding
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github">
              <template #icon>
                <i class='bx bxl-github' ></i>
              </template>
              Github
            </vs-sidebar-item>
            <vs-sidebar-item id="codepen">
              <template #icon>
                <i class='bx bxl-codepen'></i>
              </template>
              Codepen
            </vs-sidebar-item>
            <vs-sidebar-item id="discord">
              <template #icon>
                <i class='bx bxl-discord'></i>
              </template>
              Discord
            </vs-sidebar-item>
            <vs-sidebar-item id="Javascript">
              <template #icon>
                <i class='bx bxl-javascript' ></i>
              </template>
              Javascript
            </vs-sidebar-item>
            <vs-sidebar-item id="git">
              <template #icon>
                <i class='bx bxl-git' ></i>
              </template>
              Git
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-item id="donate">
            <template #icon>
              <i class='bx bxs-donate-heart' ></i>
            </template>
            Donate
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <i class='bx bx-drink'></i>
            </template>
            Drink
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <i class='bx bxs-shopping-bags'></i>
            </template>
            Shopping
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <i class='bx bx-chat' ></i>
            </template>
            Chat
          </vs-sidebar-item>
          <template #footer>
            <vs-row justify="space-between">
              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="">
              </vs-avatar>

              <vs-avatar badge-color="danger" badge-position="top-right">
                <i class='bx bx-bell' ></i>

                <template #badge>
                  28
                </template>
              </vs-avatar>
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5,6}
    <script>
    export default {
      data:() => ({
        active: 'home',
        activeSidebar: false
      })
    }
    </script>
  ```

</div>

</card>

<card>

## Position Right

Cambia la posición de el sidebar a la derecha y su animación con la propiedad `right`

<div slot="example">
  <Sidebar-right />
</div>

<div slot="template">

  ```html{2}
    <vs-sidebar
      right
      absolute
      v-model="active"
      open
      >
      <template #logo>
        ...
      </template>
      <template #header>

      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class='bx bx-home'></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <template #icon>
          <i class='bx bx-grid-alt'></i>
        </template>
        Market Overview
      </vs-sidebar-item>
      <vs-sidebar-item id="Music">
        <template #icon>
          <i class='bx bxs-music'></i>
        </template>
        Music
      </vs-sidebar-item>
      <vs-sidebar-item id="donate">
        <template #icon>
          <i class='bx bxs-donate-heart' ></i>
        </template>
        Donate
      </vs-sidebar-item>
      <vs-sidebar-item id="drink">
        <template #icon>
          <i class='bx bx-drink'></i>
        </template>
        Drink
      </vs-sidebar-item>
      <vs-sidebar-item id="shopping">
        <template #icon>
          <i class='bx bxs-shopping-bags'></i>
        </template>
        Shopping
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class='bx bx-chat' ></i>
        </template>
        Chat
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="">
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class='bx bx-bell' ></i>

            <template #badge>
              28
            </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          active: 'home',
        })
      }
    </script>
  ```

</div>

</card>

<card>

## API

</card>
