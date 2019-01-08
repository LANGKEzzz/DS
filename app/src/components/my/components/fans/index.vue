<template>
	<div id="fans">
		<Header-com></Header-com>
		<Main-com></Main-com>
		<router-view></router-view>
	</div>
</template>

<script>
	import Header from "./components/header.vue";
	import Main from "./components/main.vue";
	
	export default{
		components:{
			"Header-com":Header,
			"Main-com":Main
		}
	}
</script>

<style>
</style>