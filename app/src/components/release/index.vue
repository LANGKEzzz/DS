<template>
  <div id="release">
    <div class="header">
      <div class="cancel Float" @click="handleBank()">取消</div>
      <div class="center Float">记录中</div>
      <div class="send Float" @click="ok()">
        发布
      </div>
    </div>
    <div class="middle">
      <textarea class="middle-text" placeholder="记录这一刻，晒给懂你的人。" v-model="textarea1"></textarea>
      <el-upload
        action="/api/diandian/release"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :auto-upload="false"
        class="el_up"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt>
      </el-dialog>
    </div>
    <div class="photograph frame" @click="fileClick()">
      <i class="iconfont">&#xe613;</i>
      <p>拍摄</p>
    </div>
    <input
      id="upload_file"
      type="file"
      style="display: none;"
      accept="image/*"
      name="file"
      @change="fileChange($event)"
      ref="upload_file"
    >
    <div class="position frame" @click="jump()">
      <i class="iconfont">&#xe624;</i>
      <p>{{place}}</p>
    </div>
    <div class="modalbox" v-show="flag">
      <div class="modal">
        <p class="draft">{{draft}}</p>
        <p class="on" @click="cancel()">{{d_on}}</p>
        <p class="ok" @click="ok()">{{d_ok}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      modal1: false,
      textarea1: "",
      place: "定位",
      flag: false,
      url: "",
      dialogImageUrl: "",
      dialogVisible: false,
      reveal: true,
      dialogImageUrl: "",
      dialogVisible: false,
      draft: "放弃此次编辑？",
      d_on: "取消",
      d_ok: "确定",
      type1: true
    };
  },

  methods: {
    ...Vuex.mapActions({
      handlea: "Release/handleadd"
    }),
    //调用手机相机
    fileClick() {
      this.$refs.upload_file.click();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    jump() {
      this.$router.push("/location");
      // 地图初始化加载定位到当前城市
      const map = new AMap.Map("container", {
        resizeEnable: true
      });
      map.plugin("AMap.Geolocation", () => {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 800
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          // buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          // zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          // buttonPosition: "RB"
        });
        // 获取到用户当前定位的详细信息
        geolocation.getCurrentPosition((status, data) => {
          this.handlea(data);
        });
      });
    },
    handleBank() {
      this.modal1 = true;
      this.flag = true;
      var text1 = this.textarea1;
      var place = this.place;
      if (text1 != "" || place != "定位") {
        this.draft = "是否保存此次编辑？";
        this.d_on = "不保存";
        this.d_ok = "保存";
        this.type1 = false;
      }
    },
    ok() {
      var str = this.textarea1;
      sessionStorage.setItem("article", str);
      var str1 = this.place;
      sessionStorage.setItem("location", str1);
      var f_url = sessionStorage.getItem("fromurl");
      this.$router.push(f_url);
      axios({
        method:"post",
        url:"/api/diandian/release",
        data:{
          content:str
        }
      }).then((data)=>{
        console.log(data)
      })
      sessionStorage.removeItem("article");
      sessionStorage.removeItem("location");
    },
    cancel() {
      if (this.type1) {
        this.flag = false;
      } else {
        sessionStorage.removeItem("article");
        sessionStorage.removeItem("location");
        var f_url = sessionStorage.getItem("fromurl");
        this.$router.push(f_url);
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    var from_url = from.fullPath;
    next(vm => {
      if (!/^\/location/.test(from_url)) {
        sessionStorage.setItem("fromurl", from_url);
      }
    });
  },
  created() {
    var str = sessionStorage.getItem("article");
    var str1 = sessionStorage.getItem("location");
    if (str === null) {
      this.textarea1 = "";
    } else {
      this.textarea1 = str;
    }
    if (str1 === null) {
      this.place = "定位";
    } else {
      this.place = str1;
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
.send {
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
.el_up {
  background: #fff;
}
</style>
