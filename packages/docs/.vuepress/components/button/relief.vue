<template>
  <div class="center">
    <vs-button
      relief
      :active="active == 0"
      @click="active = 0"
    >
      Active
    </vs-button>
    <vs-button
      relief
      :active="active == 1"
      @click="active = 1"
    >
      Default
    </vs-button>
    <vs-button
      relief
      disabled
    >
      Disabled
    </vs-button>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: 0
  })
}
</script>
