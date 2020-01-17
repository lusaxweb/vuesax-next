<template>
  <div class="center content-inputs">
    <vs-input
      label="Full Name"
      v-model="value"
      placeholder="Evan You"
    />
  </div>
</template>
<script>
export default {
  data:() => ({
    value: ''
  })
}
</script>
