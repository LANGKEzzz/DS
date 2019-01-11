<template>
    <div class="message_list">
        <ul ref="messageList">
            <li v-for="(item,index) in message_list" @click="handleClick()">
                <div class="message_img">
                    <img :src="item.src"/>
                </div>
                <div class="message_c">
                    <p>{{item.nickname}}</p>
                    <p>{{item.message}}</p>
                </div>
                <span>{{item.time}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import Vuex from "vuex";
export default{
    data(){
        return{
            message_list : [
                {
                    "src" : "../../../static/message/dh_tx_02@2x.png",
                    "nickname" : "昵称",
                    "message" : "消息：撤销 上述场景一,在未进行git push前的所有操作",
                    "time" : "16:00"
                },
                {
                    "src" : "../../../static/message/dh_tx_02@2x.png",
                    "nickname" : "昵称",
                    "message" : "消息：撤销 上述场景一,在未进行git push前的所有操作",
                    "time" : "16:00"
                },
                {
                    "src" : "../../../static/message/dh_tx_02@2x.png",
                    "nickname" : "昵称",
                    "message" : "消息：撤销 上述场景一,在未进行git push前的所有操作",
                    "time" : "16:00"
                },
                {
                     "src" : "../../../static/message/dh_tx_02@2x.png",
                    "nickname" : "昵称",
                    "message" : "消息：撤销 上述场景一,在未进行git push前的所有操作",
                    "time" : "16:00"
                },
                {
                     "src" : "../../../static/message/dh_tx_02@2x.png",
                    "nickname" : "昵称",
                    "message" : "消息：撤销 上述场景一,在未进行git push前的所有操作",
                    "time" : "16:00"
                },
                {
                     "src" : "../../../static/message/dh_tx_02@2x.png",
                    "nickname" : "昵称",
                    "message" : "消息：撤销 上述场景一,在未进行git push前的所有操作",
                    "time" : "16:00"
                },
                {
                     "src" : "../../../static/message/dh_tx_02@2x.png",
                    "nickname" : "昵称",
                    "message" : "消息：撤销 上述场景一,在未进行git push前的所有操作",
                    "time" : "16:00"
                },
                {
                     "src" : "../../../static/message/dh_tx_02@2x.png",
                    "nickname" : "昵称",
                    "message" : "消息：撤销 上述场景一,在未进行git push前的所有操作",
                    "time" : "16:00"
                },
                {
                     "src" : "../../../static/message/dh_tx_02@2x.png",
                    "nickname" : "昵称",
                    "message" : "消息：撤销 上述场景一,在未进行git push前的所有操作",
                    "time" : "16:00"
                },
                {
                     "src" : "../../../static/message/dh_tx_02@2x.png",
                    "nickname" : "昵称",
                    "message" : "消息：撤销 上述场景一,在未进行git push前的所有操作",
                    "time" : "16:00"
                },
                {
                     "src" : "../../../static/message/dh_tx_02@2x.png",
                    "nickname" : "昵称",
                    "message" : "消息：撤销 上述场景一,在未进行git push前的所有操作",
                    "time" : "16:00"
                },
                {
                     "src" : "../../../static/message/dh_tx_02@2x.png",
                    "nickname" : "昵称",
                    "message" : "消息：撤销 上述场景一,在未进行git push前的所有操作",
                    "time" : "16:00"
                }
            ]
           
        }
    },
    // computed: {
    //     ...Vuex.mapState({
    //         messageList:state=>state.Message.messageList
    //     })
    // },
    // created() {
    //     this.handleMessage();
    // },
    // methods: {
    //     ...Vuex.mapActions({
    //         handleMessage:"Message/handleMessage"
    //     })
    // }

}
</script>
<style lang="scss" scoped>
.message_list{
    width:100%;
    flex:1;
    overflow: scroll;
    padding-bottom:.98rem;
    background:#fff;
    ul{  
        width:100%;     
        li{
            position:relative;
            height:1.22rem;
            display:flex;          
            border-bottom:1px solid #f4f4f4;
            .message_img{
                width:.88rem;
                height:.88rem;
                border-radius: 50%;
                margin-left:.24rem;
                margin-top:.17rem;
                img{
                    width:.88rem;
                    height:.88rem;
                }
            }
            .message_c{
                display:flex;
                flex-direction: column;
                margin-left:.34rem;
                p{
                    width:3.47rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow:ellipsis;
                }
                p:nth-child(1){
                    font-size:.24rem;
                    color:#313131;
                    margin-top:.31rem;
                }
                p:nth-child(2){
                    font-size:.2rem;
                    color:#717171;
                    margin-top:.17rem;
                }
            }
            span{
                top:.31rem;
                position:absolute;
                right:.24rem;
            }
        }
    }
}
</style>

