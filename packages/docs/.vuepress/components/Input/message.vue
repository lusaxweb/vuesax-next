<template>
  <div class="center content-inputs">
    <vs-input v-model="value1" placeholder="Email">
      <template #message-success>
        Email Valid
      </template>
    </vs-input>

    <vs-input v-model="value2" placeholder="Name">
      <template #message-danger>
        Required
      </template>
    </vs-input>

    <vs-input type="password" v-model="value3" placeholder="Password">
      <template #message-warn>
        Insecure password
      </template>
    </vs-input>

    <vs-input v-model="value4" label="Example Regex Validation" placeholder="vuesax@gmail.com">
      <template v-if="validEmail" #message-success>
        Email Valid
      </template>
      <template v-if="!validEmail && value4 !== ''" #message-danger>
        Email Invalid
      </template>
    </vs-input>
  </div>
</template>
<script>
export default {
  data:() => ({
    value1: 'vuesax@gmail.com',
    value2: '',
    value3: '123456',
    value4: ''
  }),
  computed: {
    validEmail() {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value4)
    }
  }

}
</script>
<style lang="stylus" scoped>
.content-inputs
  >>>.vs-input-parent
    margin 10px
</style>
