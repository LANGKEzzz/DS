<template>
    <div class="message_list">
        <ul ref="messageList">
            <li v-for="(item,index) in messageList" @click="handleClick($event)">
                <div class="message_img">
                    <img :src="item.imgUrl"/>
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
    computed: {
        ...Vuex.mapState({
            messageList:state=>state.Message.messageList
        })
    },
    created() {
        this.handleMessage();

    },
    methods: {
        ...Vuex.mapActions({
            handleMessage:"Message/handleMessage"
        }),
        handleClick(e){
           this.$router.push("/message/dialogbox")      
        }
    }

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
                    border-radius: 50%;
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

