<template>
  <div class="center con-avatars">
    <vs-avatar primary>
      <template #text>
        Primary
      </template>
    </vs-avatar>
    <vs-avatar success>
      <template #text>
        Success
      </template>
    </vs-avatar>
    <vs-avatar danger>
      <template #text>
        Danger
      </template>
    </vs-avatar>
    <vs-avatar warn>
      <template #text>
        Warn
      </template>
    </vs-avatar>
    <vs-avatar dark>
      <template #text>
        Dark
      </template>
    </vs-avatar>
    <vs-avatar color="#7d33ff">
      <template #text>
        HEX
      </template>
    </vs-avatar>
    <vs-avatar color="rgb(59,222,200)">
      <template #text>
        RGB
      </template>
    </vs-avatar>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="stylus">
  .con-avatars
    .vs-avatar-content
      margin 10px
</style>
