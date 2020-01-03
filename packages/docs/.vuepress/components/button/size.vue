<template>
  <div class="center">
    <vs-button
      size="xl"
      :active="active == 0"
       @click="active = 0"
    >
      XLarge
    </vs-button>
    <vs-button
      size="large"
      :active="active == 1"
      @click="active = 1"
    >
      Large
    </vs-button>
    <vs-button
      :active="active == 2"
      @click="active = 2"
    >
      Default
    </vs-button>
    <vs-button
      size="small"
      :active="active == 3"
      @click="active = 3"
    >
      Small
    </vs-button>
    <vs-button
      size="mini"
      :active="active == 4"
      @click="active = 4"
    >
      Mini
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

