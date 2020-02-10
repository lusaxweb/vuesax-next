---
PROPS:
  - name: v-model
    type: boolean, string, array
    values: boolean, string, array
    description: determine the value of the checkbox and data anchor.
    default: false
    link: null
    usage: '#default'
    code: >
            <template>
              <div class="center">
                <vs-checkbox v-model="option">
                  Option
                </vs-checkbox>
              </div>
            </template>
  - name: color
    type: string
    values: vuesax colors, RGB, HEX
    description: Change the color of the component.
    default: false
    link: null
    usage: '#color'
    code: >
            <template>
              <div class="center">
                <vs-checkbox v-model="option1">
                  Primary
                </vs-checkbox>
                <vs-checkbox success v-model="option2">
                  Success
                </vs-checkbox>
                <vs-checkbox danger v-model="option3">
                  Danger
                </vs-checkbox>
                <vs-checkbox warn v-model="option4">
                  warning
                </vs-checkbox>
                <vs-checkbox dark v-model="option5">
                  dark
                </vs-checkbox>
                <vs-checkbox color="#7d33ff" v-model="option6">
                  dark
                </vs-checkbox>
                <vs-checkbox color="rgb(59,222,200)" v-model="option7">
                  RGB
                </vs-checkbox>
              </div>
            </template>
  - name: val
    type: string, object
    values: string, object
    description: Determine the value of the input when being checked.
    default: true
    link: null
    usage: '#string-value'
    code: >
            <template>
              <div class="center con-checkbox">
                <vs-checkbox val="automatically" v-model="option">
                  Save data automatically
                </vs-checkbox>

                <span class="data">
                  {{ option ? option : 'null'}}
                </span>
              </div>
            </template>

  - name: loading
    type: boolean
    values: true, false
    description: Add a loading animation and disable the input.
    default: false
    link: null
    usage: '#loading'
    code: >
            <template>
              <div class="center con-checkbox">
                <vs-checkbox loading v-model="option">
                  Loading checked
                </vs-checkbox>
                <vs-checkbox loading v-model="option2">
                  Loading unchecked
                </vs-checkbox>
              </div>
            </template>

  - name: line-through
    type: boolean
    values: true, false
    description: Add a line in the center of the label when checked.
    default: false
    link: null
    usage: '#linethrough'
    code: >
            <template>
              <div class="center">
                <vs-checkbox line-through v-model="option">
                  Option
                </vs-checkbox>
              </div>
            </template>

  - name: indeterminate
    type: boolean
    values: true, false
    description: Change the default checkbox icon to a line that represents undetermined data.
    default: false
    link: null
    usage: '#Indeterminate'
    code: >
            <template>
              <div class="center">
                <vs-checkbox indeterminate v-model="option">
                  Option
                </vs-checkbox>
              </div>
            </template>

  - name: label-before
    type: boolean
    values: true, false
    description: Change the position of the label.
    default: false
    link: null
    usage: '#label'
    code: >
            <vs-checkbox label-before v-model="option2">
              Label Before
            </vs-checkbox>

  - name: checked
    type: boolean
    values: true, false
    description: Determine if the component is initially in check (this changes the property computed in v-model to true).
    default: false
    link: null
    usage: null
    code: >
            <vs-checkbox label-before v-model="option2">
              Label Before
            </vs-checkbox>

SLOTS:
  - name: icon
    type: slot
    values: null
    description: Change the component icon.
    default: null
    link: null
    usage: '#icon'
    code: >
            <template>
              <div class="center">
                <vs-checkbox v-model="option1">
                  <template #icon>
                    <i class='bx bx-check' ></i>
                  </template>
                </vs-checkbox>
                <vs-checkbox success v-model="option2">
                  <template #icon>
                    <i class='bx bx-check-double'></i>
                  </template>
                </vs-checkbox>
                <vs-checkbox danger v-model="option3">
                  <template #icon>
                    <i class='bx bx-x'></i>
                  </template>
                </vs-checkbox>
                <vs-checkbox warn v-model="option4">
                  <template #icon>
                    <i class='bx bxs-shield'></i>
                  </template>
                </vs-checkbox>
                <vs-checkbox dark v-model="option5">
                  <template #icon>
                    <i class='bx bxs-heart' ></i>
                  </template>
                </vs-checkbox>
                <vs-checkbox color="#7d33ff" v-model="option6">
                  <template #icon>
                    <i class='bx bx-brightness' ></i>
                  </template>
                </vs-checkbox>
                <vs-checkbox color="rgb(59,222,200)" v-model="option7">
                  <template #icon>
                    <i class='bx bxs-paint' ></i>
                  </template>
                </vs-checkbox>
              </div>
            </template>

  - name: default
    type: slot
    values: null
    description: Add a label to the component.
    default: null
    link: null
    usage: '#default'
    code: >
            <template>
              <div class="center">
                <vs-checkbox v-model="option">
                  Option
                </vs-checkbox>
              </div>
            </template>
NEWS:
  - indeterminate
  - loading
  - linethrough
---

# Checkbox

<card>

## Default

<docs-warn />

Add a checkbox type input easily and with a beautiful animation

<div slot="example">
  <Checkbox-default />
</div>

<div slot="template">

  ```html{3,4,5}
    <template>
      <div class="center">
        <vs-checkbox v-model="option">
          Option
        </vs-checkbox>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          option: true,
        })
      }
    </script>
  ```

</div>

</card>

<card>

## color

Change the color of the component with the `color` property, the allowed values ​​are (main colors of vuesax, RGB, HEX)

<div slot="example">
  <Checkbox-color />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-checkbox v-model="option1">
          Primary
        </vs-checkbox>
        <vs-checkbox success v-model="option2">
          Success
        </vs-checkbox>
        <vs-checkbox danger v-model="option3">
          Danger
        </vs-checkbox>
        <vs-checkbox warn v-model="option4">
          warning
        </vs-checkbox>
        <vs-checkbox dark v-model="option5">
          dark
        </vs-checkbox>
        <vs-checkbox color="#7d33ff" v-model="option6">
          HEX
        </vs-checkbox>
        <vs-checkbox color="rgb(59,222,200)" v-model="option7">
          RGB
        </vs-checkbox>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          option1: true,
          option2: true,
          option3: true,
          option4: true,
          option5: true,
          option6: true,
          option7: true
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Boolean Value

By default the component is used with a boolean value that when being checked returns `true` and when not being checked returns `false`

<div slot="example">
  <Checkbox-boolean />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-checkbox v-model="option1">
          {{ option1 }}
        </vs-checkbox>
        <vs-checkbox v-model="option2">
          {{ option2 }}
        </vs-checkbox>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          option1: true,
          option2: false,
        })
      }
    </script>
  ```

</div>

</card>

<card>

## String Value

You may need to return a string when the component is checked for it use the `val` property with the `string` you want to return

<div slot="example">
  <Checkbox-string />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-checkbox">
        <vs-checkbox val="automatically" v-model="option">
          Save data automatically
        </vs-checkbox>

        <span class="data">
          {{ option ? option : 'null'}}
        </span>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          option: null,
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Array Value

You may need to return a string when the component is checked for it use the `val` property with the `string` you want to return

<div slot="example">
  <Checkbox-array />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center con-checkbox">
        <vs-checkbox val="html" v-model="options">
          Html
        </vs-checkbox>
        <vs-checkbox val="css" v-model="options">
          Css
        </vs-checkbox>
        <vs-checkbox val="javascript" v-model="options">
          Javascript
        </vs-checkbox>
        <vs-checkbox val="vue" v-model="options">
          Vue
        </vs-checkbox>
        <vs-checkbox val="vuesax" v-model="options">
          Vuesax
        </vs-checkbox>

        <span class="data">
          {{ options }}
        </span>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          options: [
            'javascript',
            'vue'
          ],
        }),
      }
    </script>
  ```

</div>

</card>

<card>

## Array Object values

the `val` property of a checkbox component can be an `object`

<div slot="example">
  <Checkbox-object />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center con-checkbox">
        <vs-checkbox :val="{ github: 'https://github.com/webpack/webpack', name: 'Webpack' }" v-model="options">
          Webpack
        </vs-checkbox>
        <vs-checkbox :val="{ github: 'https://github.com/microsoft/TypeScript', name: 'Typescript' }" v-model="options">
          Typescript
        </vs-checkbox>
        <vs-checkbox :val="{ github: 'https://github.com/sass/sass', name: 'Sass' }" v-model="options">
          Sass
        </vs-checkbox>

        <pre class="data">
          <code>
      {{ options }}
          </code>
        </pre>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          options: [
            {
              "github": "https://github.com/webpack/webpack",
              "name": "Webpack"
            }
          ],
        }),
      }
    </script>
  ```

</div>

</card>

<card>

## Icon

Change the icon inside the checkbox component with the`slot="icon"`

<utils-icon />

<div slot="example">
  <Checkbox-icon />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-checkbox v-model="option1">
          <template #icon>
            <i class='bx bx-check' ></i>
          </template>
        </vs-checkbox>
        <vs-checkbox success v-model="option2">
          <template #icon>
            <i class='bx bx-check-double'></i>
          </template>
        </vs-checkbox>
        <vs-checkbox danger v-model="option3">
          <template #icon>
            <i class='bx bx-x'></i>
          </template>
        </vs-checkbox>
        <vs-checkbox warn v-model="option4">
          <template #icon>
            <i class='bx bxs-shield'></i>
          </template>
        </vs-checkbox>
        <vs-checkbox dark v-model="option5">
          <template #icon>
            <i class='bx bxs-heart' ></i>
          </template>
        </vs-checkbox>
        <vs-checkbox color="#7d33ff" v-model="option6">
          <template #icon>
            <i class='bx bx-brightness' ></i>
          </template>
        </vs-checkbox>
        <vs-checkbox color="rgb(59,222,200)" v-model="option7">
          <template #icon>
            <i class='bx bxs-paint' ></i>
          </template>
        </vs-checkbox>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          option1: true,
          option2: true,
          option3: true,
          option4: true,
          option5: true,
          option6: true,
          option7: true
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Label

Add a label to the checkbox with the default slot of the component

<div slot="example">
  <Checkbox-label />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center con-checkbox">
        <vs-checkbox v-model="option">
          Label
        </vs-checkbox>
        <vs-checkbox label-before v-model="option2">
          Label Before
        </vs-checkbox>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          option: true,
          option2: true,
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Loading <Badge text="New"/>

Add a loading status to the component with the property `loading`


<div slot="example">
  <Checkbox-loading />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center con-checkbox">
        <vs-checkbox loading v-model="option">
          Loading checked
        </vs-checkbox>
        <vs-checkbox loading v-model="option2">
          Loading unchecked
        </vs-checkbox>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          option: true,
          option2: false,
        })
      }
    </script>
  ```

</div>

</card>

<card>

## LineThrough <Badge text="New"/>

Add a line in the middle of the label when the checkbox is checked with the property `line-through`

<div slot="example">
  <Checkbox-linethrough />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-checkbox line-through v-model="option">
          Option
        </vs-checkbox>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          option: true,
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Indeterminate <Badge text="New"/>

There are some cases where you have several checkboxes and you need one that manages all the others for this you can do it with the indeterminate property that adds a different style to the checkbox

<div slot="example">
  <Checkbox-indeterminate />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-checkbox indeterminate v-model="option">
          Option
        </vs-checkbox>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          option: true,
        })
      }
    </script>
  ```

</div>

</card>




<card>

## API

</card>
