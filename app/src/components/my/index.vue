<template>
    <div id="my">
        <Header-com></Header-com>
        <div class="wrapper" ref="box">  
            <div class="content bq">
                <Main-com></Main-com>
                <Main-com></Main-com>
            </div>
        </div>
    </div>
</template>
<script>
    //引入插件
    import BScroll from "better-scroll";
	import Header from "./components/header.vue";
    import Main from "./components/main.vue";
    import Vuex from "vuex";
export default {
      
    components:{
    	"Header-com":Header,
    	"Main-com":Main
    },
    mounted(){
        this.$nextTick(function(){
            this.scroll = new BScroll(this.$refs.box,{
            scrollY:true,
            click:true
            })
            console.log(this.scroll)
        })
        // console.log(this.scroll)
    }
}
</script>
<style lang="scss" >
   #my{
       width:100%;
       height:100%;
       font-family: PingFang-SC-Medium;
       .wrapper{
           height:9.7rem;
           .bq{
               padding-bottom:1rem;
           }
       }
   }
    
</style>