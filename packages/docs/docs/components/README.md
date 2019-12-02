---
PROPS:
 # cSpell:ignore vuesax, autoset, codepen, whatsapp, linkedin, behance, dribbble
  - name: color
    type: String
    values: primary, success, danger, warning, dark, RGB, HEX
    description: Cambia el color del componente y algunos de sus sub componentes.
    default: primary
    link: /api/color
    code: >
            <vs-alert color="success">
              <template v-slot:header>
                Lorem ipsum dolor sit amet
              </template>

              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </vs-alert>
    usage: '#color'
  - name: style button
    type: Prop
    values: flat, border, gradient, transparent, dashed, shadow, relief, floating
    description: Cambia el estilo del componente y de sus estados.
    default: null
    link: null
    code: >
            <vs-button
              flat // <----
              :active="active == 0"
              @click="active = 0">
              Flat
            </vs-button>
    usage: '#flat'
  - name: active
    type: Boolean
    values: true, false
    description: Determina si el componente esta activo y cambia su estilo a ese estado.
    default: false
    link: null
    code: >
            <vs-button active >
              Default
            </vs-button>
    usage: '#default'
  - name: upload
    type: Boolean
    values: true, false
    description: Determina si el componente tiene activo el estado de upload cambiando el estilo y agregando animación.
    default: false
    link: null
    code: >
            <vs-button upload >
              <i class='bx bxs-wallet' ></i> Wallet
            </vs-button>
    usage: '#upload'
  - name: to
    type: String
    values: url - vue-router
    description: Agrega la funcionalidad de vue-router al botón, al hacer click se va a redirigir a la ruta pasada.
    default: false
    link: null
    code: >
            <vs-button to="/" >
              Example prop - to
            </vs-button>
    usage: null
  - name: href
    type: String
    values: href - link
    description: Agrega un href de un link externo para agregar la funcionalidad al hacer click en el componente.
    default: false
    link: null
    code: >
            <vs-button href="https://lusaxweb.github.io/vuesax/" >
              Example prop - url
            </vs-button>
    usage: null
  - name: blank
    type: Boolean
    values: true, false
    description: como en un elemento html `a` determina si se abre una nueva ventana o se sustituye la actual.
    default: false
    link: null
    code: >
            <vs-button blank href="https://lusaxweb.github.io/vuesax/" >
              Example prop - url
            </vs-button>
    usage: null
  - name: icon
    type: Boolean
    values: true, false
    description: Determina si el componente contiene solo un icono, al agregar esta propiedad el componente tiene un ancho y alto igual.
    default: false
    link: null
    code: >
            <vs-button icon > // <------
              <i class='bx bx-home-alt'></i>
            </vs-button>
    usage: '#icon'
  - name: circle
    type: Boolean
    values: true, false
    description: Cambia el border-radius para dar un estilo de circulo.
    default: false
    link: null
    code: >
            <vs-button icon circle > // <------
              <i class='bx bx-home-alt'></i>
            </vs-button>
    usage: '#circle'
  - name: square
    type: Boolean
    values: true, false
    description: Cambia el border-radius para dar un estilo de rectángulo.
    default: false
    link: null
    code: >
            <vs-button icon square > // <------
              <i class='bx bx-home-alt'></i>
            </vs-button>
    usage: '#square'
  - name: block
    type: Boolean
    values: true, false
    description: Cambia el ancho del componente al total posible determinado por el elemento padre.
    default: false
    link: null
    code: >
            <vs-button block >
              <i class='bx bxs-paint-roll' ></i> Edit Theme
            </vs-button>
    usage: '#block'
  - name: animationType
    type: Boolean
    values: true, false
    description: Cambia el tipo de animacion, esta propiedad solo funciona si se tiene el <code>slot</code> animate.
    default: false
    link: null
    code: >
            <vs-button flat color="success" animation-type="vertical" >
              Message
              <template v-slot:animate >
                <i class='bx bx-mail-send' ></i> Send
              </template>
            </vs-button>
    usage: '#animated'
  - name: animateInactive
    type: Boolean
    values: true, false
    description: Determina si la animación esta activa para el usuario al hacer hover.
    default: false
    link: null
    code: >
            <vs-button :animate-inactive="successFace" @click="handleClickFace" :loading="loadingFace" color="facebook">
              <i class='bx bxl-facebook-square' ></i>
              {{ successFace ? 'Logout' : 'Facebook' }}
              <template v-slot:animate >
                <i class='bx bx-user' ></i> Login
              </template>
            </vs-button>
    usage: '#toggle'



SLOTS:
  - name: animate
    type: slot
    values: null
    description: Slot Para agregar el elemento que se visualizara en la animacion.
    default: null
    link: null
    code: >
          <vs-button >
            Home
            <template v-slot:animate >
              <i class='bx bx-home-alt' ></i>
            </template>
          </vs-button>
    usage: '#animated'

---

# prueba


