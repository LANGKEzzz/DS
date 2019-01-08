<template>
	<div id="header">
		<Header-com></Header-com>
		<Main-com></Main-com>
		<Inp-com></Inp-com>
		<router-view></router-view>
	</div>
</template>

<script>
	import Header from "./components/header.vue";
	import Main from "./components/main.vue";
	import Inp from "./components/inp.vue";
	
	export default{
	    components:{
	    	"Header-com":Header,
	    	"Main-com":Main,
	    	"Inp-com":Inp
	    }
	}
</script>

<style>
	
</style>