<template>
    <div class="message_focus" >
        <h2>
            赞   
            <div class="focus_back" @click="handle_Back()">
                <img src="../../../../static/message/icon_jiantou1@2x.png" alt="">
            </div>
        </h2>

        <div class="loading" v-show="flag">
            <i class="fa fa-spinner fa-pulse"></i>
        </div> 
         <div class="wrapper_focus" ref="focusWrapper">
             <FocusList-com class="focus_ "></FocusList-com>
        </div>         
    </div>
</template>
<script>
import FocusList from "./focuslist"
import BScroll from 'better-scroll';

export default{
    components:{
        "FocusList-com" : FocusList
    },
    data(){
        return{
            flag : false         
        }
    },
    methods:{
        handle_Back(){
            this.$router.back("/message");
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.focusWrapper,{
            pullDownRefresh : true,
            // pullDownRefresh : {
            //     threshold: 40,
            //     stop:20
            // },
            click:true
        })
       
    }
}
</script>
<style lang="scss" scoped>
.message_focus{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background:#f4f4f4;
    // background:pink;
    h2{
        width:100%;
        height:1.28rem;
        text-align:center;
        font-size:.34rem;
        font-weight: 900;
        color:#1E1E1E;
        line-height:1.7rem;
        position:fixed;
        top:0;
        left:0;
        z-index:9;
        background:#fff;
        .focus_back{
            position:absolute;
            left:.24rem;
            bottom:.23rem;
            img{
                width:.24rem;
                height:.42rem;
            }
        }
    }
    .loading{
        width:.3rem;
        height:.3rem;
        position:fixed;
        top:1.4rem;
        left:50%;
        background:#f4f4f4;
    }
    .wrapper_focus{
        height:12rem;
        margin-top:1.48rem; 
        background:#f4f4f4;
        // padding-top:.2rem;  
        .focus_{
           flex:1;
        }
    }    
}
</style>