<template>
  <div class="center">
    <vs-checkbox v-model="option1">
      Primary
    </vs-checkbox>
    <vs-checkbox success v-model="option2">
      Success
    </vs-checkbox>
    <vs-checkbox danger v-model="option3">
      Danger
    </vs-checkbox>
    <vs-checkbox warn v-model="option4">
      warning
    </vs-checkbox>
    <vs-checkbox dark v-model="option5">
      dark
    </vs-checkbox>
    <vs-checkbox color="#7d33ff" v-model="option6">
      HEX
    </vs-checkbox>
    <vs-checkbox color="rgb(59,222,200)" v-model="option7">
      RGB
    </vs-checkbox>
  </div>
</template>
<script>
export default {
  data:() => ({
    option1: true,
    option2: true,
    option3: true,
    option4: true,
    option5: true,
    option6: true,
    option7: true
  })
}
</script>
