<template>
    <div id="att">
		<Header-com></Header-com>	
		<Inp-com></Inp-com>
		<div class="wrapper" ref="box">
			<div class="content bq">
				<Main-com></Main-com>
				<!-- <Main-com></Main-com>
				<Main-com></Main-com>
				<Main-com></Main-com>
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
	}
}
</script>

<style lang="scss" scoped>
   #att{
	   width:100%;
	   height:100%;
	   .wrapper{
		   height:12rem;
           .bq{
			   padding-bottom:0.95rem;
		   }
	   }
	   
   }
</style>