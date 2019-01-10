<template>
    <div id="comment">
        <div class="main"  @click="handleInput()">
            <div class="header">
                <img src="../../../../static/icon/icon_jiantou1@2x.png" alt="" @click="goback()">
                <h2>{{item.nickname}}</h2>
            </div>
            <div class="mainT">
                <p>{{item.content}}</p>
                <img :src="item.pic[0]" alt="">
            </div>
            <ul class="mainM">
                <li v-for="(itm,index) in item.handle[1].con" v-bind:key="index">
                    <div class="mainM_T">
                        <img :src="itm.photo" alt="">
                        <div>
                            <h2>{{itm.nickname}}</h2>
                            <p>{{itm.infor}}</p>
                        </div>
                    </div>
                    <span>{{itm.time}}</span>
                    <!-- <ul>
                        <li></li>
                    </ul> -->
                </li>
            </ul>

        </div>
        <div>
            <ul class="mainB" v-show="flag">
                <li @click.stop="jump(1)">
                    <img src="@/assets/icon/icon_zf@2x.png" alt="">
                    <span>转发</span>
                </li>
                <li @click.stop="jump(2)">
                    <img src="@/assets/icon/icon_pl@2x.png" alt="">
                    <span>评论</span>
                </li>
                <li @click.stop="jump(3)">
                    <img src="@/assets/icon/icon_dz@2x.png" alt="">
                    <span>点赞</span>
                </li>
            </ul>
        </div>
        <div class="input" v-if="!flag">
            <i class="sound"></i>
            <input type="text" v-focus>
            <i class="face"></i>
            <button class="btn">发送</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            item:'',
            flag:true,
        }
    },
    directives: {
        // 注册一个局部的自定义指令 v-focus
        focus: {
            // 指令的定义
            inserted: function (el) {
                console.log(el)
            // 聚焦元素
            el.focus()
            }
        }
    },

    created() {
        let item = this.$route.params.itm
        this.item = item
    },
    methods: {
        goback(){
            this.$router.go(-1)
        },
        jump(val){
            if(val==1){
                this.$router.push({
                    "name":"transpond",
                    params:{
                        itm:this.item
                    }
                })
            }else if(val==2){
                this.flag = false
            }
        },
        handleInput(){
            if(this.flag == false){
                this.flag = true
            }else{
                return
            }
        }

    },
}
</script>
<style lang="scss" scoped>
    #comment{
        width: 100%;
        height: 100%;
        overflow: auto;
        .main{
            background: #f4f4f4;
            .header{
                width: 100%;
                height: .88rem;
                line-height: .88rem;
                text-align: center;
                background:rgba(255,255,255,1);
                display: flex;
                align-items: center;
                padding: 0 .24rem;
                margin-top: .4rem;
                h2{
                    color: #1E1E1E;
                    font-size: .34rem;
                    margin-left: 2.32rem;
                    font-weight: bold;
                }
                img{
                    width: .18rem;
                    height: .32rem;
                }
            }
            .mainT{
                width: 100%;
                padding: 0 .24rem;
                margin-top: .19rem;
                background:rgba(255,255,255,1);
                p{
                    text-indent:.48rem;
                    line-height: .5rem;
                    color: #818181;
                }
                img{
                    width: 100%;
                    height: 2.9rem;
                }
            }
            .mainM{
                width: 100%;
                margin-top: .24rem;
                //overflow: auto;
                height: auto;
                li{
                    width: 100%;
                    height: 1.62rem;
                    padding: 0 .24rem;
                    background:rgba(255,255,255,1);
                    margin-bottom: .2rem;
                    padding-top: .19rem;
                    .mainM_T{
                        width: 100%;
                        height: .94rem;
                        display: flex;
                    
                        img{
                            width: .94rem;
                            height: .94rem;
                        }
                        div{
                            margin-left: .19rem;
                            line-height: .44rem;
                            h2{
                                font-size: .24rem;
                                font-weight: bold;
                            }
                            p{
                                font-size: .24rem;
                                line-height: .25rem;
                            }
                        }
                    }
                }
                
            }
        }
        .mainB{
            width: 100%;
            height: .88rem;
            display: flex;
            justify-content: space-around;
            margin-top: .24rem;
            border-top: .01rem solid #ccc;
            position: fixed;
            bottom: 0;
            background:rgba(255,255,255,1);
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
        .input{
            position: fixed;
            bottom: 0;
            height: .88rem;
            width: 100%;
            background: #d1d6db;
            input{
                width: 4.64rem;
                height: .53rem;
                border: none;
                margin-left: .2rem;
                margin-top: .17rem;
                outline: none;
                font-size: .34rem;
            }
            .sound{
                width: .59rem;
                height: .59rem;
                display: inline-block;
                background: url("../../../../static/dynamicImg/sy.png") no-repeat center center;
                vertical-align: middle;
                margin-bottom: .08rem;
                margin-left: .2rem;
                background-size:cover;
            }
            .face{
                width: .59rem;
                height: .59rem;
                display: inline-block;
                background: url("../../../../static/dynamicImg/bq.png") no-repeat center center;
                vertical-align: middle;
                margin-bottom: .08rem;
                background-size:cover;
                margin-left: .1rem;
            }
            .btn{
                width: .69rem;
                height: .59rem;
                margin-left: .15rem;
            }
        }
    }
</style>