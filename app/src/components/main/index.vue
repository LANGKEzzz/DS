<template>
  <div class="app">
    <div class="main">
      <div class="nav">
        <router-link :to="{name:'home'}">
          <div class="return">
            <img src="../../../static/icon/icon_jiantou1@2x.png">
          </div>
        </router-link>
        <div class="photo">
          <img src="../../../static/gzdr_tx_02@2x.png">
        </div>
        <p>为吃疯狂</p>
      </div>
    </div>
    <div class="dynamic">
      <div class="user_tx">
        <img src="../../../static/tx_02@2x.png">
        <h2>偶像观察员</h2>
        <p>12-25&nbsp;&nbsp;18:20&nbsp;&nbsp;&nbsp;来自iphone客户端</p>
      </div>
      <div class="user_con">
        <p>"以前我以为</p>
        <p>钱可以买到一切</p>
        <p>现在我觉得真的不行</p>
        <p>因为钱不够"</p>
      </div>
      <div class="user_show">
        <img src="../../../static/tu_01@2x.png">
        <img src="../../../static/tu_02@2x.png">
        <img src="../../../static/tu_03@2x.png">
        <img src="../../../static/tu_04@2x.png">
        <img src="../../../static/tu_05@2x.png">
        <img src="../../../static/tu_06@2x.png">
      </div>
    </div>
    <div class="attention">
      <div @click="handleAdd()">{{messageAdd}}</div>
      <div class="sayhello">打招呼</div>
      <div class="add" v-show="flag">{{message}}</div>
    </div>
  </div>
</template>


<script>
export default {
    data(){
        return{
            message:"已关注",
            flag:false,
            addFlag:false,
            messageAdd:"关注"
        }
    },
    methods:{
        handleAdd(){
            if(this.addFlag){
                this.message = "已取消";
                this.messageAdd = "关注"               
            }else{
                this.message = "已关注";
                this.messageAdd = "取消关注" 
            }
            this.addFlag = !this.addFlag;
            this.flag = true;
            setTimeout(()=>{
                this.flag = false;
            },800)
        }
    }


};
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  .main {
    width: 100%;
    height: 3.75rem;
    background: #133981;
    opacity: 0.85;
    .nav {
      height: 0.8rem;
      width: 100%;
      .return {
        width: 0.65rem;
        height: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .photo {
      width: 1.8rem;
      height: 1.8rem;
      margin: 0 auto;
      margin-top: 0.3rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      color: white;
      font-size: 0.24rem;
      text-align: center;
      margin-top: 0.3rem;
    }
  }
  .dynamic {
    height: 7.2rem;
    width: 100%;
    .user_tx {
      width: 7.5rem;
      height: 0.8rem;
      /*background:blue;*/
      margin-top: 0.24rem;
      overflow: hidden;
      img {
        width: 0.8rem;
        height: 0.8rem;
        margin-left: 0.24rem;
        float: left;
      }
      h2 {
        font-size: 0.24rem;
        margin-left: 1.38rem;
        margin-top: 0.16rem;
      }
      p {
        font-size: 0.2rem;
        margin-left: 1.38rem;
        margin-top: 0.16rem;
      }
    }
    .user_con {
      width: 7.5rem;
      height: 1.1rem;
      /*background:green;*/
      margin-top: 0.18rem;
      p {
        margin-left: 0.24rem;
        margin-bottom: 0.01rem;
      }
    }
    .user_show {
      width: 7.5rem;
      height: 4.6rem;
      /*background:skyblue;*/
      margin-top: 0.18rem;
      img {
        width: 2.3rem;
        height: 2.3rem;
        float: left;
        margin-right: 0.06rem;
        margin-bottom: 0.1rem;
        margin-left: 0.14rem;
      }
    }
  }
  .attention {
    width: 100%;
    height: 1.8rem;
    position: fixed;
    bottom: 0;
    div {
      text-align: center;
      line-height: 0.9rem;
      font-size: 0.32rem;
      color: aqua;
      width: 100%;
      height: 0.9rem;
      border: 1px solid rgba(99, 215, 212, 1);
    }
    .sayhello {
      border-top: 0;
    }
    .add{
        width: 1.23rem;
        height: 0.56rem;
        position: absolute;
        top: -3.15rem;
        font-size: 0.24rem;
        line-height: 0.56rem;
        left: 3.17rem;
        background:white;
        border-radius: 4px;
        border:0;
    }
  }
}
</style>

