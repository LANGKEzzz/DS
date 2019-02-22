<template>
  <div class="app">
    <div class="logo">
      <img :src="logourl">
    </div>
    <div class="dl_zh">
      <input type="text" placeholder="账号/手机号" class="num" v-model="uid">
    </div>
    <div class="dlpwd">
      <input type="text" class="pwd" placeholder="密码" v-model="upwd">
    </div>
    <div class="dl">
        <button class="dlbtn" @click="handleLogin()">登录</button>
    </div>
    <router-link :to="{name:'findpwd'}">
      <p class="forget">忘记密码</p>
    </router-link>
    <router-link :to="{name:'register'}">
        <p class="go_reg">没有账号？去注册></p>
    </router-link>
  </div>
</template>

<script>
import axios from "../../lib";
export default {
  data() {
    return {
      logourl: "../../../static/logo/logo@2x.png",
      uid:"",
      upwd:""
    };
  },
  methods:{
    handleLogin(){
     axios({
            method:"post",
            url:"/api/diandian/login",
            data:{
                phonenum:this.uid,
                password:this.upwd
            }
        }).then((data)=>{
            console.log(data)
        //    commit("handleData",data.data)
        })
    }
  }
};
</script>


<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  .logo {
    width: 4.14rem;
    height: 2.6rem;
    margin: 0 auto;
    margin-top: 1.83rem;
    img {
      width: 4.14rem;
      height: 2.6rem;
    }
  }
  .dl_zh,
  .dlpwd,.dl {
    width: 100%;
    height: 1rem;
  }
  .dl_zh{
      margin-top: 1.09rem;
  }
  .dlpwd{
      margin-top: 0.61rem;
  }
  .dl{
      margin-top:.93rem;
      .dlbtn{
          display:block;
          margin: 0 auto;
          background: #63D7D4;
          color: white;
          width: 6.04rem;
            height: 1rem;
            border-radius: 0.5rem;
            border: none;
            outline: none;
             box-shadow: 3px 8px 25px 0px rgba(44, 96, 95, 0.25);
             font-size: 0.26rem;
             
      }
  }
  .num,
  .pwd {
    width: 6.04rem;
    height: 1rem;
    border-radius: 0.5rem;
    border: none;
    text-indent: 1.04rem;
    outline: none;
    display: block;
    margin: 0 auto;
    box-shadow: 3px 8px 25px 0px rgba(44, 96, 95, 0.25);
    font-size: 0.26rem;   
  }
  .num{
    background: url("../../../static/logo/icon_xiaoxi@2x.png") no-repeat 0.4rem center;
     background-size: .33rem;
   } 
    .pwd{
      background: url("../../../static/logo/pwd.png") no-repeat 0.4rem center;
    }
  .forget{
      width: 1rem;
      font-size: 0.22rem;
      text-align: center;
      margin: 0 auto;
      margin-top: 0.52rem;  
      color: #63D7D4;    
  }
  .go_reg{
      width: 2.2rem;
      height: .25rem;
      margin: 0 auto;
      margin-top: 2rem;
      text-align: center;
      color: #888;
  }
}
</style>

