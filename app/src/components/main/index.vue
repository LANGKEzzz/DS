<template>
  <div class="app">
    <div class="nav" :style="{opacity:transparent}">
     
        <div class="return" @click="handleBakc()">
          <img src="../../../static/icon/icon_jiantou1@2x.png">
        </div>

    </div>
    <div class="wrapper conout" ref="box">
      <div class="content conin">
        <div class="main">
          <div class="photo">
            <!-- <img src="../../../static/gzdr_tx_02@2x.png"> -->
            <img :src="tx">
          </div>
          <p>{{uname}}</p>
        </div>

        <div class="dynamic" v-for="(item,index) in content">
          <div class="user_tx">
            <img :src="tx">
            <h2>{{uname}}</h2>
            <p>{{item.day}}&nbsp;&nbsp;{{item.time}}&nbsp;&nbsp;&nbsp;{{item.equipment}}</p>
          </div>
          <div class="user_con">
            <p>{{item.con}}</p>
          </div>
          <div class="user_show">
            <img v-for="(item,index) in item.pic" :src="item">
          </div>
        </div>
      </div>
    </div>
    <div class="attention">
      <div @click="handleAdd()">{{messageAdd}}</div>
      <div class="sayhello" @click="sayhello()">打招呼</div>
      <div class="add" v-show="flag">{{message}}</div>
    </div>
  </div>
</template>


<script>
import Vuex from "vuex";
import Bscroll from "better-scroll";
import axios from "../../lib";
export default {
  data() {
    return {
      message: "已关注",
      flag: false,
      addFlag: false,
      messageAdd: "关注",
      transparent:0.3,
      id:"",
      uname:"",
      tx:"",
      content:""
    };
  },
  created(){
    axios("/userinfo").then((data)=>{
      // console.log(data)
      this.id = data.id;
      this.uname = data.username;
      this.tx = data.photo;
      this.content = data.dynamic;
    })
  },
  methods: {
    handleAdd() {
      console.log(this.tx);
      if (this.addFlag) {
        this.message = "已取消";
        this.messageAdd = "关注";
      } else {
        this.message = "已关注";
        this.messageAdd = "取消关注";
      }
      this.addFlag = !this.addFlag;
      this.flag = true;
      setTimeout(() => {
        this.flag = false;
      }, 800);
    },
    handleBakc(){
      this.$router.back();
    },
    sayhello(){
      this.$router.push("/message/dialogbox")
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.box,{
      pullUpLoad:true,
      click:true
    });
    this.scroll.on("scroll",({x,y})=>{
      if(y > -300 && y < -90){ 
           this.transparent = -y/300;
      }
      if( y < -300){
        this.transparent = 1;
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  .nav {
    height: 0.8rem;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 2;
    background: white;
    border-bottom: 1px solid #f4f4f4;
    .return {
      opacity: 1;
      width: 0.65rem;
      height: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 0.2rem;
        height:0.35rem;
      }
    }
  }
  .conout {
    height: 100%;
    width: 100%;
    background: #f4f4f4;
    .conin {
      padding-bottom: 1.8rem;
      .main {
        width: 100%;
        height: 3.75rem;
        background: #133981;
        opacity: 0.85;
        overflow: hidden;
        .photo {
          width: 1.8rem;
          height: 1.8rem;
          margin: 0 auto;
          border-radius: 50%;
          overflow: hidden;
          margin-top: 1.1rem;
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
        width: 100%;
        margin-top: 0.15rem;
        background: white;
        overflow: hidden;
        .user_tx {
          width: 100%;
          height: 0.8rem;
          /*background:blue;*/
          margin-top: 0.24rem;
          overflow: hidden;
          img {
            width: 0.8rem;
            height: 0.8rem;
            margin-left: 0.24rem;
            border-radius: 50%;
            float: left;
          }
          h2 {
            font-size: 0.24rem;
            margin-left: 1.38rem;
            margin-top: 0.1rem;
          }
          p {
            font-size: 0.2rem;
            margin-left: 1.38rem;
            margin-top: 0.1rem;
          }
        }
        .user_con {
          width: 100%;
          /*background:green;*/
          margin-top: 0.18rem;
          p {
            margin-left: 0.24rem;
            margin-bottom: 0.01rem;
          }
        }
        .user_show {
          width: 100%;
         display: flex;
         flex-wrap: wrap;
        //  justify-content: space-around;
        padding: 0 0.1rem;
          margin-top: 0.18rem;
          img {
            width: 2.3rem;
            height: 2.3rem;
           width: 32%;          
            margin: 0.04rem;
          }
        }
      }
    }
  }
  .attention {
    width: 100%;
    height: 1.8rem;
    position: fixed;
    bottom: 0;
    div {
      background: white;
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
    .add {
      width: 1.23rem;
      height: 0.56rem;
      position: absolute;
      top: -3.15rem;
      font-size: 0.24rem;
      line-height: 0.56rem;
      left: 3.17rem;
      background: white;
      border-radius: 4px;
      border: 0;
    }
  }
}
</style>

