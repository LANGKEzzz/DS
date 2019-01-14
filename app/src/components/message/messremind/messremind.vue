<template>
    <div class="message_mess">
        <h2>
             评论
                <div class="mess_back" @click="back_()">
                    <img src="../../../../static/message/icon_jiantou1@2x.png" alt="">
                </div>
        </h2>
        <div class="loading" v-show="flag">
            <i class="fa fa-spinner fa-pulse"></i>
        </div>
        <div class="wrapper_" ref="messremind">        
            <ul class="comment_" >
                <li v-for="(item,index) in commentList">
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
                                <div class="myMessage_img">                                    
                                    <img :src="item.myimg" alt="">                               
                                </div>
                                <div class="myMessage_i">
                                    <p>{{item.mynickname}}</p>
                                    <div>
                                        <span>{{item.mydata}}</span>
                                        <span>{{item.mytime}}</span>
                                        <span>{{item.myEquipment}}</span>
                                    </div>
                                </div>
                            </div>
                            <p class="my_content"> 
                                {{item.publish}}                      
                                <!-- PingFang SC Medium,也叫苹方中等体,即苹方字体中的中等字重,是支持MAC osX系统的字体。 pingfang sc ... -->
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import Vuex from "vuex"
export default{ 
    data(){
        return{
            flag:false
        }
    },
    computed:{
        ...Vuex.mapState({
            commentList:state=>state.Message.commentList
        })
    },
    created() {
        this.getComment();
    },
    methods:{
        back_(){
            this.$router.back();
        },
        handlePush(){
            this.$router.push("/my");
        },
        replayButton(e){
            this.$router.push('/message/replay')
        } ,
        ...Vuex.mapActions({
            getComment : "Message/getComment"
        })      
    },
    mounted(){
        this.scroll= new Bscroll( this.$refs.messremind,{
            pullDownRefresh: {
                threshold: 20,
                stop:0,
                
            },
            pullUpLoad:true,
            click:true
        } )
    }
}
</script>
<style lang="scss" scoped>
.message_mess{
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
        z-index:9;
        // position:relative;
        background:#fff;
        // background:red;
        .mess_back{
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
        background:#f4f4f4;
    }
    .wrapper_{  
        height:11.76rem;
         margin-top:1.48rem;        
        background:#f4f4f4;
        padding-top:.2rem;  
        /* //  background:pink; */
        .comment_{
            width:100%;          
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
                                border-radius:50%;
                                margin-right:.16rem;
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