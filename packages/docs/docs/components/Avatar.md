---
PROPS:
  - name: color
    type: String
    values: Vuesax Colors, RGB, HEX
    description: Change the color of the component.
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
    description: Change the size of the avatar component.
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
    description: Determine if the badge is active.
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
    description: Change the color of the badge inside the avatar.
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
    description: Change the style of the avatar by circulating it.
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
    description: Change the style of the avatar by making it square.
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
    description: Add an animation to the writing badge.
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
    description: Add a border to the avatar.
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
    description: Change the color of the border to a gradient.
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
    description: Add a loading animation to the avatar.
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
    description: (vs-avatar-group) determine how many avatars are visible.
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
    description: (vs-avatar-group) change the way the avatar is composed by placing one next to the other.
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
    description: Determine if the avatar has a pointer cursor.
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
    description: Add text within the avatar component.
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
    description: Add to the badge everything that is inside the slot, commonly used for numbers and an icon.
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
    description: Add a space to put icons next to the avatar.
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

Add an avatar easily and with functionality with the component `<vs-avatar>`

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

Change the color of the compound with the `color` property, the colors allowed are the main colors of vuesax and (`HEX`, `RGB`)

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

Change the size of the component to the number provided if for example the size value is `60` equivalent to `60px` in height and width

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

Add a badge to the component with the `badge` property or the slot

You can also change the color to represent a user status as disconnected or connected with colors such as `success` or `danger`, this you do with the `badge-color` property

There are times when you need to use the avatar in a chat environment and for this you can add the `writing` property that adds a writing animation

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

If the user has a short name, it is added as it is but if it is a very long text or has several spaces, the text to be displayed will be automatically generated so that it can be seen correctly

:::tip
The maximum length of characters is **5**. When that limit is exceeded, changes are made in the text
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

Change the border-radius of the entire component to `50%` with the `circle` property making it fully circular

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

Change the border-radius of the entire component to `0%` with the `square` property making it completely square

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

It generates a border around the avatar, this is usually used to represent that the user is doing an action or in many cases has a `History`

:::tip
You can make the border a gradient like instagram with the property `history-gradient`
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

You can put an icon inside an avatar when for example an image is not yet added or is a new user, for this you can simply use the default slot

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

Add a loading animation to the component, this property is a `boolean` so you can add it without any value

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

Add a space next to the avatar with the slot `icons` where you can put icons for some dynamic action of that user in specific

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

You can group several avatar with the parent component `vs-avatar-group`, this component has two interesting properties:

- **max**: determine the maximum number of avatars to show and the rest hides it generating the number in the last avatar shown

- **float**: causes the avatar components to be placed on each other and the grouping of one on top of the other is eliminated


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
