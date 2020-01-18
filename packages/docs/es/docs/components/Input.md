---
PROPS:
  - name: placeholder
    type: String
    values: String
    description: Agrega un placeholder al input.
    default: null
    link: null
    usage: '#default'
    code: >
            <template>
              <div class="center content-inputs">
                <vs-input v-model="value" placeholder="Name" />
              </div>
            </template>
  - name: label
    type: String
    values: String
    description: Agrega un label arriba del componente.
    default: null
    link: null
    usage: '#label'
    code: >
            <template>
              <div class="center content-inputs">
                <vs-input
                  label="Name"
                  v-model="value"
                  placeholder="Evan You"
                />
              </div>
            </template>
  - name: label-placeholder
    type: String
    values: String
    description: Agrega un placeholder convierte al estar en focus en un label.
    default: null
    link: null
    usage: '#label-placeholder'
    code: >
            <template>
              <div class="center content-inputs">
                <vs-input
                  label-placeholder="Country"
                  v-model="value"
                />
              </div>
            </template>
  - name: color
    type: string
    values: vuesax colors,RGB,HEX
    description: Cambia el color del componente.
    default: null
    link: null
    usage: '#color'
    code: >
            <template>
              <div class="center content-inputs">
                <vs-input
                  primary
                  v-model="value"
                  placeholder="Primary" />

                <vs-input
                  success
                  v-model="value2"
                  placeholder="Success" />

                <vs-input
                  danger
                  v-model="value3"
                  placeholder="Danger" />

                <vs-input
                  warn
                  v-model="value4"
                  placeholder="Warn" />

                <vs-input
                  dark
                  v-model="value5"
                  placeholder="Dark" />

                <vs-input
                  color="#7d33ff"
                  v-model="value6"
                  placeholder="HEX" />

                <vs-input
                  color="rgb(59,222,200)"
                  v-model="value7"
                  placeholder="HEX" />
              </div>
            </template>

  - name: state
    type: String
    values: vuesax colors,RGB,HEX
    description: Cambia el color de fondo de el componente cambiando su estado.
    default: null
    link: null
    usage: '#state'
    code: >
            <template>
              <div class="center content-inputs">
                <vs-input
                  primary
                  v-model="value"
                  state="primary"
                  placeholder="Primary" />

                <vs-input state="success" success v-model="value2" placeholder="Success Icon">
                  <template #icon>
                    <i class='bx bx-user'></i>
                  </template>
                </vs-input>

                <vs-input state="danger" danger icon-after v-model="value2" placeholder="Danger icon after">
                  <template #icon>
                    <i class='bx bx-mail-send' ></i>
                  </template>
                </vs-input>

                <vs-input
                  warn
                  state="warn"
                  v-model="value4"
                  placeholder="Label Warn"
                  label="Warn" />

                <vs-input
                  dark
                  state="dark"
                  v-model="value5"
                  label-placeholder="Dark" />
              </div>
            </template>

  - name: progress
    type: number
    values: 0 - 100
    description: Agrega una barra de progreso iniciando en rojo y terminando en verde.
    default: null
    link: null
    usage: '#progress'
    code: >
            <template>
              <div class="center content-inputs">
                <vs-input
                  type="password"
                  v-model="value"
                  label-placeholder="Password"
                  :progress="getProgress"
                  :visiblePassword="hasVisiblePassword"
                  icon-after
                  @click-icon="hasVisiblePassword = !hasVisiblePassword">
                  <template #icon>
                    <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
                    <i v-else class='bx bx-hide'></i>
                  </template>

                  <template v-if="getProgress >= 100" #message-success>
                    Secure password
                  </template>

                </vs-input>
              </div>
            </template>
            <script>
              export default {
                data:() => ({
                  value: '',
                  hasVisiblePassword: false
                }),
                computed: {
                  getProgress() {
                    let progress = 0

                    // at least one number

                    if (/\d/.test(this.value)) {
                      progress += 20
                    }

                    // at least one capital letter

                    if (/(.*[A-Z].*)/.test(this.value)) {
                      progress += 20
                    }

                    // at menons a lowercase

                    if (/(.*[a-z].*)/.test(this.value)) {
                      progress += 20
                    }

                    // more than 5 digits

                    if (this.value.length >= 6) {
                      progress += 20
                    }

                    // at least one special character

                    if (/[^A-Za-z0-9]/.test(this.value)) {
                      progress += 20
                    }

                    return progress
                  }
                }
              }
              </script>

  - name: loading
    type: boolean
    values: boolean
    description: agrega una animación de loading al input.
    default: null
    link: null
    usage: '#loading'
    code: >
            <template>
              <div class="center content-inputs">
                <vs-input loading v-model="value" placeholder="Name" />
              </div>
            </template>

  - name: type
    type: string
    values: html type
    description: Cambia el tipo de input (valores html).
    default: null
    link: null
    usage: '#input-types'
    code: >
            <template>
              <div class="center content-inputs">
                <vs-input
                  type="text"
                  v-model="value1"
                  label="Text"
                />
                <vs-input
                  type="password"
                  v-model="value2"
                  label="Password"
                />
                <vs-input
                  type="search"
                  v-model="value3"
                  label="Search"
                />
                <vs-input
                  type="number"
                  v-model="value4"
                  label="Number"
                />
                <vs-input
                  type="url"
                  v-model="value5"
                  label="Url"
                />
                <vs-input
                  type="time"
                  v-model="value6"
                  label="time"
                />
                <vs-input
                  type="date"
                  v-model="value7"
                  label="Date"
                />
              </div>
            </template>

  - name: border
    type: boolean
    values: boolean
    description: Cambia el estilo de el componente.
    default: false
    link: null
    usage: '#border'
    code: >
            <template>
              <div class="center content-inputs">
                <vs-input border v-model="value" placeholder="Name" />

                <vs-input color="#7d33ff" border type="password" v-model="value2" placeholder="Password">
                  <template #icon>
                    <i class='bx bx-lock-open-alt'></i>
                  </template>
                </vs-input>

                <vs-input border warn type="email" icon-after v-model="value3" label-placeholder="Address">
                  <template #icon>
                    <i class='bx bxl-bitcoin'></i>
                  </template>
                </vs-input>
              </div>
            </template>

  - name: shadow
    type: boolean
    values: boolean
    description: Cambia el estilo de el componente.
    default: false
    link: null
    usage: '#shadow'
    code: >
            <template>
              <div class="center content-inputs">
                <vs-input shadow v-model="value" placeholder="Name" />

                <vs-input color="#7d33ff" shadow type="password" v-model="value2" placeholder="Password">
                  <template #icon>
                    <i class='bx bx-lock-open-alt'></i>
                  </template>
                </vs-input>

                <vs-input shadow warn type="email" icon-after v-model="value3" label-placeholder="Address">
                  <template #icon>
                    <i class='bx bxl-bitcoin'></i>
                  </template>
                </vs-input>
              </div>
            </template>

  - name: icon-after
    type: boolean
    values: boolean
    description: Pone el icono después de el input.
    default: false
    link: null
    usage: '#icon'
    code: >
            <template>
              <div class="center content-inputs">
                <vs-input type="password" icon-after v-model="value2" placeholder="Password">
                  <template #icon>
                    <i class='bx bx-lock-open-alt'></i>
                  </template>
                </vs-input>
              </div>
            </template>

  - name: visible-password
    type: boolean
    values: boolean
    description: Si el input es de tipo password se modifica para mostrar la contraseña.
    default: false
    link: null
    usage: '#progress'
    code: >
            <template>
              <div class="center content-inputs">
                <vs-input
                  type="password"
                  v-model="value"
                  label-placeholder="Password"
                  :progress="getProgress"
                  :visiblePassword="hasVisiblePassword"
                  icon-after
                  @click-icon="hasVisiblePassword = !hasVisiblePassword">
                  <template #icon>
                    <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
                    <i v-else class='bx bx-hide'></i>
                  </template>

                  <template v-if="getProgress >= 100" #message-success>
                    Secure password
                  </template>

                </vs-input>
              </div>
            </template>

SLOTS:
  - name: icon
    type: Slot
    values: null
    description: Agrega un icono al input.
    default: null
    link: null
    usage: '#icon'
    code: >
            <template>
              <div class="center content-inputs">
                <vs-input v-model="value1" placeholder="User name">
                  <template #icon>
                    <i class='bx bx-user'></i>
                  </template>
                </vs-input>

                <vs-input type="password" icon-after v-model="value2" placeholder="Password">
                  <template #icon>
                    <i class='bx bx-lock-open-alt'></i>
                  </template>
                </vs-input>
              </div>
            </template>

  - name: message
    type: Slot
    values: null
    description: Agrega un texto informativo debajo de el input.
    default: null
    link: null
    usage: '#message'
    code: >
            <template>
              <div class="center content-inputs">
                <vs-input v-model="value1" placeholder="Email">
                  <template #message-success>
                    Email Valid
                  </template>
                </vs-input>

                <vs-input v-model="value2" placeholder="Name">
                  <template #message-danger>
                    Required
                  </template>
                </vs-input>

                <vs-input type="password" v-model="value3" placeholder="Password">
                  <template #message-warn>
                    Insecure password
                  </template>
                </vs-input>

                <vs-input v-model="value4" label="Example Regex Validation" placeholder="vuesax@gmail.com">
                  <template v-if="validEmail" #message-success>
                    Email Valid
                  </template>
                  <template v-if="!validEmail && value4 !== ''" #message-danger>
                    Email Invalid
                  </template>
                </vs-input>
              </div>
            </template>

NEWS:
  - state
  - progress
  - loading
  - border
  - shadow
  - messages
---

# Input

<card>

## Default

<docs-warn />

agrega un elements input facilitate con el componente `<vs-input>`

<div slot="example">
  <input-default />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center content-inputs">
        <vs-input v-model="value" placeholder="Name" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          value: ''
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Label

Agrega un label al input con la propiedad `label`

<div slot="example">
  <input-label />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center content-inputs">
        <vs-input
          label="Name"
          v-model="value"
          placeholder="Evan You"
        />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          value: ''
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Label Placeholder

Puedes tener un placeholder con una animación genial al estar o en focus o con un valor convirtiéndose en un label arriba de el input con la propiedad `label-placeholder`

<div slot="example">
  <input-labelPlaceholder />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center content-inputs">
        <vs-input
          label-placeholder="Country"
          v-model="value"
        />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          value: ''
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Color

Cambia el color de el componente y agrega un border abajo con la propiedad `color`, los valores permitidos son los colores principales de vuesax y los colores (**RGB** y **HEX**)

<div slot="example">
  <input-color />
</div>

<div slot="template">

  ```html{4,9,14,19,24,29,34}
    <template>
      <div class="center content-inputs">
        <vs-input
          primary
          v-model="value"
          placeholder="Primary" />

        <vs-input
          success
          v-model="value2"
          placeholder="Success" />

        <vs-input
          danger
          v-model="value3"
          placeholder="Danger" />

        <vs-input
          warn
          v-model="value4"
          placeholder="Warn" />

        <vs-input
          dark
          v-model="value5"
          placeholder="Dark" />

        <vs-input
          color="#7d33ff"
          v-model="value6"
          placeholder="HEX" />

        <vs-input
          color="rgb(59,222,200)"
          v-model="value7"
          placeholder="HEX" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          value: '',
          value2: '',
          value3: '',
          value4: '',
          value5: '',
          value6: '',
          value7: ''
        })
      }
    </script>
  ```

</div>

</card>

<card>

## icon

Agrega un icono al input fácilmente con el slot icon si quieres que el icono este antes de el input puedes hacerlo con la propiedad `icon-before`

<utils-icon />

<div slot="example">
  <input-icon />
</div>

<div slot="template">

  ```html{3,4,5}
    <template>
      <div class="center content-inputs">
        <vs-input v-model="value1" placeholder="User name">
          <template #icon>
            <i class='bx bx-user'></i>
          </template>
        </vs-input>

        <vs-input type="password" icon-after v-model="value2" placeholder="Password">
          <template #icon>
            <i class='bx bx-lock-open-alt'></i>
          </template>
        </vs-input>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          value1: '',
          value2: ''
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Message <Badge text="New"/>

Puedes agregar un mensaje debajo de el input con el `slot="message-{vuesax color}"` para informar que falta un campo o es erróneo el valor

<div slot="example">
  <input-message />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center content-inputs">
        <vs-input v-model="value1" placeholder="Email">
          <template #message-success>
            Email Valid
          </template>
        </vs-input>

        <vs-input v-model="value2" placeholder="Name">
          <template #message-danger>
            Required
          </template>
        </vs-input>

        <vs-input type="password" v-model="value3" placeholder="Password">
          <template #message-warn>
            Insecure password
          </template>
        </vs-input>

        <vs-input v-model="value4" label="Example Regex Validation" placeholder="vuesax@gmail.com">
          <template v-if="validEmail" #message-success>
            Email Valid
          </template>
          <template v-if="!validEmail && value4 !== ''" #message-danger>
            Email Invalid
          </template>
        </vs-input>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          value1: '',
          value2: '',
          value3: '',
          value4: ''
        }),
        computed: {
          validEmail() {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value4)
          }
        }

      }
    </script>
  ```

</div>

</card>

<card>

## State <Badge text="New"/>

Cambia el color de el input para algún estado, los estados permitidos son (primary, success, danger, warn, dark)

<div slot="example">
  <input-state />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center content-inputs">
        <vs-input
          primary
          v-model="value"
          state="primary"
          placeholder="Primary" />

        <vs-input state="success" success v-model="value2" placeholder="Success Icon">
          <template #icon>
            <i class='bx bx-user'></i>
          </template>
        </vs-input>

        <vs-input state="danger" danger icon-after v-model="value2" placeholder="Danger icon after">
          <template #icon>
            <i class='bx bx-mail-send' ></i>
          </template>
        </vs-input>

        <vs-input
          warn
          state="warn"
          v-model="value4"
          placeholder="Label Warn"
          label="Warn" />

        <vs-input
          dark
          state="dark"
          v-model="value5"
          label-placeholder="Dark" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          value: '',
          value2: '',
          value3: '',
          value4: '',
          value5: '',
          value6: '',
          value7: ''
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Progress <Badge text="New"/>

Agrega una barra de progreso de validación, lo mas común es su uso para validar contraseñas y datos correctos dentro de el input, su valor es de (0 - 100).

:::tip
  En el ejemplo se valida que la contraseña tenga por lo menos

  - Un carácter especial
  - Mas de 6 dígitos
  - Una letra minúscula
  - Una letra mayúscula
  - Un numero
:::

<div slot="example">
  <input-progress />
</div>

<div slot="template">

  ```html{7}
    <template>
      <div class="center content-inputs">
        <vs-input
          type="password"
          v-model="value"
          label-placeholder="Password"
          :progress="getProgress"
          :visiblePassword="hasVisiblePassword"
          icon-after
          @click-icon="hasVisiblePassword = !hasVisiblePassword">
          <template #icon>
            <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
            <i v-else class='bx bx-hide'></i>
          </template>

          <template v-if="getProgress >= 100" #message-success>
            Secure password
          </template>

        </vs-input>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          value: '',
          hasVisiblePassword: false
        }),
        computed: {
          getProgress() {
            let progress = 0

            // at least one number

            if (/\d/.test(this.value)) {
              progress += 20
            }

            // at least one capital letter

            if (/(.*[A-Z].*)/.test(this.value)) {
              progress += 20
            }

            // at menons a lowercase

            if (/(.*[a-z].*)/.test(this.value)) {
              progress += 20
            }

            // more than 5 digits

            if (this.value.length >= 6) {
              progress += 20
            }

            // at least one special character

            if (/[^A-Za-z0-9]/.test(this.value)) {
              progress += 20
            }

            return progress
          }
        }
      }
      </script>
  ```

</div>

</card>

<card>

## Loading <Badge text="New"/>

Agrega una animación de loading al input con la propiedad `loading`, la propiedad es un `booleano`, por lo que puede agregarlo sin ningún valor.

<div slot="example">
  <input-loading />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center content-inputs">
        <vs-input loading v-model="value" placeholder="Name" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          value: ''
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Input types

Cambia el tipo de input con la propiedad `type` como un input nativo de html, el valor por defecto es `text`

<div slot="example">
  <input-types />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center content-inputs">
        <vs-input
          type="text"
          v-model="value1"
          label="Text"
        />
        <vs-input
          type="password"
          v-model="value2"
          label="Password"
        />
        <vs-input
          type="search"
          v-model="value3"
          label="Search"
        />
        <vs-input
          type="number"
          v-model="value4"
          label="Number"
        />
        <vs-input
          type="url"
          v-model="value5"
          label="Url"
        />
        <vs-input
          type="time"
          v-model="value6"
          label="time"
        />
        <vs-input
          type="date"
          v-model="value7"
          label="Date"
        />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          value1: '',
          value2: '',
          value3: '',
          value4: '',
          value5: '',
          value6: '',
          value7: '',
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Border <Badge text="New"/>

Cambia todo es estilo de el componente con la propiedad `border`, la propiedad es un `booleano`, por lo que puede agregarlo sin ningún valor.

<div slot="example">
  <input-border />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center content-inputs">
        <vs-input border v-model="value" placeholder="Name" />

        <vs-input color="#7d33ff" border type="password" v-model="value2" placeholder="Password">
          <template #icon>
            <i class='bx bx-lock-open-alt'></i>
          </template>
        </vs-input>

        <vs-input border warn type="email" icon-after v-model="value3" label-placeholder="Address">
          <template #icon>
            <i class='bx bxl-bitcoin'></i>
          </template>
        </vs-input>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          value: '',
          value2: '',
          value3: '',
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Shadow <Badge text="New"/>

Cambia todo es estilo de el componente con la propiedad `shadow`, la propiedad es un `booleano`, por lo que puede agregarlo sin ningún valor.

<div slot="example">
  <input-shadow />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center content-inputs">
        <vs-input shadow v-model="value" placeholder="Name" />

        <vs-input color="#7d33ff" shadow type="password" v-model="value2" placeholder="Password">
          <template #icon>
            <i class='bx bx-lock-open-alt'></i>
          </template>
        </vs-input>

        <vs-input shadow warn type="email" icon-after v-model="value3" label-placeholder="Address">
          <template #icon>
            <i class='bx bxl-bitcoin'></i>
          </template>
        </vs-input>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          value: '',
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
