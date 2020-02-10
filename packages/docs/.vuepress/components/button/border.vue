<template>
	<div class="center">
		<vs-button
      border
      :active="active == 0"
      @click="active = 0"
    >
			Active
		</vs-button>
		<vs-button
      border
      :active="active == 1"
      @click="active = 1"
    >
			Default
		</vs-button>
		<vs-button
      border
      disabled
    >
			Disabled
		</vs-button>
	</div>
</template>
<script>
export default {
	data: () => ({
		active: 0,
	}),
}
</script>
<style lang="stylus">
  *
    box-sizing border-box !important
</style>
