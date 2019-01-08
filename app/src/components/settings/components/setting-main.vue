<template>
    <div class="main">
        <ul>
            <li v-for="(item,index) in list">
                <router-link :to="{name:item.name}">
                    {{item.title}}
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
                    name:"aS",
                    title:"账号与安全"
                },
                                {
                    name:"messageS",
                    title:"消息设置"
                },
                                {
                    name:"generalS",
                    title:"通用设置"
                },
                                {
                    name:"shieldS",
                    title:"屏蔽设置"
                },
                                {
                    name:"pictureS",
                    title:"图片设置"
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
        margin-top:.2rem;
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
                 a{
                    display: block;
                    height:100%;
                    width:100%;
                }
            }
           
        }
    }
    .main>ul>li>a{
        color:#313131;
    }
</style>
