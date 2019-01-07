<template>
 
    <div class="header">
        <router-link to="/settings">
            <div class="header_pic">
                <img src="../../../../../static/icon/icon_jiantou1@2x.png"/>
            </div>
        </router-link>
      <p>字体设置</p>
    </div>
  
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
    .header {
    width: 7.5rem;
    height: 1.28rem;
    // text-align: center;
    background:rgba(255,255,255,1);
    box-shadow:0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
    position:relative;
        p {
            font-size: 0.34rem;
            color:rgba(30,30,30,1);
            display:inline-block;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            // line-height:1.7rem;
            position:absolute;
            left: 3.08rem;
            bottom:.29rem;
            
        }
        .header_pic{
            width:.24rem;
            height:.42rem;
            display:inline-block;
            position:absolute;
            left: 0.24rem;
            bottom:.23rem;
        }
    }
</style>