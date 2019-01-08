<template>
    <div class="main">
        <ul>
            <!-- <li v-for="(item,index) in list" @click='handleMark($event)'>
                <router-link :to="{name:item.name}">
                    {{item.title}}
                </router-link>
            </li> -->
              <router-link to="/phonenum">
                <li>手机号码</li>
            </router-link >
              <!-- <router-link to=""> -->
                <li  @click="showModal">修改密码</li>
            <!-- </router-link> -->
            <Modal v-show="isModalVisible" @close="closeModal">确认</Modal>
        </ul>
      
        
    </div>
</template>
<script>
import Modal from "./modal.vue"
export default {
    components:{
        Modal
    },
    data(){
        return{
            list:[
                {
                    
                    title:"点点昵称"
                },
                {
                    // name:"phomeAS",
                    title:"手机号码"
                },
                {
                    // name:"passwordAS",
                    title:"修改密码"
                }
  

            ],
            isModalVisible: false
             
        }
    },
    methods:{
         showModal: function () {
            this.isModalVisible = true
            },
        closeModal: function () {
            this.isModalVisible = false
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
                
            }
        }
    }
    .main>ul>li>a{
        color:#313131;
    }
</style>