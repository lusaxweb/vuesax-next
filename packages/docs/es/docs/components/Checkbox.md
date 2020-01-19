---
PROPS:
  - name: nombre de la propiedad
    type: String
    values: Valores separados en coma
    description: texto descriptivo.
    default: primary
    link: /api/color
    usage: '#color'
    code: >
            ...

SLOTS:
  - name: animate
    type: slot
    values: null
    description: texto descriptivo.
    default: null
    link: /api/slot
    usage: '#animated'
    code: >
          ...
---

# Checkbox

<card>

## Default

<docs-warn />

Descripción

<div slot="example">
  <Checkbox-default />
</div>

<div slot="template">

  ```html{3,4,5}
    ...
  ```

</div>

</card>