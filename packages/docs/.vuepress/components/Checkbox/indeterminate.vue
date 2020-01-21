<template>
  <div class="center">
    <vs-checkbox indeterminate v-model="option">
      Option
    </vs-checkbox>
  </div>
</template>
<script>
export default {
  data:() => ({
    option: true,
  })
}
</script>
