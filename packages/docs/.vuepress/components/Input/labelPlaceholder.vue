<template>
  <div class="center content-inputs">
    <vs-input
      label-placeholder="Country"
      v-model="value"
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
