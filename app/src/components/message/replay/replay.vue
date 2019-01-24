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
            <textarea v-model="textContent" ref="contentBox"></textarea>
        </div>
    </div>
</template>
<script>
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
        handleContent(){
            // this.$refs.contentBox.focus();
            let content = {};
            content.message = this.textContent;
            content.time = new Date();
            content.name = this.$route.query.name;          
            console.log(content)
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
            color:#D6D6D6;
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
