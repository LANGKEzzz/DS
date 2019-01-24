<template>
  <div id="app">
    <Head-com></Head-com>
    <Banner-com></Banner-com>
    <div class="screening" v-show="flag" @click="screenShow()"></div>
    <div class="sx_con" v-show="flag">
      <div class="screen">
        <p>你的选择</p>
        <div class="age">
          <p>
            <span>{{minage}}</span>岁
          </p>
          <div class="sx_age">
              <div class="block slider">
                <el-slider v-model="value9" range 
                input-size="large"
                @change="ageChange()"
                :min="16" :max="50"></el-slider>
              </div>          
          </div>
          <p>
            <span>{{maxage}}</span>岁
          </p>
        </div>
        <div class="sex">
          <div
            class="nan aa"
            v-bind="{class:activeIndex == 1 ? 'active' : ''}"
            @click="handleSex(1)"
          >男</div>
          <div
            class="no_sex aa"
            v-bind="{class:activeIndex == 0 ? 'active' : ''}"
            @click="handleSex(0)"
          >不限</div>
          <div
            class="nv aa"
            v-bind="{class:activeIndex == 2 ? 'active' : ''}"
            @click="handleSex(2)"
          >女</div>
        </div>
        <div class="city">
          <div class="dq">地区</div>
          <div class="choose">选择</div>
        </div>
      </div>
      <button class="sx" @click="handleSearch()">确定</button>
    </div>
  </div>
</template>
<script>
import Head from "./components/head";
import Banner from "./components/banner";
import Vuex from "vuex";
export default {
  data() {
    return {
      activeIndex: 0,
      value9: [16, 50],
      minage:16,
      maxage:50
    };
  },
  components: {
    "Head-com": Head,
    "Banner-com": Banner
  },
  computed: {
    ...Vuex.mapState({
      flag: state => state.Home.flag
    })
  },
  methods: {
    ...Vuex.mapMutations({
      screenShow: "Home/screenShow"
    }),
    handleSex(index) {
      this.activeIndex = index;
    },
    handleSearch() {
      this.screenShow();
      console.log("111");
    },
    ageChange(){
      this.minage = this.value9[0];
      this.maxage = this.value9[1];
    }
  }
};
</script>
<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  .screening {
    width: 100%;
    height: 11.5rem;
    position: fixed;
    left: 0;
    top: 0.88rem;
    background: #666;
    opacity: 0.5;
    z-index: 999;
  }
  .sx_con {
    position: fixed;
    left: 0.25rem;
    top: 6.8rem;
    z-index: 999;
    .screen {
      width: 7rem;
      height: 4.6rem;
      background: white;
      border-radius: 8px;
      p {
        line-height: 0.9rem;
        height: 0.9rem;
        width: 100%;
        text-align: center;
        font-size: 30px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(30, 30, 30, 1);
      }
      .age {
        width: 5.56rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        p {
          width: 0.8rem;
          font-size: 30px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(99, 215, 212, 1);
        }
        .sx_age {
          width:3.94rem;
          height: 0.8rem;
          margin:0 .2rem;
          display: flex;
          align-items: center;
          .slider{
            width:100%;
          }
        }
      }
      .sex {
        height: 0.8rem;
        width: 5.56rem;
        margin: 0 auto;
        margin-top: 0.3rem;
        display: flex;
        justify-content: space-between;
        line-height: 0.8rem;
        text-align: center;
        .nan {
          border-radius: 0.35rem 0px 0px 0.35rem;
        }
        .nv {
          border-radius: 0 0.35rem 0.35rem 0;
        }
        .aa {
          background: rgba(222, 222, 222, 1);
          width: 1.84rem;
          height: 0.8rem;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(30, 30, 30, 1);
        }
        .active {
          background: rgba(99, 215, 212, 1);
          color: white;
        }
      }
      .city {
        height: 0.8rem;
        width: 5.56rem;
        margin: 0 auto;
        margin-top: 0.3rem;
        display: flex;
        justify-content: space-between;
        line-height: 0.8rem;
        text-align: center;
        .dq {
          width: 2.77rem;
          height: 0.8rmepx;
          background: rgba(99, 215, 212, 1);
          border-radius: 0.35rem 0px 0px 0.35rem;
          color: white;
        }
        .choose {
          width: 2.77rem;
          height: 0.8rmepx;
          background: rgba(222, 222, 222, 1);
          border-radius: 0px 35px 35px 0px;
        }
      }
    }
    .sx {
      border: none;
      width: 7rem;
      height: 1.1rem;
      background: rgba(254, 255, 249, 1);
      box-shadow: 0px 10px 12px 0px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      margin-top: 0.3rem;
      outline: none;
      font-size: 30px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(99, 215, 212, 1);
    }
  }
}
</style>