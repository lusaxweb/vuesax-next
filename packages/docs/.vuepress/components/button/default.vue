<template>
  <div class="center">
    <vs-button
      :active="active == 0"
      @click="active = 0"
    >
      Active
    </vs-button>
    <vs-button
      :active="active == 1"
      @click="active = 1"
    >
      Default
    </vs-button>
    <vs-button disabled >Disabled</vs-button>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: 0
  })
}
</script>

