<template>
	<div class="wrapper att" ref="box">
		<div class="content">
			<Header-com></Header-com>
			<Inp-com></Inp-com>
			<Main-com></Main-com>
			<Main-com></Main-com>
	   </div>
		
		
		<router-view/>
	</div>
</template>

<script>
    import Bscroll from "better-scroll";
	import Header from "./components/header.vue";
	import Inp from "./components/inp.vue";
	import Main from "./components/main.vue";
	
	
export default{
	components:{
		"Header-com":Header,
		"Inp-com":Inp,
		"Main-com":Main
	},
	mounted(){
		// let wrapper = document.querySelector('.wrapper')
		// let scroll = new Bscroll(wrapper)
		this.scroll = new Bscroll(this.$refs.box,{
			scrollY:true,
			click:true
		})
		console.log(this.scroll)
	}
}
</script>

<style>
   #att{
	   width:100%;
	   height:100%；
   }
</style>