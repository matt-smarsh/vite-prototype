<script lang="ts">
import Vue from "vue"
import HelloWorld from "@/components/HelloWorld.vue"

export default Vue.extend({
	components: { HelloWorld },
})
</script>

<template lang="pug">
#app
	img(alt="Vue logo" src="./assets/logo.png")
	HelloWorld(msg="Hello Vue 2 + TypeScript + Vite")
</template>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: $text-color;
	margin-top: 60px;
}
</style>
