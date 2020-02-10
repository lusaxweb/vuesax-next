---
PROPS:
  - name: color
    type: String
    values: Vuesax Colors, RGB, HEX
    description: Cambia el color de el radio.
    default: primary
    link: null
    usage: '#color'
    code: >
            <vs-radio success v-model="picked" val="2">
              Success
            </vs-radio>

  - name: disabled
    type: Boolean
    values: true,false
    description: Determina si el componente se encuentra en estado disabled.
    default: false
    link: null
    usage: '#default'
    code: >
            <vs-radio disabled v-model="picked" val="3">
              Option C
            </vs-radio>

  - name: loading
    type: Boolean
    values: true,false
    description: Determina si el componente tiene una animación de cargando y se encuentra en disabled.
    default: false
    link: null
    usage: '#loading'
    code: >
            <vs-radio loading v-model="picked" val="1">
              Option 1
            </vs-radio>

  - name: val
    type: String
    values: String
    description: Determina el valor de el input radio.
    default: null
    link: null
    usage: '#default'
    code: >
            <vs-radio v-model="picked" val="1">
              Option A
            </vs-radio>

SLOTS:
  - name: default
    type: slot
    values: null
    description: Agrega un label al componente.
    default: null
    link: null
    usage: '#label'
    code: >
            <vs-radio v-model="picked" val="1">
              Label
            </vs-radio>
  - name: icon
    type: slot
    values: null
    description: Agrega un icono dentro de el radio.
    default: null
    link: null
    usage: '#icon'
    code: >
            <vs-radio v-model="picked" val="1">
              Yen
              <template #icon>
                <i class='bx bx-yen' ></i>
              </template>
            </vs-radio>

NEWS:
  - loading
  - icon
  - label
---

# Radio

<card>

## Default

<docs-warn />

Agrega el input de tipo radio con el componente `<vs-radio />`

<div slot="example">
  <Radio-default />
</div>

<div slot="template">

  ```html{3,4,5}
    <template>
      <div class="center">
          <vs-radio v-model="picked" val="1">
            Option A
          </vs-radio>
          <vs-radio v-model="picked" val="2">
            Option B
          </vs-radio>
          <vs-radio disabled v-model="picked" val="3">
            Option C
          </vs-radio>
          <vs-radio v-model="picked" val="4">
            Option D
          </vs-radio>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          picked: 1,
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Color

<color />

<div slot="example">
  <Radio-color />
</div>

<div slot="template">

  ```html{6,7,8}
    <template>
      <div class="center">
        <vs-radio v-model="picked" val="1">
          Primary
        </vs-radio>
        <vs-radio success v-model="picked" val="2">
          Success
        </vs-radio>
        <vs-radio danger v-model="picked" val="3">
          Danger
        </vs-radio>
        <vs-radio warn v-model="picked" val="4">
          Warning
        </vs-radio>
        <vs-radio dark v-model="picked" val="5">
          Dark
        </vs-radio>
        <vs-radio color="#7d33ff" v-model="picked" val="6">
          HEX
        </vs-radio>
        <vs-radio color="rgb(59,222,200)" v-model="picked" val="7">
          RGB
        </vs-radio>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          picked: 2,
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Label <Badge text="New"/>

Agrega un label al radio con el slot `default`, si necesitas que el label este antes de el radio puedes usar la propiedad `label-before`

<div slot="example">
  <Radio-label />
</div>

<div slot="template">

  ```html{3-8}
    <template>
      <div class="center">
        <vs-radio v-model="picked" val="1">
          Label
        </vs-radio>
        <vs-radio label-before v-model="picked" val="2">
          label Before
        </vs-radio>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          picked: 1,
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Loading <Badge text="New"/>

Agrega una animación de cargando al componente, cuando el radio tiene activa esta propiedad es como si estuviera en `disabled`

<div slot="example">
  <Radio-loading />
</div>

<div slot="template">

  ```html{3,4,5}
    <template>
      <div class="center">
        <vs-radio loading v-model="picked" val="1">
          Option 1
        </vs-radio>
        <vs-radio loading v-model="picked" val="2">
          Option 2
        </vs-radio>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          picked: 1,
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Icon <Badge text="New"/>

Agrega un icono dentro de el radio con el slot `icon`

<div slot="example">
  <Radio-icons />
</div>

<div slot="template">

  ```html{5,6,7}
    <template>
      <div class="center">
        <vs-radio v-model="picked" val="1">
          Yen
          <template #icon>
            <i class='bx bx-yen' ></i>
          </template>
        </vs-radio>
        <vs-radio v-model="picked" val="2">
          Won
          <template #icon>
            <i class='bx bx-won' ></i>
          </template>
        </vs-radio>
        <vs-radio v-model="picked" val="3">
          Pound
          <template #icon>
            <i class='bx bx-pound' ></i>
          </template>
        </vs-radio>
        <vs-radio v-model="picked" val="4">
          Euro
          <template #icon>
            <i class='bx bx-euro' ></i>
          </template>
        </vs-radio>
        <vs-radio v-model="picked" val="5">
          Rupee
          <template #icon>
            <i class='bx bx-rupee' ></i>
          </template>
        </vs-radio>
        <vs-radio v-model="picked" val="6">
          Bitcoin
          <template #icon>
            <i class='bx bx-bitcoin' ></i>
          </template>
        </vs-radio>
        <vs-radio v-model="picked" val="7">
          Dollar
          <template #icon>
            <i class='bx bx-dollar' ></i>
          </template>
        </vs-radio>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          picked: 1,
        })
      }
    </script>
  ```

</div>

</card>

<card>

## API

</card>
