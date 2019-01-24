<template>
    <div id="main">
       <input type="text" id="name" placeholder="偶像观察生" v-model="val">
       <button id="btn" @click="handleSave()">保存</button>
    </div>
</template>
    

<script>
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
           val:""         
        }
    },
    methods:{
         //更改名字
        handleSave(){
            //弹出框
            MessageBox({
                title: '提示',
                message: '操作成功',
            })
        }     
    }
}
</script>

<style lang="scss" scoped>
     #main{
         width:100%;
         height: 11rem;
         background:#f4f4f4;
         #name{
             width:6rem;
             height:0.5rem;
             border:none;
             border-bottom:1px solid #63D7D4;
             background:#f4f4f4;
             margin-left: 0.24rem;
             margin-top:0.61rem;
         }
         #btn{
             width: 1rem;
             height:0.5rem;
             margin-left: 0.1rem;
             background: skyblue;
             border:none;
             color: #f4f4f4
            //  border-bottom:1px solid #63D7D4;
         }

     }
</style>
