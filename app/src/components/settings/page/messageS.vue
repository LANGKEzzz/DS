<template>
  <div class="message">
    <div class="header">
        
            <div class="header_pic" @click="handleJump">
                <img src="../../../../static/icon/icon_jiantou1@2x.png"/>
            </div>
        
      <p>消息设置</p>
    </div>
    <div class="main">
        <p>互动提醒</p>
        <ul>
            <li v-for="(item,index) in list">
                <router-link :to="{name:item.name}">
                    {{item.title}}
                    <img :src="item.url">
                </router-link>
            </li>
        </ul>
    </div>
   </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {
                    name:"aiteset",
                    title:"@我的",
                    // messsage:"我关注的人",
                    url:"../../../../static/icon/icon_jiantou1_reserver.png"
                },
                {
                    name:"aiteset",
                    title:"评论",
                    // messsage:"所有人",
                    url:"../../../../static/icon/icon_jiantou1_reserver.png"

                }
   
  

            ]
        }
    },
    methods:{
        handleJump(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../common/css/fontSize.scss";
    .message{
        width:7.5rem;
        height:13.34rem;;
        background: #eee;
         .header {
            width: 7.5rem;
            height: 1.28rem;
            // text-align: center;
            background:rgba(255,255,255,1);
            box-shadow:0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
            position:relative;
            p {
                font-size: $font_size_34;
                color:rgba(30,30,30,1);
                display:inline-block;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                // line-height:1.7rem;
                position:absolute;
                left: 3.08rem;
                bottom:.29rem;
                
            }
            .header_pic{
                width:.24rem;
                height:.42rem;
                display:inline-block;
                position:absolute;
                left: 0.24rem;
                bottom:.31rem;
                 img{
                   width:.24rem;
                   height:.42rem; 
                }
            }
        }
        .main{
            width:7.5rem;
            height:4.9rem;
            margin-top:.51rem;
            p{
                padding-left:.24rem;
                padding-bottom: .17rem;
                font-size:$font_size_20;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(113,113,113,1);
            }
            ul{
                width:100%;
                height:100%;
                li{
                    width:100%;
                    height:.88rem;
                    background:rgba(255,255,255,1);
                    box-shadow:0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
                    border-bottom:1px solid #eee;
                    line-height:.88rem;
                    padding-left:.25rem;
                    font-size:$font_size_24;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    position: relative;
                    img{
                        display:inline-block;
                        position:absolute;
                        right:.24rem;
                        bottom:.33rem;
                    }
                    
                }
            }
        }
        .main>ul>li>a{
            color:#313131;
            width:100%;
            height:100%;
            display:inline-block;
        }           
    }
   
</style>