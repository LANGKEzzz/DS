<template>
    <div class="message_main">
        <ul>
            <li v-for="(item,index) in ulList" @click="handle_push(index)">
                <div class="top_icon">
                    <img :src="item.src">
                </div>
                <b>{{item.title}}</b>
                <div class="top_img">
                    <img src="../../../../static/icon/icon_jiantou1_reserver.png" alt="">
                </div>
                <div class="show_num" >
                    <span class="num" v-show="flagNum">0</span>
                    <span class="spot" v-show="flagSpot"></span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{                
                flagNum: false,
                flagSpot: true,
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
        },
        methods:{           
            handle_push(index){
                this.$router.push(this.ulList[index].path)
            }
        }
        
    }
</script>
<style lang="scss" scoped>
.message_main{
    width:100%;
    height:3.84rem;
    // margin-top:.2rem;
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
            
            .show_num{
                .num{
                    display:block;
                    width:.34rem;
                    height:.34rem;
                    border-radius: 50%;
                    background:#F93A2B;
                    margin-left:.3rem;
                    margin-top:.25rem;
                    line-height: .34rem;
                    text-align:center;
                    color:#fff;
                    font-size:.24rem;
                }
                .spot{
                    display:block;                    
                    width:.1rem;
                    height:.1rem;
                    background:#F93A2B;
                    border-radius: 50%;
                    margin-top:.3rem;
                }
            }
        }
    }
}
</style>
