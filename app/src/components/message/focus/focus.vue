<template>
    <div class="message_focus" >
        <h2>
             谁赞了我   
            <div class="focus_back" @click="handle_Back()">
                <img src="../../../../static/message/icon_jiantou1@2x.png" alt="">
            </div>
        </h2>
        <div class="loading" v-show="flag">
            <i class="fa fa-spinner fa-pulse"></i>
        </div>
        <div class="wrapper_focus" ref="focusWrapper">
            <ul class="focus_ " >
                <li v-for="(item,index) in focus_list">
                    <div class="focus_img">
                        <img :src="item.url" alt="">
                    </div>
                    <div class="focus_focus">
                        <p>{{item.people}}赞了你的帖子</p>
                        <p>
                            <img src="../../../../static/message/icon_ax@2x.png" alt="">
                            +1
                        </p>
                    </div>
                    <span>{{item.time}}</span>
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
import BScroll from 'better-scroll';

export default{
    data(){
        return{
            flag : false,
            focus_list:[
                {
                    "url":"../../../../static/message/xx_tx_01@2x.png",
                    "people":"林更新",
                    "time":"12:00"
                },
                {
                    "url":"../../../../static/message/xx_tx_06@2x.png",
                    "people":"林更新",
                    "time":"12:00"
                },
                {
                    "url":"../../../../static/message/xx_tx_01@2x.png",
                    "people":"林更新",
                    "time":"12:00"
                },
                {
                    "url":"../../../../static/message/xx_tx_06@2x.png",
                    "people":"林更新",
                    "time":"12:00"
                },
                {
                    "url":"../../../../static/message/xx_tx_01@2x.png",
                    "people":"林更新",
                    "time":"12:00"
                },
                {
                    "url":"../../../../static/message/xx_tx_06@2x.png",
                    "people":"林更新",
                    "time":"12:00"
                },
                {
                    "url":"../../../../static/message/xx_tx_06@2x.png",
                    "people":"林更新",
                    "time":"12:00"
                },
                {
                    "url":"../../../../static/message/xx_tx_06@2x.png",
                    "people":"林更新",
                    "time":"12:00"
                },
                {
                    "url":"../../../../static/message/xx_tx_06@2x.png",
                    "people":"林更新",
                    "time":"12:00"
                },
                {
                    "url":"../../../../static/message/xx_tx_06@2x.png",
                    "people":"林更新",
                    "time":"12:00"
                }
            ]
        }
    },
    methods:{
        handle_Back(){
            this.$router.back("/message");
        }
    },

    mounted() {
        this.scroll = new BScroll(this.$refs.focusWrapper,{
            pullDownRefresh : {
                threshold: 20,
                stop:0
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.message_focus{
    width:100%;
    height:100%;
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
        margin:.1rem auto 0;
        background:#f4f4f4;
    }
    .wrapper_focus{
        height:12rem;
        margin-top:1.28rem; 
        background:#f4f4f4;
        padding-top:.2rem;  
        .focus_{
            // margin-top:.2rem;
            background:#fff;
            li{
                width:100%;
                height:1.68rem;
                border-bottom:1px solid #f4f4f4;
                display:flex;
                position: relative;
                .focus_img{
                    width:1.2rem;
                    height:1.2rem;
                    border-radius: 50%;
                    margin:.24rem;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .focus_focus{
                    p:nth-child(1){
                        font-size:.24rem;
                        color:#313131;
                        // font-weight:600;
                        // line-height:.79rem;
                        margin-top:.55rem;
                    }
                    p:nth-child(2){
                        display: flex;
                        margin-top:.17rem;
                        color:#717171;
                        font-size:.21rem;
                        img{
                            width:.26rem;
                            height:.21rem;
                            margin-right:.1rem;
                        }
                    }                
                }
                span{
                    position:absolute;
                    top:.75rem;
                    right:.24rem;
                }
            }
        }
    }    
}
</style>