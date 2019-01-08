<template>
    <div id="main">
        <div v-for="(item,index) in data" v-bind:key="index" class="main">
            <div class="mainT">
                <img :src="item.photo" alt="">
                <div class="nicW">
                   <h2 class="nickname">{{item.nickname}}</h2>
                   <p>
                        <span>{{item.time}}</span>
                        <span>{{item.phone}}</span>
                   </p> 
                </div>
                <div class="operation" @click="handle()">
                    <img src="../../../../static/icon/icon_xl@2x.png" alt="">
                </div>
            </div>
            <p class="con">{{item.content}}</p>
            <ul class="mainM">
                <li v-for="(Img,index) in item.pic" v-bind:key="index">
                    <img :src="Img" alt="">
                </li>
            </ul>
            <ul class="mainB">
                <li v-for="(itm,index) in item.handle" v-bind:key="index">
                    <router-link :to="{name:itm.name,params:{itm:item}}">
                        <img :src="itm.url" alt="">
                        <span>{{itm.count}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="mask" v-if="!flag" @click="handleConceal()">
            <ul class="inforList">
                <li v-for="(item,index) in list" v-bind:key="index">
                    <router-link to="">
                        {{item.title}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data:Array
    },
    data(){
        return{
            flag:'true',
            list:[
                {
                    name:"collect",
                    title:"收藏"
                },
                {
                    name:"shield",
                    title:"屏蔽"
                },
                {
                    name:"report",
                    title:"举报"
                }
            ]
        }
    },
    methods: {
        handle(){
            this.flag = !this.flag
        },
        handleConceal(){
            this.flag = !this.flag
        }
    },
}
</script>
<style lang="scss" scoped>
    #main{
        .main{
            width:100%;
            background:rgba(255,255,255,1);
            box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.15);
            padding: .24rem .24rem 0 .24rem;
            margin-top: .2rem;
            .mainT{
                width: 100%;
                display: flex;
                img{
                    width: .9rem;
                    height: .9rem;
                }
                .nicW{
                    margin-left: .24rem;
                    h2{
                        font-size: .24rem;
                        color:rgba(49,49,49,1);
                        line-height: .45rem;
                        margin-top: .1rem;
                    }
                    p{
                        font-size: .2rem;
                        color:rgba(113,113,113,1);
                    }
                }
                .operation{
                    margin-left: 2.98rem;
                    img{
                        width: .2rem;
                        height: .14rem;
                    }
                }
            }
        }
        .con{
            font-size:.24rem;
            color:rgba(49,49,49,1);
            font-weight: 600;
            line-height: .64rem
        }
        .mainM{
            width: 100%;
            display: flex;
            // justify-content: space-between;
            flex-wrap: wrap;
            li{
                padding: .02rem;
                img{
                    
                    width: 2.3rem;
                    height: 2.3rem;
                }
            }
        }
        .mainB{
            width: 100%;
            height: .75rem;
            display: flex;
            justify-content: space-around;
            margin-top: .24rem;
            border-top: .01rem solid #f4f4f4;
            li{
                line-height: .75rem;
               img{
                   display: inline-block;
                   width: .33rem;
                   height: .33rem;
                   vertical-align: middle;
               }
               span{
                   height: 100%;
                   display: inline-block;
                
               }
            }
        }
        .mask{
            position: fixed;
            top:0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            z-index: 1;
            .inforList{
                width:4.72rem;
                height:2.96rem;
                background:rgba(255,255,255,1);
                border-radius:40px;
                position: absolute;
                top:50%;
                left:50%;
                margin-top: -1.48rem;
                margin-left: -2.36rem;
                li{
                    height: .98rem;
                    width: 100%;
                    line-height: .98rem;
                    text-align: center;
                    border-bottom: 0.01rem solid #F4F4F4;
                    a{
                        font-size: .32rem;
                        color: #313131;
                        font-weight: bold;
                    }
                }
                li:nth-child(3){
                    border-bottom:none;
                }
            }
        }
    }
</style>