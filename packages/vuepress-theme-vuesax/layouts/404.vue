<template>
  <div class="theme-container">
    <div class="content">
      <h1>404</h1>
      <router-link to="/">Take me home.</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  methods: {
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
