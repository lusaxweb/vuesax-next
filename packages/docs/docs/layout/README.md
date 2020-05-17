# Grid

<card>

## Default

<docs-warn />

In the grid system, we define the frame outside the information area according to the row and column, to ensure that each area can have a stable layout.

The following is a brief glimpse of how it works:

- Establish a set of columns in the horizontal space defined by row (_abreviada col_)
- Your content items should be placed directly in the column, and only the column should be placed directly in the row
- The column grid system has a value of **1** to **12** to represent its range intervals. For example, `w="4"` can create three columns of equal width (**33.3%**).
- If the sum of the cabbage segments in a row is greater than **12**, then the overflowing cabbage as a whole will start a new line layout.

With the `w` directive define the column width (vs-col) its value is **1-12**, an example of sizes would be:`12=100%`,`6=50%`,`4=25% `

<div slot="example">
  <grid-default />
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

## Offset

To give a distance from the left we have the offset property that with the same measurements **1-12** we add the specific space, an example would be: `12=100%`,`6=50%`,`4=33%`.

<div slot="example">
  <grid-offset />
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

## Flex Justify

If we have to align the elements horizontally, use the `justify` directive that uses CSS attributes as parameters:` flex-start`, `center`,` flex-end`, `space-around`,` space-between`.

<div slot="example">
  <grid-flexJustify />
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

## Flex Align

If we have to align the elements in Vertical, use the `align` directive that uses CSS attributes as parameters:` flex-start`, `center`,` flex-end`, `space-around`,` space-between`.

We also have the `direction` property that refers to the css` flex-direction` property to change the direction of all the elements (default is `row`)

<div slot="example">
  <grid-flexAlign />
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

## Flex Order

In some cases, we want to order the elements to our liking. To do this, use the `order` property has a parameter, you just have to pass the number in which we want to order` vs-col` with respect to your brothers `vs-col` within the same` vs-row`

<div slot="example">
  <grid-flexOrder />
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

## Responsive

There are some measures that can only be added in a specific device size, the directives are:

- **lg**: is for large devices such as desktops or laptops (large).
- **sm**: is for medium-sized devices such as laptops or tablets.
- **xs**: is for small devices such as tablets (small) and phones.

<div slot="example">
  <grid-responsive />
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
