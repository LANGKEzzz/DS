
<template>
 <div class="generalS">
    <div class="header">
        <router-link to="/settings">
            <div class="header_pic">
                <img src="../../../../static/icon/icon_jiantou1@2x.png"/>
            </div>
        </router-link>
      <p>字体设置</p>
    </div>
     <div class="main">
        
        <ul>
            <li v-for="(item,index) in list">
                <router-link :to="{name:item.name}">
                    {{item.title}}
                    <!-- <img :src="item.url"> -->
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
                    
                    title:"大",
                    // messsage:"我关注的人",
                    // url:"../../../../../static/icon/icon_jiantou1_reserver.png"
                },
                {
                    // name:"phomeAS",
                    title:"中",
                    // messsage:"所有人",
                    // url:"../../../../../static/icon/icon_jiantou1_reserver.png"

                },
                                {
                    // name:"phomeAS",
                    title:"小",
                    // messsage:"所有人",
                    // url:"../../../../../static/icon/icon_jiantou1_reserver.png"

                }
   
  

            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .generalS{
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
                        font-size:.34rem;
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
                        bottom:.23rem;
                    }
                }
                .main{
                    width:7.5rem;
                    height:4.9rem;
                    margin-top:.24rem;
                    p{
                        padding-left:.24rem;
                        padding-bottom: .17rem;
                        font-size:.2rem;
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
                            font-size:.24rem;
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
                }
    }
  
</style>