<template>
    <div class="message_remind">
        <h2>
             @我的
                <div class="remind_back" @click="handleBack()">
                    <img src="../../../../static/message/icon_jiantou1@2x.png" alt="">
                </div>
        </h2>
        <div class="loading" v-show="flag">
            <i class="fa fa-spinner fa-pulse"></i>
        </div>
        <div class="wrapper_r" ref="wrapperR">       
            <ul class="remind_ ">
                <li v-for="(item,index) in remindList">
                    <div class="information">
                        <div class="infor_img">
                            <img :src="item.headPortrait" alt="">
                        </div>
                        <div class="infor_he">
                            <p>{{item.nickname}}</p>
                            <div>
                                <span>{{item.datatime}}</span>
                                <span>{{item.time}}</span>
                                <span>{{item.equipment}}</span>
                            </div>
                        </div>
                        <div class="replay" @click="replayButton($event)">回复</div>
                    </div>
                    <div class="commend">
                        <span>赞了这个动态</span>
                        <img src="../../../../static/message/z_icon_dainzan@2x.png" alt="">
                    </div>
                    <div  class="infor_my">
                        <div class="infor_my_img">
                            <img :src="item.layoutImg" alt="">
                        </div>                    
                        <div class="infor_mess">
                            <div class="myMessage">
                                <div class="myMessage_img" @click="toMy()"> 
                                    <img :src="item.myimg" alt="">
                                </div>
                                <div class="myMessage_i">
                                    <p @click="toMy()">{{item.mynickname}}</p>
                                    <div>
                                        <span>{{item.mydata}}</span>
                                        <span>{{item.mytime}}</span>
                                        <span>{{item.myEquipment}}</span>
                                    </div>
                                </div>
                            </div>
                            <p class="my_content">                                                  
                            {{item.publish}}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
import Vuex from 'vuex';
export default{
    data(){
        return{
            flag : false
        }
    },
    computed:{
        ...Vuex.mapState({
            remindList:state=>state.Message.remindList
        })
    },
     created(){
        this.getRemind()
    },
    methods:{
			  //返回上一页
        handleBack(){
            this.$router.back();
        },
				// 点击跳转到回复页面
        replayButton(e){
            let who = e.currentTarget.previousElementSibling.firstElementChild.innerHTML;   
            this.$router.push({path:'/message/replay',query:{name:who}})
        },
				// 数据
        ...Vuex.mapActions({
            getRemind:"Message/getRemind"
        }),
				// 跳转到我的
        toMy(){
            this.$router.push("/my")
        }  
    },  
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapperR,{
            pullDownRefresh :  {
                threshold: 0,
                stop:0
            },
            click:true
        })        
    }
}
</script>
<style lang="scss" scoped>
.message_remind{
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
        position:fixed;
        top:0;
        left:0;
        z-index:5;
        background:#fff;
        .remind_back{
            position:absolute;
            left:.24rem;
            bottom:.23rem;
            img{
                width:.24rem;
                height:.42rem;
            }
        }
    }
    .loading{
        width:.3rem;
        height:.3rem;
        margin:.1rem auto 0;
    }
    .wrapper_r{   
        height:12rem;
        margin-top:1.28rem; 
        background:#f4f4f4;
        padding-top:.2rem;  
        .remind_{           
            background:#fff;
            li{
                height:5.24rem;
                display:flex;
                flex-direction: column;
                margin-bottom:.2rem;
                .information{
                    width:100%;
                    display:flex;
                    position: relative;
                    .infor_img{
                        width:.9rem;
                        height:.9rem;
                        border-radius:50%;
                        margin:.25rem .3rem .25rem .24rem;
                        img{
                            width:100%;
                            height:100%;
                            border-radius:50%;
                        }
                    }
                    .infor_he{
                        p{
                            font-size:.24rem;
                            font-weight:500;
                            margin-top:.47rem; 
                        }
                        div{                       
                                font-size:.20rem;
                                color:#717171;
                            span:nth-child(1),span:nth-child(2){                           
                                line-height:.41rem;
                            }
                            span:nth-child(3){
                               line-height:.3rem;                         
                            }
                        }
                    }
                    .replay{
                        width:.79rem;
                        height:.47rem;
                        border:1px solid #C3C3C3;
                        border-radius:.04rem;
                        line-height:.47rem;
                        text-align: center;
                        position: absolute;
                        top:.32rem;
                        right:.24rem;
                    }
                }
                .commend{
                    color:#313131;
                    font-size:.24rem;
                    margin-left:.24rem;
                    margin-top:.11rem;
                    display: flex;                
                    img{
                        margin-left:.11rem;
                        width:.17rem;
                        height:.18rem;
                        margin-top:.04rem;
                    }
                }
                .infor_my{
                    width:100%;
                    height:2.8rem;
                    display: flex; 
                    justify-content: space-between;
                    background:#d1d1d1; 
                    margin-top:.23rem;
                    .infor_my_img{
                        width:2.3rem;
                        height:2.3rem;
                        margin:.24rem;
                        img{
                            width:100%;
                            height:100%;                       
                        }                
                    }
                    .infor_mess{
                        flex:1;
                        .myMessage{
                            display:flex;
                            color:#313131;
                            margin-top:.24rem;
                            .myMessage_img{
                                width:.87rem;
                                height:.87rem;
                                margin-right:.16rem;
                                border-radius:50%;
                                img{
                                    width:100%;
                                    height:100%;
                                    border-radius:50%;
                                }
                            }
                            .myMessage_i{
                                margin-top:.12rem;
                                p{
                                    font-size:.24rem;
                                    margin-bottom:.1rem;
                                }
                                div{
                                    color:#717171;
                                    font-size:.2rem;
                                    span:nth-child(1),span:nth-child(2){
                                        margin-right:.2rem;
                                    }
                                }
                            }
                        }
                        .my_content{
                            line-height: .33rem;
                            margin-right:.4rem;
                            margin-top:.26rem;
                            width:4.3rem;
                            height:.92rem;
                            overflow: hidden;                       
                        }
                    }
                }
            }
            
        }
    }
}
</style>