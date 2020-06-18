<template>
  <div class="center content-inputs">
    <vs-input block v-model="value" placeholder="Name" />
  </div>
</template>
<script>
export default {
  data:() => ({
    value: ''
  })
}
</script>
