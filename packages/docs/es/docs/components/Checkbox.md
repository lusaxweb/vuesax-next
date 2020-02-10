---
PROPS:
  - name: v-model
    type: boolean, string, array
    values: boolean, string, array
    description: determina el valor de el checkbox y anclaje de datos.
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
    description: Cambia el color de el componente.
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
    description: determina el valor de el input al estar en checked.
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
    description: Agrega una animación de loading y deshabilita el input.
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
    description: Agrega una linea en el centro de el label cuando esta en checked .
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
    description: Cambia el icono por defecto de el checkbox a una linea que representa dato indeterminado.
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
    description: Cambia la posición del label.
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
    description: determina si el componente inicialmente esta en check (esto hace que cambie la propiedad computada en v-model a true).
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
    description: Cambia el icono del componente.
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
    description: Agrega un label al componente.
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

Agrega un input de tipo checkbox fácilmente y con una hermosa animación

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

Cambia el color de el componente con la propiedad `color`, los valores permitidos son (colores principales de vuesax, RGB, HEX)

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

Por defecto el componente es usado con un valor boolean que al estar en checked retorna `true` y al no estar checked retorna `false`

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

Puedes necesitar retornar un string al estar el componente en checked para ello usa la propiedad `val` con el `string` que quieres retornar

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

El valor de el componente puede ser un `Array` si la propiedad val de el checkbox no se encuentra entre los valores se va a agregar de lo contrario se eliminara

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

la propiedad `val` de un componente checkbox puede ser un `object`

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

Cambia el icono dentro de el componente checkbox con el `slot="icon"`

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

Agrega un label al checkbox con el slot default del componente


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

Agrega un estado de cargando al componente con la propiedad `loading`


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

Agrega una linea en el medio de el label cuando el checkbox esta en checked con la propiedad `line-through`

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

Hay algunos casos en que tienes varios checkbox y necesitas uno que gestione a todos los demás para ello puedes hacerlo con la propiedad indeterminate que agrega un estilo distinto al checkbox

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
