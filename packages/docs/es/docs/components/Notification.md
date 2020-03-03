---
PROPS:
  - name: title
    type: String
    values: String
    description: Agrega un titulo a la notificación.
    default: null
    link: null
    usage: '#default'
    code: >
            this.$vs.notification({
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
  - name: text
    type: String
    values: String
    description: Agrega el texto a la notificación.
    default: null
    link: null
    usage: '#default'
    code: >
            this.$vs.notification({
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
  - name: position
    type: String
    values: bottom-right,top-right,top-center,top-left,bottom-left,bottom-center
    description: Cambia la position de el componente.
    default: bottom-right
    link: null
    usage: '#position'
    code: >
            const noti = this.$vs.notification({
              position: 'top-right',
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
  - name: color
    type: String
    values: vuesax colors, rgb, hex
    description: Cambia el color base de todo el componente.
    default: null
    link: null
    usage: '#color'
    code: >
            const noti = this.$vs.notification({
              color: 'primary',
              title: 'Documentation Vuesax 4.0+',
              text: 'These documents refer to the latest version of vuesax (4.0+), to see the
              documents of the previous versions you can do it here 👉 Vuesax 3.x'
            })
  - name: border
    type: String
    values: vuesax colors, rgb, hex
    description: Agrega un border de color a la notificación.
    default: null
    link: null
    usage: '#border'
    code: >
            const noti = this.$vs.notification({
              border: 'success',
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
  - name: icon
    type: String
    values: String
    description: Agrega un icono a la notificación.
    default: null
    link: null
    usage: '#icons'
    code: >
            const noti = this.$vs.notification({
              icon: `<i class='bx bxs-time'></i>`,
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
  - name: duration
    type: Number, String
    values: Number, none
    description: Determina el tiempo hasta que la notificación se oculte (none determina el no ocultarse).
    default: 4000 (4s)
    link: null
    usage: '#duration'
    code: >
            const noti = this.$vs.notification({
              duration: 10000,
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
  - name: onClick
    type: function
    values: function
    description: función que se ejecuta el hacerse click en la notificación.
    default: null
    link: null
    usage: null
    code: >
            const noti = this.$vs.notification({
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
              onClick: () => {
                console.log('click notification')
              }
            })
  - name: buttonClose
    type: Boolean
    values: true,false
    description: Determina si la notificación tiene el botón de close.
    default: true
    link: null
    usage: null
    code: >
            const noti = this.$vs.notification({
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
              buttonClose: false
            })
  - name: flat
    type: Boolean
    values: true,false
    description: Cambia el estilo de la notificación a flat.
    default: false
    link: null
    usage: '#flat'
    code: >
            const noti = this.$vs.notification({
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
              flat: true
            })
  - name: onDestroy
    type: function
    values: function
    description: Función que se ejecuta al destruirse la notificación.
    default: null
    link: null
    usage: null
    code: >
            const noti = this.$vs.notification({
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
              onDestroy: () => {
                console.log('destroy notification')
              }
            })
  - name: sticky
    type: boolean
    values: true,false
    description: Cambia la posición de la notificación pegada a la esquina mas cercana.
    default: false
    link: null
    usage: '#sticky'
    code: >
            const noti = this.$vs.notification({
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
              sticky: true
            })
  - name: square
    type: boolean
    values: true,false
    description: Determina si la notificación es cuadrada y elimina los border-radius.
    default: false
    link: null
    usage: '#square'
    code: >
            const noti = this.$vs.notification({
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
              square: true
            })
  - name: width
    type: String
    values: 100%, auto
    description: Determina el ancho de la notificación.
    default: 340px
    link: null
    usage: '#width'
    code: >
            const noti = this.$vs.notification({
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
              width: 100%
            })
  - name: loading
    type: boolean
    values: true,false
    description: Determina si la notificación tiene una animación de cargando.
    default: false
    link: null
    usage: '#loading'
    code: >
            const noti = this.$vs.notification({
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
              loading: true
            })
  - name: progress
    type: Number, String
    values: 0 - 100, auto
    description: Agrega una barra de progreso a la notificación.
    default: null
    link: null
    usage: '#progress'
    code: >
            const noti = this.$vs.notification({
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
              progress: 'auto'
            })
  - name: notPadding
    type: Boolean
    values: true,false
    description: Elimina de la notificación el padding.
    default: 20px
    link: null
    usage: '#example'
    code: >
            const noti = this.$vs.notification({
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
              notPadding: true
            })
  - name: clickClose
    type: Boolean
    values: true,false
    description: Determina si al hacer click en la notificación se cierra.
    default: false
    link: null
    usage: null
    code: >
            const noti = this.$vs.notification({
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
              clickClose: true
            })
  - name: content
    type: Vue Component
    values: Vnode
    description: Cambia el contenido de la notificación por el proporcionado como valor (algo parecido a un slot de vue).
    default: null
    link: null
    usage: '#example'
    code: >
            <script>
              import user from './user.vue'
              export default {
                methods: {
                  openNotificationUser() {
                    const noti = this.$vs.notification({
                      duration: 'none',
                      width: 'auto',
                      content: user,
                    })
                  }
                }
              }
            </script>
  - name: instance.close()
    type: function
    values: null
    description: Cierra la notificación.
    default: null
    link: null
    usage: null
    code: >
            <script>
              export default {
                methods: {
                  openNotification() {
                    const noti = this.$vs.notification({
                      duration: 'none',
                      loading: true
                    })

                    setTimeout(() => {
                      noti.close()
                    }, 5000)
                  }
                }
              }
            </script>
  - name: instance.changeProgress(value)
    type: function
    values: 0 - 100
    description: Cambia el valor de progreso de la notificación después de instanciar.
    default: null
    link: null
    usage: null
    code: >
            <script>
              export default {
                methods: {
                  openNotification() {
                    const noti = this.$vs.notification({
                      title: 'Documentation Vuesax 4.0+',
                      text: `These documents refer to the latest version of vuesax (4.0+),
                      to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
                      progress: 0
                    })

                    setTimeout(() => {
                      noti.changeProgress(50)
                    }, 5000)
                  }
                }
              }
            </script>
  - name: instance.setLoading(boolean)
    type: function
    values: true,false
    description: Cambia el estado de loading después de instanciar.
    default: null
    link: null
    usage: null
    code: >
            <script>
              export default {
                methods: {
                  openNotification() {
                    const noti = this.$vs.notification({
                      title: 'Documentation Vuesax 4.0+',
                      text: `These documents refer to the latest version of vuesax (4.0+),
                      to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
                    })

                    setTimeout(() => {
                      noti.setLoading(true)
                    }, 5000)
                  }
                }
              }
            </script>

  - name: instance.toggleClass(String)
    type: function
    values: String
    description: Agrega o elimina la clase pasada como parámetro a la notificación.
    default: null
    link: null
    usage: null
    code: >
            <script>
              export default {
                methods: {
                  openNotification() {
                    const noti = this.$vs.notification({
                      classNotification: 'my-class'
                      title: 'Documentation Vuesax 4.0+',
                      text: `These documents refer to the latest version of vuesax (4.0+),
                      to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
                    })

                    setTimeout(() => {
                      noti.toggleClass('new-class')
                    }, 2000)
                  }
                }
              }
            </script>

  - name: classNotification
    type: String
    values: String
    description: Agrega una clase personalizada a la notificación.
    default: null
    link: null
    usage: null
    code: >
            <script>
              export default {
                methods: {
                  openNotification() {
                    const noti = this.$vs.notification({
                      classNotification: 'my-class'
                      title: 'Documentation Vuesax 4.0+',
                      text: `These documents refer to the latest version of vuesax (4.0+),
                      to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
                    })

                    setTimeout(() => {
                      noti.toggleClass('new-class')
                    }, 2000)
                  }
                }
              }
            </script>

NEWS:
  - progress
  - duration
  - square
  - border
  - flat
  - loading
  - sticky
  - width
  - example
---

# Notification

<card>

## Default

<docs-warn />

Genera una notificación con la función de vuesax (`$vs.notification`), para usar la instancia de la notificación es necesario guardarla en una variable, por ejemplo si necesitas cerrar la notificación manualmente o hacer otras funcionalidades con la instancia

:::tip
  Las propiedades necesarias son el `title` y el `text` o en su defecto la propiedad `content`
:::

<div slot="example">
  <Notification-default />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center">
        <vs-button
          @click="openNotification">
          Open Notification
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{5,6,7,8}
    <script>
      export default {
        methods: {
          openNotification() {
            this.$vs.notification({
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
          }
        }
      }
    </script>
  ```

</div>

</card>

<card>

## Position

Cambia la posición de la notificación con la propiedad position

valores soportados

- `bottom-right` <Badge type="text" text="Default"/>
- `top-right`
- `top-center`
- `top-left`
- `bottom-left`
- `bottom-center`

<div slot="example">
  <Notification-position />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-button border icon @click="openNotification">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button border icon @click="openNotification('top-right')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button border icon @click="openNotification('top-left')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button border icon @click="openNotification('bottom-left')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button border icon @click="openNotification('bottom-center')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button border icon @click="openNotification('top-center')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{5,6,7,8,9}
    <script>
      export default {
        methods: {
          openNotification(position = null) {
            const noti = this.$vs.notification({
              position,
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.4rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## Color

<color />

<div slot="example">
  <Notification-color />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow icon @click="openNotification(null, null)">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button flat icon @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button flat success icon @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button flat danger icon @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button flat warn icon @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button flat dark icon @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button flat color="#7d33ff" icon @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button flat color="rgb(59,222,200)" icon @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4,5,6,7,8,9,10,11}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const noti = this.$vs.notification({
              color,
              position,
              title: 'Documentation Vuesax 4.0+',
              text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
            })
          }
        }
      }
    </script>
  ```

</div>

</card>

<card>

## Icons

Agrega a la notificación el icono proporcionado como valor de la propiedad `icon`

<div slot="example">
  <Notification-icons />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow icon @click="openNotification(null, null, `<i class='bx bxs-time'></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bxs-time'></i>
        </vs-button>
        <vs-button flat icon
          @click="openNotification(null, 'primary', `<i class='bx bxs-user-pin' ></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bxs-user-pin' ></i>
        </vs-button>
        <vs-button flat success icon
          @click="openNotification('top-right', 'success', `<i class='bx bx-select-multiple' ></i>`)">
          <i class='bx bx-border-radius t-r'></i> <i class='bx bx-select-multiple' ></i>
        </vs-button>
        <vs-button flat danger icon
          @click="openNotification('top-left', 'danger', `<i class='bx bxs-bug' ></i>`)">
          <i class='bx bx-border-radius t-l'></i> <i class='bx bxs-bug' ></i>
        </vs-button>
        <vs-button flat warn icon
          @click="openNotification('bottom-left', 'warn', `<i class='bx bx-error' ></i>`)">
          <i class='bx bx-border-radius b-l'></i> <i class='bx bx-error' ></i>
        </vs-button>
        <vs-button flat dark icon
          @click="openNotification('bottom-center', 'dark', `<i class='bx bx-folder-open' ></i>`)">
          <i class='bx bx-border-bottom' ></i> <i class='bx bx-folder-open' ></i>
        </vs-button>
        <vs-button flat color="#7d33ff" icon
          @click="openNotification('top-center', '#7d33ff', `<i class='bx bx-bell' ></i>`)">
          <i class='bx bx-border-top' ></i> <i class='bx bx-bell' ></i>
        </vs-button>
        <vs-button flat color="rgb(59,222,200)" icon
          @click="openNotification(null, 'rgb(59,222,200)', `<i class='bx bx-calendar' ></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bx-calendar' ></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4,5,6,7,8,9,10,11,12}
    <script>
      export default {
        methods: {
          openNotification(position = null, color, icon) {
            const noti = this.$vs.notification({
              icon,
              color,
              position,
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## Progress <Badge text="New"/>

Agrega una barra da progreso a la notificación, si el valor de la propiedad `progress` es `auto` se determinada por la propiedad `duration` para llegar al 100%, si quieres que el valor sea manual puedes agregar un numero de el 0 - 100 siendo 100 el 100% y usar la función en la instancia `changeProgress` y cambiar el valor al proporcionado como primer parámetro

<div slot="example">
  <Notification-progress />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center">
        <vs-button shadow icon @click="openNotification(null, '')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button flat icon @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button flat success icon @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button flat danger icon @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button flat warn icon @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button flat dark icon @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button flat color="#7d33ff" icon
          @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button flat color="rgb(59,222,200)" icon
          @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4,5,6,7,8,9,10,11,12}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const noti = this.$vs.notification({
              progress: 'auto',
              color,
              position,
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## Duration <Badge text="New"/>

Cambia la duración de la notificación con la propiedad `duration`, el valor es numérico y determina los segundos antes de ocultarse el componente osea que **10s** equivale a **10000** como valor

si necesitas que la notificación no se oculte nunca el valor de duration seria `none`

<div slot="example">
  <Notification-duration />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-button border @click="openNotification(null)">
          Duration default (4s)
        </vs-button>
        <vs-button border @click="openNotification(6000)">
          Duration 6s
        </vs-button>
        <vs-button border @click="openNotification(10000)">
          Duration 10s
        </vs-button>
        <vs-button border @click="openNotification('none')">
          Duration none
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4,5,6,7,8,9,10,11}
    <script>
      export default {
        methods: {
          openNotification(duration) {
            const noti = this.$vs.notification({
              duration,
              progress: 'auto',
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## Square <Badge text="New"/>

Cambia el estilo de la notificación con la propiedad `square` para no tener `border-radius` haciendo que sea un rectángulo

<div slot="example">
  <Notification-square />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow square icon @click="openNotification(null, '')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button square border icon @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button square border success icon @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button square border danger icon @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button square border warn icon @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button square border dark icon @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button square border color="#7d33ff" icon @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button square border color="rgb(59,222,200)" icon @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,5,6,7,8,9,10,11,12}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const noti = this.$vs.notification({
              square: true,
              color,
              position,
              title: 'Documentation Vuesax 4.0+',
              text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.4rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## Border <Badge text="New"/>

Cambia el estilo de la notificación con la propiedad `border` agregando un borde de el color proporcionado como valor

<div slot="example">
  <Notification-border />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow icon
          @click="openNotification(null, null, `<i class='bx bxs-time'></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bxs-time'></i>
        </vs-button>
        <vs-button flat icon
          @click="openNotification(null, 'primary', `<i class='bx bxs-user-pin' ></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bxs-user-pin' ></i>
        </vs-button>
        <vs-button flat success icon
          @click="openNotification('top-right', 'success', `<i class='bx bx-select-multiple' ></i>`)">
          <i class='bx bx-border-radius t-r'></i> <i class='bx bx-select-multiple' ></i>
        </vs-button>
        <vs-button flat danger icon
          @click="openNotification('top-left', 'danger', `<i class='bx bxs-bug' ></i>`)">
          <i class='bx bx-border-radius t-l'></i> <i class='bx bxs-bug' ></i>
        </vs-button>
        <vs-button flat warn icon
          @click="openNotification('bottom-left', 'warn', `<i class='bx bx-error' ></i>`)">
          <i class='bx bx-border-radius b-l'></i> <i class='bx bx-error' ></i>
        </vs-button>
        <vs-button flat dark icon
          @click="openNotification('bottom-center', 'dark', `<i class='bx bx-folder-open' ></i>`)">
          <i class='bx bx-border-bottom' ></i> <i class='bx bx-folder-open' ></i>
        </vs-button>
        <vs-button flat color="#7d33ff" icon
          @click="openNotification('top-center', '#7d33ff', `<i class='bx bx-bell' ></i>`)">
          <i class='bx bx-border-top' ></i> <i class='bx bx-bell' ></i>
        </vs-button>
        <vs-button flat color="rgb(59,222,200)" icon
          @click="openNotification(null, 'rgb(59,222,200)', `<i class='bx bx-calendar' ></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bx-calendar' ></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4-12}
    <script>
      export default {
        methods: {
          openNotification(position = null, border) {
            const noti = this.$vs.notification({
              border,
              position,
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## Flat <Badge text="New"/>

Cambia el estilo de la notification con la propiedad `flat`, al tener esta propiedad cambia a colores a mas claros y el texto del color de la propiedad `color`, esta propiedad es un boolean por lo que solo puedes usar el valor `true`

<div slot="example">
  <Notification-flat />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center">
        <vs-button
          flat
          icon
          @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button
          flat
          success
          icon
          @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button
          flat
          danger
          icon
          @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button
          flat
          warn
          icon
          @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button f
          lat
          dark
          icon
          @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button
          flat
          color="#7d33ff"
          icon
          @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button
          flat
          color="rgb(59,222,200)"
          icon
          @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4-13}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const noti = this.$vs.notification({
              flat: true,
              color,
              position,
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## Loading <Badge text="New"/>

Agrega una animación de loading a la notificación, al tener esta propiedad solo se va a mostrar la animación y el contenido va a estar oculto

<div slot="example">
  <Notification-loading />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow icon @click="openNotification(null, '')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button gradient icon @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button gradient success icon @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button gradient danger icon @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button gradient warn icon @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button gradient dark icon @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button gradient color="#7d33ff" icon
          @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button gradient color="rgb(59,222,200)" icon
          @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4-12}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const noti = this.$vs.notification({
              loading: true,
              color,
              position,
              title: 'Documentation Vuesax 4.0+',
              text: `These documents refer to the latest version of vuesax (4.0+),
              to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## Width <Badge text="New"/>

Cambia el tamaño de la notificación al total de la pantalla con la propiedad `width` y dándole un valor de `100%`

Si necesitas que la notificación tenga un tamaño automático a su contenido puedes hacerlo con el valor `auto`

<div slot="example">
  <Notification-allWidth />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-button shadow icon @click="openNotification(null, '')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button flat icon @click="openNotification('top-center', 'primary', 'auto')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4-11}
    <script>
      export default {
        methods: {
          openNotification(position = null, color, width = '100%') {
            const noti = this.$vs.notification({
              width,
              color,
              title: 'Documentation Vuesax 4.0+',
              text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        &.b-r
          transform rotate(90deg)
    </style>
  ```

</div>

</card>

<card>

## Sticky <Badge text="New"/>

Puedes agregar un estilo al componente de pegado a la esquina mas cercana con la propiedad `sticky`, esta propiedad es un `boolean` po lo que solo puede tener el valor `true`

<div slot="example">
  <Notification-sticky />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow icon @click="openNotification(null, null)">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button flat icon @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button flat success icon @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button flat danger icon @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button flat warn icon @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button flat dark icon @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button flat color="#7d33ff" icon
          @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button flat color="rgb(59,222,200)" icon
          @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4-12}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const noti = this.$vs.notification({
              sticky: true,
              color,
              position,
              title: 'Documentation Vuesax 4.0+',
              text: 'These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x'
            })
          }
        }
      }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.4rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## Example <Badge text="New"/>

Puedes hacer cosas geniales con este componente y algunos otros de vuesax, para agregar cualquier elemento dentro de la notificación tenemos la propiedad `content` esta propiedad solo puede recibir un componente importado y es lo que va a generar dentro de la notificación

<div slot="example">
  <Notification-example />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-button border icon @click="openNotificationUser">
          Example User
        </vs-button>
        <vs-button border icon @click="openNotificationCookie">
          Example Cookie
        </vs-button>
        <vs-button border icon @click="openNotificationCall">
          Example Call
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{2,3,4,10,17,25}
    <script>
    import user from './user.vue'
    import cookie from './cookie.vue'
    import call from './call.vue'
    export default {
      methods: {
        openNotificationCookie() {
          const noti = this.$vs.notification({
            duration: 'none',
            content: cookie,
          })
        },
        openNotificationUser() {
          const noti = this.$vs.notification({
            duration: 'none',
            width: 'auto',
            content: user,
          })
        },
        openNotificationCall() {
          const noti = this.$vs.notification({
            color: 'dark',
            duration: 'none',
            width: 'auto',
            content: call,
            notPadding: true,
          })
        }
      }
    }
    </script>
  ```

</div>

<div slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.4rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</div>

</card>

<card>

## API

</card>
