---
PROPS:
  - name: color
    type: String
    values: Colores principales de vuesax, RGB, HEX
    description: Cambia el color de el componente.
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
    description: Determina si el componente se encuentra en estado loading y agrega una animación.
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
    description: Agrega un placeholder al componente.
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
    description: Agrega un label al componete select.
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
    description: Agrega un placeholder que al estar en focus o con valor se convierte en un label.
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
    description: Agrega la funcionalidad de filtrar las opciones de el select.
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
    description: Agrega la funcionalidad de poder seleccionar varias opciones de un select.
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
    values: Colores principales de Vuesax
    description: Cambia el estado de el componete al color proporcionado.
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
    description: Determina si el componente se encuentra en estado de disabled.
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
    description: Determina si los chips en multiple se reducen a 2 elementos.
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
    description: Agrega un mensaje debajo de el select.
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
    description: Al componente vs-option-group le agrega un titulo al grupo de opciones.
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

Agrega un elemento select con el componente `vs-select` y el sub componente `vs-option`

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

Cambie el color del componente con la propiedad `color`, los valores permitidos son los colores principales de vuesax y los colores (**RGB** y **HEX**)

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

Agrega un label al select fácilmente con la propiedad `label`, tambien puedes agregar un `label-placeholder` que como su nombre lo dice es un placeholder que se anima a label, y por ultimo el placeholder con la propiedad `placeholder`

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

Agrupa opciones dentro de el select con el sub-componente `vs-option-group`, como slot requerido es el de `title` para agregar un titulo al grupo de items

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

Puedes agregar la funcionalidad de filtrar opciones con la propiedad `filter`, esta propiedad es un `boolean` por lo que puedes agregarla sin ningún valor

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

Agrega la funcionalidad de multiple selección de opciones con la propiedad `multiple`, esta propiedad es un `boolean` por lo que puedes agregarla sin ningún valor

:::tip
El valor de el select debe ser un array
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

Agrega una animación de loading al select con la propiedad `loading`, esta propiedad es un `boolean` por lo que puedes agregarla sin ningún valor

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

Cambia el estilo de el componente al color pasado en la propiedad `state`, los colores permitidos son solo los principales de vuesax

:::tip
Esta propiedad puede usarse para indicar al usuario un error algún campo que falta o cuando algo esta listo
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

Agrega un elemento debajo de el select mostrando un mensaje al usuario

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
