---
PROPS:
  - name: v-model
    type: Boolean
    values: true,false
    description: Determina si el dialog es visible o esta oculto.
    default: false
    link: null
    usage: '#default'
    code: >
            <vs-dialog v-model="active">
              ...
            </vs-dialog>
  - name: not-center
    type: boolean
    values: true.false
    description: Por defecto el header centra los elementos, con esta propiedad se elimina el centrado.
    default: false
    link: null
    usage: '#type'
    code: >
            <vs-dialog not-center v-model="active">
              ...
            </vs-dialog>
  - name: width
    type: String
    values: px
    description: Determina el ancho de el dialog.
    default: null
    link: null
    usage: '#type'
    code: >
            <vs-dialog width="550px" v-model="active">
              ...
            </vs-dialog>
  - name: loading
    type: Boolean
    values: true,false
    description: Agrega una animación de cargando al dialog.
    default: false
    link: null
    usage: '#loading'
    code: >
            <vs-dialog loading v-model="active">
              ...
            </vs-dialog>
  - name: not-close
    type: Boolean
    values: true,false
    description: Elimina el botón de close de el dialog.
    default: false
    link: null
    usage: '#not-close'
    code: >
            <vs-dialog not-close v-model="active">
              ...
            </vs-dialog>
  - name: scroll
    type: Boolean
    values: true,false
    description: Hace que el contenido tenga un máximo de alto y da posibilidad a si se desborda el contenido agregar scroll.
    default: false
    link: null
    usage: '#scroll'
    code: >
            <vs-dialog scroll v-model="active">
              ...
            </vs-dialog>
  - name: overflow-hidden
    type: Boolean
    values: true,false
    description: Al abrirse el dialog se elimina el scroll de la pagina.
    default: false
    link: null
    usage: '#overflow-hidden-body'
    code: >
            <vs-dialog overflow-hidden v-model="active">
              ...
            </vs-dialog>
  - name: auto-width
    type: Boolean
    values: true,false
    description: Hace que el dialog tenga un ancho automático a su contenido.
    default: false
    link: null
    usage: '#scroll'
    code: >
            <vs-dialog auto-width v-model="active">
              ...
            </vs-dialog>
  - name: not-padding
    type: Boolean
    values: true,false
    description: Elimina el padding de los elementos base de el dialog.
    default: false
    link: null
    usage: '#not-padding'
    code: >
            <vs-dialog not-padding v-model="active">
              ...
            </vs-dialog>
  - name: full-screen
    type: Boolean
    values: true,false
    description: Hace que el dialog tenga el tamaño de la ventana.
    default: false
    link: null
    usage: '#full-screen'
    code: >
            <vs-dialog full-screen v-model="active">
              ...
            </vs-dialog>
  - name: blur
    type: Boolean
    values: true,false
    description: Hace que todos los elementos tengan blur al abrirse el dialog.
    default: false
    link: null
    usage: '#blur'
    code: >
            <vs-dialog blur v-model="active">
              ...
            </vs-dialog>
  - name: square
    type: Boolean
    values: true,false
    description: Elimina el border radius de el dialog.
    default: false
    link: null
    usage: '#square'
    code: >
            <vs-dialog square v-model="active">
              ...
            </vs-dialog>
  - name: prevent-close
    type: Boolean
    values: true,false
    description: Hace que el dialog no se pueda cerrar dando click afuera o pulsando la tecla esc.
    default: false
    link: null
    usage: null
    code: >
            <vs-dialog prevent-close v-model="active">
              ...
            </vs-dialog>
  - name: v-on:close
    type: Methods
    values: function
    description: función de retorno al cerrar el dialog.
    default: null
    link: null
    usage: null
    code: >
            <vs-dialog @close="handleClose" v-model="active">
              ...
            </vs-dialog>

SLOTS:
  - name: slot name
    type: slot
    values: null
    description: texto descriptivo.
    default: null
    link: null
    usage: '#animated'
    code: >
            ...

NEWS:
  - name
---

# Dialog

<card>

## Default

<docs-warn />

Genera un Dialog con el componente `vs-dialog`, este componente es muy personalizable ya que proporciona un slot para poner y hacer cualquier tipo de interfaz a la necesidad de el usuario

<div slot="example">
  <Dialog-default />
</div>

<div slot="template">

  ```html{6-42}
    <template>
      <div class="center">
        <vs-button @click="active=!active">
          Open Dialog
        </vs-button>
        <vs-dialog v-model="active">
          <template #header>
            <h4 class="not-margin">
              Welcome to <b>Vuesax</b>
            </h4>
          </template>


          <div class="con-form">
            <vs-input v-model="email" placeholder="Email">
              <template #icon>
                @
              </template>
            </vs-input>
            <vs-input type="password" v-model="password" placeholder="Password">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="remember">Remember me</vs-checkbox>
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                Sign In
              </vs-button>

              <div class="new">
                New Here? <a href="#">Create New Account</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          active: false,
          email: '',
          password: '',
          remember: false
        })
      }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
  ```

</div>

</card>

<card>

## Type

Puedes fácilmente  crear los distintos tipos de dialogs mas comunes como **Alert**, **Confirm** o **Prompt** usando los diferentes slots para la estructura de el dialog `header`, `default`, `footer`

<div slot="example">
  <Dialog-type />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-button @click="active=!active">
          Alert
        </vs-button>
        <vs-button flat @click="active2=!active2">
          Confirm
        </vs-button>
        <vs-button border @click="active3=!active3">
          Prompt
        </vs-button>
        <vs-dialog width="550px" not-center v-model="active">
          <template #header>
            <h4 class="not-margin">
              Welcome to <b>Vuesax</b>
            </h4>
          </template>


          <div class="con-content">
            <p>
              Vuesax is a relatively new framework with a refreshing design and in the latest trends, vuesax based on vuejs which means that we go hand in hand with one of the most popular javascript frameworks in the world and with a huge community with which you will have all the help and documentation to create and make your project
            </p>
          </div>

          <template #footer>
            <div class="con-footer">
              <vs-button @click="active=false" transparent>
                Ok
              </vs-button>
            </div>
          </template>
        </vs-dialog>
        <vs-dialog width="550px" not-center v-model="active2">
          <template #header>
            <h4 class="not-margin">
              Welcome to <b>Vuesax</b>
            </h4>
          </template>


          <div class="con-content">
            <p>
              Vuesax is a relatively new framework with a refreshing design and in the latest trends, vuesax based on vuejs which means that we go hand in hand with one of the most popular javascript frameworks in the world and with a huge community with which you will have all the help and documentation to create and make your project
            </p>
          </div>

          <template #footer>
            <div class="con-footer">
              <vs-button @click="active2=false" transparent>
                Ok
              </vs-button>
              <vs-button @click="active2=false" dark transparent>
                Cancel
              </vs-button>
            </div>
          </template>
        </vs-dialog>
        <vs-dialog width="300px" not-center v-model="active3">
          <template #header>
            <h4 class="not-margin">
              Welcome what is your <b>Name</b>
            </h4>
          </template>


          <div class="con-content">
            <vs-input v-model="input1" placeholder="Name"></vs-input>
          </div>

          <template #footer>
            <div class="con-footer">
              <vs-button @click="active3=false" transparent>
                Ok
              </vs-button>
              <vs-button @click="active3=false" dark transparent>
                Cancel
              </vs-button>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4,5,6}
    <script>
      export default {
        data:() => ({
          active: false,
          active2: false,
          active3: false,
          input1: '',
        })
      }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .con-footer
      display flex
      align-items center
      justify-content flex-end
      .vs-button
        margin 0px
        .vs-button__content
          padding 10px 30px
        ~ .vs-button
          margin-left 10px
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
      padding-bottom 0px
    .con-content
      width 100%
      p
        font-size .8rem
        padding 0px 10px
      .vs-checkbox-label
        font-size .8rem
      .vs-input-parent
        width 100%
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
  ```

</div>

</card>

<card>

## loading

Agrega una animación de cargando al dialog con la propiedad `loading`

<div slot="example">
  <Dialog-loading />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center">
        <vs-button success flat @click="active=!active">
          Open Dialog Loading
        </vs-button>
        <vs-dialog loading v-model="active">
          <template #header>
            <h4 class="not-margin">
              Welcome to <b>Vuesax</b>
            </h4>
          </template>


          <div class="con-form">
            <vs-input v-model="input1" placeholder="Email">
              <template #icon>
                @
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="Password">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                Sign In
              </vs-button>

              <div class="new">
                New Here? <a href="#">Create New Account</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          active: false,
          input1: '',
          input2: '',
          checkbox1: false
        })
      }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
      getColor(vsColor, alpha = 1)
          unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
      getVar(var)
          unquote("var(--vs-"+var+")")
      .not-margin
        margin 0px
        font-weight normal
        padding 10px
      .con-form
        width 100%
        .flex
          display flex
          align-items center
          justify-content space-between
          a
            font-size .8rem
            opacity .7
            &:hover
              opacity 1
        .vs-checkbox-label
          font-size .8rem
        .vs-input-content
          margin 10px 0px
          width calc(100%)
          .vs-input
            width 100%
      .footer-dialog
        display flex
        align-items center
        justify-content center
        flex-direction column
        width calc(100%)
        .new
          margin 0px
          margin-top 20px
          padding: 0px
          font-size .7rem
          a
            color getColor('primary') !important
            margin-left 6px
            &:hover
              text-decoration underline
        .vs-button
          margin 0px
      </style>
  ```

</div>

</card>

<card>

## Not close

Puedes quitar el botón de close con la propiedad `not-close`

<div slot="example">
  <Dialog-notClose />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center">
        <button @click="active=!active">
          active
        </button>
        <vs-dialog not-close v-model="active">
          <template #header>
            <h4 class="not-margin">
              Welcome to <b>Vuesax</b>
            </h4>
          </template>


          <div class="con-form">
            <vs-input v-model="input1" placeholder="Email">
              <template #icon>
                @
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="Password">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                Sign In
              </vs-button>

              <div class="new">
                New Here? <a href="#">Create New Account</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          active: false,
          input1: '',
          input2: '',
          checkbox1: false
        })
      }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
  ```

</div>

</card>

<card>

## Scroll

Hay casos en que necesitas un scroll porque hay mucha información dentro de el dialog para ello puedes usar la propiedad `scroll`

<div slot="example">
  <Dialog-scroll />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-button shadow @click="active=!active">
          Open Dialog
        </vs-button>
        <vs-dialog scroll overflow-hidden not-close auto-width v-model="active">
          <template #header>
            <h3>
              Introduction
            </h3>
          </template>
          <div class="con-content">
            <h4>
              Whats is Vuesax?
            </h4>
            <p>
              Vuesax (pronounced / vjusacksː /, as view sacks) is a framework of UI components created with Vuejs to make projects easily and with a unique and pleasant style, vuesax is created from scratch and designed for all types of developers from the frontend lover to the backend who wants to easily create their visual approach to the end-user

              We are focused on streamlining the work of the programmer by giving components created in their entirety and with independent customization and very easy to implement, so creativity is in our hands but we do not neglect that each project is different both visually and in its ecosystem

              Vuesax does not have a design line such as other component frameworks based on Material Design, we believe that there are already emaciated frameworks that look visually and in UI / UX and we don't want to be one more of the bunch, apart from that we love to create and design new experiences and surprise you with new elements or details that we can only do by being visually free.
            </p>

            <h4>
              Why Vuesax?
            </h4>

            <p>
              Vuesax is a relatively new framework with a refreshing design and in the latest trends, vuesax based on vuejs which means that we go hand in hand with one of the most popular javascript frameworks in the world and with a huge community with which you will have all the help and documentation to create and make your project
              <br>
              <br>
              - Vuesax, unlike many frameworks, is designed from scratch and we are not anchored to any design line, this is something great since your project is going to be unique and very different from the others

              <br>
              <br>
              - We are focused on the quick and easy creation of projects giving a beautiful visual line but without forgetting the personalization and independence of the developer

              <br>
              <br>
              - Vuesax uses native css variables for better customization and production changes such as changing to dark theme or changing the main color of the entire application with few javascript lines
              <br>
              <br>

              - Vuesax is a frame designed to have a great visual impact and that is always in trend with respect to design.
              <br>
              <br>

              - An open-source community to create, improve and correct any component or function.
              <br>
              <br>

              - Independent components to avoid importing unnecessary code.
              <br>
              <br>

              - Markdown documents for better sustainability.
              <br>
              <br>

              - and much more.
            </p>
          </div>
        </vs-dialog>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        active: false,
        input1: '',
        input2: '',
        checkbox1: false
      })
    }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
    .con-content
      p
        margin 20px 0px
        position relative
        display block
        font-size .9rem

    </style>
  ```

</div>

</card>

<card>

## Overflow Hidden Body

Si necesitas remover el scroll de la pagina al abrir el dialog puedes hacerlo con la propiedad `overflow-hidden`

<div slot="example">
  <Dialog-overflowHidden />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center">
        <button @click="active=!active">
          active
        </button>
        <vs-dialog overflow-hidden v-model="active">
          <template #header>
            <h4 class="not-margin">
              Welcome to <b>Vuesax</b>
            </h4>
          </template>


          <div class="con-form">
            <vs-input v-model="input1" placeholder="Email">
              <template #icon>
                @
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="Password">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                Sign In
              </vs-button>

              <div class="new">
                New Here? <a href="#">Create New Account</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        active: false,
        input1: '',
        input2: '',
        checkbox1: false
      })
    }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
      getColor(vsColor, alpha = 1)
          unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
      getVar(var)
          unquote("var(--vs-"+var+")")
      .not-margin
        margin 0px
        font-weight normal
        padding 10px
      .con-form
        width 100%
        .flex
          display flex
          align-items center
          justify-content space-between
          a
            font-size .8rem
            opacity .7
            &:hover
              opacity 1
        .vs-checkbox-label
          font-size .8rem
        .vs-input-content
          margin 10px 0px
          width calc(100%)
          .vs-input
            width 100%
      .footer-dialog
        display flex
        align-items center
        justify-content center
        flex-direction column
        width calc(100%)
        .new
          margin 0px
          margin-top 20px
          padding: 0px
          font-size .7rem
          a
            color getColor('primary') !important
            margin-left 6px
            &:hover
              text-decoration underline
        .vs-button
          margin 0px
      </style>
  ```

</div>

</card>

<card>

## Not Padding

Si necesitas remover el padding de el dialog para hacer una interfaz mas personalizada puedes hacerlo con la propiedad `not-padding`

<div slot="example">
  <Dialog-notPadding />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center">
        <button @click="active=!active">
          active
        </button>
        <vs-dialog not-close auto-width not-padding v-model="active">
          <div class="con-image">
            <img src="/foto1.png" alt="">
          </div>
        </vs-dialog>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          active: false,
        })
      }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
    .con-image
      border-radius inherit
      img
        display block
        position relative
        border-radius inherit
        max-width 350px
    </style>
  ```

</div>

</card>

<card>

## Nested Dialogs

Puedes anidar cuantos `vs-dialog` necesites sin problema

<div slot="example">
  <Dialog-nested />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-button @click="active=!active">
          Open Dialog 1
        </vs-button>
        <vs-dialog overflow-hidden v-model="active">
          <template #header>
            <h3>
              Nested dialogs
            </h3>
          </template>
          <div class="con-content">
            <vs-button @click="active2=!active2">
              Open Dialog 2
            </vs-button>
          </div>
        </vs-dialog>
        <vs-dialog v-model="active2">
          <template #header>
            <h4 class="not-margin">
              Welcome to <b>Vuesax</b>
            </h4>
          </template>


          <div class="con-form">
            <vs-input v-model="input1" placeholder="Email">
              <template #icon>
                @
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="Password">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                Sign In
              </vs-button>

              <div class="new">
                New Here? <a href="#">Create New Account</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          active: false,
          active2: false,
          input1: '',
          input2: '',
          checkbox1: false
        })
      }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")

    .con-content
      display flex
      align-items center
      justify-content center
      p
        margin 20px 0px
        position relative
        display block
        font-size .9rem
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
  ```

</div>

</card>

<card>

## full Screen

Si necesitas que el dialog sea de el tamaño total de la ventana puedes hacerlo con la propiedad `full-screen`

<div slot="example">
  <Dialog-fullScreen />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center">
        <vs-button gradient warn @click="active=!active">
          Open Dialog
        </vs-button>
        <vs-dialog overflow-hidden full-screen v-model="active">
          <template #header>
            <h4 class="not-margin">
              Welcome to <b>Vuesax</b>
            </h4>
          </template>


          <div class="con-form">
            <vs-input v-model="input1" placeholder="Email">
              <template #icon>
                @
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="Password">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                Sign In
              </vs-button>

              <div class="new">
                New Here? <a href="#">Create New Account</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        active: false,
        input1: '',
        input2: '',
        checkbox1: false
      })
    }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
  ```

</div>

</card>

<card>

## blur

Puedes agregar un estilo de blur a todos los elementos detrás de el dialog con la propiedad `blur`, esta funcionalidad depende de la propiedad css [backdrop-filter](https://caniuse.com/#feat=css-backdrop-filter)

<div slot="example">
  <Dialog-blur />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center">
        <button @click="active=!active">
          active
        </button>
        <vs-dialog blur v-model="active">
          <template #header>
            <h4 class="not-margin">
              Welcome to <b>Vuesax</b>
            </h4>
          </template>


          <div class="con-form">
            <vs-input v-model="input1" placeholder="Email">
              <template #icon>
                @
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="Password">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                Sign In
              </vs-button>

              <div class="new">
                New Here? <a href="#">Create New Account</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          active: false,
          input1: '',
          input2: '',
          checkbox1: false
        })
      }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
      getColor(vsColor, alpha = 1)
          unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
      getVar(var)
          unquote("var(--vs-"+var+")")
      .not-margin
        margin 0px
        font-weight normal
        padding 10px
      .con-form
        width 100%
        .flex
          display flex
          align-items center
          justify-content space-between
          a
            font-size .8rem
            opacity .7
            &:hover
              opacity 1
        .vs-checkbox-label
          font-size .8rem
        .vs-input-content
          margin 10px 0px
          width calc(100%)
          .vs-input
            width 100%
      .footer-dialog
        display flex
        align-items center
        justify-content center
        flex-direction column
        width calc(100%)
        .new
          margin 0px
          margin-top 20px
          padding: 0px
          font-size .7rem
          a
            color getColor('primary') !important
            margin-left 6px
            &:hover
              text-decoration underline
        .vs-button
          margin 0px
      </style>
  ```

</div>

</card>

<card>

## Square

Cambia el estilo de el dialog eliminando el border-radius y haciendo que sea rectangular

<div slot="example">
  <Dialog-square />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center">
        <vs-button dark flat square @click="active=!active">
          Open Dialog
        </vs-button>
        <vs-dialog square v-model="active">
          <template #header>
            <h4 class="not-margin">
              Welcome to <b>Vuesax</b>
            </h4>
          </template>


          <div class="con-form">
            <vs-input v-model="input1" placeholder="Email">
              <template #icon>
                @
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="Password">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                Sign In
              </vs-button>

              <div class="new">
                New Here? <a href="#">Create New Account</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        active: false,
        input1: '',
        input2: '',
        checkbox1: false
      })
    }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
  ```

</div>

</card>

<card>

## Prevent Close

Con la propiedad `prevent-close` haces que el dialog no se cierre al hacer click afuera o al pulsar la tecla **esc**

<div slot="example">
  <Dialog-preventClose />
</div>

<div slot="template">

  ```html{6}
    <template>
      <div class="center">
        <vs-button danger @click="active=!active">
          Open Dialog
        </vs-button>
        <vs-dialog prevent-close v-model="active">
          <template #header>
            <h4 class="not-margin">
              Welcome to <b>Vuesax</b>
            </h4>
          </template>


          <div class="con-form">
            <vs-input v-model="input1" placeholder="Email">
              <template #icon>
                @
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="Password">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                Sign In
              </vs-button>

              <div class="new">
                New Here? <a href="#">Create New Account</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        active: false,
        input1: '',
        input2: '',
        checkbox1: false
      })
    }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
  ```

</div>

</card>

<card>

## API

</card>
