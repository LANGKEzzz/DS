<template>
    <div class="quit">
        
        <div @click="handleJump">
            退出账号
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        handleJump(){
            this.$router.push("home")
        }
    },
}
</script>
<style lang="scss" scoped>
@import "../../../common/css/fontSize";
    .quit{
        width:7.5rem;
        height:.88rem;
        text-align:center;
        line-height:.88rem;
        position: fixed;
        bottom:0;
        left:0;
        background:rgba(255,255,255,1);
        box-shadow:0 -0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
        font-size:$font_size_26;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(251,14,14,1);
     }
</style>
