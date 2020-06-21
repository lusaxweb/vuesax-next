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
<style lang="stylus">
.con-content
  display flex
  align-items center
  justify-content space-between
  width 100%
  >div
    display flex
    align-items center
    justify-content center
    p
      margin-left 10px
</style>
