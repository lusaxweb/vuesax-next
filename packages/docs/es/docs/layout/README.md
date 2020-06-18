# Grid

<card>

## Default

<docs-warn />

En el sistema de cuadrícula, definimos el marco fuera del área de información según la fila y la columna, para garantizar que cada área pueda tener una disposición estable.

Lo siguiente es un breve vistazo de cómo funciona:

- Establecer un conjunto de columnas en el espacio horizontal definido por fila (_abreviada col_)
- Sus elementos de contenido deben colocarse directamente en la columna, y solo la columna debe colocarse directamente en la fila
- El sistema de cuadrícula de columnas tiene un valor de **1** a **12** para representar sus intervalos de rango. Por ejemplo, `w="4"` puede crear tres columnas de igual ancho (**33.3%**).
- Si la suma de los tramos de col en una fila es superior a **12**, entonces el col desbordante en su conjunto comenzará una nueva disposición de línea.

Con la directiva `w` define el ancho de la columna (vs-col) su valor es **1-12**, un ejemplo de tamaños sería: `12 = 100%`, `6 = 50%`, `4 = 25%`

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

Para dar una distancia con respecto a la izquierda tenemos la propiedad offset que con las mismas medidas **1 - 12** añadimos el espacio especifico, un ejemplo seria: `12 = 100%`, `6 = 50%`, `4 = 25%`.

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

Si tenemos que alinear los elementos en horizontal, utilice la `justify` directiva que utiliza CSS atributos como parámetros: `flex-start`, `center`, `flex-end`, `space-around`, `space-between`.

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

Si tenemos que alinear los elementos en Vertical, utilice la `align` directiva que utiliza CSS atributos como parámetros: `flex-start`, `center`, `flex-end`, `space-around`, `space-between`.

También tenemos la propiedad `direction` que hace referencia a la propiedad css `flex-direction` para cambiar la dirección de todos los elementos (por defecto se `row`)
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

En algunos casos, queremos ordenar los elementos a nuestro gusto. Para hacer esto, use la propiedad `order` tiene un parámetro, solo tiene que pasar el número en el que queremos ordenar `vs-col` respecto a sus hermanos `vs-col` dentro de un mismo `vs-row`

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

Hay algunas medidas que solo se pueden agregar en un tamaño específico del dispositivo, las directivas son:

- **lg**: es para dispositivos grandes como computadoras de escritorio o portátiles (grandes).
- **sm**: es para dispositivos medianos como computadoras portátiles o tabletas.
- **xs**: es para dispositivos pequeños como tabletas (pequeñas) y teléfonos.

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
