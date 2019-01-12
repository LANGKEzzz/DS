<template>
  <div id="release">
    <div class="header">
      <div class="cancel Float" @click="handleBank()">取消</div>
      <div class="center Float">记录中</div>
      <div class="send Float">
        <router-link to="**">发布</router-link>
      </div>
    </div>
    <div class="middle">
      <textarea class="middle-text" placeholder="记录这一刻，晒给懂你的人。" v-model="textarea1"></textarea>
    </div>
    <div class="photograph frame">
      <i class="iconfont">&#xe613;</i>
      <p>拍摄</p>
    </div>
    <div class="album frame">
      <i class="iconfont i-album">&#xe679;</i>
      <p>相册</p>
    </div>
    <div class="position frame" @click="jump()">
      <i class="iconfont">&#xe624;</i>
      <p>{{place}}</p>
    </div>
    <div class="modalbox" v-show="flag">
      <div class="modal">
        <p class="draft">是否保存草稿？</p>
        <p class="on" @click="cancel()">不保存</p>
        <p class="ok" @click="ok()">保存</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  data() {
    return {
      modal1: false,
      textarea1: "",
      place: "定位",
      flag: false
    };
  },

  methods: {
    ...Vuex.mapActions({
      handlea: "Release/handleadd"
    }),
    jump() {
      this.$router.push("/location");
      const map = new AMap.Map("container", {
        resizeEnable: true
      });
      map.plugin("AMap.Geolocation", () => {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 800
        });
        // 获取到用户当前定位的详细信息
        geolocation.getCurrentPosition((status, data) => {
          this.handlea(data);
          console.log(data)
        });
      });
    },
    handleBank() {
      this.modal1 = true;
      this.flag = true;
    },
    ok() {
      var str = this.textarea1;
      sessionStorage.setItem("article", str);
      this.$router.push("/");
    },
    cancel() {
      sessionStorage.removeItem("article");
      this.$router.push("/");
    }
  },
  created() {
    var str = sessionStorage.getItem("article");
    if (str === null) {
      this.textarea1 = "";
    } else {
      this.textarea1 = str;
    }
    if (this.$route.query.id) {
      this.place = this.$route.query.id;
    }
  }
};
</script>

<style>
.ivu-modal-wrap {
  width: 4.8rem;
  height: 2.8rem;
  margin: 0 auto;
}
.ivu-modal-body {
  font-size: 0.22rem;
}
.ivu-btn-large {
  font-size: 0.2rem;
}
</style>

<style scoped>
#release {
  width: 100%;
  height: 13.34rem;
  background: #f4f4f4;
}
.header {
  margin-top: 0.34rem;
  width: 100%;
  height: 0.94rem;
  font-size: 0.34rem;
  font-family: PingFang-SC-Medium;
  color: #050505;
  background: #ffffff;
  border-bottom: 4px solid #f4f4f4;
  border-left: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
}
.Float {
  float: left;
  height: 0.9rem;
  line-height: 0.9rem;
}
.cancel {
  margin-left: 0.24rem;
  margin-right: 2.36rem;
}
.center {
  margin-right: 2.36rem;
}
.send > a {
  color: #63d7d4;
}
.router-link-active {
  color: #050505;
}
.middle-text {
  display: block;
  width: 100%;
  height: 3.24rem;
  padding: 0.24rem 0 0 0.24rem;
  border: none;
  font-size: 0.28rem;
  font-family: PingFang-SC-Medium;
}
textarea::-webkit-input-placeholder {
  font-size: 0.28rem;
  font-family: PingFang-SC-Medium;
  color: #a3a8a8;
}
.frame {
  width: 100%;
  height: 0.88rem;
  margin-top: 0.01rem;
  background: #ffffff;
  font-size: 0.28rem;
  line-height: 0.88rem;
  padding-left: 0.24rem;
}
.frame > p {
  padding-left: 0.83rem;
  font-size: 0.24rem;
  color: #313131;
  line-height: 0.88rem;
}
.iconfont {
  font-size: 0.34rem;
  color: #64d7d2;
  float: left;
  line-height: 0.88rem;
}
.modalbox {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.modal {
  width: 4.71rem;
  height: 2.94rem;
  border-radius: 0.35rem;
  background: #fff;
  font-size: 0.34rem;
  position: absolute;
  top: 30%;
  left: 50%;
  margin-left: -2.35rem;
  margin-top: -1.47rem;
  text-align: center;
}
.draft {
  width: 100%;
  height: 1.93rem;
  border-bottom: 0.01rem solid #7e7e7e;
  line-height: 1.93rem;
}
.on {
  float: left;
  width: 2.35rem;
  border-right: 0.01rem solid #7e7e7e;
  height: 1rem;
  line-height: 1rem;
}
.ok {
  height: 1rem;
  line-height: 1rem;
  color: #64d7d4;
}
</style>
