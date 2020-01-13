---
PROPS:
  - name: color
    type: String
    values: primary, success, danger, warning, dark, RGB, HEX
    description: Cambia el color del componente y algunos de sus sub componentes.
    default: primary
    link: /api/color
    usage: '#color'
    code: >
            <vs-button
              color="success" 
            >
              Success
            </vs-button>
  # _______________________________________
  - name: style button
    type: Prop
    values: flat, border, gradient, transparent, dashed, shadow, relief, floating
    description: Cambia el estilo del componente y de sus estados.
    default: null
    link: null
    usage: '#flat'
    code: >
            <vs-button
              flat
              >
              Flat
            </vs-button>
  # _______________________________________
  - name: active
    type: Boolean
    values: true, false
    description: Determina si el componente esta activo y cambia su estilo a ese estado.
    default: false
    link: null
    usage: '#default'
    code: >
            <vs-button active >
              Default
            </vs-button>
  # _______________________________________
  - name: upload
    type: Boolean
    values: true, false
    description: Determina si el componente tiene activo el estado de upload cambiando el estilo y agregando la animación.
    default: false
    link: null
    usage: '#upload'
    code: >
            <vs-button upload >
              <i class='bx bxs-wallet'></i> Wallet
            </vs-button>
  # _______________________________________
  - name: to
    type: String
    values: url - vue-router
    description: Agrega la funcionalidad de vue-router al botón, al hacer click se va a redirigir a la ruta pasada.
    default: false
    link: null
    usage: '#to-href'
    code: >
            <vs-button to="/" >
              Example prop - to
            </vs-button>
  # _______________________________________
  - name: href
    type: String
    values: href - link
    description: Agrega un href de un link externo para agregar la funcionalidad al hacer click en el componente.
    default: false
    link: null
    usage: '#to-href'
    code: >
            <vs-button href="https://lusaxweb.github.io/vuesax/" >
              Example prop - url
            </vs-button>
  # _______________________________________
  - name: blank
    type: Boolean
    values: true, false
    description: como en un elemento html `a` determina si se abre una nueva ventana o se sustituye la actual.
    default: false
    link: null
    usage: '#to-href'
    code: >
            <vs-button blank href="https://lusaxweb.github.io/vuesax/" >
              Example prop - url
            </vs-button>
  # _______________________________________
  - name: icon
    type: Boolean
    values: true, false
    description: Determina si el componente contiene solo un icono, al agregar esta propiedad el componente tiene un ancho y alto igual.
    default: false
    link: null
    usage: '#icon'
    code: >
            <vs-button icon >
              <i class='bx bx-home-alt'></i>
            </vs-button>
  # _______________________________________
  - name: circle
    type: Boolean
    values: true, false
    description: Cambia el border-radius para dar un estilo de circulo.
    default: false
    link: null
    usage: '#circle'
    code: >
            <vs-button icon circle >
              <i class='bx bx-home-alt'></i>
            </vs-button>
  # _______________________________________
  - name: square
    type: Boolean
    values: true, false
    description: Cambia el border-radius para dar un estilo de rectángulo.
    default: false
    link: null
    usage: '#square'
    code: >
            <vs-button icon square > // <------
              <i class='bx bx-home-alt'></i>
            </vs-button>
  # _______________________________________
  - name: block
    type: Boolean
    values: true, false
    description: Cambia el ancho del componente al total posible determinado por el elemento padre.
    default: false
    link: null
    usage: '#block'
    code: >
            <vs-button block >
              <i class='bx bxs-paint-roll' ></i> Edit Theme
            </vs-button>
  # _______________________________________
  - name: animationType
    type: Boolean
    values: true, false
    description: Cambia el tipo de animacion, esta propiedad solo funciona si se tiene el <code>slot</code> animate.
    default: false
    link: null
    usage: '#animate'
    code: >
            <vs-button flat color="success" animation-type="vertical" >
              Message
              <template v-slot:animate >
                <i class='bx bx-mail-send' ></i> Send
              </template>
            </vs-button>
  # _______________________________________
  - name: animateInactive
    type: Boolean
    values: true, false
    description: Determina si la animación esta activa para el usuario al hacer hover.
    default: false
    link: null
    usage: '#toggle'
    code: >
            <vs-button :animate-inactive="successFace" @click="handleClickFace" :loading="loadingFace" color="facebook">
              <i class='bx bxl-facebook-square' ></i>
              {{ successFace ? 'Logout' : 'Facebook' }}
              <template v-slot:animate >
                <i class='bx bx-user' ></i> Login
              </template>
            </vs-button>
  # _______________________________________
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
  # _______________________________________
NEWS:
  - loading
  - upload
  - block
  - animate
  - floating
  - social
  - group
  - toggle
  - to-href
---

# Button

<card>

## Default

<docs-warn />

Los botones son parte fundamental de cualquier proyecto, con vuesax puedes agregar un boton genial con una sola linea de código

los botones tienen todos los estados como active, focus, hover, para hacer mas simple su implementación y agilizar el trabajo

<div slot="example">
  <button-default />
</div>

<div slot="template">
  
  ```html
    <template>
      <div>
        <vs-button 
          :active="active == 0" 
          @click="active = 0" 
        >
          Active
        </vs-button>
        <vs-button 
          :active="active == 1" 
          @click="active = 1" 
        >
          Default
        </vs-button>
        <vs-button disabled >Disabled</vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Flat

Puedes cambiar el estilo completo hacia *flat* de un botón con la propiedad `flat` que su valor es un `boolean` por ende con solo agregarla ya se cambiaran los estilos

<div slot="example">
  <button-flat />
</div>

<div slot="template">
  
  ```html{4}
    <template>
      <div class="center">
        <vs-button 
          flat 
          :active="active == 0" 
          @click="active = 0" 
        >
          Active
        </vs-button>
        <vs-button 
          flat 
          :active="active == 1" 
          @click="active = 1" 
        >
          Default
        </vs-button>
        <vs-button 
          flat 
          disabled 
        >
          Disabled
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Border

Puedes cambiar el estilo completo hacia *border* de un botón con la propiedad `border` que su valor es un `boolean` por ende con solo agregarla ya se cambiaran los estilos

<div slot="example">
  <button-border />
</div>

<div slot="template">
  
  ```html{4}
    <template>
      <div class="center">
        <vs-button
          border
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </vs-button>
        <vs-button
          border
          :active="active == 1"
          @click="active = 1"
        >
          Default
        </vs-button>
        <vs-button
          border
          disabled
        >
          Disabled
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Gradient

Puedes cambiar el estilo completo hacia *Gradient* de un botón con la propiedad `gradient` que su valor es un `boolean` por ende con solo agregarla ya se cambiaran los estilos

:::tip Gradient Color Automático
  Los colores del gradiente se generan automáticamente por la propiedad `color` que en este ejemplo es el color `primary`
:::

<div slot="example">
  <button-gradient />
</div>

<div slot="template">
  
  ```html{4}
    <template>
      <div>
        <vs-button 
          gradient 
          :active="active == 0" 
          @click="active = 0" 
        >
          Active
        </vs-button>
        <vs-button 
          gradient 
          :active="active == 1" 
          @click="active = 1" 
        >
          Default
        </vs-button>
        <vs-button 
          gradient 
          disabled
        >
          Disabled
        </vs-button>
      </div>
    </template>
  ```

</div>


<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Relief

Cambia el estilo del botón a un aspecto de relieve con la propiedad `relief`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

<div slot="example">
  <button-relief />
</div>

<div slot="template">
  
  ```html{4}
    <template>
      <div>
        <vs-button 
          relief 
          :active="active == 0" 
          @click="active = 0" 
        >
          Active
        </vs-button>
        <vs-button 
          relief 
          :active="active == 1" 
          @click="active = 1" 
        >
          Default
        </vs-button>
        <vs-button 
          relief 
          disabled
        >
          Disabled
        </vs-button>
      </div>
    </template>
  ```

</div>


<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Transparent

Cambia el estilo del botón con la propiedad `transparent`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

<div slot="example">
  <button-transparent />
</div>

<div slot="template">
  
  ```html{4}
    <template>
      <div>
        <vs-button 
          transparent 
          :active="active == 0" 
          @click="active = 0" 
        >
          Active
        </vs-button>
        <vs-button 
          transparent 
          :active="active == 1" 
          @click="active = 1" 
        >
          Default
        </vs-button>
        <vs-button 
          transparent 
          disabled
        >
          Disabled
        </vs-button>
      </div>
    </template>
  ```

</div>


<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>


</card>

<card>

## Shadow

Cambia el estilo del botón con la propiedad `shadow`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

<div slot="example">
  <button-shadow />
</div>

<div slot="template">
  
  ```html{4}
    <template>
      <div>
        <vs-button 
          shadow 
          :active="active == 0" 
          @click="active = 0" 
        >
          Active
        </vs-button>
        <vs-button 
          shadow 
          :active="active == 1" 
          @click="active = 1" 
        >
          Default
        </vs-button>
        <vs-button 
          shadow 
          disabled
        >
          Disabled
        </vs-button>
      </div>
    </template>
  ```

</div>


<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>


</card>

<card>

## Color

Cambia el color del componente Button con la propiedad `color` y el valor de el color por ejemplo (**#fff**, **rgba(100,10,5)** o los **colores principales de vuesax**), esto solo afectara al componente y su valor puede ser dinámico

<utils-color />

<div slot="example">
  <button-color />
</div>

<div slot="template">
  
  ```html{10}
    <template>
      <div class="center">
        <vs-button
          :active="active == 0"
          @click="active = 0"
        >
          Default
        </vs-button>
        <vs-button
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          Success
        </vs-button>
        <vs-button
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          Danger
        </vs-button>
        <vs-button
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Warn
        </vs-button>
        <vs-button
          dark
          shadow
          :active="active == 4"
          @click="active = 4"
        >
          Dark
        </vs-button>
        <vs-button
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
            HEX
        </vs-button>
        <vs-button
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          RGB
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Icon

Si necesitas un botón de solo icono usa la propiedad `icon`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

esta propiedad hace que el boton tenga un tamaño especifico haciendo que sea del mismo ancho y alto, no usar cuando sea icono y texto

<utils-icon />

<div slot="example">
  <button-icon />
</div>

<div slot="template">
  
  ```html{4}
    <template>
      <div class="center">
        <vs-button
          icon
          :active="active == 0"
          @click="active = 0"
        >
          <i class='bx bx-home-alt'></i>
        </vs-button>

        <vs-button
          icon
          color="success"
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class='bx bxs-phone-call' ></i>
        </vs-button>

        <vs-button
          icon
          color="danger"
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class='bx bxs-heart' ></i>
        </vs-button>

        <vs-button
          icon
          color="warn"
          gradient
          :active="active == 3" @click="active = 3"
        >
          <i class='bx bxs-bell-ring' ></i>
        </vs-button>

        <vs-button
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class='bx bxs-paper-plane' ></i>
        </vs-button>

        <vs-button
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class='bx bxs-purchase-tag' ></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Icon - Text

Si necesitas un botón con texto e icon puedes hacerlos agregándolos en el `slot` default.

<div slot="example">
  <button-iconText />
</div>

<div slot="template">
  
  ```html{7}
    <template>
      <div class="center">
        <vs-button
          :active="active == 0"
          @click="active = 0"
        >
          <i class="bx bx-home-alt"></i> Home
        </vs-button>

        <vs-button
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i> Call
        </vs-button>

        <vs-button
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </vs-button>

        <vs-button
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          <i class="bx bxs-bell-ring"></i> Notifications
        </vs-button>

        <vs-button
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i> Send
        </vs-button>

        <vs-button
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i> Save
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Circle

Puedes redondear completamente las esquinas con la propiedad `circle`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

<div slot="example">
  <button-circle />
</div>

<div slot="template">
  
  ```html{4}
    <template>
      <div class="center">
        <vs-button
          circle
          :active="active == 0"
          @click="active = 0"
        >
          Home
        </vs-button>

        <vs-button
          circle
          icon
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </vs-button>

        <vs-button
          circle
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </vs-button>

        <vs-button
          circle
          color="warn"
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Notifications <i class="bx bxs-bell-ring"></i>
        </vs-button>

        <vs-button
          circle
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </vs-button>

        <vs-button
          circle
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Square

Puedes hacer todas las esquinas totalmente rectas con la propiedad `Square`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

<div slot="example">
  <button-square />
</div>

<div slot="template">
  
  ```html{4}
    <template>
      <div class="center">
        <vs-button 
          square 
          :active="active == 0" 
          @click="active = 0"
        >
          Home
        </vs-button>

        <vs-button 
          square 
          icon 
          success
          flat 
          :active="active == 1" @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </vs-button>
        
        <vs-button 
          square 
          danger
          border 
          :active="active == 2" 
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </vs-button>
        
        <vs-button 
          square 
          warn
          gradient 
          :active="active == 3" 
          @click="active = 3"
        >
          Notifications <i class="bx bxs-bell-ring"></i>
        </vs-button>
        <vs-button 
          square 
          icon 
          color="#7d33ff" 
          relief 
          :active="active == 5" 
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </vs-button>
        <vs-button 
          square 
          icon 
          color="rgb(59,222,200)" 
          gradient 
          :active="active == 6" 
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Size

Cambia el tamaño de todo el boton incluyendo padding, font-size y borde con la propiedad `size`

valores:
  - xl
  - l
  - default
  - small
  - mini

<div slot="example">
  <button-size />
</div>

<div slot="template">
  
  ```html{4}
    <template>
      <div class="center">
        <vs-button
          size="xl"
          :active="active == 0"
          @click="active = 0"
        >
          XLarge
        </vs-button>
        <vs-button
          size="large"
          :active="active == 1"
          @click="active = 1"
        >
          Large
        </vs-button>
        <vs-button
          :active="active == 2"
          @click="active = 2"
        >
          Default
        </vs-button>
        <vs-button
          size="small"
          :active="active == 3"
          @click="active = 3"
        >
          Small
        </vs-button>
        <vs-button
          size="mini"
          :active="active == 4"
          @click="active = 4"
        >
          Mini
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Loading <Badge text="New"/>

Ahora puedes agregar un estado de cargando con la propiedad `loading`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

<div slot="example">
  <button-loading />
</div>

<div slot="template">
  
  ```html{4}
    <template>
      <div class="center">
        <vs-button
          loading
          :active="active == 0"
          @click="active = 0"
        >
          Home
        </vs-button>

        <vs-button
          loading
          icon
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </vs-button>

        <vs-button
          loading
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </vs-button>

        <vs-button
          loading
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Notifications <i class="bx bxs-bell-ring"></i>
        </vs-button>

        <vs-button
          loading
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </vs-button>
        <vs-button
          loading
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Upload <Badge text="New"/>

Ahora puedes agregar un estado de enviando o subiendo datos al servidor con la propiedad `upload`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

<div slot="example">
  <button-upload />
</div>

<div slot="template">
  
  ```html{4}
    <template>
      <div class="center">
        <vs-button
          upload
          :active="active == 0"
          @click="active = 0"
        >
          Home
        </vs-button>

        <vs-button
          upload
          icon
          color="success"
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </vs-button>

        <vs-button
          upload
          color="danger"
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </vs-button>

        <vs-button
          upload
          color="warn"
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Notifications <i class="bx bxs-bell-ring"></i>
        </vs-button>

        <vs-button
          upload
          color="dark"
          transparent
          :active="active == 5"
          @click="active = 5"
        >
          Dark
        </vs-button>

        <vs-button
          upload
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </vs-button>

        <vs-button
          upload
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Block <Badge text="New"/>

Puedes hacer que el boton tenga todo el ancho permitido con la propiedad `block`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

<div slot="example">
  <button-block />
</div>

<div slot="template">
  
  ```html{4}
    <template>
      <div class="center">
        <vs-button 
          block 
        >
          <i class='bx bxs-paint-roll' ></i> Edit Theme
        </vs-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Animate <Badge text="New"/>

Puedes crear una animación al componente agregando el `slot="animate"` y el contenido sera el que aparecerá al animarse el componente

también puedes cambiar el tipo de animación con la propiedad `animation-type` y los valores permitidos son (`vertical`, `scale`, `rotate`)

<div slot="example">
  <button-animate />
</div>

<div slot="template">
  
  ```html{5,6,7}
    <template>
      <div class="center">
        <vs-button>
          Home
          <template #animate >
            <i class='bx bx-home-alt' ></i>
          </template>
        </vs-button>

        <vs-button
          flat
          success
          animation-type="vertical"
        >
          Message
          <template #animate >
            <i class='bx bx-mail-send' ></i> Send
          </template>
        </vs-button>

        <vs-button
          gradient
          style="min-width: 60px"
          warn
          animation-type="scale"
        >
          <i class='bx bxs-shopping-bag' ></i>
          <template #animate >
            Store
          </template>
        </vs-button>

        <vs-button
          icon
          relief
          danger
          animation-type="rotate"
        >
          <i class='bx bx-like'></i>
          <template #animate >
            <i class='bx bxs-like' ></i>
          </template>
        </vs-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Social <Badge text="New"/>

Usar los colores de las redes sociales es algo muy común en un proyecto ya sea un boton de login o uno de compartir por eso vuesax te facilita el buscar cada color y solo con poner el nombre de la red ya se cambia todo el estilo del componente

Colores soportados: (`facebook`, `twitter`, `youtube`, `pinterest`, `linkedin`, `snapchat`, `whatsapp`, `tumblr`, `reddit`, `spotify`, `amazon`, `medium`, `vimeo`, `skype`, `dribbble`, `slack`, `yahoo`, `twitch`, `discord`, `telegram`, `google-plus`, `messenger`)

<div slot="example">
  <button-social />
</div>

<div slot="template">
  
  ```html{5}
    <template>
      <div class="center">
        <vs-button
          icon
          color="facebook"
        >
          <i class='bx bxl-facebook-square'></i>
        </vs-button>

        <vs-button
          icon
          color="twitter"
        >
          <i class='bx bxl-twitter'></i>
        </vs-button>

        <vs-button
          icon
          color="youtube"
        >
          <i class='bx bxl-youtube'></i>
        </vs-button>

        <vs-button
          icon
          color="linkedin"
        >
          <i class='bx bxl-linkedin'></i>
        </vs-button>

        <vs-button
          icon
          color="whatsapp"
        >
          <i class='bx bxl-whatsapp'></i>
        </vs-button>

        <vs-button
          icon
          color="twitch"
        >
          <i class='bx bxl-twitch'></i>
        </vs-button>

        <vs-button
          icon
          color="medium"
        >
          <i class='bx bxl-medium'></i>
        </vs-button>

        <vs-button
          icon
          color="skype"
        >
          <i class='bx bxl-skype'></i>
        </vs-button>

        <vs-button
          icon
          color="slack"
        >
          <i class='bx bxl-slack-old'></i>
        </vs-button>

        <vs-button
          icon
          color="messenger"
        >
          <i class='bx bxl-messenger'></i>
        </vs-button>

        <vs-button
          icon
          color="tumblr"
        >
          <i class='bx bxl-tumblr'></i>
        </vs-button>

        <vs-button
          icon
          color="dribbble"
        >
          <i class='bx bxl-dribbble'></i>
        </vs-button>

        <vs-button
          icon
          color="google-plu
        s">
          <i class='bx bxl-google-plus'></i>
        </vs-button>

        <vs-button
          icon
          color="vimeo"
        >
          <i class='bx bxl-vimeo'></i>
        </vs-button>

        <vs-button
          icon
          color="pinterest"
        >
          <i class='bx bxl-pinterest'></i>
        </vs-button>

        <vs-button
          icon
          color="spotify"
        >
          <i class='bx bxl-spotify'></i>
        </vs-button>

        <vs-button
          icon
          color="discord"
        >
          <i class='bx bxl-discord'></i>
        </vs-button>

        <vs-button
          icon
          color="amazon"
        >
          <i class='bx bxl-amazon'></i>
        </vs-button>

        <vs-button
          icon
          color="reddit"
        >
          <i class='bx bxl-reddit'></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Floating <Badge text="New"/>

Puedes hacer que un boton sea de estilo flotante fácilmente con la propiedad `Floating`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

estos botones normalmente hacen una acción importante en especifico y van con una posición fija en la esquina inferior

<div slot="example">
  <button-floating />
</div>

<div slot="template">
  
  ```html{6}
    <template>
      <div class="center">
        <vs-button 
          circle 
          icon 
          floating
        >
          <i class='bx bx-plus' ></i>
        </vs-button>
        
        <vs-button 
          color="whatsapp" 
          circle 
          icon 
          floating
        >
          <i class='bx bxl-whatsapp' ></i>
        </vs-button>

        <vs-button 
          color="#ff3e4e" 
          circle 
          icon 
          floating
        >
          <i class='bx bx-up-arrow-alt' ></i>
        </vs-button>
        
        <vs-button 
          circle 
          icon 
          disabled 
          floating 
        >
          <i class='bx bxs-chat' ></i>
        </vs-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Group <Badge text="New"/>

Si necesitas hacer un grupo de botones puedes usar el **sub-componente** `<vs-button-group></vs-button-group>` y adentro en el slot default poner los botones que quieres agrupar

<div slot="example">
  <button-group />
</div>

<div slot="template">
  
  ```html{3,16}
    <template>
      <div class="center">
        <vs-button-group>
          <vs-button>
            One
          </vs-button>
          <vs-button>
            Two
          </vs-button>
          <vs-button>
            Three
          </vs-button>
          <vs-button>
            four
          </vs-button>
        </vs-button-group>

        <span class="divider" />

        <vs-button-group>
          <vs-button flat icon>
            <i class='bx bx-play' ></i>
          </vs-button>
          <vs-button flat icon>
            <i class='bx bx-pause' ></i>
          </vs-button>
          <vs-button flat icon>
            <i class='bx bx-fast-forward' ></i>
          </vs-button>
          <vs-button flat icon>
            <i class='bx bx-shuffle' ></i>
          </vs-button>
        </vs-button-group>

        <span class="divider" />

        <vs-button-group>
          <vs-button border>
            <i class='bx bxs-pencil' ></i> Edit
          </vs-button>
          <vs-button border icon>
            <i class='bx bx-font-color' ></i>
          </vs-button>
          <vs-button border icon>
            <i class='bx bx-align-middle' ></i>
          </vs-button>
          <vs-button border>
            <i class='bx bx-font-size' ></i> Font size
          </vs-button>
        </vs-button-group>

        <span class="divider" />

        <vs-button-group>
          <vs-button relief>
            <i class='bx bx-home-alt' ></i> Home
          </vs-button>
          <vs-button relief>
            <i class='bx bxs-phone-call' ></i> Contact
          </vs-button>
          <vs-button relief loading>
            <i class='bx bxs-cart-alt' ></i> Products
          </vs-button>
          <vs-button relief upload>
            <i class='bx bxs-envelope' ></i> Send
          </vs-button>
        </vs-button-group>
      </div>
    </template>
  ```

</div>

<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Toggle <Badge text="New"/>

Este es un ejemplo de lo que puedes lograr con simples lógicas y pocas lineas de código.

<div slot="example">
  <button-toggle />
</div>

<div slot="template">
  
  ```html
    <template>
      <div class="center">
        <vs-button 
          @click="handleClick" 
          :icon="success" 
          :upload="sending" 
          :color="success ? 'success' : 'primary'" 
        >
          <span v-if="!success">
            <i class='bx bx-mail-send' ></i>
              Send
          </span>

          <i class='bx bx-check' v-else ></i>
        </vs-button>

        <vs-button 
          :animate-inactive="successFace" 
          @click="handleClickFace" 
          :loading="loadingFace" 
          color="facebook"
        >
          <i class='bx bxl-facebook-square' ></i>
          {{ successFace ? 'Logout' : 'Facebook' }}
          <template #animate >
            <i class='bx bx-user' ></i> Login
          </template>
        </vs-button>
      </div>
    </template>
  ```

</div>

<div slot="script">
  
  ```html
    <script>
      export default {
        data:() => ({
          sending: false,
          success: false,

          loadingFace: false,
          successFace: false
        }),
        methods:{
          handleClick() {
            this.sending = true

            setTimeout(() => {
              this.sending = false
              this.success = !this.success
            }, 2000);
          },
          handleClickFace() {
            this.loadingFace = true

            setTimeout(() => {
              this.loadingFace = false
              this.successFace = !this.successFace
            }, 2000);
          }
        }
      }
    </script>
  ```

</div>

<div slot="style">
  
  ```html
    <style scoped lang="stylus">
      span
        display flex
        align-items center
        justify-content center
      i.bx:not(.bx-check)
        padding-right 5px
        font-size 1.1rem
    </style>
  ```

</div>

</card>

<card>

## To - href <Badge text="New"/>

Si necesitas usar un boton como un link de vue-router o un link externo puedes hacerlo con las propiedades (`to`: vue-router link) o (`href`: html link externo)

<div slot="example">
  <button-toHref />
</div>

<div slot="template">
  
  ```html
    <template>
      <div class="center">
        <vs-button
          to="/"
          flat
          >
          To - vue-router
        </vs-button>
        <vs-button
          href="http://vuesax.com/"
          success
          flat
        >
          Href - Replace Url
        </vs-button>
        <vs-button
          href="http://vuesax.com/"
          blank
          danger
          flat
        >
          Href - Open External (blank)
        </vs-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

  ## API

</card>

