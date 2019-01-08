<template>
    <div id="comment">
        <div class="main">
            <div class="header">
                <img src="../../../../static/icon/icon_jiantou1@2x.png" alt="" @click="goback()">
                <h2>{{item.nickname}}</h2>
            </div>
            <div class="mainT">
                <p>{{item.content}}</p>
                <img :src="item.pic[0]" alt="">
            </div>
            <ul class="mainM">
                <li v-for="(itm,index) in item.handle[1].con" v-bind:key="index">
                    <div class="mainM_T">
                        <img :src="itm.photo" alt="">
                        <div>
                            <h2>{{itm.nickname}}</h2>
                            <p>{{itm.infor}}</p>
                        </div>
                    </div>
                    <span>{{itm.time}}</span>
                    <!-- <ul>
                        <li></li>
                    </ul> -->
                </li>
            </ul>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            item:''
        }
    },
    // filters:{
    //     name:function(val){
    //         return "@"+val
    //     }
    // },
    beforeMount() {
        let item = this.$route.params.itm
        this.item = item
        console.log(item)
    },
    methods: {
        goback(){
            this.$router.go(-1)
        }
    },
}
</script>
<style lang="scss" scoped>
    #comment{
        width: 100%;
        height: 100%;
        background: #f4f4f4;
        overflow: auto;
        .main{
            .header{
                width: 100%;
                height: .88rem;
                line-height: .88rem;
                text-align: center;
                background:rgba(255,255,255,1);
                display: flex;
                align-items: center;
                padding: 0 .24rem;
                margin-top: .4rem;
                h2{
                    color: #1E1E1E;
                    font-size: .34rem;
                    margin-left: 2.32rem;
                    font-weight: bold;
                }
                img{
                    width: .18rem;
                    height: .32rem;
                }
            }
            .mainT{
                width: 100%;
                padding: 0 .24rem;
                margin-top: .19rem;
                background:rgba(255,255,255,1);
                p{
                    text-indent:.48rem;
                    line-height: .5rem;
                    color: #818181;
                }
                img{
                    width: 100%;
                    height: 2.9rem;
                }
            }
            .mainM{
                width: 100%;
                margin-top: .24rem;
                //overflow: auto;
                height: auto;
                li{
                    width: 100%;
                    height: 1.62rem;
                    padding: 0 .24rem;
                    background:rgba(255,255,255,1);
                    margin-bottom: .2rem;
                    padding-top: .19rem;
                    .mainM_T{
                        width: 100%;
                        height: .94rem;
                        display: flex;
                    
                        img{
                            width: .94rem;
                            height: .94rem;
                        }
                        div{
                            margin-left: .19rem;
                            line-height: .44rem;
                            h2{
                                font-size: .24rem;
                                font-weight: bold;
                            }
                        }
                    }
                }
                
            }
        }
    }
</style>