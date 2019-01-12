<template>
	<div id="chat">
		<Header-com></Header-com>
         <div class="wrapper" ref="box">  
            <div class="content">
                <Main-com></Main-com>	
            </div>
        </div>
		<Inp-com></Inp-com>
		
	</div>
</template>

<script>
    import BScroll from "better-scroll";
	import Header from "./components/header.vue";
	import Main from "./components/main.vue";
	import Inp from "./components/inp.vue";
	
	export default{
	    components:{
	    	"Header-com":Header,
	    	"Main-com":Main,
	    	"Inp-com":Inp
		},
		mounted(){
			// let wrapper = document.querySelector('.wrapper')
			// let scroll = new BScroll(wrapper)
			this.scroll = new BScroll(this.$refs.box,{
				scrollY:true,
				click:true
			})
			console.log(this.scroll)
        }
	}
</script>

<style lang="scss" scoped>
   #chat{
       width:100%;
       height:100%;
       font-family: PingFang-SC-Medium;
       .wrapper{
           height:11rem;
       }
   }
    
</style>