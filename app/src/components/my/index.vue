<template>
    <div class="wrapper my" ref="box">
        <div class="content">
            <Header-com></Header-com>
            <Main-com></Main-com>
            <Main-com></Main-com>
        </div>
    </div>

    
       
        
    <!-- <div class="wrapper" ref="box">
        <Header-com></Header-com>
        <div class="content">
            <Main-com></Main-com>
            <Main-com></Main-com>
        </div>
    </div> -->
            
    
  
</template>
<script>
    //引入插件
    import Bscroll from "better-scroll";
	import Header from "./components/header.vue";
    import Main from "./components/main.vue";
    
export default {
    components:{
    	"Header-com":Header,
    	"Main-com":Main
    },
    mounted(){
        let wrapper = document.querySelector('.wrapper')
        let scroll = new Bscroll(wrapper)
        this.scroll = new Bscroll(this.$refs.box,{
            scrollY:true,
            click:true
        })
        console.log(this.scroll)
    }
}
</script>
<style lang="scss">
   .my{
       width:100%;
       height:100%;
   
   }
    
</style>