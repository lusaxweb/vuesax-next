---
PROPS:
  - name: open
    type: Boolean
    values: true,false
    description: Determines if the component is visible.
    default: false
    link: null
    usage: '#open'
    code: >
            :open.sync="activeSidebar"
  - name: v-model
    type: String
    values: id
    description: Determines the item that is in active status.
    default: null
    link: null
    usage: '#default'
    code: >
            v-model="active"
  - name: absolute
    type: boolean
    values: true,false
    description: Determine if the component is of absolute position.
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
    description: Determine if the component is relative position.
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
    description: Determine if the component is in a reduced state with a width of 50px.
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
    description: Adds the functionality to expand when the user enters inside the sidebar and vice versa.
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
    description: Determine if the component has no border radius
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
    description: Remove the shadow from the sidebar
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
    description: Change the background color of the sidebar
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
    description: Change the text color to white
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
    description: Remove the active line from items
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
    description: Generate a new vue-router route
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
    description: Generate a new route
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
    description: Determines if the component is positioned to the right
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
    description: Add elements on top of the entire sidebar.
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
    description: Add the elements at the bottom of the sidebar.
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
    description: Add the elements below the logo and above the items.
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
    description: It is the space to add the icon or a representative letter.
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

Add a sidebar menu with the `vs-sidebar` component, there are two subcomponents `vs-sidebar-item` and `vs-sidebar-group`

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

You can group items and hide them with the `vs-sidebar-group` sub-component.

:::tip
  The component has a slot: header in which we add a sub-component `vs-sidebar-item` with the property **arrow** and without the property id to not change the active state when clicking
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

You can make the component 50px wide and only show the icons with the property `reduce` this property is dynamic

:::tip
  For the sidebar to work correctly it is necessary to add to the items the icon slot either with an icon or with for example the first letter of the text
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

You can add the functionality to expand and collapse the sidebar with the mouse, with the property `hoverExpand`

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

Change the color of the sidebar, if necessary you can also change the color of the text to white with the `textWhite` property

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

You can define if the sidebar is visible or hidden with the open property, this property by default is `false`

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

Change the position of the sidebar to the right and its animation with the `right` property

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
