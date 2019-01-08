<template>
    <div class="message_mess">
        <h2>
             谁评论了我
            <router-link to="/message">
                <div class="mess_back">
                    <img src="../../../../static/message/icon_jiantou1@2x.png" alt="">
                </div>
            </router-link>           
        </h2>
        <ul class="comment_">
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
                    <div>
                        <router-link to="/my">
                            <span>{{item.Nickname}}:</span>
                        </router-link>
                        <p>{{item.content}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    data(){
        return{
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
        position:relative;
        background:#fff;
        .mess_back{
            position:absolute;
            left:.24rem;
            bottom:.23rem;
        }
    }
    .comment_{
        width:100%;
        margin-top:.2rem;
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

</style>