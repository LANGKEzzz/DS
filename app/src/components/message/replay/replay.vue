<template>
    <div class="replay">
        <div class="replay_content">
            <div class="focus_back" @click="handle_Back()">
                <img src="../../../../static/message/icon_jiantou1@2x.png" alt="">
            </div>
            <h2>回复 </h2>                          
            <div @click="handleContent()">发送</div>        
        </div>
        <div class="import_">
            <textarea  v-model="textContent" ref="contentBox" @focus="handleFocus()"></textarea>
        </div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            textContent:"说点什么..."            
        }
    },
    methods:{
        handle_Back(){
            this.$router.go(-1);
            // console.log(this.name)
        },
				handleFocus(){
					this.textContent = ""
				},
        handleContent(){           
           
            let content = {};
            let d = new Date();
            let hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
            let minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
                    
            content.message = this.textContent;
            content.time = d.getFullYear() + "/" +(d.getMonth()+1) + "/" + d.getDate()  + "/" 
                            + hour + ":" + minute;
            content.name = this.$route.query.name;  
						
						// 传给后端数据
            console.log(content)     
							
							
             //弹出框
            MessageBox({
                title: '提示',
                message: '发送成功',
                className:"MessageBox"

            })
						this.textContent = "";
        }
    }
   
}
</script>
<style lang="scss" scoped>
.replay{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    .replay_content{
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
        background:#fff;
        display:flex;
        border-bottom:1px solid #c3c3c3;
        /* justify-content:space-around; */
        .focus_back{
            position:absolute;
            left:.24rem;
            bottom:.23rem;
            img{
                width:.24rem;
                height:.42rem;
            }          
        }
        h2{
            width:100%;
            /* height:100%; */
            text-align: center;
            font-size:.34rem;
        }
        div{
            position: absolute;
            right:.22rem;
            font-size:.34rem;
        }
    }
    .import_{
        flex:1;
        width:100%;
        margin-top:1.3rem;
        textarea{
            color:#000;
            border:none;
            width:100%;
            height:100%;
            padding-top:.3rem;
            padding-left:.35rem;
            font-size:.28rem;
            font-family:Adobe Heiti Std R;
        }
    }

}
</style>
<style lang="scss">

    .mint-msgbox{
        height:3rem;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
    }
    .mint-msgbox{
        font-size:.3rem;        
    }
    .mint-msgbox-title{
        margin-top:.2rem;
        font-size:.3rem;        
        
    }
    .mint-msgbox-confirm{
        line-height:.7rem;
    }
    
</style>

