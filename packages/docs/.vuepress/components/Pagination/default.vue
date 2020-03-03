<template>
  <div class="center">
    <vs-pagination v-model="page" :length="20" />
  </div>
</template>
<script>
export default {
  data:() => ({
    page: 1
  })
}
</script>
