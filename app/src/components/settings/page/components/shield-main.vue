<template>
    <div class="main">
        <div>
            <img src="../../../../../static/icon/icon_tianjia@2x.png"/>
            <b>添加屏蔽用户</b>

        </div>
        <p>已屏蔽用户</p>
        <ul>
            <li v-for="(item,index) in list">
                <router-link :to="{name:item.name}">
                    {{item.title}}
                    <img :src="item.url">
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {
                    
                    title:"@我的",
                    // messsage:"我关注的人",
                    url:"../../../../../static/icon/icon_jiantou1_reserver.png"
                },
                {
                    // name:"phomeAS",
                    title:"评论",
                    // messsage:"所有人",
                    url:"../../../../../static/icon/icon_jiantou1_reserver.png"

                }
   
  

            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .main{
        width:7.5rem;
        height:4.9rem;
        margin-top:.53rem;
        div{
            padding-left:.24rem;
            margin-bottom:.42rem;
            position:relative;
            img{
                display:inline-block;   
            }
            b{
                font-size:.24rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(49,49,49,1);
                position:absolute;
                left:.76rem;
                bottom:0.08rem;
            }
        }
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
</style>v