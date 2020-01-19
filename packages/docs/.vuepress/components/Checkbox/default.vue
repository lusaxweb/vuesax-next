<template>
  <div class="center">
    <vs-checkbox :loading="boolean" v-model="booleanColor">
      Github
    </vs-checkbox>
    <vs-checkbox indeterminate val="google" v-model="actives">
      Google
    </vs-checkbox>
    <vs-checkbox disabled val="facebook" v-model="actives">
      Facebook
    </vs-checkbox>
    <vs-checkbox danger val="facebook" v-model="actives">
      Cancel
      <template #icon>
        <i class='bx bx-x'></i>
      </template>
    </vs-checkbox>
    <vs-checkbox line-through success v-model="boolean">
      Check
      <template #icon>
        <i class='bx bx-check-double' ></i>
      </template>
    </vs-checkbox>
  </div>
</template>
<script>
export default {
  data:() => ({
    boolean: false,
    booleanColor: true,
    active: 'none',
    actives: []
  })
}
</script>
