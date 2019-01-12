<template>
    <div class="message_mess">
        <h2>
             谁评论了我
                <div class="mess_back" @click="back_()">
                    <img src="../../../../static/message/icon_jiantou1@2x.png" alt="">
                </div>
        </h2>
        <div class="loading" v-show="flag">
            <i class="fa fa-spinner fa-pulse"></i>
        </div>
        <div class="wrapper_" ref="messremind">        
            <ul class="comment_" >
                <li v-for="(item,index) in comment">
                    <div class="comment_p">
                        <div class="comment_img">
                            <img :src="item.url" alt="">
                        </div>
                        <div class="comment_conent">
                            <span>{{item.people}}</span>
                            <span>评论：</span>
                            <span>{{item.timer}}</span>                                              
                        </div>                                                       
                    </div> 
                    <p class="comment_disc">{{item.discuss}}</p>                
                    <div class="comment_m">
                        <img :src="item.src_list" alt="">
                        <div @click="handlePush()">
                                <span>{{item.Nickname}}:</span>
                            <p>{{item.content}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
export default{
    data(){
        return{
            flag : false,
            comment:[
                {
                    "url" : "../../../../static/message/xx_tx_06@2x.png",
                    "people" : "土豆土豆",
                    "timer" : "2019.1.8",
                    "discuss":"地瓜地瓜地瓜地瓜",
                    "src_list" : "../../../../static/tu_01@2x.png",
                    "Nickname" : "地瓜地瓜",
                    "content" : "中国铁路济南局集团,已终止权健动车组冠名 全部撤除中国铁路济南局集团"
                },
                {
                    "url" : "../../../../static/message/xx_tx_06@2x.png",
                    "people" : "土豆土豆",
                    "timer" : "2019.1.8",
                     "discuss":"地瓜地瓜地瓜地瓜",
                    "src_list" : "../../../../static/tu_01@2x.png",
                    "Nickname" : "地瓜地瓜",
                    "content" : "中国铁路济南局集团,已终止权健动车组冠名 全部撤除中国铁路济南局集团"
                },
                {
                    "url" : "../../../../static/message/xx_tx_06@2x.png",
                    "people" : "土豆土豆",
                    "timer" : "2019.1.8",
                     "discuss":"地瓜地瓜地瓜地瓜",
                    "src_list" : "../../../../static/tu_01@2x.png",
                    "Nickname" : "地瓜地瓜",
                    "content" : "中国铁路济南局集团,已终止权健动车组冠名 全部撤除中国铁路济南局集团"
                },
                {
                    "url" : "../../../../static/message/xx_tx_06@2x.png",
                    "people" : "土豆土豆",
                    "timer" : "2019.1.8",
                     "discuss":"地瓜地瓜地瓜地瓜",
                    "src_list" : "../../../../static/tu_01@2x.png",
                    "Nickname" : "地瓜地瓜",
                    "content" : "中国铁路济南局集团,已终止权健动车组冠名 全部撤除中国铁路济南局集团"
                }
            ]
        }
    },
    methods:{
        back_(){
            this.$router.back();
        },
        handlePush(){
            this.$router.push("/my");
        }       
    },
    mounted(){
        this.scroll= new Bscroll( this.$refs.messremind,{
            pullDownRefresh: {
                threshold: 20,
                stop:0,
                
            },
            pullUpLoad:true,
            click:true
        } )
    }
}
</script>
<style lang="scss" scoped>
.message_mess{
    width:100%;
    background:#f4f4f4;
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
        // position:relative;
        background:#fff;
        // background:red;
        .mess_back{
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
    .wrapper_{  
        height:11.76rem;
         margin-top:1.48rem;        
        background:#f4f4f4;
        padding-top:.2rem;  
        //  background:pink;
        .comment_{
            width:100%;
           
            background:#f4f4f4;
            li{
                padding:.24rem;
                background:#fff;
                margin-bottom:.2rem;
                position: relative;
                .comment_p{
                display:flex;
                .comment_img{
                        width:.9rem;
                        height:.9rem;
                        border-radius: 50%;
                        margin-bottom:.2rem;
                        margin-right:.2rem;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    .comment_conent{
                        box-sizing:border-box;
                        line-height:.9rem;
                        span:nth-child(3){
                            position:absolute;
                            right:.24rem;
                            top:.2rem;
                        }           
                    }
                }
                .comment_disc{
                    color:#313131;
                    font-size:.24rem;
                    margin:.2rem;      
                }
                .comment_m{
                display:flex;
                img{
                    width:2rem;
                    height:2rem;
                    } 
                    div{
                        width:2rem;
                        height:2rem;
                        box-sizing:border-box;
                        margin-left:.2rem;
                        line-height:.3rem;
                        display:flex;
                        flex-direction: column;
                        justify-content: center;                                           
                        span{
                            font-size:.3rem;
                            font-weight: 600;
                                                
                        }                                   
                        p{
                            padding-top:.3rem;
                            font-size:.24rem;
                            width:4rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }               
                } 
            }
        }
    }    
}

</style>