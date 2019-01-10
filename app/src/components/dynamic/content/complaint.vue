<template>
  <div id="complaint">
    <div class="header">
      <img src="../../../../static/icon/icon_jiantou1@2x.png" @click="goback()">
      <h2>投诉</h2>
    </div>
    <div class="main">
      <div class="mainT">
        <p>投诉<span>{{item.nickname|name}}</span> 的此条动态：</p>
      </div>
      <div class="mainM"> 
        <p><span>{{item.nickname|name}}</span>： {{item.content}}</p>
      </div>
      <ul class="mainB">
          <li v-for="(item,index) in list" v-bind:key="index">
              <input type="checkbox" :id="item.id" @click="handle(item,$event)">
              <i></i> <label :for="item.id">{{item.infor}}</label>
          </li>
      </ul>
      <button class="btn">确认投诉</button>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            list:[
                {
                    'id':'one',
                    'infor':'垃圾营销'
                },
                {
                    'id':'two',
                    'infor':'涉黄信息'
                },
                {
                    'id':'thr',
                    'infor':'有害健康'
                },
                {
                    'id':'fou',
                    'infor':'人身攻击'
                },
                {
                    'id':'fiv',
                    'infor':'违法信息'
                },
                {
                    'id':'six',
                    'infor':'诈骗信息'
                }
            ],
            arr:[],
            item:""
        }
    },
    created() {
        this.item = this.$route.params.item
        console.log(this.item)

    },
    filters:{
        name:(val)=>{
            return "@"+val
        }
    },
    methods: {
        goback(){
            this.$router.go(-1)
        },
        handle(item){
            if(this.arr.indexOf(item.infor)==-1){
                this.arr.push(item.infor)
            }else if(this.arr.indexOf(item.infor)!=-1){
                this.arr.splice(this.arr.indexOf(item.infor),1)
            }
            console.log(this.arr)
        }
    },
};
</script>
<style lang="scss" scoped>
#complaint {
    height: 100%;
  .header {
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    padding: 0 0.24rem;
    margin-top: 0.4rem;
    h2 {
      color: #1e1e1e;
      font-size: 0.34rem;
      margin-left: 3.24rem;
      font-weight: bold;
    }
    img {
      width: 0.18rem;
      height: 0.32rem;
    }
  }
  .main{
      width: 100%;
      height: 100%;
      background:rgba(244,244,244,1);
      padding-top: .2rem;
      .mainT{
          width: 100%;
          height: .88rem;
          line-height: .88rem;
          background: #fff;
          padding: 0 .23rem;
          p{
              font-size: .24rem;
              span{
                  color: #63D7D4;
              }
          }
      }
      .mainM{
          width: 100%;
          line-height: .6rem;
          padding: 0 .23rem;
          span{
                  color: #63D7D4;
              }
      }
      .mainB{
          width: 100%;
          height: 2.2rem;
          display: flex;
          flex-wrap: wrap;
          background: #FFFFFF;
          li{
              width: 50%;
              text-align: center;
              line-height: .7rem;
              input{
                  width: .24rem;
                  height: .24rem;
              }
          }
      }
      .btn{
            width:5.64rem;
            height:.72rem;
            background:rgba(99,215,212,1);
            border-radius:4px;
            color: #fff;
            margin-left: .93rem;
            margin-top: .34rem;
            border: none;
      }
  }
}
</style>