<template>
  <div class="center content-inputs">
    <vs-input loading v-model="value" placeholder="Name" />
  </div>
</template>
<script>
export default {
  data:() => ({
    value: ''
  })
}
</script>
