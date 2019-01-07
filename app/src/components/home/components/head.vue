<template>
    <div class="app">
        <div class="top">
           <div class="shaixuan"><img :src="src"></div> 筛选
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            src:" ../../../static/icon/icon_sx@2x.png"          
        }
    }
}
</script>
<style lang="scss" scoped>
    .app{
        width:100%;
        height:.88rem;
        position: relative;
        .top{
            width:1.4rem;
            height:.88rem;
            font-size: .32rem;
            position: absolute;
            right: 0;
            line-height: .88rem;
            .shaixuan{
                float:left;
                height: .88rem;
                img{
                    display: inline-block;
                    vertical-align: middle;
                    width: .34rem;
                    height:.38rem;
                }
            }
        }
    }
</style>