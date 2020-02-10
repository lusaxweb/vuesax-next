---
PROPS:
  - name: color
    type: String
    values: Vuesax Colors, RGB, HEX
    description: Cambia el color de el componente.
    default: gray-2
    link: null
    usage: '#color'
    code: >
            <vs-avatar color="#7d33ff">
              <template #text>
                HEX
              </template>
            </vs-avatar>
            <vs-avatar color="rgb(59,222,200)">
              <template #text>
                RGB
              </template>
            </vs-avatar>

  - name: size
    type: Number
    values: Number
    description: Cambia el tamaño de el componente avatar.
    default: 44
    link: null
    usage: '#size'
    code: >
            <template>
              <div class="center con-avatars">
                <vs-avatar size="30">
                  <template #text>
                    Lily
                  </template>
                </vs-avatar>
                <vs-avatar size="40">
                  <template #text>
                    Evan You
                  </template>
                </vs-avatar>
                <vs-avatar>
                    <i class='bx bx-user'></i>
                </vs-avatar>
                <vs-avatar size="60" primary badge badge-color="danger">
                    <i class='bx bxs-hot' ></i>
                </vs-avatar>
                <vs-avatar size="70" badge badge-color="success">
                  <img src="/avatars/avatar-4.png" alt="">
                </vs-avatar>
              </div>
            </template>

  - name: badge
    type: Boolean
    values: true, false
    description: Determina si el badge esta activo.
    default: false
    link: null
    usage: '#badge'
    code: >
            <template>
              <div class="center con-avatars">
                <vs-avatar badge>
                  <img src="/avatars/avatar-5.png" alt="">
                </vs-avatar>
                <vs-avatar badge badge-color="danger">
                  <img src="/avatars/avatar-6.png" alt="">
                </vs-avatar>
                <vs-avatar badge badge-color="success">
                  <img src="/avatars/avatar-2.png" alt="">
                  <template #badge>
                    28
                  </template>
                </vs-avatar>
                <vs-avatar badge badge-color="warn">
                  <img src="/avatars/avatar-8.png" alt="">
                  <template #badge>
                    <i class='bx bxs-bell-off' ></i>
                  </template>
                </vs-avatar>
                <vs-avatar writing badge badge-color="primary">
                  <img src="/avatars/avatar-3.png" alt="">
                </vs-avatar>
                <vs-avatar badge-position="top-right" badge badge-color="#7d33ff">
                  <img src="/avatars/avatar-1.png" alt="">
                </vs-avatar>
              </div>
            </template>

  - name: badge-color
    type: String
    values: Vuesax colors,RGB,HEX
    description: Cambia el color de el badge dentro de el avatar.
    default: primary
    link: null
    usage: '#badge'
    code: >
            <vs-avatar badge badge-color="danger">
              <img src="/avatars/avatar-6.png" alt="">
            </vs-avatar>

  - name: circle
    type: Boolean
    values: true, false
    description: Cambia el estilo de el avatar haciendolo circular.
    default: false
    link: null
    usage: '#circle'
    code: >
            <vs-avatar circle>
              <template #text>
                Joel
              </template>
            </vs-avatar>

  - name: square
    type: Boolean
    values: true, false
    description: Cambia el estilo de el avatar haciéndolo cuadrado.
    default: false
    link: null
    usage: '#square'
    code: >
            <vs-avatar square>
              <template #text>
                Joel
              </template>
            </vs-avatar>

  - name: writing
    type: Boolean
    values: true,false
    description: agrega una animación al badge de escritura.
    default: false
    link: null
    usage: '#badge'
    code: >
            <vs-avatar writing badge badge-color="primary">
              <img src="/avatars/avatar-3.png" alt="">
            </vs-avatar>

  - name: history
    type: Boolean
    values: true,false
    description: Agrega un borde al avatar.
    default: gray-2
    link: null
    usage: '#history'
    code: >
            <vs-avatar history history-gradient>
              <img src="/avatars/avatar-5.png" alt="">
            </vs-avatar>

  - name: history-gradient
    type: Boolean
    values: true,false
    description: Cambia el color de el borde a un gradient.
    default: false
    link: null
    usage: '#history'
    code: >
            <vs-avatar history history-gradient>
              <img src="/avatars/avatar-5.png" alt="">
            </vs-avatar>
  - name: loading
    type: Boolean
    values: true,false
    description: Agrega un animación de cargando al avatar.
    default: false
    link: null
    usage: '#loading'
    code: >
            <vs-avatar loading badge>
              <img src="/avatars/avatar-5.png" alt="">
            </vs-avatar>

  - name: max
    type: number
    values: number
    description: (vs-avatar-group) determina cuantos avatars se encuentran visibles.
    default: null
    link: null
    usage: '#group'
    code: >
            <vs-avatar-group max="7">
              <vs-avatar>
                <img src="/avatars/avatar-1.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-6.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-2.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-7.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-3.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-8.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-4.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-9.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-10.png" alt="">
              </vs-avatar>
            </vs-avatar-group>
  - name: float
    type: Boolean
    values: true,false
    description: (vs-avatar-group) cambia la forma en que se componen los avatar poniendo uno al lado de el otro.
    default: false
    link: null
    usage: '#group'
    code: >
            <vs-avatar-group float max="8">
              <vs-avatar>
                <img src="/avatars/avatar-1.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-6.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-2.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-7.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-3.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-8.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-4.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-9.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="">
              </vs-avatar>
              <vs-avatar>
                <img src="/avatars/avatar-10.png" alt="">
              </vs-avatar>
              </vs-avatar-group>
  - name: pointer
    type: Boolean
    values: true,false
    description: Determina si el avatar tiene un cursor pointer.
    default: false
    link: null
    usage: null
    code: >
            <vs-avatar pointer >
              <img src="/avatars/avatar-10.png" alt="">
            </vs-avatar>

SLOTS:
  - name: text
    type: slot
    values: null
    description: Agrega un texto dentro de el componente avatar.
    default: null
    link: null
    usage: '#default'
    code: >
            <vs-avatar>
              <template #text>
                Lily
              </template>
            </vs-avatar>

  - name: badge
    type: slot
    values: null
    description: Agrega al badge todo lo que este dentro de el slot, comúnmente se usa para números y un icono.
    default: null
    link: null
    usage: '#badge'
    code: >
            <vs-avatar badge badge-color="success">
              <img src="/avatars/avatar-2.png" alt="">
              <template #badge>
                28
              </template>
            </vs-avatar>

  - name: icons
    type: slot
    values: null
    description: Agrega un espacio para poner iconos al lado de el avatar.
    default: null
    link: null
    usage: '#icons'
    code: >
            <vs-avatar>
              <img src="/avatars/avatar-1.png" alt="">
              <template #icons>
                <i class='bx bxl-facebook-square' ></i>
                <i class='bx bxl-github' ></i>
                <i class='bx bxl-twitter' ></i>
              </template>
            </vs-avatar>

NEWS:
  - circle
  - square
  - history
  - icons
  - group
  - loading
---

# Avatar

<card>

## Default

<docs-warn />

Agrega un avatar fácilmente y con funcionalidad con el componente `<vs-avatar>`

<div slot="example">
  <Avatar-default />
</div>

<div slot="template">

  ```html{3,4,5,6,7}
    <template>
      <div class="center con-avatars">
        <vs-avatar>
          <template #text>
            Lily
          </template>
        </vs-avatar>
        <vs-avatar>
          <template #text>
            Evan You
          </template>
        </vs-avatar>
        <vs-avatar>
            <i class='bx bx-user'></i>
        </vs-avatar>
        <vs-avatar primary>
            <i class='bx bxs-hot' ></i>
        </vs-avatar>
        <vs-avatar>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Color

Cambia el color de el componete con la propiedad `color`, los colores permitidos son los colores principales de vuesax y (`HEX`, `RGB`)

<div slot="example">
  <Avatar-color />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-avatars">
        <vs-avatar primary>
          <template #text>
            Primary
          </template>
        </vs-avatar>
        <vs-avatar success>
          <template #text>
            Success
          </template>
        </vs-avatar>
        <vs-avatar danger>
          <template #text>
            Danger
          </template>
        </vs-avatar>
        <vs-avatar warn>
          <template #text>
            Warn
          </template>
        </vs-avatar>
        <vs-avatar dark>
          <template #text>
            Dark
          </template>
        </vs-avatar>
        <vs-avatar color="#7d33ff">
          <template #text>
            HEX
          </template>
        </vs-avatar>
        <vs-avatar color="rgb(59,222,200)">
          <template #text>
            RGB
          </template>
        </vs-avatar>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Size

Cambia el tamaño de el componente al numero proporcionado si por ejemplo el valor de size es `60` equivale a `60px` de altura y de ancho

<div slot="example">
  <Avatar-size />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-avatars">
        <vs-avatar size="30">
          <template #text>
            Lily
          </template>
        </vs-avatar>
        <vs-avatar size="40">
          <template #text>
            Evan You
          </template>
        </vs-avatar>
        <vs-avatar>
            <i class='bx bx-user'></i>
        </vs-avatar>
        <vs-avatar size="60" primary badge badge-color="danger">
            <i class='bx bxs-hot' ></i>
        </vs-avatar>
        <vs-avatar size="70" badge badge-color="success">
          <img src="/avatars/avatar-4.png" alt="">
        </vs-avatar>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Badge

Agrega un badge al componente con la propiedad `badge` o el slot

también puedes cambiar el color para representar un estado de el usuario como desconectado o conectado con colores como `success` o `danger`, esto lo haces con la propiedad `badge-color`

hay ocasiones en que necesitas usar el avatar en un entorno de chat y para ello puedes agregarle la propiedad `writing` que agrega una animación de escritura

<div slot="example">
  <Avatar-badge />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-avatars">
        <vs-avatar badge>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>
        <vs-avatar badge badge-color="danger">
          <img src="/avatars/avatar-6.png" alt="">
        </vs-avatar>
        <vs-avatar badge badge-color="success">
          <img src="/avatars/avatar-2.png" alt="">
          <template #badge>
            28
          </template>
        </vs-avatar>
        <vs-avatar badge badge-color="warn">
          <img src="/avatars/avatar-8.png" alt="">
          <template #badge>
            <i class='bx bxs-bell-off' ></i>
          </template>
        </vs-avatar>
        <vs-avatar badge badge-color="danger">
          <img src="/avatars/avatar-9.png" alt="">
          <template #badge>
            Off
          </template>
        </vs-avatar>
        <vs-avatar writing badge badge-color="primary">
          <img src="/avatars/avatar-3.png" alt="">
        </vs-avatar>
        <vs-avatar badge-position="top-right" badge badge-color="#7d33ff">
          <img src="/avatars/avatar-1.png" alt="">
        </vs-avatar>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Auto font and split

Si el usuario tiene un nombre corto se agrega tal cual es pero si es un texto muy largo o tiene varios espacios se va a generar automáticamente el texto a mostrar para que pueda verse correctamente

:::tip
La longitud máxima de caracteres es **5**. Cuando se supera ese límite, se realizan cambios en el texto
:::

<div slot="example">
  <Avatar-autoFont />
</div>

<div slot="template">

  ```html{4,5,6}
    <template>
      <div class="center con-avatars">
        <vs-avatar>
          <template #text>
            L
          </template>
        </vs-avatar>
        <vs-avatar>
          <template #text>
            Joel
          </template>
        </vs-avatar>
        <vs-avatar>
          <template #text>
            Fanny
          </template>
        </vs-avatar>
        <vs-avatar>
          <template #text>
            Sally Willis
          </template>
        </vs-avatar>
        <vs-avatar>
          <template #text>
            Dakota Roche Brown
          </template>
        </vs-avatar>
        <vs-avatar>
          <template #text>
            Garret Reynolds Enarson Hoffman
          </template>
        </vs-avatar>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Circle <Badge text="New"/>

Cambia el border-radius de todo el componente a `50%` con la propiedad `circle` haciéndolo totalmente circular

<div slot="example">
  <Avatar-circle />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-avatars">
        <vs-avatar circle>
          <template #text>
            Joel
          </template>
        </vs-avatar>
        <vs-avatar circle danger>
          <template #text>
            Fanny
          </template>
        </vs-avatar>
        <vs-avatar circle>
          <img src="/avatars/avatar-1.png" alt="">
        </vs-avatar>
        <vs-avatar circle badge>
          <img src="/avatars/avatar-2.png" alt="">
        </vs-avatar>
        <vs-avatar circle badge writing badge-color="success">
          <img src="/avatars/avatar-3.png" alt="">
        </vs-avatar>
        <vs-avatar badge circle badge-color="warn" badge-position="top-right">
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>
        <vs-avatar history history-gradient circle>
          <img src="/avatars/avatar-6.png" alt="">
        </vs-avatar>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Square <Badge text="New"/>

Cambia el border-radius de todo el componente a `0%` con la propiedad `square` haciéndolo totalmente cuadrado

<div slot="example">
  <Avatar-square />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-avatars">
        <vs-avatar square>
          <template #text>
            Joel
          </template>
        </vs-avatar>
        <vs-avatar square danger>
          <template #text>
            Fanny
          </template>
        </vs-avatar>
        <vs-avatar square>
          <img src="/avatars/avatar-1.png" alt="">
        </vs-avatar>
        <vs-avatar square badge>
          <img src="/avatars/avatar-2.png" alt="">
        </vs-avatar>
        <vs-avatar square badge writing badge-color="success">
          <img src="/avatars/avatar-3.png" alt="">
        </vs-avatar>
        <vs-avatar badge square badge-color="warn" badge-position="top-right">
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>
        <vs-avatar history history-gradient square>
          <img src="/avatars/avatar-6.png" alt="">
        </vs-avatar>
      </div>
    </template>
  ```

</div>

</card>

<card>

## History <Badge text="New"/>

Genera un borde al rededor de el avatar, esto usualmente se usa para representar que el usuario esta haciendo una acción o en muchos casos tiene una `historia`

:::tip
Puede hacer que el borde sea un gradiente como el de instagram con la propiedad `history-gradient`
:::

<div slot="example">
  <Avatar-history />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-avatars">
        <vs-avatar history>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>

        <vs-avatar history primary>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>

        <vs-avatar history success>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>

        <vs-avatar history history-gradient>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Icon

Puedes poner dentro de un avatar un icono cuando por ejemplo una imagen todavía no esta agregada o es un usuario nuevo, para ello simplemente puedes usar el slot por defecto

<div slot="example">
  <Avatar-icon />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center con-avatars">
        <vs-avatar>
          <i class='bx bx-user'></i>
        </vs-avatar>
        <vs-avatar>
          <i class='bx bxs-camera' ></i>
        </vs-avatar>
        <vs-avatar>
          <i class='bx bx-world' ></i>
        </vs-avatar>
        <vs-avatar>
          <i class='bx bx-support' ></i>
        </vs-avatar>
        <vs-avatar>
          <i class='bx bx-trophy' ></i>
        </vs-avatar>
        <vs-avatar>
          <i class='bx bx-map' ></i>
        </vs-avatar>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Loading <Badge text="New"/>

Agrega una animación de cargando al componente, esta propiedad es un `boolean` por lo que puedes agregarla sin ningún valor

<div slot="example">
  <Avatar-loading />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-avatars">
        <vs-avatar loading badge>
          <img src="/avatars/avatar-5.png" alt="">
        </vs-avatar>
        <vs-avatar loading badge badge-color="danger">
          <img src="/avatars/avatar-6.png" alt="">
        </vs-avatar>
        <vs-avatar loading badge badge-color="success">
          <img src="/avatars/avatar-2.png" alt="">
          <template #badge>
            28
          </template>
        </vs-avatar>
        <vs-avatar loading badge badge-color="warn">
          <img src="/avatars/avatar-8.png" alt="">
          <template #badge>
            <i class='bx bxs-bell-off' ></i>
          </template>
        </vs-avatar>
        <vs-avatar loading writing badge badge-color="primary">
          <img src="/avatars/avatar-3.png" alt="">
        </vs-avatar>
        <vs-avatar loading badge-position="top-right" badge badge-color="#7d33ff">
          <img src="/avatars/avatar-1.png" alt="">
        </vs-avatar>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Icons <Badge text="New"/>

Agrega un espacio al lado de el avatar con el slot `icons` donde puedes poner iconos para alguna acción dinámica de ese usuario en especifico

<div slot="example">
  <Avatar-icons />
</div>

<div slot="template">

  ```html{5,6,7,8,9}
    <template>
      <div class="center con-avatars">
        <vs-avatar>
          <img src="/avatars/avatar-1.png" alt="">
          <template #icons>
            <i class='bx bxl-facebook-square' ></i>
            <i class='bx bxl-github' ></i>
            <i class='bx bxl-twitter' ></i>
          </template>
        </vs-avatar>
        <vs-avatar badge badge-color="danger" badge-position="bottom-left">
          <img src="/avatars/avatar-8.png" alt="">
          <template #icons>
            <i class='bx bxl-twitch' ></i>
            <i class='bx bxl-discord' ></i>
          </template>
        </vs-avatar>
        <vs-avatar loading badge badge-color="success" badge-position="top-left">
          <img src="/avatars/avatar-2.png" alt="">
          <template #icons>
            <i class='bx bxl-patreon' ></i>
            <i class='bx bxl-linkedin-square' ></i>
            <i class='bx bx-link' ></i>
          </template>
        </vs-avatar>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Group <Badge text="New"/>

Puedes agrupar varios avatar con el componente padre `vs-avatar-group`, este componente tiene dos propiedades interesantes:

- **max**: determina el máximo de avatars a mostrar y el resto lo esconde generando el numero en el ultimo avatar mostrado

- **float**: hace que los componentes avatar se pongan uno al del otro y se elimina la agrupación de uno encima de otro


<div slot="example">
  <Avatar-group />
</div>

<div slot="template">

  ```html{3,34}
    <template>
      <div class="center con-avatars">
        <vs-avatar-group max="7">
          <vs-avatar>
            <img src="/avatars/avatar-1.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-6.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-2.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-7.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-3.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-8.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-4.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-9.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-10.png" alt="">
          </vs-avatar>
        </vs-avatar-group>

        <vs-avatar-group float max="8">
          <vs-avatar>
            <img src="/avatars/avatar-1.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-6.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-2.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-7.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-3.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-8.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-4.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-9.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="">
          </vs-avatar>
          <vs-avatar>
            <img src="/avatars/avatar-10.png" alt="">
          </vs-avatar>
        </vs-avatar-group>
      </div>
    </template>
  ```

</div>

</card>

<card>

## API

</card>
