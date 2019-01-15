<template>
	<div id="collect"> 
        <Header-com></Header-com>
        <div class="wrapper" ref="box">
           <div class="content">
                <Main-com></Main-com>
                <!-- <Main-com></Main-com>
                <Main-com></Main-com>
                <Main-com></Main-com> -->
           </div>
        </div>
    </div>
</template>

<script>
     import BScroll from "better-scroll";
	 import Header from "./components/header.vue";
     import Main from "./components/main.vue";

     export default{
       components:{
           "Header-com":Header,
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
     #collect{
         width:100%;
         height:100%;
         .wrapper{
             height:12.26rem;
         }
     }
</style>