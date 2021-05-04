---
PROPS:
  - name: fixed
    type: boolean
    values: true,false
    description: Defines if the component is fixed on the screen.
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
    description: Add a shadow to the component.
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
    description: Add functionality to add shadow to component when scrollTop is more than 0.
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
    description: Add the functionality to hide and show the component based on whether the scroll is lowered or raised.
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
    description: Change the text color of items to white.
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
    description: Change the border radius to 0 by making the component square.
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
    description: Determines if the component has padding and the user scrolling is removed making an effect.
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
    description: Delete the active line in the component.
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
    description: Add the functionality that when the elements of this slot cannot be correctly they are visually removed.
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
    description: Add the functionality that when the elements of this slot cannot be correctly they are visually removed.
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
    description: Add the functionality that when the elements of this slot cannot be correctly they are visually removed.
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
    description: Determines the element to which the scroll event will be requested.
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
    description: Determines if the component is in active status.
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
    description: Use vue-router to generate a new view based on the supplied string.
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
    description: It is the id that is used to change the value of the v-model of the parent component and thus be able to determine the active state based on user interaction..
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
    description: Generate a new tab with the url provided.
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
    description: Determine if the tab is a new one or if it replaces the current one.
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
    description: Add the elements in the center of the component.
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
    description: Add the elements on the left side of the component.
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
    description: Add the elements on the right side of the component.
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

Quickly generate a menu with the `vs-navbar` component, as such the component is divided into 3 slots (**left**, **center** (default), **right**) with which you can determine the location of the elements, as sub components we have `vs-navbar-item` and` vs-navbar-group`


:::tip
You can see a complete example and change the properties in real time [Here](/examples/navbar.html)
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

Change the component's color with the `color` property or by directly adding one of the main vuesax colors

if you want to change the text color to white you can do it with the property `text-white`

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

Add functionality to hide navbar when user scroll down and show when upload

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

You can add a list of elements within an item with the `vs-navbar-group` component and within it add the `vs-navbar-item` components

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

Add the functionality that the component has a padding up and down that when it is lowered the scroll is eliminated giving a pleasant effect

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

Remove the border-radius property by making the component square

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

Eliminates the active effect line of the component

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
