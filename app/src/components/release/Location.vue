<template>
  <div id="Loca">
    <div class="header">
      <span class="iconfont" @click="handleBank()">&#xe669;</span>
      定位
    </div>
    <div>
      <input type="text" v-model="maptext1">
      <img src="../../../static/release/4.png" class="image" @click="autoInput()">
      <ul>
        <li v-for="(item,index) in address" class="address" :key="index" @click="transmit(item)">
          <span class="iconfont">&#xe624;</span>
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  data() {
    return {
      maptext1: ""
    };
  },
  methods: {
    handleBank() {
      this.$router.back();
    },
    ...Vuex.mapActions({
      modify:"Release/modify"
    }),
    transmit(item) {
      this.$router.push({
        name: "release",
        query: {
          id: item
        }
      });
    },
    // 获取输入提示信息
    autoInput() {
      var keywords = this.maptext1;
      AMap.plugin("AMap.Autocomplete", () => {
        // 实例化Autocomplete
        var autoOptions = {
          city: ""
        };
        autoOptions.city = this.province;
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(keywords, (status, result) => {
          // 搜索成功时，result即是对应的匹配数据
          var arr = result.tips;
          var arr1 = arr.map(arr => {
            return arr.name;
          });
          this.modify(arr1)
        });
      });
    }
  },
  computed: {
    ...Vuex.mapState({
      address: state => state.Release.address
    }),
    ...Vuex.mapState({
      province: state => state.Release.province
    })
  }
};
</script>

<style scoped>
#Loca {
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
  text-align: center;
  line-height: 0.94rem;
}
.iconfont {
  font-size: 0.34rem;
  color: #1e1e1e;
  font-weight: bold;
  position: fixed;
  left: 0.23rem;
}
input {
  width: 7.02rem;
  height: 0.58rem;
  margin: 0.24rem 0.2rem;
  font-size: 0.34rem;
  border: 1px solid #dcdcdc;
  border-radius: 0.2rem;
  padding-left: 0.34rem;
}
.address {
  width: 100%;
  height: 0.88rem;
  font-size: 0.26rem;
  color: #313131;
  line-height: 0.88rem;
  margin-bottom: 0.01rem;
  padding-left: 0.61rem;
  background: #ffffff;
}
.address > .iconfont {
  color: blueviolet;
  font-size: 0.38rem;
}
.image {
  width: 0.38rem;
  height: 0.38rem;
  position: absolute;
  left: 6.5rem;
  top: 1.63rem;
}
</style>
 