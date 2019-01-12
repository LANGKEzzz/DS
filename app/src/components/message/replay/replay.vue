<template>
    <div class="replay">
        <div class="replay_content">
            <div class="focus_back" @click="handle_Back()">
                <img src="../../../../static/message/icon_jiantou1@2x.png" alt="">
            </div>
            <h2>回复 </h2>                          
            <div>发送</div>        
        </div>
        
    </div>
</template>
<script>
export default {
    methods:{
        handle_Back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
.replay{
    width:100%;
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
        .focus_back{
            position:absolute;
            left:.24rem;
            bottom:.23rem;
            img{
                width:.24rem;
                height:.42rem;
            }
        }
    }
}
</style>
