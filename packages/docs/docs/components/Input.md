---
PROPS:
  - name: placeholder
    type: String
    values: String
    description: Add a placeholder to the input.
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
    description: Add a label above the component.
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
    description: Add a placeholder converts to focus on a label.
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
    description: Change component color.
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
    description: Change the background color of the component by changing its status.
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
    description: Add a progress bar starting in red and ending in green.
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
    description: Add a loading animation to the input.
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
    description: Change the type of input (html values).
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
    description: Change the style of the component.
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
    description: Change the style of the component.
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
    description: Put the icon after the input.
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
    description: If the input is of the password type, it is modified to show the password.
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
    description: Add an icon to the input.
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
    description: Add an informative text below the input.
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
  - message
---

# Input

<card>

## Default

<docs-warn />

Add an elements input facilitate with the component `<vs-input>`

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

Add a label to the input with the property `label`

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

You can have a placeholder with a great animation when being or in focus or with a value becoming a label above the input with the property `label-placeholder`

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

Change the color of the component and add a border below with the `color` property, the allowed values ​​are the main colors of vuesax and the colors (**RGB** y **HEX**)

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

Add an icon to the input easily with the slot icon if you want the icon to be before the input you can do it with the property `icon-before`

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

You can add a message below the input with the `slot="message- {vuesax color}"` to report that a field is missing or the value is wrong

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

Change the color of the input for some state, the allowed states are (primary, success, danger, warn, dark)

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

Add a validation progress bar, the most common is its use to validate passwords and correct data within the input, its value is (0 - 100).

:::tip
  The example validates that the password has at least

  - A special character
  - More than 6 digits
  - One lower case letter
  - An uppercase letter
  - A number
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

Add a loading animation to the input with the `loading` property, the property is a `Boolean`, so you can add it without any value.

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

Change the type of input with the `type` property as a native html input, the default value is `text`

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

Change everything is style of the component with the `border` property, the property is a `Boolean`, so you can add it without any value.

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

Change everything is style of the component with the `shadow` property, the property is a `Boolean`, so you can add it without any value.

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
