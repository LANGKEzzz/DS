<template>
    <div id="footer">
        <ul>
            <li v-for="(item,index) in navs" v-bind:key="index" @click="changeUrl(index)">
                <router-link :to="{name:item.name}">
                    <img :src="item.icon[0]" alt="" v-show="item.flag">
                    <img :src="item.icon[1]" alt="" v-show="!item.flag">
                    <span>{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navs:[
                {
                    flag:false,
                    name:"home",
                    title:"首页",
                    icon:[
                        "../../../static/icon/icon_shouye@2x.png",
                        "../../../static/icon/icon_shouye@2xl.png"
                    ]
                },
                {
                    flag:true,
                    name:"dynamic",
                    title:"动态",
                    icon:[
                        "../../../static/icon/icon_dongtai@2xh.png",
                        "../../../static/icon/icon_dongtai@2x.png"
                    ]
                },
                {
                    flag:true,
                    name:"release",
                    title:"",
                    icon:[
                        "../../../static/icon/icon_jiahao@2x.png",
                        "../../../static/icon/icon_jiahao@2x.png"
                    ]
                },
                {
                    flag:true,
                    name:"message",
                    title:"消息",
                    icon:[
                        "../../../static/icon/icon_xinxi@2x.png",
                        "../../../static/icon/icon_xinxi@2xl.png"
                    ]
                },
                {
                    flag:true,
                    name:"my",
                    title:"我的",
                    icon:[
                        "../../../static/icon/icon_xiaoxi@2x.png",
                        "../../../static/icon/icon_xiaoxi@2xl.png"
                    ]
                },
            ]
        }
    },
    methods: {
        changeUrl(index){
            this.navs.filter((item)=>{
                item.flag=true;
            })
            this.navs[index].flag = false;
            
        }
    },
}
</script>
<style lang="scss" scoped>
    #footer{
        width:100%;
        height:.98rem;
        background:rgba(250,250,250,1);
        position: fixed;
        left: 0;
        bottom: 0;
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content:space-between;
            align-items: center;
            li{
                width: 100%;
                height: 100%;
                text-align: center;
                padding-top: 0.1rem;
                .router-link-active{
                    color: #63D7D4;
                }
                img{
                    width: .5rem;
                    height: .5rem;
                    display: inline-block;
                }
                span{
                    display: block;
                }
            }
            li:nth-child(3) a{
                display: inline-block;
                width: .88rem;
                height: .88rem;
                background:rgba(0,255,255,1);
                border-radius:50%;
                img{
                    margin-top: .18rem;
                }
            }
        }
    }
</style>