<template>
    <div class="message">       
        <Top-com></Top-com>
        <div class="loading" v-show="flag">
            <i class="fa fa-spinner fa-pulse"></i>
        </div>
        <div class="wrapper" ref="message_box">
            <div class="content">
                <Main-com></Main-com>
                <List-com></List-com>
            </div>  
        </div>                      
    </div>
</template>
<script>
import Top from "./components/top"
import Main from "./components/main"
import List from "./components/list"
import Bscroll from "better-scroll";
export default {
    components:{
        "Top-com" : Top,
        "Main-com" : Main,
        "List-com" : List
    },   
    data(){
        return{
            flag : false
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.message_box,{
            scrollY:true,
            pullDownRefresh:{
                threshold: 50,
                stop:0
            },
            click:true,
            pullUpLoad:true              
        });
    }
}
</script>
<style lang="scss" scoped>
    .message{
        width:100%;
        height:100%;
        background:#f4f4f4;
        display:flex;
        flex-direction: column;
        .loading{
            width:.3rem;
            height:.3rem;
            margin:.1rem auto 0;
        }
        .wrapper{
            height:12rem; 
            margin-top:1rem;         
        }
    }
   
   
</style>