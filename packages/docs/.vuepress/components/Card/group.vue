<template>
  <div class="center">
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
  </div>
</template>
<script>
export default {
  data:() => ({
    active: 0
  }),

  methods: {
    handleClick () {
      console.log('click')
    }
  },
}
</script>
<style lang="stylus" scoped>
  .btn-chat
    i
      font-size 1.2rem
    .span
      padding-left 5px
      font-weight bold
</style>
