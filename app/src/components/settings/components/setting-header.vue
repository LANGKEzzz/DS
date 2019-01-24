<template>

    <div class="header">

            <div class="header_pic" @click="handleJump">
                <img src="../../../../static/icon/icon_jiantou1@2x.png"/>
            </div>

      <p>设置</p>
    </div>

</template>
<script>
export default {
    methods: {
        handleJump(){
            this.$router.push("my");
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../common/css/fontSize";
    .header {
    width: 7.5rem;
    height: 1.28rem;
    // text-align: center;
    background:rgba(255,255,255,1);
    box-shadow:0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
    position:relative;
        p {
            font-size: $font_size_34;
            color:rgba(30,30,30,1);
            display:inline-block;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            // line-height:1.7rem;
            position:absolute;
            left: 3.42rem;
            bottom:.29rem;

        }
        .header_pic{
            width:.24rem;
            height:.42rem;
            display:inline-block;
            position:absolute;
            left: 0.24rem;
            bottom:.31rem;
            img{
               width:.24rem;
               height:.42rem;
            }
        }
    }
</style>
