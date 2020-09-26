---
PROPS:
  - name: type
    type: String
    values: 1,2,3,4,5
    description: Change the style of the letter and the position of the internals.
    default: null
    link: null
    usage: '#type-2'
    code: >
            <vs-card type="2">
              <template #title>
                <h3>Pot with a plant</h3>
              </template>
              <template #img>
                <img src="/foto6.png" alt="">
              </template>
              <template #text>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </template>
              <template #interactions>
                <vs-button danger icon>
                  <i class='bx bx-heart'></i>
                </vs-button>
                <vs-button class="btn-chat" shadow primary>
                  <i class='bx bx-chat' ></i>
                  <span class="span">
                    54
                  </span>
                </vs-button>
              </template>
            </vs-card>

SLOTS:
  - name: text
    type: slot
    values: null
    description: Add text to the card in the section determined by the card type.
    default: null
    link: null
    usage: '#default'
    code: >
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
  - name: title
    type: slot
    values: null
    description: Add the title to the card in the section determined by the type of card.
    default: null
    link: null
    usage: '#default'
    code: >
            <template #title>
              <h3>Pot with a plant</h3>
            </template>
  - name: buttons
    type: slot
    values: null
    description: Add the buttons to the card in the section determined by the type of card.
    default: null
    link: null
    usage: '#default'
    code: >
            <template #buttons>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  54
                </span>
              </vs-button>
            </template>
  - name: interactions
    type: slot
    values: null
    description: Add the interactions to the card in the section determined by the card type.
    default: null
    link: null
    usage: '#default'
    code: >
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  54
                </span>
              </vs-button>
            </template>
  - name: img
    type: slot
    values: null
    description: Add the image or video to the card in the section determined by the type of card.
    default: null
    link: null
    usage: '#default'
    code: >
            <template #img>
              <img :src="`/foto5.png`" alt="">
            </template>

NEWS:
  - name
---

# Card

<card>

<docs-warn />

## Default

Add a card with the `vs-card` component for the structure of this component we have several slots

 - title
 - text
 - buttons
 - interactions
 - img

<div slot="example">
  <Card-default />
</div>

<div slot="template">

  ```html
    <vs-card>
      <template #title>
        <h3>Pot with a plant</h3>
      </template>
      <template #img>
        <img src="/foto5.png" alt="">
      </template>
      <template #text>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
  ```

</div>

</card>

<card>

## Type 2

Completely change the style of the letter with the property `type` and the value` 2`

<div slot="example">
  <Card-type2 />
</div>

<div slot="template">

  ```html{3,4,5}
    <vs-card type="2">
      <template #title>
        <h3>Pot with a plant</h3>
      </template>
      <template #img>
        <img src="/foto5.png" alt="">
      </template>
      <template #text>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
  ```

</div>

</card>

<card>

## Type 3

Completely change the style of the letter with the property `type` and the value` 3`

<div slot="example">
  <Card-type3 />
</div>

<div slot="template">

  ```html
    <vs-card type="3">
      <template #title>
        <h3>Pot with a plant</h3>
      </template>
      <template #img>
        <img src="/foto5.png" alt="">
      </template>
      <template #text>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
  ```

</div>

</card>

<card>

## Type 4

Completely change the style of the letter with the `type` property and the value` 4`

<div slot="example">
  <Card-type4 />
</div>

<div slot="template">

  ```html
    <vs-card type="4">
      <template #title>
        <h3>Pot with a plant</h3>
      </template>
      <template #img>
        <img src="/foto5.png" alt="">
      </template>
      <template #text>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
  ```

</div>

</card>

<card>

## Type 5

Change the style of the letter completely with the `type` property and the value` 5`

<div slot="example">
  <Card-type5 />
</div>

<div slot="template">

  ```html
    <vs-card type="5">
      <template #title>
        <h3>Pot with a plant</h3>
      </template>
      <template #img>
        <img src="/foto5.png" alt="">
      </template>
      <template #text>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
  ```

</div>

</card>

<card>

## Group

To have a group of scrolling cards you can use the `vs-card-group` component

<div slot="example">
  <Card-group />
</div>

<div slot="template">

  ```html
    <vs-card-group>
      <vs-card v-for="card in 6" @click="handleClick">
        <template #title>
          <h3>Pot with a plant</h3>
        </template>
        <template #img>
          <img :src="`/foto${card}.png`" alt="">
        </template>
        <template #text>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class='bx bx-heart'></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class='bx bx-chat' ></i>
            <span class="span">
              54
            </span>
          </vs-button>
        </template>
      </vs-card>
    </vs-card-group>
  ```

</div>

</card>

<card>

## API

</card>
