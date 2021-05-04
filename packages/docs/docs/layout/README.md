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

With the `w` directive define the column width (vs-col) its value is **1-12**, an example of sizes would be:`12=100%`,`6=50%`,`4=33% `

<div slot="example">
  <grid-default />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center grid">
        <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          100%
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col :key="index" v-for="col,index in 2" vs-type="flex" vs-justify="center" vs-align="center" w="6">
          50%
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" w="4">
          33.3%
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col :key="index" v-for="col,index in 4" vs-type="flex" vs-justify="center" vs-align="center" w="3">
          25%
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col :key="index" v-for="col,index in 6" vs-type="flex" vs-justify="center" vs-align="center" w="2">
          16.6%
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col :key="index" v-for="col,index in 12" vs-type="flex" vs-justify="center" vs-align="center" w="1">
          8.3%
        </vs-col>
      </vs-row>
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

  ```html{4}
    <template>
      <div>
        <vs-row w="12">
          <vs-col offset="5" w="6">
            offset = 6
          </vs-col>
        </vs-row>

        <vs-row>
          <vs-col offset="0" w="2">
            offset = 2
          </vs-col>
        </vs-row>

        <vs-row>
          <vs-col offset="2" w="8">
            offset = 8
          </vs-col>
        </vs-row>

        <vs-row>
          <vs-col offset="9" w="3">
            offset = 7
          </vs-col>
        </vs-row>

        <vs-row>
          <vs-col offset="4" w="4">
            offset = 4
          </vs-col>
        </vs-row>
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

  ```html
    <template>
      <div class="grid">
        <vs-row>
          <vs-col :key="index" v-for="col,index in 3" w="2">
            Default {{ index + 1 }}
          </vs-col>
        </vs-row>

        <vs-row justify="center">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            Center {{ index + 1 }}
          </vs-col>
        </vs-row>

        <vs-row justify="flex-end">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            Flex-end {{ index + 1 }}
          </vs-col>
        </vs-row>


        <vs-row justify="space-around">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            Space-around {{ index + 1 }}
          </vs-col>
        </vs-row>

        <vs-row justify="space-between">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            Space-between {{ index + 1 }}
          </vs-col>
        </vs-row>
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

  ```html
    <template>
      <div class="grid">
        <vs-row justify="center">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            Default {{ index + 1 }}
          </vs-col>
        </vs-row>

        <vs-row align="center" justify="center">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            Center {{ index + 1 }}
          </vs-col>
        </vs-row>

        <vs-row align="flex-end" justify="center">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            Flex-end {{ index + 1 }}
          </vs-col>
        </vs-row>


        <vs-row class="mh" align="center" justify="space-around" direction="column">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            Space-around {{ index + 1 }}
          </vs-col>
        </vs-row>

        <vs-row class="mh" align="center" justify="space-between" direction="column">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            Space-between {{ index + 1 }}
          </vs-col>
        </vs-row>
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

  ```html
    <template>
      <div>
        <vs-row w="12">
          <vs-col w="3">
            1
          </vs-col>
          <vs-col w="3">
            2
          </vs-col>
          <vs-col order="-1" w="3">
            3
          </vs-col>
          <vs-col w="3">
            4
          </vs-col>
        </vs-row>
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

  ```html{4}
    <template>
      <div class="grid">
        <vs-row>
          <vs-col :w="num">
            {{ num }}
          </vs-col>
          <vs-col :w="num2">
            {{ num2 }}
          </vs-col>
          <vs-col :w="num">
            {{ num }}
          </vs-col>
        </vs-row>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data() {
          return {
            num: 2,
            num2: 8
          }
        },
        mounted() {
          setInterval(() => {
            if(this.num == 2) {
              this.num = 4
              this.num2 = 4
            } else if (this.num == 4) {
              this.num = 1
              this.num2 = 10
            } else if (this.num == 1) {
              this.num = 5
              this.num2 = 2
            } else if (this.num == 5) {
              this.num = 2
              this.num2 = 8
            }
          }, 2000)
        }
      }
      </script>
  ```

</div>

</card>
