<template>
    <div id="transpond">
        <ul>
            <li @click="cancel()"><a href="##">取消</a></li>
            <li>转发动态</li>
            <li><a href="##" class="send">发送</a></li>
        </ul>
        <div class="conW">
            <input type="text" autofocus="autofocus">
            <div class="con">
                <img :src="item.pic[0]" alt="">
                <div>
                    <h2>{{item.nickname | name}}</h2>
                    <p>{{item.content}}</p>
                </div>
            </div>
            <div class="comment">
                <input type="checkbox"> <span>同时评论</span>
            </div>
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
    filters:{
        name:function(val){
            return "@"+val
        }
    },
    beforeMount() {
        let item = this.$route.query.itm
       
        this.item = item
         console.log(this.item)
    },
    methods: {
        cancel(){
            this.$router.go(-1)
        }
    },
}
</script>
<style lang="scss" scoped>
    #transpond{
        width: 100%;
        height: 100%;
        background: #f4f4f4;
        ul{
            width: 100%;
            height: .94rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: .34rem .24rem 0;
            background:rgba(255,255,255,1);
            box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.15);
            li{
                font-size: .34rem;
                color: #050505;
                font-weight: bold;
                a{
                    font-size: .34rem;
                    color: #050505;
                }
                .send{
                    color: #63D7D4;
                }
            }
        }
        .conW{
            width:100%;
            height:100%;
            background:rgba(255,255,255,1);
            margin-top: .17rem;
            padding: 0 .24rem;
            input{
                width: 100%;
                height: 1rem;
                border:none;
                font-size: .24rem;
                outline: none;
                
            }
            .con{
                width: 100%;
                height: 2.4rem;
                background: #ccc;
                margin-top: .62rem;
                display: flex;
                img{
                    width: 2.4rem;
                    height: 2.4rem;
                }
                div{
                    padding:.33rem 0 0 .27rem;
                    background:rgba(244,244,244,1);
                    width: 100%;
                    h2{
                        color: #1F1F1F;
                        font-size: .34rem;
                        line-height: .4rem;
                    }
                    p{
                        line-height: .43rem;
                    }
                }
            }
            .comment{
                position: absolute;
                bottom: .73rem;
                left: .24rem;
                input{
                    width: .34rem;
                    height: .34rem;
                    vertical-align: middle;
                }
                span{
                   vertical-align: middle;
                }
            }
        }
    }
</style>