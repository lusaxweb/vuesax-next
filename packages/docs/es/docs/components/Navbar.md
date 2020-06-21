---
PROPS:
  - name: fixed
    type: boolean
    values: true,false
    description: Define si el componente esta fijo en la pantalla.
    default: false
    link: null
    usage: null
    code: >
            <vs-navbar fixed>
              ...
            </vs-navbar>
  - name: shadow
    type: boolean
    values: true,false
    description: Agrega una sombre al componente.
    default: primary
    link: null
    usage: null
    code: >
            <vs-navbar shadow>
              ...
            </vs-navbar>
  - name: shadowScroll
    type: boolean
    values: true,false
    description: Agrega la funcionalidad de agregar shadow al componente cuando el scrollTop es mas de 0.
    default: false
    link: null
    usage: null
    code: >
            <vs-navbar shadow-scroll>
              ...
            </vs-navbar>
  - name: hideScroll
    type: boolean
    values: true,false
    description: Agrega la funcionalidad de ocultar y mostrar el componente en base a si se baja o sube el scroll.
    default: false
    link: null
    usage: '#hide-scroll'
    code: >
            <vs-navbar hide-scroll>
              ...
            </vs-navbar>
  - name: textWhite
    type: boolean
    values: true,false
    description: Cambia el color de texto de los items a blanco.
    default: false
    link: null
    usage: '#color'
    code: >
            <vs-navbar text-white>
              ...
            </vs-navbar>
  - name: square
    type: boolean
    values: true,false
    description: Cambia el border radius a 0 haciendo el componente cuadrado.
    default: false
    link: null
    usage: '#square'
    code: >
            <vs-navbar square>
              ...
            </vs-navbar>
  - name: paddingScroll
    type: boolean
    values: true,false
    description: determina si el componente tiene padding y al usuario hacer scroll se elimina haciendo un efecto.
    default: false
    link: null
    usage: '#padding-scroll'
    code: >
            <vs-navbar padding-scroll>
              ...
            </vs-navbar>
  - name: notLine
    type: boolean
    values: true,false
    description: Elimina la linea de active en el componente.
    default: false
    link: null
    usage: '#not-line'
    code: >
            <vs-navbar not-line>
              ...
            </vs-navbar>
  - name: leftCollapsed
    type: boolean
    values: true,false
    description: Agrega la funcionalidad de que cuando los elementos de este slot no puedan estar correctamente se eliminen visualmente.
    default: false
    link: null
    usage: '#default'
    code: >
            <vs-navbar left-collapsed>
              ...
            </vs-navbar>
  - name: centerCollapsed
    type: boolean
    values: true,false
    description: Agrega la funcionalidad de que cuando los elementos de este slot no puedan estar correctamente se eliminen visualmente.
    default: false
    link: null
    usage: '#default'
    code: >
            <vs-navbar center-collapsed>
              ...
            </vs-navbar>
  - name: rightCollapsed
    type: boolean
    values: true,false
    description: Agrega la funcionalidad de que cuando los elementos de este slot no puedan estar correctamente se eliminen visualmente.
    default: false
    link: null
    usage: '#default'
    code: >
            <vs-navbar right-collapsed>
              ...
            </vs-navbar>
  - name: targetScroll
    type: boolean
    values: true,false
    description: Determina el elemento al que se le va a solicitar el evento scroll.
    default: document
    link: null
    usage: '#padding-scroll'
    code: >
            <vs-navbar padding-scroll="#my-element">
              ...
            </vs-navbar>
  - name: item:active
    type: boolean
    values: true,false
    description: determina si el componente esta en estado de activo.
    default: false
    link: null
    usage: '#default'
    code: >
            <vs-navbar-item active>
              ...
            </vs-navbar-item>
  - name: item:to
    type: string
    values: url
    description: Usa vue-router para generar una nueva vista en base al string proporcionado.
    default: false
    link: null
    usage: null
    code: >
            <vs-navbar-item to="/">
              ...
            </vs-navbar-item>
  - name: item:id
    type: string
    values: id
    description: Es el id que se usa para cambiar el valor de el v-model de el componente padre y asi poder determinar el estado de active en base a la interacción de el usuario.
    default: false
    link: null
    usage: null
    code: >
            <vs-navbar-item id="myIdItem">
              ...
            </vs-navbar-item>
  - name: item:href
    type: string
    values: url
    description: Genera una nueva pestaña con la url proporcionada.
    default: false
    link: null
    usage: null
    code: >
            <vs-navbar-item href="http://vuesax.com/">
              ...
            </vs-navbar-item>
  - name: item:target
    type: string
    values: html-target
    description: Determina si la pestaña es una nueva o si remplaza la actual.
    default: '_blank'
    link: null
    usage: null
    code: >
            <vs-navbar-item target="_self">
              ...
            </vs-navbar-item>

SLOTS:
  - name: default
    type: slot
    values: null
    description: Agrega los elementos en el centro de el componente.
    default: null
    link: null
    usage: '#default'
    code: >
            <vs-navbar v-model="active">
              <vs-navbar-item :active="active == 'guide'" id="guide">
                Guide
              </vs-navbar-item>
            </vs-navbar>
  - name: left
    type: slot
    values: null
    description: Agrega los elementos en la parte izquierda de el componente.
    default: null
    link: null
    usage: '#default'
    code: >
            <template #left>
              <img src="/logo2.png" alt="">
            </template>
  - name: right
    type: slot
    values: null
    description: Agrega los elementos en la parte derecha de el componente.
    default: null
    link: null
    usage: '#default'
    code: >
            <template #right>
              <vs-button flat >Login</vs-button>
              <vs-button>Get Started</vs-button>
            </template>

NEWS:
  - name
---

# Navbar

<card>

## Default


<docs-warn />

genera un menu rápidamente con el componente `vs-navbar`, como tal el componente se divide en 3 slots (**left**, **center**(default), **right**) con los cuales puedes determinar la ubicación de los elementos, como sub componentes tenemos `vs-navbar-item` y `vs-navbar-group`


:::tip
Puedes ver un ejemplo completo y cambiar las propiedades en tiempo real [Aqui](/examples/navbar.html)
:::

<div slot="example">
  <Navbar-default />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center examplex">
        <vs-navbar center-collapsed v-model="active">
          <template #left>
            <img src="/logo2.png" alt="">
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
        <div class="square">
          <div class="child">
            child 1
          </div>
          <div class="child">
            child 2
          </div>
          <div class="child">
            child 3
          </div>
        </div>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        active: 'guide'
      })
    }
    </script>
  ```

</div>

</card>

<card>

## Color

Cambia el color de el componente con la propiedad `color` o agregando directamente uno de los colores principales de vuesax

si quieres cambiar el color de texto a blanco puedes hacerlo con la propiedad `text-white`

<div slot="example">
  <Navbar-color />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center examplex">
        <vs-navbar text-white :color="active" center-collapsed v-model="active">
          <template #left>
            <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="">
          </template>
          <template #right>
            <vs-navbar-item :active="active == 'primary'" id="primary">
              Primary
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'success'" id="success">
              Success
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'danger'" id="danger">
              Danger
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'warn'" id="warn">
              Warn
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'dark'" id="dark">
              Dark
            </vs-navbar-item>
            <vs-navbar-item :active="active == '#7d33ff'" id="#7d33ff">
              HEX
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'rgb(59,222,200)'" id="rgb(59,222,200)">
              RGB
            </vs-navbar-item>
          </template>
        </vs-navbar>
        <div class="square">
          <div class="child">
            child 1
          </div>
          <div class="child">
            child 2
          </div>
          <div class="child">
            child 3
          </div>
        </div>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
    export default {
      data:() => ({
        active: 'primary'
      })
    }
    </script>
  ```

</div>

</card>

<card>

## Hide scroll

Agrega la funcionalidad de ocultar el navbar cuando el usuario hace scroll hacia abajo y de mostrar cuando sube

<div slot="example">
  <Navbar-hideScroll />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center examplex">
        <vs-navbar target-scroll="#hide-scroll-content" hide-scroll center-collapsed v-model="active">
          <template #left>
            <img src="/logo2.png" alt="">
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
        <div id="hide-scroll-content" class="square">
          <div class="child">
            child 1
          </div>
          <div class="child">
            child 2
          </div>
          <div class="child">
            child 3
          </div>
        </div>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
    export default {
      data:() => ({
        active: 'guide'
      })
    }
    </script>
  ```

</div>

</card>

<card>

## Group

Puedes agregar una lista de elementos dentro de un item con el componente `vs-navbar-group` y dentro de el agregar los componentes `vs-navbar-item`

<div slot="example">
  <Navbar-group />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center examplex">
        <vs-navbar center-collapsed v-model="active">
          <template #left>
            <img src="/logo2.png" alt="">
          </template>
          <vs-navbar-group>
            Docs
            <template #items>
              <vs-navbar-item :active="active == 'guide'" id="guide">
                Guide
              </vs-navbar-item>
              <vs-navbar-item :active="active == 'docs'" id="docs">
                Documents
              </vs-navbar-item>
              <vs-navbar-item :active="active == 'components'" id="components">
                Components
              </vs-navbar-item>
            </template>
          </vs-navbar-group>

          <vs-navbar-group>
            Ecosystem

            <template #items>
              <h5 class="title">
                Social
              </h5>

              <vs-navbar-item :active="active == 'Github'" id="Github">
                Github
              </vs-navbar-item>
              <vs-navbar-item :active="active == 'Discord'" id="Discord">
                Discord
              </vs-navbar-item>
              <vs-navbar-item :active="active == 'Twitter'" id="Twitter">
                Twitter
              </vs-navbar-item>
              <vs-navbar-item :active="active == 'Medium'" id="Medium">
                Medium
              </vs-navbar-item>
            </template>
          </vs-navbar-group>

          <vs-navbar-item :active="active == 'License'" id="License">
            License
          </vs-navbar-item>

          <template #right>
            <vs-button flat >Login</vs-button>
            <vs-button>Get Started</vs-button>
          </template>
        </vs-navbar>
        <div class="square">
          <div class="child">
            child 1
          </div>
          <div class="child">
            child 2
          </div>
          <div class="child">
            child 3
          </div>
        </div>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
    export default {
      data:() => ({
        active: 'guide'
      })
    }
    </script>
  ```

</div>

</card>

<card>

## Padding Scroll

Agrega la funcionalidad de que el componente tiene un padding arriba y abajo que cuando se baja el scroll se elimina dando un efecto agradable

<div slot="example">
  <Navbar-paddingScroll />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center examplex">
        <vs-navbar target-scroll="#padding-scroll-content" padding-scroll center-collapsed v-model="active">
          <template #left>
            <img src="/logo2.png" alt="">
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
        <div id="padding-scroll-content" class="square">
          <div class="child">
            child 1
          </div>
          <div class="child">
            child 2
          </div>
          <div class="child">
            child 3
          </div>
        </div>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
    export default {
      data:() => ({
        active: 'guide'
      })
    }
    </script>
  ```

</div>

</card>

<card>

## Square

Elimina la propiedad border-radius haciendo el componente cuadrado

<div slot="example">
  <Navbar-square />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center examplex">
        <vs-navbar color="#7d33ff" text-white square center-collapsed v-model="active">
          <template #left>
            <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="">
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
            <vs-button color="#fff" flat >Login</vs-button>
            <vs-button color="#fff" border >Get Started</vs-button>
          </template>
        </vs-navbar>
        <div class="square">
          <div class="child">
            child 1
          </div>
          <div class="child">
            child 2
          </div>
          <div class="child">
            child 3
          </div>
        </div>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
    export default {
      data:() => ({
        active: 'guide'
      })
    }
    </script>
  ```

</div>

</card>

<card>

## Not line

Elimina la linea de efecto active de el componente

<div slot="example">
  <Navbar-notLine />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center example-nav">
        <vs-navbar not-line center-collapsed v-model="active">
          <template #left>
            <img src="/logo2.png" alt="">
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
        <div class="square">
          <div class="child">
            child 1
          </div>
          <div class="child">
            child 2
          </div>
          <div class="child">
            child 3
          </div>
        </div>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
    export default {
      data:() => ({
        active: 'guide'
      })
    }
    </script>
  ```

</div>

</card>

<card>

## API

</card>
