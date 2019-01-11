<template>
    <div class="top">
        <div class="top_top">            
            <h2>消息</h2>
        </div>       
    </div>
</template>
<script>
   export default{
       
   }
</script>
<style lang="scss" scoped>
.top{
    width:100%;
    background:#f4f4f4;
    position:fixed;
    top:0;
    left:0;
    z-index: 9;
    .top_top{
        width:100%;
        height:.88rem;
        background:#fff;
        color:#1E1E1E;
        text-align:center;
        h2{
            font-size:.34rem;
            // height:100%;
            position:relative;
            line-height:.88rem;
            font-weight: 900;
            span{
                color:#101010;
                font-size:.42rem;
                position:absolute;
                top:.63rem;
                left:.24rem;
            }
        }
    }
    
    
}
</style>

