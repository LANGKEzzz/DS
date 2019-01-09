<template>
	<div id="newList">
		<Header-com></Header-com>
		<Inp-com></Inp-com>
		<Main-com></Main-com>
		<router-view/>
	</div>
</template>

<script>
	import Header from "./components/header.vue";
	import Inp from "./components/inp.vue";
	import Main from "./components/main.vue";
	
	
export default{
	components:{
		"Header-com":Header,
		"Inp-com":Inp,
		"Main-com":Main
	}
}
</script>

<style>
</style>