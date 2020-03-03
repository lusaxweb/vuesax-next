<template>
  <div class="center">
    <vs-pagination infinite v-model="page" :length="10" />
  </div>
</template>
<script>
export default {
  data:() => ({
    page: 1
  })
}
</script>
