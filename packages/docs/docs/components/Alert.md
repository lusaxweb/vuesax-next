---
PROPS:
  - name: v-model
    type: boolean
    values: boolean
    description: Determine if the component is visible.
    default: true
    link: null
    code: >
            <template>
              <vs-button flat @click="active=!active">
                {{ active ? 'Close Alert' : 'Open Alert' }}
              </vs-button>

              <vs-alert closable v-model="active">
                <template #title>
                  Vuesax Framework
                </template>
                Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
                created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
                Unique and pleasant style, Vuesax is created from scratch and designed for all types of
                developed from the frontend lover to the backend that wants to easily create
                your visual approach to the end user
              </vs-alert>
            </template>

            <script>
              export default {
                data:() => ({
                  active: true,
                })
              }
            </script>
    usage: '#closable'
  - name: color
    type: String
    values: primary, success, danger, warning, dark, RGB, HEX
    description: Change the color of the component and some of its sub components.
    default: primary
    link: null
    usage: '#color'
    code: >
            <vs-alert color="success">
              <template #title>
                Vuesax Framework
              </template>
              Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
              created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
              Unique and pleasant style, Vuesax is created from scratch and designed for all types of
              developed from the frontend lover to the backend that wants to easily create
              your visual approach to the end user
            </vs-alert>
  - name: type
    type: boolean
    values: solid, border, shadow,gradient,relief
    description: Change the style of all the alert.
    default: default
    link: null
    usage: '#solid'
    code: >
            <vs-alert solid>
              <template #title>
                Vuesax Framework
              </template>
              Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
              created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
              Unique and pleasant style, Vuesax is created from scratch and designed for all types of
              developed from the frontend lover to the backend that wants to easily create
              your visual approach to the end user
            </vs-alert>
  - name: hidden-content
    type: boolean
    values: boolean
    description: With this property you can hide the content of the alert.
    default: false
    link: null
    usage: '#hidden-content'
    code: >
            <template>
              <vs-alert :hidden-content="true" >
                <template #title>
                  Vuesax Framework
                </template>
                Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
                created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
                Unique and pleasant style, Vuesax is created from scratch and designed for all types of
                developed from the frontend lover to the backend that wants to easily create
                your visual approach to the end user
              </vs-alert>
            </template>
  - name: page
    type: Number
    values: Number
    description: Determine the page that is active (this property is linked to the slots="page-{n}").
    default: null
    link: null
    usage: '#pagination'
    code: >
            <template>
              <vs-alert :page="1" >
                <template #title>
                  Vuesax Framework
                </template>
                <template #page-1>
                  Page 1 - this page is a slot and here you can add either text, html elements or components
                </template>
              </vs-alert>
            </template>
  - name: progress
    type: Number
    values: 0 - 100
    description: Add a progress bar to the alert and the value is the percentage of width.
    default: null
    link: null
    usage: '#progress-bar'
    code: >
            <vs-alert progress="70">
              <template #title>
                Vuesax Framework
              </template>
              Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
              created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
              Unique and pleasant style, Vuesax is created from scratch and designed for all types of
              developed from the frontend lover to the backend that wants to easily create
              your visual approach to the end user
            </vs-alert>
  - name: closable
    type: boolean
    values: boolean
    description: Add a button to close the alert (it is necessary to use v-model).
    default: false
    link: null
    usage: '#closable'
    code: >
            <template>
              <vs-button flat @click="active=!active">
                {{ active ? 'Close Alert' : 'Open Alert' }}
              </vs-button>

              <vs-alert closable v-model="active">
                <template #title>
                  Vuesax Framework
                </template>
                Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
                created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
                Unique and pleasant style, Vuesax is created from scratch and designed for all types of
                developed from the frontend lover to the backend that wants to easily create
                your visual approach to the end user
              </vs-alert>
            </template>

            <script>
              export default {
                data:() => ({
                  active: true,
                })
              }
            </script>
SLOTS:
  - name: icon
    type: slot
    values: null
    description: Add an icon to the alert.
    default: null
    link: null
    usage: '#icon'
    code: >
          <template>
            <vs-alert>
              <template #icon>
                <i class='bx bxs-chat'></i>
              </template>
              <template #title>
                Vuesax Alert Icon
              </template>
              Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
              created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
              Unique and pleasant style, Vuesax is created from scratch and designed for all types of
              developed from the frontend lover to the backend that wants to easily create
              your visual approach to the end user
            </vs-alert>
          </template>
  - name: title
    type: slot
    values: null
    description: Add a title to the alert.
    default: null
    link: null
    usage: '#title'
    code: >
          <template>
            <div class="center">
              <vs-alert>
                <template #title>
                  Vuesax Alert Title
                </template>
                Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
                created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
                Unique and pleasant style, Vuesax is created from scratch and designed for all types of
                developed from the frontend lover to the backend that wants to easily create
                your visual approach to the end user
              </vs-alert>
            </div>
          </template>
  - name: page-{n}
    type: slot
    values: (page-1 - page-{n})
    description: Add the pages to the alert component if it is page one would be (slot="page-1").
    default: null
    link: null
    usage: '#pagination'
    code: >
          <template>
            <vs-alert :page.sync="page" >
              <template #title>
                Vuesax Framework
              </template>

              <template #page-1>
                Page 1 - this page is a slot and here you can add either text,
                html elements or components
              </template>
            </vs-alert>
          </template>
  - name: footer
    type: slot
    values: null
    description: Add a footer to the alert component.
    default: null
    link: null
    usage: '#footer'
    code: >
            <vs-alert>
              <template #title>
                Vuesax Framework
              </template>
              Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
              created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
              Unique and pleasant style, Vuesax is created from scratch and designed for all types of
              developed from the frontend lover to the backend that wants to easily create
              your visual approach to the end user
              <template #footer>
                <vs-button flat>
                  Cancel
                </vs-button>
                <vs-button>
                  Accept
                </vs-button>
              </template>
            </vs-alert>
NEWS:
  - solid
  - border
  - shadow
  - gradient
  - relief
  - animate
  - hidden-content
  - pagination
  - footer
  - progress-bar
  - time-close
---

# Alert

<card>

## Default

<docs-warn />

Easily generate an alert with this component apart from functionalities such as hiding it and showing it color change and title icons among other things

<div slot="example">
  <div class="center">
    <vs-alert>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>

<div slot="template">

  ```html
    <template>
      <vs-alert>
        <template #title>
          Vuesax Framework
        </template>
        Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
        created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
        Unique and pleasant style, Vuesax is created from scratch and designed for all types of
        developed from the frontend lover to the backend that wants to easily create
        your visual approach to the end user
      </vs-alert>
    </template>
  ```

</div>

</card>

<card>

## Solid <Badge text="New"/>

You can change the style of the component by adding the `solid` property, the property is a` boolean` so you can add it without any value.

<div slot="example">
  <div class="center">
    <vs-alert solid>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>

<div slot="template">

  ```html{1}
    <vs-alert solid>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  ```

</div>

</card>

<card>

## Border <Badge text="New"/>

You can change the style of the component by adding the `border` property, the property is a` boolean` so you can add it without any value.

<div slot="example">
  <div class="center">
    <vs-alert border >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>

<div slot="template">

  ```html{1}
    <vs-alert border >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  ```

</div>

</card>

<card>

## Shadow <Badge text="New"/>

You can change the style of the component by adding the `shadow` property, the property is a` boolean` so you can add it without any value.

<div slot="example">
  <div class="center">
    <vs-alert shadow >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>

<div slot="template">

  ```html{1}
    <vs-alert shadow >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  ```

</div>

</card>

<card>

## Gradient <Badge text="New"/>

You can change the style of the component by adding the `gradient` property, the property is a` boolean` so you can add it without any value.

<div slot="example">
  <div class="center">
    <vs-alert gradient >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>

<div slot="template">

  ```html{1}
    <vs-alert gradient >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  ```

</div>

</card>

<card>

## Relief <Badge text="New"/>

You can change the style of the component by adding the `relief` property, the property is a` boolean` so you can add it without any value.

<div slot="example">
  <div class="center">
    <vs-alert relief >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>

<div slot="template">

  ```html{1}
    <vs-alert relief >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  ```

</div>

</card>

<card>

## Animate

A beautiful and simple animation to show and hide the alert to the user

<div slot="example">
  <alert-animate />
</div>

<div slot="template">

  ```html{1}
    <vs-alert relief >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  ```

</div>

</card>

<card>

## Color

Change the color of the entire alert with the `color` property

In this example you can click on the buttons and dynamically change the color value to display it in the component **vs-alert**

<div slot="example">
  <alert-color />
</div>

<div slot="template">

  ```html{2}
    <template>
      <vs-alert :color="color">
        <template #title>
          Vuesax Framework
        </template>
        Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
        created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
        Unique and pleasant style, Vuesax is created from scratch and designed for all types of
        developed from the frontend lover to the backend that wants to easily create
        your visual approach to the end user
      </vs-alert>

      <vs-button :active="color == 'primary'" @click="color = 'primary'" flat>
        Primary
      </vs-button>
      <vs-button :active="color == 'success'" @click="color = 'success'" success flat>
        Success
      </vs-button>
      <vs-button :active="color == 'danger'" @click="color = 'danger'" danger flat>
        Danger
      </vs-button>
      <vs-button :active="color == 'warn'" @click="color = 'warn'" warn flat>
        Warn
      </vs-button>
      <vs-button :active="color == 'dark'" @click="color = 'dark'" dark flat>
        Dark
      </vs-button>
      <vs-button :active="color == '#7d33ff'" @click="color = '#7d33ff'" color="#7d33ff" flat>
        HEX
      </vs-button>
      <vs-button :active="color == 'rgb(59,222,200)'" @click="color = 'rgb(59,222,200)'" color="rgb(59,222,200)" flat>
        RGB
      </vs-button>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data: () => ({
          color: 'danger'
        })
      }
    </script>
  ```

</div>

<div slot="style">

  ```html
    <style scoped lang="stylus">
      .alert-example
        .vs-button--active
          transform translate(0, -5px)
          border-radius 0px 0px 12px 12px
    </style>
  ```

</div>


</card>

<card>

## Icon

Add an icon to the alert easily with the slot **icon**

<utils-icon />

<div slot="example">
  <div class="center">
    <vs-alert>
      <template #icon>
        <i class='bx bxs-chat'></i>
      </template>
      <template #title>
        Vuesax Alert Icon
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>

<div slot="template">

  ```html{3,4,5}
    <template>
      <vs-alert>
        <template #icon>
          <i class='bx bxs-chat'></i>
        </template>
        <template #title>
          Vuesax Alert Icon
        </template>
        Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
        created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
        Unique and pleasant style, Vuesax is created from scratch and designed for all types of
        developed from the frontend lover to the backend that wants to easily create
        your visual approach to the end user
      </vs-alert>
    </template>
  ```

</div>

</card>

<card>

## Title

You can add a descriptive title to the alert with the `slot="title"`

<div slot="example">
  <div class="center">
    <vs-alert>
      <template #title>
        Vuesax Alert Title
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>

<div slot="template">

  ```html{4,5,6}
    <template>
      <div class="center">
        <vs-alert>
          <template #title>
            Vuesax Alert Title
          </template>
          Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
          created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
          Unique and pleasant style, Vuesax is created from scratch and designed for all types of
          developed from the frontend lover to the backend that wants to easily create
          your visual approach to the end user
        </vs-alert>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Hidden Content <Badge text="New"/>

You can hide the content of an alert and just leave the title to display the content dynamically

<div slot="example">
  <alert-hiddenContent />
</div>

<div slot="template">

  ```html{2}
    <template>
      <vs-alert :hidden-content.sync="hidden" >
        <template #title>
          Vuesax Framework
        </template>
        Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
        created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
        Unique and pleasant style, Vuesax is created from scratch and designed for all types of
        developed from the frontend lover to the backend that wants to easily create
        your visual approach to the end user
      </vs-alert>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          hidden: true
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Pagination <Badge text="New"/>

There are times when we need to show a lot of content to the user but we don't want to extend the text and make the alert very large and tall

<div slot="example">

  <alert-pagination />

</div>

<div slot="template">

  ```html{2,7,12,17}
    <template>
      <vs-alert :page.sync="page" >
        <template #title>
          Vuesax Framework
        </template>

        <template #page-1>
          Pagina 1 - esta pagina es un slot y aquí adentro puedes agregar ya sea texto,
          elementos html o componentes
        </template>

        <template #page-2>
          Pagina 2 - En esta otra pagina puedes poner también lo que necesites
          y es dinámico osea que puedes agregar cuantas paginas necesites
        </template>

        <template #page-3>
          Pagina 3 - esta es la ultima pagina de el ejemplo
        </template>
      </vs-alert>
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

## footer <Badge text="New"/>

Use the `footer` slot to add a footer to the alert where for example you can add interactions with the user such as a button or a checkbox.

<div slot="example">
  <div class="center">
    <vs-alert>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
      <template #footer>
        <vs-button flat>
          Cancel
        </vs-button>
        <vs-button>
          Accept
        </vs-button>
      </template>
    </vs-alert>
  </div>
</div>

<div slot="template">

  ```html{10,11,12,13,14,15,16,17}
    <vs-alert>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
      <template #footer>
        <vs-button flat>
          Cancel
        </vs-button>
        <vs-button>
          Accept
        </vs-button>
      </template>
    </vs-alert>
  ```

</div>

</card>

<card>

## Progress bar <Badge text="New"/>

You can add a progress bar to the alert with the progress property and a number of (`0 - 100`)

<div slot="example">
  <vs-alert progress="70">
    <template #title>
      Vuesax Framework
    </template>
    Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
    created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
    Unique and pleasant style, Vuesax is created from scratch and designed for all types of
    developed from the frontend lover to the backend that wants to easily create
    your visual approach to the end user
  </vs-alert>
</div>

<div slot="template">

  ```html{4,5,6}
    <vs-alert progress="70">
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  ```

</div>

</card>

<card>

## Closable <Badge text="New"/>

You can add a close alert icon with the `closable` property, the property is a` boolean` so you can add it without any value.

<div slot="example">
  <alert-closable />
</div>

<div slot="template">

  ```html{6}
    <template>
      <vs-button flat @click="active=!active">
        {{ active ? 'Close Alert' : 'Open Alert' }}
      </vs-button>

      <vs-alert closable v-model="active">
        <template #title>
          Vuesax Framework
        </template>
        Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
        created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
        Unique and pleasant style, Vuesax is created from scratch and designed for all types of
        developed from the frontend lover to the backend that wants to easily create
        your visual approach to the end user
      </vs-alert>
    </template>
  ```

</div>

<div slot="script">

  ```html{6}
    <script>
      export default {
        data:() => ({
          active: true,
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Time Close <Badge text="New"/>

If you need an alert to have time to hide, you can do so by joining some properties and few lines of code

<div slot="example">
  <alert-time />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center">
        <vs-button dark flat @click="active=true">
          Open Alert 10s
        </vs-button>
        <vs-alert dark :progress="progress" v-model="active">
          <template #title>
            Vuesax Framework
          </template>
          Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
          created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
          Unique and pleasant style, Vuesax is created from scratch and designed for all types of
          developed from the frontend lover to the backend that wants to easily create
          your visual approach to the end user
        </vs-alert>
      </div>
  </template>
  ```

</div>

<div slot="script">

  ```html{6}
    <script>
      export default {
        data:() => ({
          active: false,
          time: 6000,
          progress: 0
        }),
        watch: {
          active(val) {
            if(val) {
              var interval = setInterval(() => {
                this.progress++
              }, this.time / 100);

              setTimeout(() => {
                this.active = false
                clearInterval(interval)
                this.progress = 0
              }, this.time);
            }
          }
        }
      }
    </script>
  ```

</div>

</card>

<card>

## API

</card>

