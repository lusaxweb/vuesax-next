---
PROPS:
  - name: v-model
    type: object, array
    values: object, array
    description: determina los valores de la tabla que están seleccionados.
    default: null
    link: null
    usage: '#single-selected'
    code: >
            <vs-table v-model="selected">
  - name: striped
    type: Boolean
    values: true,false
    description: Agrega franjas a los tr de color gris.
    default: null
    link: null
    usage: '#striped'
    code: >
            <vs-table striped>
  - name: vs-tr:data
    type: object
    values: object
    description: cuando se necesita la funcionalidad de selected se necesita esta propiedad ya que es el objeto que se pasa al v-model.
    default: null
    link: null
    usage: '#single-selected'
    code: >
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
              :data="tr"
              :is-selected="selected == tr"
            >
              ...
            </vs-tr>
  - name: vs-tr:is-selected
    type: Boolean
    values: true,false
    description: Determina si el componente esta en el estado de selected.
    default: false
    link: null
    usage: '#single-selected'
    code: >
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
              :data="tr"
              :is-selected="selected == tr"
            >
              ...
            </vs-tr>
  - name: vs-td:edit
    type: Boolean
    values: true,false
    description: Determina si el elemento es editable agregando underline y el cursor pointer.
    default: false
    link: null
    usage: '#edit-data'
    code: >
            <vs-td edit @click="edit = tr, editProp = 'name', editActive = true">
              {{ tr.name }}
            </vs-td>
  - name: vs-th:sort
    type: Boolean
    values: true,false
    description: Agrega las flechas de sort al th correspondiente.
    default: false
    link: null
    usage: '#search-and-sort'
    code: >
            <vs-th sort @click="users = $vs.sortData($event ,users, 'name')">
              Name
            </vs-th>
  - name: vs-tr:color
    type: String, vuesax colors
    values: color, vuesax colors
    description: Cambia el color de el tr.
    default: null
    link: null
    usage: '#state'
    code: >
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
              :data="tr"
              :danger="tr.id == 3"
              :success="tr.id == 5"
              :primary="tr.id == 8"
              :warn="tr.id == 9"
            >

SLOTS:
  - name: header
    type: slot
    values: null
    description: espacio para poner algún elemento en la parte superior de la tabla como por ejemplo el input search.
    default: null
    link: null
    usage: '#search-and-sort'
    code: >
            <template #header>
              ...
            </template>
  - name: thead
    type: slot
    values: null
    description: espacio que representa el elemento thead de la tabla donde se pondrán los componentes `vs-th`.
    default: null
    link: null
    usage: '#default'
    code: >
            <template #thead>
              <vs-tr>
                <vs-th>
                  Name
                </vs-th>
                <vs-th>
                  Email
                </vs-th>
                <vs-th>
                  Id
                </vs-th>
              </vs-tr>
            </template>
  - name: tbody
    type: slot
    values: null
    description: Representa el elemento tbody en la tabla y aquí se pondrán los componentes `vs-tr`.
    default: null
    link: null
    usage: '#default'
    code: >
            <template #tbody>
              <vs-tr
                :key="i"
                v-for="(tr, i) in users"
                :data="tr"
              >
                <vs-td>
                  {{ tr.name }}
                </vs-td>
                <vs-td>
                {{ tr.email }}
                </vs-td>
                <vs-td>
                {{ tr.id }}
                </vs-td>
              </vs-tr>
            </template>
  - name: vs-tr:#expand
    type: slot
    values: null
    description: Representa el interior de el tr cuando esta expandido.
    default: null
    link: null
    usage: '#expand'
    code: >
            <template #expand>
              <div class="con-content">
                <div>
                  <vs-avatar>
                    <img :src="`/avatars/avatar-${i + 1}.png`" alt="">
                  </vs-avatar>
                  <p>
                    {{ tr.name }}
                  </p>
                </div>
                <div>
                  <vs-button flat icon>
                    <i class='bx bx-lock-open-alt' ></i>
                  </vs-button>
                  <vs-button flat icon>
                    Send Email
                  </vs-button>
                  <vs-button border danger>
                    Remove User
                  </vs-button>
                </div>
              </div>
            </template>
  - name: notFound
    type: slot
    values: null
    description: Cambia el elemento a mostrar cuando no hay elementos en la tabla.
    default: null
    link: null
    usage: '#search'
    code: >
            <template #notFound>
              Not Found
            </template>

NEWS:
  - name
---

# Table

<card>

## Default

<docs-warn />

Crea una tabla simplemente con el componente `vs-table` y sus sub componentes `vs-tr`, `vs-td`, `vs-th`

Este componente tiene una lógica distinta para mejor manejo de los datos y personalización mas libre y acorde a las necesidades

<div slot="example">
  <Table-default />
</div>

<div slot="template">

  ```html{1}
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th>
            Name
          </vs-th>
          <vs-th>
            Email
          </vs-th>
          <vs-th>
            Id
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(tr, i) in users"
          :data="tr"
        >
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td>
           {{ tr.email }}
          </vs-td>
          <vs-td>
           {{ tr.id }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          users: [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "email": "Nathan@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "email": "Julianne.OConner@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "Chelsey Dietrich",
              "username": "Kamren",
              "email": "Lucio_Hettinger@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "Mrs. Dennis Schulist",
              "username": "Leopoldo_Corkery",
              "email": "Karley_Dach@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "Kurtis Weissnat",
              "username": "Elwyn.Skiles",
              "email": "Telly.Hoeger@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "Nicholas Runolfsdottir V",
              "username": "Maxime_Nienow",
              "email": "Sherwood@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "Glenna Reichert",
              "username": "Delphine",
              "email": "Chaim_McDermott@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "Clementina DuBuque",
              "username": "Moriah.Stanton",
              "email": "Rey.Padberg@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</div>

</card>

<card>

## Striped

Puede hacer franjas fácilmente en la tabla con la propiedad `striped`

<div slot="example">
  <Table-striped />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center examplex">
        <vs-table striped>
          <template #thead>
            <vs-tr>
              <vs-th>
                Name
              </vs-th>
              <vs-th>
                Email
              </vs-th>
              <vs-th>
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
              :data="tr"
            >
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          users: [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "email": "Nathan@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "email": "Julianne.OConner@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "Chelsey Dietrich",
              "username": "Kamren",
              "email": "Lucio_Hettinger@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "Mrs. Dennis Schulist",
              "username": "Leopoldo_Corkery",
              "email": "Karley_Dach@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "Kurtis Weissnat",
              "username": "Elwyn.Skiles",
              "email": "Telly.Hoeger@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "Nicholas Runolfsdottir V",
              "username": "Maxime_Nienow",
              "email": "Sherwood@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "Glenna Reichert",
              "username": "Delphine",
              "email": "Chaim_McDermott@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "Clementina DuBuque",
              "username": "Moriah.Stanton",
              "email": "Rey.Padberg@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</div>

</card>

<card>

## State

Cambia el estado de un tr agregando la propiedad color al componente `vs-tr`

<div slot="example">
  <Table-state />
</div>

<div slot="template">

  ```html{22-25}
    <template>
      <div class="center">
        <vs-table>
          <template #thead>
            <vs-tr>
              <vs-th>
                Name
              </vs-th>
              <vs-th>
                Email
              </vs-th>
              <vs-th>
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
              :data="tr"
              :danger="tr.id == 3"
              :success="tr.id == 5"
              :primary="tr.id == 8"
              :warn="tr.id == 9"
            >
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3}
    <script>
      export default {
        data:() => ({
          users: [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "email": "Nathan@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "email": "Julianne.OConner@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "Chelsey Dietrich",
              "username": "Kamren",
              "email": "Lucio_Hettinger@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "Mrs. Dennis Schulist",
              "username": "Leopoldo_Corkery",
              "email": "Karley_Dach@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "Kurtis Weissnat",
              "username": "Elwyn.Skiles",
              "email": "Telly.Hoeger@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "Nicholas Runolfsdottir V",
              "username": "Maxime_Nienow",
              "email": "Sherwood@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "Glenna Reichert",
              "username": "Delphine",
              "email": "Chaim_McDermott@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "Clementina DuBuque",
              "username": "Moriah.Stanton",
              "email": "Rey.Padberg@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</div>

</card>

<card>

## Pagination

Puedes agregar la funcionalidad de paginacion para la tabla usando el slot `#footer` y el componente de vs-pagination

Para hacer el desarrollo mas simple puedes usar la función de vuesax que genera los items (`$vs.getPage`) en base a la pagina y también la que genera el total de paginas en el componente pagination (`$vs.getLength`)

Esta forma de manejar los datos es para mejorar la libertad de personalización sin perder la facilidad de implementación

<div slot="example">
  <Table-pagination />
</div>

<div slot="template">

  ```html{20,35}
    <template>
      <div class="center">
        <vs-table>
          <template #thead>
            <vs-tr>
              <vs-th>
                Name
              </vs-th>
              <vs-th>
                Email
              </vs-th>
              <vs-th>
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in $vs.getPage(users, page, max)"
              :data="tr"
            >
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
          <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
          </template>
        </vs-table>
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
          max: 3,
          users: [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "email": "Nathan@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "email": "Julianne.OConner@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "Chelsey Dietrich",
              "username": "Kamren",
              "email": "Lucio_Hettinger@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "Mrs. Dennis Schulist",
              "username": "Leopoldo_Corkery",
              "email": "Karley_Dach@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "Kurtis Weissnat",
              "username": "Elwyn.Skiles",
              "email": "Telly.Hoeger@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "Nicholas Runolfsdottir V",
              "username": "Maxime_Nienow",
              "email": "Sherwood@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "Glenna Reichert",
              "username": "Delphine",
              "email": "Chaim_McDermott@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "Clementina DuBuque",
              "username": "Moriah.Stanton",
              "email": "Rey.Padberg@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</div>

</card>

<card>

## Single Selected

Puedes agregar la funcionalidad de seleccionar con un v-model en la tabla y la propiedad `is-selected`

:::tip TIP
Es importante el uso de la propiedad `data` en el `tr` ya que esos son los datos que se van a agregar al v-model
:::

<div slot="example">
  <Table-selected />
</div>

<div slot="template">

  ```html{3}
    <template>
      <div class="center">
        <vs-table v-model="selected">
          <template #thead>
            <vs-tr>
              <vs-th>
                Name
              </vs-th>
              <vs-th>
                Email
              </vs-th>
              <vs-th>
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
              :data="tr"
              :is-selected="selected == tr"
            >
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>

        <span class="data">
          <pre>
    {{ selected ? selected : 'Select an item in the table' }}
          </pre>
        </span>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{4}
    <script>
      export default {
        data:() => ({
          selected: null,
          users: [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "email": "Nathan@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "email": "Julianne.OConner@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "Chelsey Dietrich",
              "username": "Kamren",
              "email": "Lucio_Hettinger@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "Mrs. Dennis Schulist",
              "username": "Leopoldo_Corkery",
              "email": "Karley_Dach@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "Kurtis Weissnat",
              "username": "Elwyn.Skiles",
              "email": "Telly.Hoeger@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "Nicholas Runolfsdottir V",
              "username": "Maxime_Nienow",
              "email": "Sherwood@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "Glenna Reichert",
              "username": "Delphine",
              "email": "Chaim_McDermott@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "Clementina DuBuque",
              "username": "Moriah.Stanton",
              "email": "Rey.Padberg@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</div>

</card>

<card>

## Multiple Selected

Puedes hacer la funcionalidad de multiple selección en la tabla con la propiedad `v-model` siendo su valor un array

para esta funcionalidad puedes usar por ejemplo los checkbox de vuesax y la funcion global `$vs.checkAll` en el checkbox de el th

<div slot="example">
  <Table-multiple />
</div>

<div slot="template">

  ```html{4}
    <template>
      <div class="center">
        <vs-table
          v-model="selected"
          >
          <template #thead>
            <vs-tr>
              <vs-th>
                <vs-checkbox
                  :indeterminate="selected.length == users.length" v-model="allCheck"
                  @change="selected = $vs.checkAll(selected, users)"
                />
              </vs-th>
              <vs-th>
                Name
              </vs-th>
              <vs-th>
                Email
              </vs-th>
              <vs-th>
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
              :data="tr"
              :is-selected="!!selected.includes(tr)"
            >
              <vs-td checkbox>
                <vs-checkbox :val="tr" v-model="selected" />
              </vs-td>
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
        <span class="data">
          <pre>
    {{ selected.length > 0 ? selected : 'Select an item in the table' }}
          </pre>
        </span>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          allCheck: false,
          selected: [],
          users: [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "email": "Nathan@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "email": "Julianne.OConner@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "Chelsey Dietrich",
              "username": "Kamren",
              "email": "Lucio_Hettinger@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "Mrs. Dennis Schulist",
              "username": "Leopoldo_Corkery",
              "email": "Karley_Dach@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "Kurtis Weissnat",
              "username": "Elwyn.Skiles",
              "email": "Telly.Hoeger@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "Nicholas Runolfsdottir V",
              "username": "Maxime_Nienow",
              "email": "Sherwood@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "Glenna Reichert",
              "username": "Delphine",
              "email": "Chaim_McDermott@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "Clementina DuBuque",
              "username": "Moriah.Stanton",
              "email": "Rey.Padberg@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Expandable data

Para agregar un `tr` que pueda mostrar datos expandidos usa el slot `#expand` dentro de el componente `vs-tr`

<div slot="example">
  <Table-expand />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-table>
          <template #thead>
            <vs-tr>
              <vs-th>
                Name
              </vs-th>
              <vs-th>
                Email
              </vs-th>
              <vs-th>
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
            >
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>

              <template #expand>
                <div class="con-content">
                  <div>
                    <vs-avatar>
                      <img :src="`/avatars/avatar-${i + 1}.png`" alt="">
                    </vs-avatar>
                    <p>
                      {{ tr.name }}
                    </p>
                  </div>
                  <div>
                    <vs-button flat icon>
                      <i class='bx bx-lock-open-alt' ></i>
                    </vs-button>
                    <vs-button flat icon>
                      Send Email
                    </vs-button>
                    <vs-button border danger>
                      Remove User
                    </vs-button>
                  </div>
                </div>
              </template>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          editActive: false,
          edit: null,
          editProp: '',
          search: '',
          allCheck: false,
          page: 1,
          max: 3,
          active: 0,
          selected: [],
          users: [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "email": "Nathan@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "email": "Julianne.OConner@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "Chelsey Dietrich",
              "username": "Kamren",
              "email": "Lucio_Hettinger@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "Mrs. Dennis Schulist",
              "username": "Leopoldo_Corkery",
              "email": "Karley_Dach@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "Kurtis Weissnat",
              "username": "Elwyn.Skiles",
              "email": "Telly.Hoeger@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "Nicholas Runolfsdottir V",
              "username": "Maxime_Nienow",
              "email": "Sherwood@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "Glenna Reichert",
              "username": "Delphine",
              "email": "Chaim_McDermott@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "Clementina DuBuque",
              "username": "Moriah.Stanton",
              "email": "Rey.Padberg@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
    </script>
  ```

</div>

</card>

<card>

## Edit data

Puedes editar los datos dentro de la tabla fácilmente usando el componente `vs-dialog` y la magia de vuejs

<div slot="example">
  <Table-edit />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-table>
          <template #thead>
            <vs-tr>
              <vs-th>
                Name
              </vs-th>
              <vs-th>
                Email
              </vs-th>
              <vs-th>
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in users"
              :data="tr"
            >
              <vs-td edit @click="edit = tr, editProp = 'name', editActive = true">
                {{ tr.name }}
              </vs-td>
              <vs-td edit @click="edit = tr, editProp = 'email', editActive = true">
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>

        <vs-dialog v-model="editActive">
          <template #header>
              Change Prop {{ editProp }}
          </template>
          <vs-input @keypress.enter="editActive = false" v-if="editProp == 'email'" v-model="edit[editProp]" />
          <vs-select @change="editActive = false" block v-if="editProp == 'name'" placeholder="Select" v-model="edit[editProp]">
            <vs-option label="Vuesax" value="Vuesax">
              Vuesax
            </vs-option>
            <vs-option label="Vue" value="Vuejs">
              Vue
            </vs-option>
            <vs-option label="Javascript" value="Javascript">
              Javascript
            </vs-option>
            <vs-option disabled label="Sass" value="Sass">
              Sass
            </vs-option>
            <vs-option label="Typescript" value="Typescript">
              Typescript
            </vs-option>
            <vs-option label="Webpack" value="Webpack">
              Webpack
            </vs-option>
            <vs-option label="Nodejs" value="Nodejs">
              Nodejs
            </vs-option>
          </vs-select>
        </vs-dialog>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          editActive: false,
          edit: null,
          editProp: {},
          users: [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "email": "Nathan@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "email": "Julianne.OConner@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "Chelsey Dietrich",
              "username": "Kamren",
              "email": "Lucio_Hettinger@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "Mrs. Dennis Schulist",
              "username": "Leopoldo_Corkery",
              "email": "Karley_Dach@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "Kurtis Weissnat",
              "username": "Elwyn.Skiles",
              "email": "Telly.Hoeger@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "Nicholas Runolfsdottir V",
              "username": "Maxime_Nienow",
              "email": "Sherwood@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "Glenna Reichert",
              "username": "Delphine",
              "email": "Chaim_McDermott@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "Clementina DuBuque",
              "username": "Moriah.Stanton",
              "email": "Rey.Padberg@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</div>

</card>

<card>

## Search and sort

La funcionalidad de buscar ahora es independiente y se puede usar la función global `$vs.getSearch`

:::tip TIP
La función `$vs.getSearch` necesita dos parámetros los datos de la tabla que va a filtrar y el texto a buscar
:::

#### sort

la funcionalidad sort es independiente y puedes usar la función global `$vs.sortData`

:::tip TIP
La función `$vs.sortData` necesita 3 parámetros el evento la data de la tabla y el item que se va a ordenar
:::

<div slot="example">
  <Table-search />
</div>

<div slot="template">

  ```html{3,4,5}
    <template>
      <div class="center">
        <vs-table>
          <template #header>
            <vs-input v-model="search" border placeholder="Search" />
          </template>
          <template #thead>
            <vs-tr>
              <vs-th sort @click="users = $vs.sortData($event ,users, 'name')">
                Name
              </vs-th>
              <vs-th sort @click="users = $vs.sortData($event ,users, 'email')">
                Email
              </vs-th>
              <vs-th sort @click="users = $vs.sortData($event ,users, 'id')">
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in $vs.getSearch(users, search)"
              :data="tr"
            >
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          search: '',
          users: [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "email": "Nathan@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "email": "Julianne.OConner@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "Chelsey Dietrich",
              "username": "Kamren",
              "email": "Lucio_Hettinger@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "Mrs. Dennis Schulist",
              "username": "Leopoldo_Corkery",
              "email": "Karley_Dach@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "Kurtis Weissnat",
              "username": "Elwyn.Skiles",
              "email": "Telly.Hoeger@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "Nicholas Runolfsdottir V",
              "username": "Maxime_Nienow",
              "email": "Sherwood@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "Glenna Reichert",
              "username": "Delphine",
              "email": "Chaim_McDermott@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "Clementina DuBuque",
              "username": "Moriah.Stanton",
              "email": "Rey.Padberg@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</div>

</card>

<card>

## Miscellaneous

Esta es una muestra de todo unido y de su funcionalidad en conjunto

:::tip
Este componente esta creado para una personalización mucho mas libre respecto a el manejo de los datos como por ejemplo si necesitas una pagination de el lado de el servidor simplemente no usas la función global `$vs.getSearch`
:::

<div slot="example">
  <Table-miscellaneous />
</div>

<div slot="template">

  ```html
    <template>
      <div class="center">
        <vs-table
          v-model="selected"
          >
          <template #header>
            <vs-input v-model="search" border placeholder="Search" />
          </template>
          <template #thead>
            <vs-tr>
              <vs-th>
                <vs-checkbox
                  :indeterminate="selected.length == users.length" v-model="allCheck"
                  @change="selected = $vs.checkAll(selected, users)"
                />
              </vs-th>
              <vs-th sort @click="users = $vs.sortData($event ,users, 'name')">
                Name
              </vs-th>
              <vs-th sort @click="users = $vs.sortData($event ,users, 'email')">
                Email
              </vs-th>
              <vs-th sort @click="users = $vs.sortData($event ,users, 'id')">
                Id
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in $vs.getPage($vs.getSearch(users, search), page, max)"
              :data="tr"
              :is-selected="!!selected.includes(tr)"
              not-click-selected
              open-expand-only-td
            >
              <vs-td checkbox>
                <vs-checkbox :val="tr" v-model="selected" />
              </vs-td>
              <vs-td edit @click="edit = tr, editProp = 'name', editActive = true">
                {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.id }}
              </vs-td>

              <template #expand>
                <div class="con-content">
                  <div>
                    <vs-avatar>
                      <img :src="`/avatars/avatar-${i + 1}.png`" alt="">
                    </vs-avatar>
                    <p>
                      {{ tr.name }}
                    </p>
                  </div>
                  <div>
                    <vs-button flat icon>
                      <i class='bx bx-lock-open-alt' ></i>
                    </vs-button>
                    <vs-button flat icon>
                      Send Email
                    </vs-button>
                    <vs-button border danger>
                      Remove User
                    </vs-button>
                  </div>
                </div>
              </template>
            </vs-tr>
          </template>
          <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(users, search), max)" />
          </template>
        </vs-table>

        <vs-dialog v-model="editActive">
          <template #header>
              Change Prop {{ editProp }}
          </template>
          <vs-input @keypress.enter="editActive = false" v-if="editProp == 'email'" v-model="edit[editProp]" />
          <vs-select @change="editActive = false" block v-if="editProp == 'name'" placeholder="Select" v-model="edit[editProp]">
            <vs-option label="Vuesax" value="Vuesax">
              Vuesax
            </vs-option>
            <vs-option label="Vue" value="Vuejs">
              Vue
            </vs-option>
            <vs-option label="Javascript" value="Javascript">
              Javascript
            </vs-option>
            <vs-option disabled label="Sass" value="Sass">
              Sass
            </vs-option>
            <vs-option label="Typescript" value="Typescript">
              Typescript
            </vs-option>
            <vs-option label="Webpack" value="Webpack">
              Webpack
            </vs-option>
            <vs-option label="Nodejs" value="Nodejs">
              Nodejs
            </vs-option>
          </vs-select>
        </vs-dialog>
      </div>
    </template>
  ```

</div>

<div slot="script">

  ```html
    <script>
      export default {
        data:() => ({
          editActive: false,
          edit: null,
          editProp: {},
          search: '',
          allCheck: false,
          page: 1,
          max: 5,
          active: 0,
          selected: [],
          users: [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "website": "hildegard.org",
            },
            {
              "id": 2,
              "name": "Ervin Howell",
              "username": "Antonette",
              "email": "Shanna@melissa.tv",
              "website": "anastasia.net",
            },
            {
              "id": 3,
              "name": "Clementine Bauch",
              "username": "Samantha",
              "email": "Nathan@yesenia.net",
              "website": "ramiro.info",
            },
            {
              "id": 4,
              "name": "Patricia Lebsack",
              "username": "Karianne",
              "email": "Julianne.OConner@kory.org",
              "website": "kale.biz",
            },
            {
              "id": 5,
              "name": "Chelsey Dietrich",
              "username": "Kamren",
              "email": "Lucio_Hettinger@annie.ca",
              "website": "demarco.info",
            },
            {
              "id": 6,
              "name": "Mrs. Dennis Schulist",
              "username": "Leopoldo_Corkery",
              "email": "Karley_Dach@jasper.info",
              "website": "ola.org",
            },
            {
              "id": 7,
              "name": "Kurtis Weissnat",
              "username": "Elwyn.Skiles",
              "email": "Telly.Hoeger@billy.biz",
              "website": "elvis.io",
            },
            {
              "id": 8,
              "name": "Nicholas Runolfsdottir V",
              "username": "Maxime_Nienow",
              "email": "Sherwood@rosamond.me",
              "website": "jacynthe.com",
            },
            {
              "id": 9,
              "name": "Glenna Reichert",
              "username": "Delphine",
              "email": "Chaim_McDermott@dana.io",
              "website": "conrad.com",
            },
            {
              "id": 10,
              "name": "Clementina DuBuque",
              "username": "Moriah.Stanton",
              "email": "Rey.Padberg@karina.biz",
              "website": "ambrose.net",
            }
          ]
        })
      }
      </script>
  ```

</div>

</card>

<card>

## Functions

Este componente lo creamos con una lógica distinta y puede que algo no muy común como primer punto queremos que el desarrollo sea mas libre y que el programador tenga muchas opciones y personalizacion en base a lo que necesita y quiere crear, por ejemplo un tema muy importante es las consultas de los datos en el servidor y que ahora no se manipulan por el componente hasta que usted mismo usando una funcion de vuesax se lo impone

Por eso ahora usamos funciones globales que puede usar si las necesita como pueden ser

- $vs.checkAll: hace las funcionalidad de check a todos los items y si ya están todos en check los remueve
- $vs.sortData: hace las funcionalidad de mover todos los elementos de abajo hacia arriba o de arriba hacia abajo y a su posición inicial (para poder guardar esta posición se le agrega una propiedad al objeto iterado)
- $vs.getSearch: retorna los items que coinciden con la búsqueda en todo el array
- $vs.getPage: retorna los elementos de la pagina en base a los items y el máximo a mostrar
- $vs.getLength: retorna el length para la pagination en base a los items y el máximo

</card>

<card>

## API

</card>
