<template>
    <div id="praise"> 
        <Header-com></Header-com>
        <div class="wrapper" ref="box">
           <div class="content bq">
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
    #praise{
        width:100%;
        height:100%;
        .wrapper{
            height:12rem;
            .bq{
                padding-bottom: 136.8rem;
            }
        }
    }
     #praise{
         width:100%;
         height:100%;
         .wrapper{
             height:12rem;
            
            
         }
     }
     
</style>