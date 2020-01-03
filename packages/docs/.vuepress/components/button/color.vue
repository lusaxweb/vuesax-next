<template>
  <div class="center">
    <vs-button
      :active="active == 0"
      @click="active = 0"
    >
      Default
    </vs-button>
    <vs-button
      success
      flat
      :active="active == 1"
      @click="active = 1"
    >
      Success
    </vs-button>
    <vs-button
      danger
      border
      :active="active == 2"
      @click="active = 2"
    >
      Danger
    </vs-button>
    <vs-button
      warn
      gradient
      :active="active == 3"
      @click="active = 3"
    >
      Warn
    </vs-button>
    <vs-button
      dark
      shadow
      :active="active == 4"
      @click="active = 4"
    >
      Dark
    </vs-button>
    <vs-button
      color="#7d33ff"
      relief
      :active="active == 5"
      @click="active = 5"
    >
        HEX
    </vs-button>
    <vs-button
      color="rgb(59,222,200)"
      gradient
      :active="active == 6"
      @click="active = 6"
    >
      RGB
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
