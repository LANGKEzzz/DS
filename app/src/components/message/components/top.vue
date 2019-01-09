<template>
    <div class="top">
        <div class="top_top">            
            <h2>消息</h2>
        </div>
        <div class="loading" v-show="flag">
            <i class="fa fa-spinner fa-pulse"></i>
        </div>
        <ul>
            <li v-for="(item,index) in ulList">
                <router-link :to="item.path">
                    <div class="top_icon">
                        <img :src="item.src">
                    </div>
                    <b>{{item.title}}</b>
                    <div class="top_img">
                        <img src="../../../../static/icon/icon_jiantou1_reserver.png" alt="">
                    </div>
                </router-link>
                
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
               flag : false,
                ulList:[
                    {
                        "src":"../../../static/icon/xx_icon_dz@2x.png",
                        "title":"赞"  ,
                        "path" : "/message/focus"                                          
                    },
                    {
                        "src":"../../../static/icon/xx_icon_pl@2x.png",
                        "title":"评论",
                        "path" : "/message/messremind"                    
                    },
                    {
                        "src":"../../../static/icon/xx_@_fh@2x.png",
                        "title":"@我的",
                        "path" : "/message/remind" 
                    }
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
.top{
    width:100%;
    background:#f4f4f4;
    .top_top{
        width:100%;
        height:.88rem;
        background:#fff;
        color:#1E1E1E;
        text-align:center;
        h2{
            font-size:.34rem;
            height:100%;
            position:relative;
            line-height:.88rem;
            font-weight: 900;
            span{
                color:#101010;
                font-size:.42rem;
                position:absolute;
                top:.63rem;
                left:.24rem;
            }
        }
    }
    .loading{
        width:.3rem;
        height:.3rem;
        margin:.1rem auto 0;
    }
    ul{
        margin-top:.20rem;
        background:#fff;
        li{
            display:flex;
            margin-left:.24rem;
            height:1.28rem;
            border-bottom: 1px solid #f4f4f4;
            padding:.20rem 0;
            font-size:.24rem;
            color:#313131;
            line-height:.90rem;
            position:relative;
            a{
                display:block;
                width: 100%;
                height:100%;
                display: flex;
                .top_icon{
                    background:#63d7d4;
                    width:.88rem;
                    height:.88rem;
                    border-radius:50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                
                    img{
                        width:.42rem;
                        height:.42rem;
                    }
                }
                b{
                    font-weight: normal;
                    margin-left:.35rem;
                }
                .top_img{
                    width:.18rem;
                    height:.32rem;
                    position: absolute;
                    bottom:.40rem;
                    right:.24rem;
                    font-size:.32rem;
                    font-weight: bold;
                    color:#000;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
            
        }
    }
    
}
</style>

