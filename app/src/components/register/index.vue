<template>
    <div class="app">
        <div class="banner">
            <div class="logo">
                <img :src="logourl">
            </div>

        </div> 
        <div class="reg">
            <div class="phoneNum phone">
                <input type="text" placeholder="手机号" class="num">
            </div>
            <div class="phoneNum">
                <div class="_yzm">   
                    <input type="text"  placeholder="请输入验证码" class="yzm">
                    <button class="sendyzm">发送验证</button>
                </div>
            </div>
            <div class="phoneNum">
                <input type="password" placeholder="密码" class="pwd">
            </div>
            <div class="phoneNum">
                <button class="btn">注册</button>
            </div>
            <router-link :to="{name:'login'}">
                <p>已有账号？立即登录></p>
            </router-link>
        </div>
    </div>
   

</template>

<script>
export default {
    data(){
        return{
            logourl:"../../../static/logo/logo@2x.png"
        }
    }
}
</script>


<style lang="scss" scoped>
    .app{
        height:100%;
        width: 100%;
        .banner{
            width:100%;
            height: 346px;
            background: #63D7D4;
            overflow: hidden;
            position: relative;
            z-index: 1;
            .logo{
                width: 2.7rem;
                height: 2.7rem;
                background: white;
                margin: 0 auto;
                margin-top: 1.78rem;
                border-radius: 0.2rem;
                overflow: hidden;
                img{
                    width: 2.51rem;
                    height: 1.58rem;
                    margin: 0 auto;
                    margin-top: 0.56rem;
                }
            }
        }
        .reg{
            width: 100%;
            height: 6.8rem;
            background: #f4f4f4;
            // overflow: hidden;
            .phoneNum{
                height: 1rem;
                width: 100%;
                margin-top:.45rem;
                ::-webkit-input-placeholder{
                        color:#999;
                    }
                input,._yzm{
                    width: 6.04rem;
                    height: 1rem;
                    border-radius: 0.5rem;
                    box-shadow:3px 8px 25px 0px rgba(44,96,95,0.25);
                    border: none;
                    display: block;
                    margin: 0 auto;
                    text-indent: 1.04rem;
                    font-size: 0.26rem;
                    outline: none;
                   
                }
                .num{
                    background: url("../../../static/logo/icon-dh@2x.png") no-repeat 0.4rem center;
                    background-size: .33rem;
                    z-index: 5;
                    position: relative; 
                    background-color: white;
                }
                .yzm{
                    display: inline-block;
                   background: url("../../../static/logo/icon-yz@2x.png") no-repeat 0.4rem center;
                    background-size: .33rem; 
                    background-color: white; 
                    width: 3.78rem;
                    border-radius:0.5rem 0 0 0.5rem;
                    margin: 0;
                    float: left;
                }
                .sendyzm{
                    border-radius:0 .5rem .5rem 0;
                    width: 2.26rem;
                    height: 1rem;
                    background: #63D7D4;
                    outline: none;
                    border: none;
                    float: left;
                    color: white;
                }
                .pwd{
                    background: url("../../../static/logo/pwd.png") no-repeat 0.4rem center;
                    background-size: .33rem; 
                    background-color: white;
                }
                .btn{
                   width: 6.04rem;
                    height: 1rem;
                    border-radius: 0.5rem;
                    box-shadow:3px 8px 25px 0px rgba(44,96,95,0.25);
                    outline:none;
                    border: none;
                    color: white;
                    background: #63D7D4;
                    display: block;
                    margin: 0 auto; 
                }
            }
            .phone{
                margin-top: -0.38rem; 
                             
            }
            p{
                width: 2.5rem;
                height: .32rem;
                text-align: center;
                color: #999;
                margin: 0 auto;
                margin-top: 1rem;                
            }
        }
    }


</style>

