---
PROPS:
  - name: propiedad
    type: String
    values: Valores separados en coma
    description: texto descriptivo.
    default: primary
    link: null
    usage: '#color'
    code: >
            ...

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

# Navbar

<card>

## Default


<docs-warn />

genera un menu rápidamente con el componente `vs-navbar`, como tal el componente se divide en 3 slots (**left**, **center**(default), **right**) con los cuales puedes determinar la ubicación de los elementos, como sub componentes tenemos `vs-navbar-item` y `vs-navbar-group`

<div slot="example">
  <Navbar-default />
</div>

<div slot="template">

  ```html{3,4,5}
    ...
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    ...
  ```

</div>

</card>

<card>

## Otro

Descripción

<div slot="example">
  <Navbar-default />
</div>

<div slot="template">

  ```html{3,4,5}
    ...
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    ...
  ```

</div>

</card>

<card>

## API

</card>
