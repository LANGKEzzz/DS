<template>
  <div class="app">
    <div class="head">
      <div class="return" @click="handleBack()">
        <img src="../../../static/home/icon_cha@2x.png">
      </div>
      <p>忘记密码</p>
    </div>
    <div class="box">
      <div class="content">
        <p>请输入注册的手机号码</p>
        <input type="text" class="phoneNum">
      </div>
      <div class="content">
        <p class="yzm">请输入验证码</p>
        <input type="text">
        <button class="sendyzm">发送验证码</button>
      </div>
      <div class="content">
        <p>请输入新密码</p>
        <input type="text">
      </div>
    </div>
    <p class="prompt">请在下次登录使用新密码</p>
    <button class="confirm">确认</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      phoneNum:"",
      yzm:"",
      pwd:""
    }
  },
  methods: {
    handleBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  .head {
    width: 100%;
    height: 0.88rem;
    background-color: white;
    .return {
      width: 0.88rem;
      height: 0.88rem;
      float: left;
      img {
        width: 0.33rem;
        height: 0.33rem;
        margin: 0.28rem auto;
      }
    }
    p {
      float: left;
      width: 5.84rem;
      height: 0.88rem;
      text-align: center;
      line-height: 0.88rem;
      font-size: 0.34rem;
      color: #1e1e1e;
      font-weight: 700;
    }
  }
  .box {
    height: 2.64rem;
    width: 100%;
    background: #fff;
    margin-top: 0.88rem;
    .content {
      width: 100%;
      height: 0.88rem;
      border-bottom: 1px solid #f4f4f4;
      display: flex;
      align-items: center;
      p {
        text-indent: 0.24rem;
        font-size: 0.24rem;
        line-height: 0.88rem;
        font-weight: 600;
        color: #313131;
      }
      .yzm {
        color: #666666;
      }
      input {
        font-size: 0.24rem;
        margin-left: 1rem;
        outline: none;
        border: none;
      }
      .sendyzm {
        width: 1.38rem;
        height: 0.52rem;
        outline: none;
        border: none;
        background: #63d7d4;
        color: white;
        font-size: 0.2rem;
        border-radius: 10px;
      }
    }
  }
  .prompt {
    font-size: 0.2rem;
    line-height: 0.2rem;
    text-indent: 0.24rem;
    margin-top: 0.26rem;
    color: #717171;
  }
  .confirm {
    display: block;
    width: 5.62rem;
    height: 0.72rem;
    margin: 0 auto;
    margin-top: 0.47rem;
    background: #63d7d4;
    color: white;
    font-size: 0.24rem;
    border-radius: 10px;
    outline: none;
    border: none;
  }
}
</style>

