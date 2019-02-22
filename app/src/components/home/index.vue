<template>
  <div id="app">
    <Head-com></Head-com>
    <Banner-com :obj="obj"></Banner-com>
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
              <el-slider
                v-model="value9"
                range
                input-size="large"
                @change="ageChange()"
                :min="16"
                :max="50"
              ></el-slider>
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
          <div class="choose" @click="chooseaddress()">
            <p>{{myAddressProvince}}  {{myAddressCity}}  {{myAddresscounty}}</p>
            </div>
        </div>
      </div>
      <mt-popup v-model="popupVisible">
        <mt-picker :slots="slots" @change="onMyAddressChange"></mt-picker>
      </mt-popup>
      <button class="sx" @click="handleSearch()">确定</button>
    </div>
  </div>
</template>
<script>
import Head from "./components/head";
import Banner from "./components/banner";
import Vuex from "vuex";
import Vue from "vue";
import axios from "../../lib"
import { Popup, Picker } from "mint-ui";
import MintUI from "mint-ui";
import myaddress from "../my/components/person/data.json";
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);
export default {
  components: {
    "Head-com": Head,
    "Banner-com": Banner
  },
  data() {
    return {
      obj:"",
      activeIndex: 0,
      value9: [16, 50],
      minage: 16,
      maxage: 50,
      popupVisible: false,
      myAddressProvince: "",
      myAddressCity: "",
      myAddresscounty: "",
      slots: [
        {
          flex: 1, //对应 slot CSS 的 flex 值
          defaultIndex: 1, //对应 slot 初始选中值，需传入其在 values 数组中的序号，默认为 0
          values: Object.keys(myaddress), //省份数组
          className: "slot1", //对应 slot 的类名
          textAlign: "center" //对应 slot 的对齐方式
        },
        {
          divider: true, //对应 slot 是否为分隔符
          content: "-", //分隔符 slot 的显示文本
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ],
      myAddressProvince: "省",
      myAddressCity: "市",
      myAddresscounty: "区/县"
    };
  },
  created(){
     axios("/indexinfo").then((data)=>{
      this.obj = data;
    })
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
    ageChange() {
      this.minage = this.value9[0];
      this.maxage = this.value9[1];
    },
    chooseaddress() {
      this.popupVisible = !this.popupVisible;
    },
    // onValuesChange(picker, values) {
    //   if (values[0] > values[1]) {
    //     picker.setSlotValue(1, values[0]);
    //   }
    // },
    onMyAddressChange(picker, values) {
      if (myaddress[values[0]]) {
        //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
        picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
        //获取省
        this.myAddressProvince = values[0];
        //获取市
        this.myAddressCity = values[1];
        //获取县
        this.myAddresscounty = values[2];
      }
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
     .picker{
       width: 6rem;     
      
    }
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
          width: 3.94rem;
          height: 0.8rem;
          margin: 0 0.2rem;
          display: flex;
          align-items: center;
          .slider {
            width: 100%;
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
          height: 0.8rem;
          background: rgba(222, 222, 222, 1);
          border-radius: 0px 35px 35px 0px;
          p{
            font-size: .24rem;
            line-height: .8rem;
            height: .8rem;
            width: 2.5rem;
            margin: 0 auto;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
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