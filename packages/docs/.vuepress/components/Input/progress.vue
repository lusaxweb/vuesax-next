<template>
  <div class="center content-inputs">
    <vs-input
      type="password"
      v-model="value"
      label-placeholder="Password"
      :progress="getProgress"
      :visiblePassword="hasVisiblePassword"
      icon-after
      @click-icon="hasVisiblePassword = !hasVisiblePassword">
      <template #icon>
        <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
        <i v-else class='bx bx-hide'></i>
      </template>

      <template v-if="getProgress >= 100" #message-success>
        Secure password
      </template>

    </vs-input>
  </div>
</template>
<script>
export default {
  data:() => ({
    value: '',
    hasVisiblePassword: false
  }),
  computed: {
    getProgress() {
      let progress = 0

      // at least one number

      if (/\d/.test(this.value)) {
        progress += 20
      }

      // at least one capital letter

      if (/(.*[A-Z].*)/.test(this.value)) {
        progress += 20
      }

      // at menons a lowercase

      if (/(.*[a-z].*)/.test(this.value)) {
        progress += 20
      }

      // more than 5 digits

      if (this.value.length >= 6) {
        progress += 20
      }

      // at least one special character

      if (/[^A-Za-z0-9]/.test(this.value)) {
        progress += 20
      }

      return progress
    }
  }
}
</script>
