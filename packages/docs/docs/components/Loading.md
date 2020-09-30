---
PROPS:
    #__________________________________
  - name: type
    type: String
    values: waves, corners, border, points, square, gradient, rectangle, circles, square-rotate, scale
    description: Change the animation of the loading.
    default: default
    link: null
    usage: '#type'
    code: >
            <script>
              export default {
                methods: {
                  openLoading() {
                    const loading = this.$vs.loading({
                      type: 'waves'
                    })
                    setTimeout(() => {
                      loading.close()
                    }, 3000)
                  }
                }
              }
            </script>
    #__________________________________
  - name: color
    type: String
    values: All colors of vuesax (RGB y HEX)
    description: Change the color of the loading animation.
    default: primary
    link: /theme/
    usage: '#color'
    code: >
            <script>
              export default {
                methods: {
                  openLoading() {
                    const loading = this.$vs.loading({
                      color: '#000'
                    })
                    setTimeout(() => {
                      loading.close()
                    }, 3000)
                  }
                }
              }
            </script>
    #__________________________________
  - name: background
    type: String
    values: All colors of vuesax (RGB y HEX)
    description: Change the background color of the loading.
    default: '#fff'
    link: /theme/
    usage: '#background'
    code: >
            <script>
              export default {
                methods: {
                  openLoading() {
                    const loading = this.$vs.loading({
                      background: 'danger',
                      color: '#fff'
                    })
                    setTimeout(() => {
                      loading.close()
                    }, 3000)
                  }
                }
              }
            </script>
    #__________________________________
  - name: text
    type: String
    values: String
    description: Add a text below the loading animation.
    default: null
    link: null
    usage: '#text'
    code: >
            <script>
              export default {
                methods: {
                  openLoading() {
                    const loading = this.$vs.loading({
                      text: 'Loading...',
                    })
                    setTimeout(() => {
                      loading.close()
                    }, 3000)
                  }
                }
              }
            </script>
    #__________________________________
  - name: percent
    type: String
    values: (0% - 100%)
    description: Add a percentage text inside the loading.
    default: null
    link: null
    usage: '#percent'
    code: >
            <script>
              export default {
                methods: {
                  openLoading() {
                    const loading = this.$vs.loading({
                      percent: '67%',
                    })
                    setTimeout(() => {
                      loading.close()
                    }, 3000)
                  }
                }
              }
            </script>
    #__________________________________
  - name: progress
    type: String || Number
    values: (0 - 100)
    description: Add a progress bar to the loading and the progress would be the value.
    default: null
    link: null
    usage: '#progress'
    code: >
            código...
    #__________________________________
  - name: target
    type: String || html || ref
    values: String || html || ref
    description: Determine the parent of the loading where it will be instantiated.
    default: null
    link: null
    usage: '#target'
    code: >
            <template>
              <div class="center">
                <div class="con-btns">
                  <vs-button dark flat @click="openLoading">Open Loading <b>Target</b></vs-button>
                </div>

                <div ref="content" class="content-div">
                  Soy el contenedor <br> del <b>loading</b>
                </div>
              </div>
            </template>
            <script>
              export default {
                methods: {
                  openLoading() {
                    const loading = this.$vs.loading({
                      target: this.$refs.content
                    })
                    setTimeout(() => {
                      loading.close()
                    }, 3000)
                  }
                }
              }
            </script>
      #__________________________________
  - name: opacity
    type: String || Number
    values: (0 - 1)
    description: Change the opacity of the background.
    default: '0.6'
    link: null
    usage: '#target'
    code: >
            <script>
              export default {
                methods: {
                  openLoading() {
                    const loading = this.$vs.loading({
                      opacity: 1,
                      color: 'dark'
                    })
                    setTimeout(() => {
                      loading.close()
                    }, 3000)
                  }
                }
              }
            </script>
      #__________________________________
  - name: scale
    type: String || Number
    values: (0 - 1)
    description: Change the size of the loading animation.
    default: '1'
    link: null
    usage: '#target'
    code: >
            <script>
              export default {
                methods: {
                  openLoading() {
                    const loading = this.$vs.loading({
                      scale: '0.4',
                      color: 'dark'
                    })
                    setTimeout(() => {
                      loading.close()
                    }, 3000)
                  }
                }
              }
            </script>
  #__________________________________
  - name: changePercent()
    type: function
    values: String
    description: Change the value of the percent after instantiating the loading.
    default: null
    link: null
    usage: '#percent'
    code: >
            <script>
              export default {
                data: () => ({
                  percent: 0
                }),
                methods: {
                  openLoading() {

                    const loading = this.$vs.loading({
                      percent: this.percent
                    })
                    const interval = setInterval(() => {
                      if (this.percent <= 100) {
                        loading.changePercent(`${this.percent++}%`)
                      }
                    }, 40)
                    setTimeout(() => {
                      loading.close()
                      clearInterval(interval)
                      this.percent = 0
                    }, 4800)
                  }
                }
              }
            </script>
  #__________________________________
  - name: changeProgress()
    type: function
    values: String
    description: Change the value of the progress after instantiating the loading.
    default: null
    link: null
    usage: '#progress'
    code: >
            <script>
              export default {
                data: () => ({
                  progress: 0
                }),
                methods: {
                  openLoading() {

                    const loading = this.$vs.loading({
                      progress: 0
                    })
                    const interval = setInterval(() => {
                      if (this.progress <= 100) {
                        loading.changeProgress(this.progress++)
                      }
                    }, 40)
                    setTimeout(() => {
                      loading.close()
                      clearInterval(interval)
                      this.progress = 0
                    }, 4100)
                  }
                }
              }
            </script>
  #__________________________________
  - name: changeText()
    type: function
    values: String
    description: Change the value of the text property after instantiating the loading.
    default: null
    link: null
    usage: null
    code: null

UPDATE:
  - type

NEWS:
  - text
  - percent
  - progress
  - target
---

# Loading

<card>

## Default

<docs-warn />

Generate a loading with the vuesax function `$vs.loading(options)`

<div slot="example">
  <Loading-default />
</div>

<div slot="template">

  ```html{2}
    <template>
      <vs-button @click="openLoading">Open Loading</vs-button>
    </template>
  ```

</div>

<div slot="script">

  ```html{5,7}
    <script>
      export default {
        methods: {
          openLoading() {
            const loading = this.$vs.loading()
            setTimeout(() => {
              loading.close()
            }, 3000)
          }
        }
      }
    </script>
  ```

</div>

</card>

<card>

## Type <Badge text="Update" type="warn" />

Change the type of loading with the option `type`

Tipos de loading:
  - waves
  - corners
  - border
  - points
  - square
  - gradient
  - rectangle
  - circles
  - square-rotate
  - scale

::: tip
  Click on the example loading to open it in the whole page
:::

<div slot="example">
  <Loading-type />
</div>

<div slot="template">

  ```html
    <template>
      <div
        :class="{ hasOpenLoading }">
        <div
          v-for="(type, i) in types"
          :ref="`box${i}`"
          @click="handleClickLoading(type)"
          class="box-loading" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          hasOpenLoading: false,
          types: [
            'default',
            'waves',
            'corners',
            'border',
            'points',
            'square',
            'gradient',
            'rectangle',
            'circles',
            'square-rotate',
            'scale'
          ]
        }),
        methods: {
          handleClickLoading(type) {
            const loading = this.$vs.loading({
              type
            })
            this.hasOpenLoading = true
            setTimeout(() => {
              loading.close()
              this.hasOpenLoading = false
            }, 3000)
          },
          openLoading(type, ref) {
            this.$vs.loading({
              target: this.$refs[ref][0],
              text: type,
              type
            })
          }
        },
        mounted() {
          this.types.forEach((type, i) => {
            this.openLoading(type, `box${i}`)
          })
        }
      }
    </script>
  ```

</div>

<div slot="style">

  ```html{3,4,5}
    <style scoped lang="stylus">
      .hasOpenLoading
        .box-loading
          opacity 0
          transform scale(.7)
      .box-loading
        width 120px
        height 120px
        position relative
        margin 5px
        border-radius 20px
        box-shadow 0px 10px 20px -10px rgba(0,0,0,.07)
        overflow hidden
        cursor pointer
        transition all .25s ease
        &:hover
          transform translate(0,-5px)
          box-shadow 0px 15px 20px -10px rgba(0,0,0,.09)
        >>>.vs-loading
          padding 0px
    </style>
  ```

</div>

</card>

<card>

## Color

Change the color of the loading animation with the property `color`, the colors can be the main ones of vuesax or (**RGB**, **HEX**)

<div slot="example">
  <Loading-color />
</div>

<div slot="template">

  ```html
    <template>
      <div
        :class="{ hasOpenLoading }"
        class="center">
        <div :style="`background: ${color};`" class="con-input">
          <input v-model="color" type="color">
          <i class='bx bxs-color-fill'></i>
        </div>
        <div ref="loadings" class="con-loadings">
          <div
            v-for="(type, i) in types"
            :ref="`box${i}`"
            @click="handleClickLoading(type)"
            class="box-loading" />
        </div>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          color: '#d5397b',
          hasOpenLoading: false,
          types: [
            'default',
            'waves',
            'corners',
            'border',
            'points',
            'square',
            'gradient',
            'rectangle',
            'circles',
            'square-rotate',
            'scale'
          ]
        }),
        methods: {
          handleClickLoading(type) {
            const loading = this.$vs.loading({
              type,
              color: this.color
            })
            this.hasOpenLoading = true
            setTimeout(() => {
              loading.close()
              this.hasOpenLoading = false
            }, 3000)
          },
          openLoading(type, ref) {
            this.$vs.loading({
              target: this.$refs[ref][0],
              text: type,
              type,
              color: this.color
            })
          }
        },
        watch: {
          color() {
            this.$refs.loadings.querySelectorAll('.box-loading').forEach((item) => {
              item.innerHTML = ''
            })
            this.types.forEach((type, i) => {
              this.openLoading(type, `box${i}`)
            })
          }
        },
        mounted() {
          this.types.forEach((type, i) => {
            this.openLoading(type, `box${i}`)
          })
        }
      }
      </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style scoped lang="stylus">
      getColor(vsColor, alpha = 1)
          unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
      getVar(var)
          unquote("var(--vs-"+var+")")
      .con-input
        border-radius 10px
        border 4px solid getVar(theme-layout)
        box-shadow 0px 4px 10px 0px rgba(0,0,0,.1)
        display flex
        align-items center
        justify-content center
        transition all .25s ease
        &:hover
          transform translate(0, -4px)
          box-shadow 0px 8px 10px 0px rgba(0,0,0,.1)
        input
          opacity 0
          width 30px
          height 30px
          border 0px
          cursor pointer
        i
          position absolute
          color getVar(theme-layout)
          pointer-events none
      .con-loadings
        display flex
        align-items center
        justify-content center
        flex-wrap wrap
      .center
        flex-wrap wrap
        z-index 200
        position relative
        padding 20px 10px
        &.hasOpenLoading
          .box-loading
            opacity 0
            transform scale(.7)
      .box-loading
        width 120px
        height 120px
        position relative
        margin 5px
        border-radius 20px
        box-shadow 0px 10px 20px -10px rgba(0,0,0,.07)
        overflow hidden
        cursor pointer
        transition all .25s ease
        &:hover
          transform translate(0,-5px)
          box-shadow 0px 15px 20px -10px rgba(0,0,0,.09)
        >>>.vs-loading
          padding 0px
          background transparent !important
          &.vs-loading--gradient, &.vs-loading--square
            .vs-loading__load__animation__2
              background getVar(theme-layout) !important
      </style>
  ```

</div>

</card>

<card>

## Background

You can change the loading background with the property `loading`

<div slot="example">
  <Loading-background />
</div>

<div slot="template">

  ```html
    <div ref="target" id="target" class="center">
      <div :style="`background: ${color};`" class="con-input">
        <input v-model="color" type="color">
        <i class='bx bxs-color-fill'></i>
      </div>
      <vs-button flat :color="color" @click="openLoading">Open Loading</vs-button>
    </div>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          color: '#7a76cb',
        }),
        methods: {
          openLoading() {
            const loading = this.$vs.loading({
              background: this.color,
              color: '#fff'
            })
            setTimeout(() => {
              loading.close()
            }, 3000)
          }
        }
      }
    </script>
  ```

</div>

</card>

<card>

## Text <Badge text="New" />

Add a descriptive text of the loading or informing the user that it is loading or that it is missing to load with the property `text`

<div slot="example">
  <Loading-text />
</div>

<div slot="template">

  ```html
    <template>
      <div ref="target" id="target" class="center">
        <vs-button flat @click="openLoading">Open Loading <b>Text</b></vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        methods: {
          openLoading() {
            const loading = this.$vs.loading({
              text: 'Loading...'
            })
            setTimeout(() => {
              loading.close()
            }, 3000)
          }
        }
      }
    </script>
  ```

</div>

</card>

<card>

## Percent <Badge text="New" />

You can add a string of the percentage of load with the `percent` property, if you need to change that value use the `changePercent` function in the loading instance.

<div slot="example">
  <Loading-percent />
</div>

<div slot="template">

  ```html
    <template>
      <div ref="target" id="target" class="center">
        <vs-button flat @click="openLoading">Open Loading <b>Percent</b></vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          percent: 0
        }),
        methods: {
          openLoading() {

            const loading = this.$vs.loading({
              percent: this.percent
            })
            const interval = setInterval(() => {
              if (this.percent <= 100) {
                loading.changePercent(`${this.percent++}%`)
              }
            }, 40)
            setTimeout(() => {
              loading.close()
              clearInterval(interval)
              this.percent = 0
            }, 4800)
          }
        }
      }
    </script>
  ```

</div>

</card>

<card>

## Progress <Badge text="New" />

Add a progress bar at the top to indicate the loading progress of the loading with the `progress` property, the value is a number that determines the percentage and the allowed value is (0 - 100)

<div slot="example">
  <Loading-progress />
</div>

<div slot="template">

  ```html
    <template>
      <div ref="target" id="target" class="center">
        <vs-button flat @click="openLoading">Open Loading <b>Progress</b></vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data: () => ({
          progress: 0
        }),
        methods: {
          openLoading() {

            const loading = this.$vs.loading({
              progress: 0
            })
            const interval = setInterval(() => {
              if (this.progress <= 100) {
                loading.changeProgress(this.progress++)
              }
            }, 40)
            setTimeout(() => {
              loading.close()
              clearInterval(interval)
              this.progress = 0
            }, 4100)
          }
        }
      }
    </script>
  ```

</div>

</card>

<card>

## Target <Badge text="New" />

Use the loading on a specific dom element using the `target` property and the value can be a string with the `id` or the `class` only if it is unique for the element, you can also use the element itself as per example using `$refs`

<div slot="example">
  <Loading-target />
</div>

<div slot="template">

  ```html
    <template>
      <div ref="target" id="target" class="center">
        <div class="con-btns">
          <vs-button ref="button" flat @click="openLoadingButton">Open Loading <b>Button</b></vs-button>
          <vs-button dark flat @click="openLoading">Open Loading <b>Target</b></vs-button>
        </div>

        <div ref="content" class="content-div">
          Soy el contenedor <br> del <b>loading</b>
        </div>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        methods: {
          openLoading() {
            const loading = this.$vs.loading({
              target: this.$refs.content,
              color: 'dark'
            })
            setTimeout(() => {
              loading.close()
            }, 3000)
          },
          openLoadingButton() {
            console.log(this.$refs.button.$el)
            const loading = this.$vs.loading({
              target: this.$refs.button,
              scale: '0.6',
              background: 'primary',
              opacity: 1,
              color: '#fff'
            })
            setTimeout(() => {
              loading.close()
            }, 3000)
          }
        }
      }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style scoped lang="stylus">
      .con-btns
        display flex
        align-items center
        justify-content center
        b
          margin-left 5px
      .center
        flex-direction column
        .content-div
          width 200px
          height 200px
          box-shadow 0px 6px 25px -10px rgba(0,0,0,.1)
          border-radius 20px
          position relative
          display flex
          align-items center
          justify-content center
          flex-direction column
          text-align center
          font-size .6rem
    </style>
  ```

</div>

</card>

<card>

## API

</card>
