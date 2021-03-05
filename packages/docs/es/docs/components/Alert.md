---
PROPS:
  - name: v-model
    type: boolean
    values: boolean
    description: determina si el componente se encuentra visible.
    default: true
    link: null
    code: >
            <template>
              <vs-button flat @click="active=!active">
                {{ active ? 'Close Alert' : 'Open Alert' }}
              </vs-button>

              <vs-alert closable v-model="active">
                <template #title>
                  Vuesax Framework
                </template>
                Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
                creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un 
                estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de 
                desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
                su enfoque visual al usuario final
              </vs-alert>
            </template>

            <script>
              export default {
                data:() => ({
                  active: true,
                })
              }
            </script>
    usage: '#closable'
  # _______________________________________
  - name: color
    type: String
    values: primary, success, danger, warning, dark, RGB, HEX
    description: Cambia el color del componente y algunos de sus sub componentes.
    default: primary
    link: null
    usage: '#color'
    code: >
            <vs-alert color="success">
              <template #title>
                Vuesax Framework
              </template>
              Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
              creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un 
              estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de 
              desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
              su enfoque visual al usuario final
            </vs-alert>
  # _______________________________________
  - name: type
    type: boolean
    values: solid, border, shadow,gradient,relief
    description: cambia el estilo de todo el alert.
    default: default
    link: null
    usage: '#solid'
    code: >
            <vs-alert solid>
              <template #title>
                Vuesax Framework
              </template>
              Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
              creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con
              un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de
              desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
              su enfoque visual al usuario final
            </vs-alert>
  # _______________________________________
  - name: hidden-content
    type: boolean
    values: boolean
    description: con esta propiedad puedes ocultar el contenido de el alert.
    default: false
    link: null
    usage: '#hidden-content'
    code: >
            <template>
              <vs-alert :hidden-content="true" >
                <template #title>
                  Vuesax Framework
                </template>
                Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
                creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con
                un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de
                desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
                su enfoque visual al usuario final
              </vs-alert>
            </template>
  # _______________________________________
  - name: page
    type: Number
    values: Number
    description: determina la pagina que esta activa (esta propiedad va unida con los slots="page-{n}").
    default: null
    link: null
    usage: '#pagination'
    code: >
            <template>
              <vs-alert :page="1" >
                <template #title>
                  Vuesax Framework
                </template>

                <template #page-1>
                  Pagina 1 - esta pagina es un slot y aquí adentro puedes agregar ya sea texto, 
                  elementos html o componentes
                </template>

                <template #page-2>
                  Pagina 2 - En esta otra pagina puedes poner también lo que necesites 
                  y es dinámico osea que puedes agregar cuantas paginas necesites
                </template>

                <template #page-3>
                  Pagina 3 - esta es la ultima pagina de el ejemplo
                </template>
              </vs-alert>
            </template>
  # _______________________________________
  - name: progress
    type: Number
    values: 0 - 100
    description: agrega una barra de progreso al alert y el valor es el porcentaje de ancho.
    default: null
    link: null
    usage: '#progress-bar'
    code: >
            <vs-alert progress="70">
              <template #title>
                Vuesax Framework
              </template>
              Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
              creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo 
              único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador 
              desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual 
              al usuario final
            </vs-alert>
  # _______________________________________
  - name: closable
    type: boolean
    values: boolean
    description: agrega un botón para poder cerrar el alert (es necesario el uso de v-model).
    default: false
    link: null
    usage: '#closable'
    code: >
            <template>
              <vs-button flat @click="active=!active">
                {{ active ? 'Close Alert' : 'Open Alert' }}
              </vs-button>

              <vs-alert closable v-model="active">
                <template #title>
                  Vuesax Framework
                </template>
                Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
                creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un 
                estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de 
                desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
                su enfoque visual al usuario final
              </vs-alert>
            </template>

            <script>
              export default {
                data:() => ({
                  active: true,
                })
              }
            </script>
  # _______________________________________
SLOTS:
  # _______________________________________
  - name: icon
    type: slot
    values: null
    description: agrega un icono al alert.
    default: null
    link: null
    usage: '#icon'
    code: >
          <template>
            <vs-alert>
              <template #icon>
                <i class='bx bxs-chat'></i>
              </template>
              <template #title>
                Vuesax Alert Icon
              </template>
              Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
              creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con
              un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de
              desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
              su enfoque visual al usuario final
            </vs-alert>
          </template>
  # _______________________________________
  - name: title
    type: slot
    values: null
    description: Agrega un titulo al alert.
    default: null
    link: null
    usage: '#title'
    code: >
          <template>
            <div class="center">
              <vs-alert>
                <template #title>
                  Vuesax Alert Title
                </template>
                Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
                creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con
                un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de
                desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
                su enfoque visual al usuario final
              </vs-alert>
            </div>
          </template>
  # _______________________________________
  - name: page-{n}
    type: slot
    values: (page-1 - page-{n})
    description: Agrega las paginas al componente alert si es la pagina uno seria (slot="page-1").
    default: null
    link: null
    usage: '#pagination'
    code: >
          <template>
            <vs-alert :page.sync="page" >
              <template #title>
                Vuesax Framework
              </template>

              <template #page-1>
                Pagina 1 - esta pagina es un slot y aquí adentro puedes agregar ya sea texto, 
                elementos html o componentes
              </template>

              <template #page-2>
                Pagina 2 - En esta otra pagina puedes poner también lo que necesites 
                y es dinámico osea que puedes agregar cuantas paginas necesites
              </template>

              <template #page-3>
                Pagina 3 - esta es la ultima pagina de el ejemplo
              </template>
            </vs-alert>
          </template>
  # _______________________________________
  - name: animate
    type: slot
    values: null
    description: texto descriptivo.
    default: null
    link: /api/slot
    usage: '#animated'
    code: >
          código...
  # _______________________________________
  - name: footer
    type: slot
    values: null
    description: Agrega un footer al componente alert.
    default: null
    link: null
    usage: '#footer'
    code: >
            <vs-alert>
              <template #title>
                Vuesax Framework
              </template>
              Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
              creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo 
              único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador 
              desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual 
              al usuario final
              <template #footer>
                <vs-button flat>
                  Cancel
                </vs-button>
                <vs-button>
                  Accept
                </vs-button>
              </template>
            </vs-alert>
NEWS:
  - solid
  - border
  - shadow
  - gradient
  - relief
  - animate
  - hidden-content
  - pagination
  - footer
  - progress-bar
  - time-close
---
  
# Alert

<card>

## Default

<docs-warn />

Genera un alert fácilmente con este componente aparte de funcionalidades como ocultarlo y mostrarlo cambio de color y titulo iconos entre otras cosas

<div slot="example">
  <div class="center">
    <vs-alert>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
      creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con
      un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de 
      desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
      su enfoque visual al usuario final
    </vs-alert>
  </div>
</div>

<div slot="template">

  ```html
    <template>
      <vs-alert>
        <template #title>
          Vuesax Framework
        </template>
        Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
        creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un
        estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de 
        desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
        su enfoque visual al usuario final
      </vs-alert>
    </template>
  ```

</div>

</card>

<card>

## Solid <Badge text="New"/>

Puedes cambiar el estilo del componente al agregar la propiedad `solid`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

<div slot="example">
  <div class="center">
    <vs-alert solid>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  </div>
</div>

<div slot="template">
  
  ```html{1}
    <vs-alert solid>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
      creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con
      un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de
      desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
      su enfoque visual al usuario final
    </vs-alert>
  ```

</div>

</card>

<card>

## Border <Badge text="New"/>

Puedes cambiar el estilo del componente al agregar la propiedad `border`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

<div slot="example">
  <div class="center">
    <vs-alert border >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  </div>
</div>

<div slot="template">
  
  ```html{1}
    <vs-alert border >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
      creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con
      un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de
      desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
      su enfoque visual al usuario final
    </vs-alert>
  ```

</div>

</card>

<card>

## Shadow <Badge text="New"/>

Puedes cambiar el estilo del componente al agregar la propiedad `shadow`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

<div slot="example">
  <div class="center">
    <vs-alert shadow >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  </div>
</div>

<div slot="template">
  
  ```html{1}
    <vs-alert shadow >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
      creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con
      un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de
      desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
      su enfoque visual al usuario final
    </vs-alert>
  ```

</div>

</card>

<card>

## Gradient <Badge text="New"/>

Puedes cambiar el estilo del componente al agregar la propiedad `gradient`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

<div slot="example">
  <div class="center">
    <vs-alert gradient >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  </div>
</div>

<div slot="template">
  
  ```html{1}
    <vs-alert gradient >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
      creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con
      un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de
      desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
      su enfoque visual al usuario final
    </vs-alert>
  ```

</div>

</card>

<card>

## Relief <Badge text="New"/>

Puedes cambiar el estilo del componente al agregar la propiedad `relief`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

<div slot="example">
  <div class="center">
    <vs-alert relief >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  </div>
</div>

<div slot="template">
  
  ```html{1}
    <vs-alert relief >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
      creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con
      un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de
      desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
      su enfoque visual al usuario final
    </vs-alert>
  ```

</div>

</card>

<card>

## Animate

Una hermosa y simple animación al mostrar y ocultar el alert al usuario

<div slot="example">
  <alert-animate />
</div>

<div slot="template">
  
  ```html{1}
    <vs-alert relief >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
      creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con
      un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de
      desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
      su enfoque visual al usuario final
    </vs-alert>
  ```

</div>

</card>

<card>

## Color

Cambia el color de todo el alert con la propiedad `color`

En este ejemplo puedes hacer click en los botones y cambiar dinámicamente el valor de color para visualizarlo en el componente **vs-alert**

<div slot="example">
  <alert-color />
</div>

<div slot="template">
  
  ```html{2}
    <template>
      <vs-alert :color="color">
        <template #title>
          Vuesax Framework
        </template>
        Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
      </vs-alert>

      <vs-button :active="color == 'primary'" @click="color = 'primary'" flat>
        Primary
      </vs-button>
      <vs-button :active="color == 'success'" @click="color = 'success'" success flat>
        Success
      </vs-button>
      <vs-button :active="color == 'danger'" @click="color = 'danger'" danger flat>
        Danger
      </vs-button>
      <vs-button :active="color == 'warn'" @click="color = 'warn'" warn flat>
        Warn
      </vs-button>
      <vs-button :active="color == 'dark'" @click="color = 'dark'" dark flat>
        Dark
      </vs-button>
      <vs-button :active="color == '#7d33ff'" @click="color = '#7d33ff'" color="#7d33ff" flat>
        HEX
      </vs-button>
      <vs-button :active="color == 'rgb(59,222,200)'" @click="color = 'rgb(59,222,200)'" color="rgb(59,222,200)" flat>
        RGB
      </vs-button>
    </template>
  ```

</div>

<div slot="script">
  
  ```html{4}
    <script>
      export default {
        data: () => ({
          color: 'danger'
        })
      }
    </script>
  ```

</div>

<div slot="style">
  
  ```html
    <style scoped lang="stylus">
      .alert-example
        .vs-button--active
          transform translate(0, -5px)
          border-radius 0px 0px 12px 12px
    </style>
  ```

</div>


</card>

<card>

## Icon

Agrega un icono al alert facilmente con el slot **icon**

<utils-icon />

<div slot="example">
  <div class="center">
    <vs-alert>
      <template #icon>
        <i class='bx bxs-chat'></i>
      </template>
      <template #title>
        Vuesax Alert Icon
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  </div>
</div>

<div slot="template">
  
  ```html{3,4,5}
    <template>
      <vs-alert>
        <template #icon>
          <i class='bx bxs-chat'></i>
        </template>
        <template #title>
          Vuesax Alert Icon
        </template>
        Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
        creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con
        un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de
        desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
        su enfoque visual al usuario final
      </vs-alert>
    </template>
  ```

</div>

</card>

<card>

## Title

Puedes agregarle al alert un titulo descriptivo con el `slot="title"` 

<div slot="example">
  <div class="center">
    <vs-alert>
      <template #title>
        Vuesax Alert Title
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  </div>
</div>

<div slot="template">
  
  ```html{4,5,6}
    <template>
      <div class="center">
        <vs-alert>
          <template #title>
            Vuesax Alert Title
          </template>
          Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
          creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con
          un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de
          desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
          su enfoque visual al usuario final
        </vs-alert>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Hidden Content <Badge text="New"/>

Puedes ocultar el contenido de un alert y solo dejar el titulo para mostrar el contenido de manera dinámica

<div slot="example">
  <alert-hiddenContent />
</div>

<div slot="template">
  
  ```html{2}
    <template>
      <vs-alert :hidden-content.sync="hidden" >
        <template #title>
          Vuesax Framework
        </template>
        Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
        creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con
        un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de
        desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
        su enfoque visual al usuario final
      </vs-alert>
    </template>
  ```

</div>

<div slot="script">
  
  ```html{4}
    <script>
      export default {
        data:() => ({
          hidden: true
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Pagination <Badge text="New"/>

hay ocasiones en que necesitamos mostrar mucho contenido al usuario pero no queremos extender el texto y hacer que el alert sea muy grande y alto

<div slot="example">

  <alert-pagination />

</div>

<div slot="template">
  
  ```html{2,7,12,17}
    <template>
      <vs-alert :page.sync="page" >
        <template #title>
          Vuesax Framework
        </template>

        <template #page-1>
          Pagina 1 - esta pagina es un slot y aquí adentro puedes agregar ya sea texto, 
          elementos html o componentes
        </template>

        <template #page-2>
          Pagina 2 - En esta otra pagina puedes poner también lo que necesites 
          y es dinámico osea que puedes agregar cuantas paginas necesites
        </template>

        <template #page-3>
          Pagina 3 - esta es la ultima pagina de el ejemplo
        </template>
      </vs-alert>
    </template>
  ```

</div>

<div slot="script">
  
  ```html{4}
    <script>
      export default {
        data:() => ({
          page: 1
        })
      }
    </script>
  ```

</div>

</card>

<card>

## footer <Badge text="New"/>

usa el slot `footer` para agregar un footer al alert donde por ejemplo puedes agregar interacciones con el usuario como un botón o un checkbox.

<div slot="example">
  <div class="center">
    <vs-alert>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
      <template #footer>
        <vs-button flat>
          Cancel
        </vs-button>
        <vs-button>
          Accept
        </vs-button>
      </template>
    </vs-alert>
  </div>
</div>

<div slot="template">
  
  ```html{10,11,12,13,14,15,16,17}
    <vs-alert>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
      creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo 
      único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador 
      desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual 
      al usuario final
      <template #footer>
        <vs-button flat>
          Cancel
        </vs-button>
        <vs-button>
          Accept
        </vs-button>
      </template>
    </vs-alert>
  ```

</div>

</card>

<card>

## Progress bar <Badge text="New"/>

Puedes agregar una barra de progreso al alert con la propiedad progress y un numero del (`0 - 100`)

<div slot="example">
  <vs-alert progress="70">
    <template #title>
      Vuesax Framework
    </template>
    Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
    creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo 
    único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador 
    desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual 
    al usuario final
  </vs-alert>
</div>

<div slot="template">
  
  ```html{4,5,6}
    <vs-alert progress="70">
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
      creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo 
      único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador 
      desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual 
      al usuario final
    </vs-alert>
  ```

</div>

</card>

<card>

## Closable <Badge text="New"/>

Puedes agregar un icono de cerrar alert con la propiedad `closable`, la propiedad es un `boolean` por lo que puedes agregarla sin ningún valor.

<div slot="example">
  <alert-closable />
</div>

<div slot="template">
  
  ```html{6}
    <template>
      <vs-button flat @click="active=!active">
        {{ active ? 'Close Alert' : 'Open Alert' }}
      </vs-button>

      <vs-alert closable v-model="active">
        <template #title>
          Vuesax Framework
        </template>
        Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
        creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un 
        estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de 
        desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente 
        su enfoque visual al usuario final
      </vs-alert>
    </template>
  ```

</div>

<div slot="script">
  
  ```html{6}
    <script>
      export default {
        data:() => ({
          active: true,
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Time Close <Badge text="New"/>

Si necesitas que un alert tenga un tiempo para ocultarse puedes hacerlo uniendo algunas propiedades y pocas lineas de código

<div slot="example">
  <alert-time />
</div>

<div slot="template">
  
  ```html{6}
    <template>
      <div class="center">
        <vs-button dark flat @click="active=true">
          Open Alert 10s
        </vs-button>
        <vs-alert dark :progress="progress" v-model="active">
          <template #title>
            Vuesax Framework
          </template>
          Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> 
          creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente 
          y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de 
          desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su 
          enfoque visual al usuario final
        </vs-alert>
      </div>
  </template>
  ```

</div>

<div slot="script">
  
  ```html{6}
    <script>
      export default {
        data:() => ({
          active: false,
          time: 6000,
          progress: 0
        }),
        watch: {
          active(val) {
            if(val) {
              var interval = setInterval(() => {
                this.progress++
              }, this.time / 100);

              setTimeout(() => {
                this.active = false
                clearInterval(interval)
                this.progress = 0
              }, this.time);
            }
          }
        }
      }
    </script>
  ```

</div>

</card>

<card>

## API

</card>

