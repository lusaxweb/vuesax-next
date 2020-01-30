---
PROPS:
  - name: color
    type: String
    values: Main colors of vuesax, RGB, HEX
    description: Change the color of the component.
    default: primary
    link: null
    usage: '#color'
    code: >
            <template>
              <div class="center con-selects">
                <vs-select
                  v-for="(color, i) in colors"
                  :key="i"
                  :color="color.color"
                  placeholder="Select"
                  v-model="color.value"
                >
                  <vs-option label="Vuesax" value="1">
                    Vuesax
                  </vs-option>
                  <vs-option label="Vue" value="2">
                    Vue
                  </vs-option>
                  <vs-option label="Javascript" value="3">
                    Javascript
                  </vs-option>
                  <vs-option label="Sass" value="4">
                    Sass
                  </vs-option>
                  <vs-option label="Typescript" value="5">
                    Typescript
                  </vs-option>
                  <vs-option label="Webpack" value="6">
                    Webpack
                  </vs-option>
                  <vs-option label="Nodejs" value="7">
                    Nodejs
                  </vs-option>
                </vs-select>
              </div>
            </template>
            <script>
            export default {
              data:() => ({
                colors: [
                  {
                    color: 'danger',
                    value: '1'
                  },
                  {
                    color: 'success',
                    value: '2'
                  },
                  {
                    color: 'warn',
                    value: '3'
                  },
                  {
                    color: 'dark',
                    value: '4'
                  },
                  {
                    color: '#7d33ff',
                    value: '5'
                  },
                  {
                    color: 'rgb(59,222,200)',
                    value: '6'
                  },

                ]
              })
            }
            </script>
  - name: loading
    type: Boolean
    values: true, false
    description: Determine if the component is in the loading state and add an animation.
    default: false
    link: null
    usage: '#loading'
    code: >
            <vs-select
              placeholder="Success"
              v-model="value1"
              loading
            >
              <vs-option label="Vuesax" value="1">
                Vuesax
              </vs-option>
              <vs-option label="Vue" value="2">
                Vue
              </vs-option>
              <vs-option label="Javascript" value="3">
                Javascript
              </vs-option>
              <vs-option label="Sass" value="4">
                Sass
              </vs-option>
              <vs-option label="Typescript" value="5">
                Typescript
              </vs-option>
              <vs-option label="Webpack" value="6">
                Webpack
              </vs-option>
              <vs-option label="Nodejs" value="7">
                Nodejs
              </vs-option>
            </vs-select>
  - name: placeholder
    type: String
    values: String
    description: Add a placeholder to the component.
    default: null
    link: null
    usage: '#default'
    code: >
            <vs-select placeholder="Select" v-model="value">
              <vs-option label="Vuesax" value="1">
                Vuesax
              </vs-option>
              <vs-option label="Vue" value="2">
                Vue
              </vs-option>
              <vs-option label="Javascript" value="3">
                Javascript
              </vs-option>
              <vs-option disabled label="Sass" value="4">
                Sass
              </vs-option>
              <vs-option label="Typescript" value="5">
                Typescript
              </vs-option>
              <vs-option label="Webpack" value="6">
                Webpack
              </vs-option>
              <vs-option label="Nodejs" value="7">
                Nodejs
              </vs-option>
            </vs-select>

  - name: label
    type: String
    values: String
    description: Add a label to the composite select.
    default: null
    link: null
    usage: '#label'
    code: >
            <vs-select
              label="Label"
              v-model="value1"
            >
              <vs-option label="Vuesax" value="1">
                Vuesax
              </vs-option>
              <vs-option label="Vue" value="2">
                Vue
              </vs-option>
              <vs-option label="Javascript" value="3">
                Javascript
              </vs-option>
              <vs-option label="Sass" value="4">
                Sass
              </vs-option>
              <vs-option label="Typescript" value="5">
                Typescript
              </vs-option>
              <vs-option label="Webpack" value="6">
                Webpack
              </vs-option>
              <vs-option label="Nodejs" value="7">
                Nodejs
              </vs-option>
            </vs-select>
  - name: label-placeholder
    type: String
    values: String
    description: Add a placeholder that when in focus or with value becomes a label.
    default: null
    link: null
    usage: '#label'
    code: >
            <vs-select
              label-placeholder="Label-placeholder"
              v-model="value2"
            >
              <vs-option label="Vuesax" value="1">
                Vuesax
              </vs-option>
              <vs-option label="Vue" value="2">
                Vue
              </vs-option>
              <vs-option label="Javascript" value="3">
                Javascript
              </vs-option>
              <vs-option label="Sass" value="4">
                Sass
              </vs-option>
              <vs-option label="Typescript" value="5">
                Typescript
              </vs-option>
              <vs-option label="Webpack" value="6">
                Webpack
              </vs-option>
              <vs-option label="Nodejs" value="7">
                Nodejs
              </vs-option>
            </vs-select>

  - name: filter
    type: Boolean
    values: true, false
    description: Add the functionality to filter the select options.
    default: false
    link: null
    usage: '#filter'
    code: >
            <vs-select
              filter
              placeholder="Filter"
              v-model="value"
            >
              <vs-option label="Vuesax" value="1">
                Vuesax
              </vs-option>
              <vs-option label="Vue" value="2">
                Vue
              </vs-option>
              <vs-option label="Javascript" value="3">
                Javascript
              </vs-option>
              <vs-option label="Sass" value="4">
                Sass
              </vs-option>
              <vs-option label="Typescript" value="5">
                Typescript
              </vs-option>
              <vs-option label="Webpack" value="6">
                Webpack
              </vs-option>
              <vs-option label="Nodejs" value="7">
                Nodejs
              </vs-option>
            </vs-select>

  - name: multiple
    type: Boolean
    values: true, false
    description: Add the functionality of being able to select several options from a select.
    default: false
    link: null
    usage: '#multiple'
    code: >
            <vs-select
              label="Multiple"
              multiple
              placeholder="Filter"
              v-model="value"
            >
              <vs-option label="Vuesax" value="1">
                Vuesax
              </vs-option>
              <vs-option label="Vue" value="2">
                Vue
              </vs-option>
              <vs-option label="Javascript" value="3">
                Javascript
              </vs-option>
              <vs-option label="Sass" value="4">
                Sass
              </vs-option>
              <vs-option label="Typescript" value="5">
                Typescript
              </vs-option>
              <vs-option label="Webpack" value="6">
                Webpack
              </vs-option>
              <vs-option label="Nodejs" value="7">
                Nodejs
              </vs-option>
            </vs-select>

  - name: state
    type: String
    values: Vuesax main colors
    description: Change the state of the component to the color provided.
    default: false
    link: null
    usage: '#state'
    code: >
            <vs-select
              v-for="(color, i) in colors"
              :key="i"
              :state="color.color"
              :label="color.color"
              placeholder="Select"
              v-model="color.value"
              >
                <vs-option label="Vuesax" value="1">
                  Vuesax
                </vs-option>
                <vs-option label="Vue" value="2">
                  Vue
                </vs-option>
                <vs-option label="Javascript" value="3">
                  Javascript
                </vs-option>
                <vs-option label="Sass" value="4">
                  Sass
                </vs-option>
                <vs-option label="Typescript" value="5">
                  Typescript
                </vs-option>
                <vs-option label="Webpack" value="6">
                  Webpack
                </vs-option>
                <vs-option label="Nodejs" value="7">
                  Nodejs
                </vs-option>
                </vs-select>
              </div>
            </template>

  - name: disabled
    type: Boolean
    values: true, false
    description: Determine if the component is in the disabled state.
    default: false
    link: null
    usage: null
    code: >
            <vs-select
              disabled
              placeholder="Success"
              v-model="value1"
            >
              <template #message-success>
                Option Valid
              </template>
              <vs-option label="Vuesax" value="1">
                Vuesax
              </vs-option>
              <vs-option label="Vue" value="2">
                Vue
              </vs-option>
              <vs-option label="Javascript" value="3">
                Javascript
              </vs-option>
              <vs-option label="Sass" value="4">
                Sass
              </vs-option>
              <vs-option label="Typescript" value="5">
                Typescript
              </vs-option>
              <vs-option label="Webpack" value="6">
                Webpack
              </vs-option>
              <vs-option label="Nodejs" value="7">
                Nodejs
              </vs-option>
            </vs-select>
  - name: collapse-chips
    type: Boolean
    values: true, false
    description: Determine if the chips in multiple are reduced to 2 elements.
    default: false
    link: null
    usage: '#multiple'
    code: >
            <vs-select
              label="Multiple collapse chips"
              filter
              multiple
              collapse-chips
              placeholder="Collapse chips"
              v-model="value3"
            >
              <vs-option label="Vuesax" value="1">
                Vuesax
              </vs-option>
              <vs-option label="Vue" value="2">
                Vue
              </vs-option>
              <vs-option label="Javascript" value="3">
                Javascript
              </vs-option>
              <vs-option label="Sass" value="4">
                Sass
              </vs-option>
              <vs-option label="Typescript" value="5">
                Typescript
              </vs-option>
              <vs-option label="Webpack" value="6">
                Webpack
              </vs-option>
              <vs-option label="Nodejs" value="7">
                Nodejs
              </vs-option>
            </vs-select>

SLOTS:
  - name: message-{color}
    type: slot
    values: null
    description: Add a message below the select.
    default: null
    link: null
    usage: '#message'
    code: >
            <vs-select
              placeholder="Success"
              v-model="value1"
            >
              <template #message-success>
                Option Valid
              </template>
              <vs-option label="Vuesax" value="1">
                Vuesax
              </vs-option>
              <vs-option label="Vue" value="2">
                Vue
              </vs-option>
              <vs-option label="Javascript" value="3">
                Javascript
              </vs-option>
              <vs-option label="Sass" value="4">
                Sass
              </vs-option>
              <vs-option label="Typescript" value="5">
                Typescript
              </vs-option>
              <vs-option label="Webpack" value="6">
                Webpack
              </vs-option>
              <vs-option label="Nodejs" value="7">
                Nodejs
              </vs-option>
            </vs-select>
  - name: title
    type: slot
    values: null
    description: The vs-option-group component adds a title to the option group.
    default: null
    link: null
    usage: '#group'
    code: >
            <vs-select
              label="Group"
              placeholder="Group"
              v-model="value1"
            >
              <vs-option-group>
                <div slot="title">
                  Vuejs
                </div>
                <vs-option label="Vuesax" value="1">
                  Vuesax
                </vs-option>
                <vs-option label="Vue" value="2">
                  Vue
                </vs-option>
                <vs-option label="Javascript" value="3">
                  Javascript
                </vs-option>
              </vs-option-group>
              <vs-option-group>
                <div slot="title">
                  Others
                </div>
                <vs-option label="Sass" value="4">
                  Sass
                </vs-option>
                <vs-option label="Typescript" value="5">
                  Typescript
                </vs-option>
                <vs-option label="Webpack" value="6">
                  Webpack
                </vs-option>
                <vs-option label="Nodejs" value="7">
                  Nodejs
                </vs-option>
              </vs-option-group>
            </vs-select>
NEWS:
  - loading
  - message
  - state
  - filter
---

# Select

<card>

## Default

<docs-warn />

Add a select element with the `vs-select` component and the `vs-option` sub component

<div slot="example">
  <Select-default />
</div>

<div slot="template">

  ```html{3,25}
    <template>
      <div class="center">
        <vs-select placeholder="Select" v-model="value">
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option disabled label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          value: '',
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Color

Change the color of the component with the `color` property, the allowed values ​​are the main colors of vuesax and the colors (**RGB** and **HEX**)

<div slot="example">
  <Select-color />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center con-selects">
        <vs-select
          v-for="(color, i) in colors"
          :key="i"
          :color="color.color"
          placeholder="Select"
          v-model="color.value"
        >
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          colors: [
            {
              color: 'danger',
              value: '1'
            },
            {
              color: 'success',
              value: '2'
            },
            {
              color: 'warn',
              value: '3'
            },
            {
              color: 'dark',
              value: '4'
            },
            {
              color: '#7d33ff',
              value: '5'
            },
            {
              color: 'rgb(59,222,200)',
              value: '6'
            },

          ]
        })
      }
    </script>
  ```

</div>

</card>


<card>

## Label

Add a label to the select easily with the `label` property, you can also add a `label-placeholder` which as its name says is a placeholder that encourages label, and finally the placeholder with the `placeholder` property

<div slot="example">
  <Select-label />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center con-selects">
        <vs-select
          label="Label"
          v-model="value1"
        >
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>

        <vs-select
          label-placeholder="Label-placeholder"
          v-model="value2"
        >
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>

        <vs-select
          placeholder="Placeholder"
          v-model="value3"
        >
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4,5,6}
    <script>
      export default {
        data:() => ({
          value1: '',
          value2: '',
          value3: '',
        })
      }
    </script>
  ```

</div>

</card>


<card>

## Group

Group options within the select with the sub-component `vs-option-group`, as the required slot is the `title` to add a title to the item group

<div slot="example">
  <Select-group />
</div>

<div slot="template">

  ```html{8,21}
    <template>
      <div class="center con-selects">
        <vs-select
          label="Group"
          placeholder="Group"
          v-model="value1"
        >
          <vs-option-group>
            <div slot="title">
              Vuejs
            </div>
            <vs-option label="Vuesax" value="1">
              Vuesax
            </vs-option>
            <vs-option label="Vue" value="2">
              Vue
            </vs-option>
            <vs-option label="Javascript" value="3">
              Javascript
            </vs-option>
          </vs-option-group>
          <vs-option-group>
            <div slot="title">
              Others
            </div>
            <vs-option label="Sass" value="4">
              Sass
            </vs-option>
            <vs-option label="Typescript" value="5">
              Typescript
            </vs-option>
            <vs-option label="Webpack" value="6">
              Webpack
            </vs-option>
            <vs-option label="Nodejs" value="7">
              Nodejs
            </vs-option>
          </vs-option-group>
        </vs-select>

        <vs-select
          label="Group Filter"
          filter
          placeholder="Filter"
          v-model="value2"
        >
          <vs-option-group>
            <div slot="title">
              Vuejs
            </div>
            <vs-option label="Vuesax" value="1">
              Vuesax
            </vs-option>
            <vs-option label="Vue" value="2">
              Vue
            </vs-option>
            <vs-option label="Javascript" value="3">
              Javascript
            </vs-option>
          </vs-option-group>
          <vs-option-group>
            <div slot="title">
              Others
            </div>
            <vs-option label="Sass" value="4">
              Sass
            </vs-option>
            <vs-option label="Typescript" value="5">
              Typescript
            </vs-option>
            <vs-option label="Webpack" value="6">
              Webpack
            </vs-option>
            <vs-option label="Nodejs" value="7">
              Nodejs
            </vs-option>
          </vs-option-group>
        </vs-select>

        <vs-select
          label="Group Multiple Filter"
          filter
          multiple
          placeholder="Group Multiple Filter"
          v-model="value3"
        >
          <vs-option-group>
            <div slot="title">
              Vuejs
            </div>
            <vs-option label="Vuesax" value="1">
              Vuesax
            </vs-option>
            <vs-option label="Vue" value="2">
              Vue
            </vs-option>
            <vs-option label="Javascript" value="3">
              Javascript
            </vs-option>
          </vs-option-group>
          <vs-option-group>
            <div slot="title">
              Others
            </div>
            <vs-option label="Sass" value="4">
              Sass
            </vs-option>
            <vs-option label="Typescript" value="5">
              Typescript
            </vs-option>
            <vs-option label="Webpack" value="6">
              Webpack
            </vs-option>
            <vs-option label="Nodejs" value="7">
              Nodejs
            </vs-option>
          </vs-option-group>
        </vs-select>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4,5,6}
    <script>
      export default {
        data:() => ({
          value1: ['3'],
          value2: ['4'],
          value3: ['1'],
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Filter <Badge text="New"/>

You can add the functionality of filtering options with the `filter` property, this property is a `boolean` so you can add it without any value

<div slot="example">
  <Select-filter />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center con-selects">
        <vs-select
          filter
          placeholder="Filter"
          v-model="value"
        >
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
        <vs-select
          filter
          multiple
          placeholder="Filter Multiple"
          v-model="value2"
        >
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4,5}
    <script>
      export default {
        data:() => ({
          value: '',
          value2: ''
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Multiple

Add the functionality of multiple selection of options with the `multiple` property, this property is a `boolean` so you can add it without any value

:::tip
The value of the select must be an array
:::

<div slot="example">
  <Select-multiple />
</div>

<div slot="template">

  ```html{5}
    <template>
      <div class="center con-selects">
        <vs-select
          label="Multiple"
          multiple
          placeholder="Filter"
          v-model="value"
        >
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
        <vs-select
          label="Filter Multiple"
          filter
          multiple
          placeholder="Filter Multiple"
          v-model="value2"
        >
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>

        <vs-select
          label="Multiple collapse chips"
          filter
          multiple
          collapse-chips
          placeholder="Collapse chips"
          v-model="value3"
        >
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4,5,6}
    <script>
      export default {
        data:() => ({
          value: ['1', '2', '3'],
          value2: ['4',],
          value3: ['1', '4', '5', '6'],
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Loading <Badge text="New"/>

Add a loading animation to the select with the `loading` property, this property is a `boolean` so you can add it without any value

<div slot="example">
  <Select-loading />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center con-selects">
        <vs-select
          placeholder="Success"
          v-model="value1"
          loading
        >
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>

        <vs-select
          placeholder="Warn"
          v-model="value2"
          loading
          multiple
        >
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          value1: '3',
          value2: ['4','1','3'],
        })
      }
    </script>
  ```

</div>

</card>

<card>

## State <Badge text="New"/>

Change the style of the component to the color passed in the `state` property, the allowed colors are only the main ones of vuesax

:::tip
This property can be used to indicate a missing field to the user or when something is ready.
:::

<div slot="example">
  <Select-state />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center con-selects">
        <vs-select
          v-for="(color, i) in colors"
          :key="i"
          :state="color.color"
          :label="color.color"
          placeholder="Select"
          v-model="color.value"
        >
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          colors: [
            {
              color: 'primary',
              value: '1'
            },
            {
              color: 'danger',
              value: '1'
            },
            {
              color: 'success',
              value: '2'
            },
            {
              color: 'warn',
              value: '3'
            },
            {
              color: 'dark',
              value: '4'
            }
          ]
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Message <Badge text="New"/>

Add an item below the select showing a message to the user

<div slot="example">
  <Select-message />
</div>

<div slot="template">

  ```html{7,8,9}
    <template>
      <div class="center con-selects">
        <vs-select
          placeholder="Success"
          v-model="value1"
        >
          <template #message-success>
            Option Valid
          </template>
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>

        <vs-select
          placeholder="Warn"
          v-model="value2"
        >
          <template #message-danger>
            Required
          </template>
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>

        <vs-select
          placeholder="Danger"
          v-model="value3"
        >
          <template #message-warn>
            Select your country where you are currently
          </template>
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4,5,6}
    <script>
      export default {
        data:() => ({
          value1: '',
          value2: '',
          value3: '',
        })
      }
    </script>
  ```

</div>

</card>

<card>

## API

</card>
