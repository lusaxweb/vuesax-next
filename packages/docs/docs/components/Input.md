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
  
# Input

<card>

## Default

<docs-warn />

Descripción

<div slot="example">
  <Input-default />
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