<template>
	<div id="newList">
		<Header-com></Header-com>
		<Inp-com></Inp-com>
		<div class="wrapper" ref="box">
<<<<<<< HEAD
			<div class="content">
=======
			<div class="content bq">
>>>>>>> 716a0de049a9848d8cd78d9e02c43585fa045a97
				<Main-com></Main-com>
				<!-- <Main-com></Main-com>
				<Main-com></Main-com> -->
			</div>
           
		</div>
	</div>
</template>

<script>
     import BScroll from "better-scroll"; 
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
			let wrapper = document.querySelector('.wrapper')
			let scroll = new BScroll(wrapper)
			this.scroll = new BScroll(this.$refs.box,{
				scrollY:true,
				click:true
			})
			console.log(this.scroll)
        }
}
</script>

<style lang="scss" scoped>
   #newList{
	   width:100%;
	   height:100%;
	   .wrapper{
		   height:12rem;
<<<<<<< HEAD
		    .content{
			   height: 100rem;
=======
		    .bq{
			 padding-bottom: 38rem;
>>>>>>> 716a0de049a9848d8cd78d9e02c43585fa045a97
		   }
	   }
   }
</style>