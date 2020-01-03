---
PROPS:
  - name: nombre de la propiedad
    type: String
    values: Valores separados en coma
    description: texto descriptivo.
    default: primary
    link: /api/color
    code: >
            código...
    usage: '#color'
  
SLOTS:
  - name: animate
    type: slot
    values: null
    description: texto descriptivo.
    default: null
    link: /api/slot
    code: >
          código...
    usage: '#animated'
---
  
# Alert

<card>

## Default

<docs-warn />

Genera un alert fácilmente con este componente

<div slot="example">
  <Alert-default />
</div>

<div slot="template">
  
  <!-- ```html
    <vs-alert>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  ``` -->

  ```html
    <!-- vuesax component -->
    <vs-button>
      Share
    </vs-button>
  ```

</div>

</card>

<card>

## Solid

Puedes cambiar el estilo del componente al agregar la propiedad `solid`

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
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  ```

</div>

</card>

<card>

## Border

Puedes cambiar el estilo del componente al agregar la propiedad `border`

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
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  ```

</div>

</card>

<card>

## Shadow

Puedes cambiar el estilo del componente al agregar la propiedad `shadow`

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
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  ```

</div>

</card>

<card>

## Gradient

Puedes cambiar el estilo del componente al agregar la propiedad `gradient`

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
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  ```

</div>

</card>

<card>

## Relief

Puedes cambiar el estilo del componente al agregar la propiedad `relief`

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
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  ```

</div>

</card>

<card>

## Animate

Una hermosa y simple animación al mostrar y ocultar el alert al usuario

<div slot="example">
  <Alert-animate />
</div>

<div slot="template">
  
  ```html{1}
    <vs-alert relief >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronunciado / vjusacksː /, como view sacks) es un <b>framework de componentes UI</b> creado con <a href="https://vuejs.org/">Vuejs</a> para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final
    </vs-alert>
  ```

</div>

</card>

<card>

## Color

Cambia el color de todo el alert con la propiedad `color`

En este ejemplo puedes hacer click en los botones y cambiar dinámicamente el valor de color para visualizarlo en el componente **vs-alert**

<div slot="example">
  <Alert-color />
</div>

<div slot="template">
  
  ```html{3,4,5}
    <template>
      <div class="center">
        <vs-button active >Active</vs-button>
        <vs-button>Default</vs-button>
        <vs-button disabled >Disabled</vs-button>
      </div>
    </template>
  ```

</div>

</card>

<card>

## Icon

Agrega un icono al alert facilmente con el slot **icon**

Vuesax no esta anclado a ninguna librería de iconos, por lo que puedes usar cualquier icon sin problema por eso ahora usamos slot para representar el icono en el componente

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
      <div class="center">
        <vs-button active >Active</vs-button>
        <vs-button>Default</vs-button>
        <vs-button disabled >Disabled</vs-button>
      </div>
    </template>
  ```

</div>

</card>
