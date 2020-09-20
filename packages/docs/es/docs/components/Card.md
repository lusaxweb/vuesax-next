---
PROPS:
  - name: type
    type: String
    values: 1,2,3,4,5
    description: Cambia el estilo de la carta y la posision de los elementos internos.
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
    description: agrega texto a la card en la sección determinada por el tipo de card.
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
    description: agrega el titulo a la card en la sección determinada por el tipo de card.
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
    description: agrega los botones a la card en la sección determinada por el tipo de card.
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
    description: agrega las interacciones a la card en la sección determinada por el tipo de card.
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
    description: agrega la imagen o video a la card en la sección determinada por el tipo de card.
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

Agrega una carta con el componente `vs-card` para la estructura de este componente tenemos varios slots

 - title
 - text
 - buttons
 - interactions
 - img

Descripción

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

## type 2

Cambia por completo el estilo de la carta con la propiedad `type` y el valor `2`

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

## type 3

Cambia por completo el estilo de la carta con la propiedad `type` y el valor `3`

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

## type 4

Cambia por completo el estilo de la carta con la propiedad `type` y el valor `4`

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

## type 5

Cambia por completo el estilo de la carta con la propiedad `type` y el valor `5`

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

## group

Para tener un grupo de cartas con scroll puedes usar el componente `vs-card-group`

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
