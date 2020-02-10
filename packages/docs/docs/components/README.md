---
PROPS:
  - name: color
    type: String
    values: primary, success, danger, warning, dark, RGB, HEX
    description: Change the color of the component and some of its sub components.
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
    description: Change the style of the component and its states.
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
    description: Determine if the component is active and change its style to that state.
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
    description: Determine if the component has the upload status active by changing the style and adding the animation.
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
    description: Add the functionality of vue-router to the button, clicking it will redirect to the last route.
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
    description: Add an href of an external link to add the functionality by clicking on the component.
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
    description: as in an html element `a` determines whether a new window is opened or the current one is replaced.
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
    description: Determine if the component contains only one icon, by adding this property the component has an equal width and height.
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
    description: Change the border radius to give a circle style.
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
    description: Change the border radius to give a rectangle style.
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
    description: Change the width of the component to the possible total determined by the parent element.
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
    description: Change the type of animation, this property only works if you have the <code> slot </code> animate.
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
    description: Determine if the animation is active for the user when hovering.
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
    description: Slot To add the element that will be displayed in the animation.
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

<card codesandbox="https://codesandbox.io/embed/reverent-shape-pmyk2?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue">

## Default

<docs-warn />

The buttons are a fundamental part of any project, with vuesax you can add a great button with a single line of code

the buttons have all the states as active, focus, hover, to make its implementation simpler and speed up the work

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

<card codesandbox="https://codesandbox.io/embed/charming-maxwell-ms0xf?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark">

## Flat

You can change the full style towards *flat* of a button with the `flat` property that its value is a` boolean`, so just adding it will change the styles

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

<card codesandbox="https://codesandbox.io/embed/vuesax-button-border-zc0td?fontsize=14&hidenavigation=1&theme=dark">

## Border

You can change the full style towards *border* of a button with the `border` property that its value is a` boolean` so just adding it will change the styles

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

<card codesandbox="https://codesandbox.io/embed/vuesax-button-gradient-7en0i?fontsize=14&hidenavigation=1&theme=dark">

## Gradient

You can change the full style towards *Gradient* of a button with the `gradient` property that its value is a` boolean`, so just adding it will change the styles

:::tip Gradient Auto Color
  Gradient colors are automatically generated by the `color` property which in this example is the` primary` color
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

<card codesandbox="https://codesandbox.io/embed/vuesax-button-relief-7dfh7?fontsize=14&hidenavigation=1&theme=dark">

## Relief

Change the style of the button to a relief aspect with the `relief` property, the property is a` boolean` so you can add it without any value.

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

<card codesandbox="https://codesandbox.io/embed/vuesax-button-transparent-4t6d6?fontsize=14&hidenavigation=1&theme=dark">

## Transparent

Change the style of the button with the `transparent` property, the property is a` boolean` so you can add it without any value.

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

<card codesandbox="https://codesandbox.io/embed/vuesax-button-shadow-ufx6y?fontsize=14&hidenavigation=1&theme=dark">

## Shadow

Change the style of the button with the `shadow` property, the property is a` boolean` so you can add it without any value.

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

<card codesandbox="https://codesandbox.io/embed/vuesax-button-colors-gje98?fontsize=14&hidenavigation=1&theme=dark">

## Color

Change the color of the Button component with the `color` property and the color value for example (**#fff**, **rgba (100,10,5)** or the **main colors of vuesax**), this will only affect the component and its value can be dynamic

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

If you need an icon-only button use the `icon` property, the property is a` boolean` so you can add it without any value.

This property makes the button have a specific size making it the same width and height, do not use when it is icon and text

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

If you need a button with text and icon you can do them by adding them in the `slot` default.

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

You can completely round the corners with the `circle` property, the property is a` boolean` so you can add it without any value.

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

You can make all the corners completely straight with the `Square` property, the property is a` boolean` so you can add it without any value.

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

Change the size of the entire button including padding, font-size and border with the `size` property

values:
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

Now you can add a loading status with the `loading` property, the property is a` boolean` so you can add it without any value.

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

Now you can add a status of sending or uploading data to the server with the `upload` property, the property is a` boolean` so you can add it without any value.

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

You can make the button have the full width allowed with the `block` property, the property is a` boolean` so you can add it without any value.

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

You can create an animation to the component by adding the ``slot="animate" `and the content will be the one that appears when the component is animated

You can also change the type of animation with the `animation-type` property and the allowed values ​​are (` vertical`, `scale`,` rotate`)

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

Using the colors of social networks is very common in a project either a login button or a share button so Vuesax makes it easy for you to search for each color and just by putting the name of the network you already change the whole style of the component

Supported colors: (`facebook`, `twitter`, `youtube`, `pinterest`, `linkedin`, `snapchat`, `whatsapp`, `tumblr`, `reddit`, `spotify`, `amazon`, `medium`, `vimeo`, `skype`, `dribbble`, `slack`, `yahoo`, `twitch`, `discord`, `telegram`, `google-plus`, `messenger`)

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

You can make a float style button easily with the `Floating` property, the property is a` boolean` so you can add it without any value.

these buttons usually do an important action in specific and go with a fixed position in the lower corner

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

If you need to make a group of buttons you can use the **sub-component** `<vs-button-group> </vs-button-group>` and inside the default slot put the buttons you want to group

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

This is an example of what you can achieve with simple logic and few lines of code.

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

If you need to use a button such as a vue-router link or an external link you can do it with the properties (`to`: vue-router link) or (` href`: html external link)

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

