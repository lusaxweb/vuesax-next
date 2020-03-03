---
PROPS:
  - name: v-model
    type: Number
    values: Number
    description: Determine the page where the user is.
    default: 1
    link: null
    usage: '#default'
    code: >
            <vs-pagination v-model="page" :length="20" />
  - name: length
    type: Number
    values: Number
    description: It is the total number of pages that the component has.
    default: null
    link: null
    usage: '#default'
    code: >
            <vs-pagination v-model="page" :length="20" />
  - name: color
    type: Vuesax colors, RGB, HEX
    values: String
    description: Change the base color of the component.
    default: primary
    link: null
    usage: '#color'
    code: >
            <vs-pagination color="danger" v-model="page" :length="20" />
  - name: disabled
    type: Boolean
    values: true, false
    description: Determine if the entire component is in the disabled state.
    default: false
    link: null
    usage: '#disabled'
    code: >
            <vs-pagination disabled v-model="page" :length="20" />
  - name: not-arrows
    type: Boolean
    values: true, false
    description: Remove the arrows (next and back) of the component.
    default: false
    link: null
    usage: '#not-arrows'
    code: >
            <vs-pagination not-arrows v-model="page" :length="20" />
  - name: only-arrows
    type: Boolean
    values: true, false
    description: Remove the items leaving only the arrows (next and back).
    default: false
    link: null
    usage: '#only-arrows'
    code: >
            <vs-pagination only-arrows v-model="page" :length="20" />
  - name: circle
    type: Boolean
    values: true, false
    description: Change the style of the buttons making them completely round.
    default: false
    link: null
    usage: '#circle'
    code: >
            <vs-pagination circle v-model="page" :length="20" />
  - name: square
    type: Boolean
    values: true, false
    description: Change the style of the buttons making them totally square.
    default: false
    link: null
    usage: '#square'
    code: >
            <vs-pagination square v-model="page" :length="20" />
  - name: buttons-dotted
    type: Boolean
    values: true, false
    description: Makes the buttons not have the internal number and changes its size.
    default: false
    link: null
    usage: '#buttons-dotted'
    code: >
            <vs-pagination buttons-dotted v-model="page" :length="20" />
  - name: disabled-items
    type: Boolean
    values: true, false
    description: Determine which items are in the disabled state.
    default: false
    link: null
    usage: '#disabled-items'
    code: >
            <vs-pagination :disabled-items="[3,4,9,10,11,12,19]" v-model="page" :length="20" />
  - name: loading-items
    type: Boolean
    values: true, false
    description: Determine which items are in the charging state.
    default: false
    link: null
    usage: '#loading-items'
    code: >
            <vs-pagination :loading-items="[3,4,9,10,11,12,19]" v-model="page" :length="20" />
  - name: not-margin
    type: Boolean
    values: true, false
    description: Change the margin between the items causing them to be fully glued and the radius is removed making them square.
    default: false
    link: null
    usage: '#not-margin'
    code: >
            <vs-pagination not-margin v-model="page" :length="20" />
  - name: progress
    type: Boolean
    values: true, false
    description: Add a progress bar to the component determined by the current page and the total (length) of pages.
    default: false
    link: null
    usage: '#progress'
    code: >
            <vs-pagination progress v-model="page" :length="20" />
  - name: dotted-number
    type: Number
    values: Number
    description: Change the total pages to be added or subtracted by clicking on the points.
    default: false
    link: null
    usage: '#dotted-number'
    code: >
            <vs-pagination :dotted-number="10" v-model="page" :length="100" />
  - name: infinite
    type: Boolean
    values: true,false
    description: Determine if the pagination is infinite.
    default: false
    link: null
    usage: '#infinite'
    code: >
            <vs-pagination infinite v-model="page" :length="100" />

SLOTS:
  - name: default
    type: slot
    values: null
    description: Space between the two arrows (next and back).
    default: null
    link: null
    usage: '#slot'
    code: >
            <vs-pagination v-model="page" :length="20">
              <vs-select v-model="page">
                <vs-option
                  v-for="numberPage in 20"
                  :label="numberPage"
                  :value="numberPage">
                  {{ numberPage }}
                </vs-option>
              </vs-select>
            </vs-pagination>

NEWS:
  - disabled
  - not-arrows
  - only-arrows
  - circle
  - square
  - buttons-dotted
  - disabled-items
  - loading-items
  - not-margin
  - slot
  - progress
  - dotted-number
  - infinite
---

# Pagination

<card>

## Default

<docs-warn />

Easily add a pagination with the `vs-pagination` component, the required properties are `length` and `v-model`

<div slot="example">
  <Pagination-default />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-pagination v-model="page" :length="20" />
      </div>
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

## Color

<Color />

<div slot="example">
  <Pagination-color />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center con-pagination">
        <div class="con-radio">
          <vs-radio success v-model="color" val="success">
            Success
          </vs-radio>
          <vs-radio danger v-model="color" val="danger">
            Danger
          </vs-radio>
          <vs-radio warn v-model="color" val="warn">
            Warning
          </vs-radio>
          <vs-radio dark v-model="color" val="dark">
            Dark
          </vs-radio>
          <vs-radio color="#7d33ff" v-model="color" val="#7d33ff">
            HEX
          </vs-radio>
          <vs-radio color="rgb(59,222,200)" v-model="color" val="rgb(59,222,200)">
            RGB
          </vs-radio>
        </div>
        <vs-pagination :color="color" v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4,5}
    <script>
    export default {
      data:() => ({
        page: 1,
        color: 'success'
      }),
    }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
    .con-pagination
      .con-radio
        display flex
        align-items center
        justify-content flex-start
        .vs-radio-content
          margin 10px
      .vs-pagination-content
        margin 10px 0px
    </style>
  ```

</div>

</card>

<card>

## Disabled

Change the disabled state of the component with the `disabled` property, this property is a boolean and you can add it without value

<div slot="example">
  <Pagination-disabled />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination disabled v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Not Arrows

You can remove the back and next arrows with the `not-arrows` property

<div slot="example">
  <Pagination-not-arrows />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination not-arrows v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      })
    }
    </script>
  ```

</div>

</card>

<card>

## Only Arrows

You may need in small spaces to remove the buttons and leave only the arrows for it we have the property `only-arrows`

<div slot="example">
  <Pagination-only-arrow />
</div>

<div slot="template">

  ```html{3,5}
    <template>
      <div class="center con-pagination">
        <vs-pagination only-arrows v-model="page" :length="10" />
        <code>
          Page: <b>{{ page }}</b>
        </code>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Circle

Change the radius of all the elements that make up the component by making them circular with the `circle` property, this property is a boolean so it does not need value

<div slot="example">
  <Pagination-circle />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination circle v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Square

Change the radius of all the elements that make up the component making them square with the `square` property, this property is a boolean so it does not need value

<div slot="example">
  <Pagination-square />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination square v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Buttons Dotted

Cambia por completo el estilo de el componente y elimina los números internos en cada botón con la propiedad `buttons-dotted`

<div slot="example">
  <Pagination-buttons-dotted />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination buttons-dotted v-model="page" :length="6" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Disabled Items

You can put disabled buttons specific to the pagination component with the `disabled-items` property, this property is an array with the number of the button you want to put in disabled status

:::tip
The buttons that are in disabled will skip when changing the value for example on the next or back buttons
:::

<div slot="example">
  <Pagination-disabledItems />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination :disabled-items="[3,4,9,10,11,12,19]" v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Loading Items

You can make a button inside the pagination be in the state of loading with the `loading-items` property, this property is an array with the number of the button that you want to put in the disabled state

:::tip
The buttons that are in loading will skip when changing the value for example in the next or back buttons
:::

<div slot="example">
  <Pagination-loadingItems />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination :loading-items="[3,4,9,10,11,12,19]" v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Not Margin

Change the style of the entire component by removing the margin between the buttons and changing the radius with the `not-margin` property

<div slot="example">
  <Pagination-not-margin />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination not-margin v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Slot

You may need to customize your pagination and for this you can use the `default` slot between the arrows and replace the items on the pages

<div slot="example">
  <Pagination-slot />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination v-model="page" :length="20">
          <vs-select v-model="page">
            <vs-option
              v-for="numberPage in 20"
              :label="numberPage"
              :value="numberPage">
              {{ numberPage }}
            </vs-option>
          </vs-select>
        </vs-pagination>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

<div slot="style">

  ```stylus
    <style lang="stylus">
    .con-pagination
      .vs-select-content
        max-width 60px
        margin 0px 4px
      .vs-pagination-content
        margin 10px 0px
    </style>
  ```

</div>

</card>

<card>

## Progress

Add a progress bar to the pagination by referencing where you find the last page with the `progress` property

<div slot="example">
  <Pagination-progress />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination progress v-model="page" :length="20" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Dotted Number

You can change the number of pages that are added when the user clicks on the points to advance more pages quickly, this can be done with the `dotted-number` property and the value would be the number of pages that are added or subtracted ( default is **5**)

<div slot="example">
  <Pagination-dotted-number />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination :dotted-number="10" v-model="page" :length="100" />
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</div>

</card>

<card>

## Infinite

You can make the pagination infinite with the `infinite` property, this means that the arrow buttons are no longer in the disabled state

<div slot="example">
  <Pagination-infinite />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-pagination infinite v-model="page" :length="10" />
      </div>
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

## API

</card>
