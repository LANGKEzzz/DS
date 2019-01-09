<template>
  <div id="complaint">
    <div class="header">
      <img src="../../../../static/icon/icon_jiantou1@2x.png" alt>
      <h2>投诉</h2>
    </div>
    <div class="main">
      <div class="mainT">
        <p>投诉 的此条动态：</p>
      </div>
      <div class="mainM"> 
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
      </div>
      <ul class="mainB" @click="handle($event)">
          <li>
              <input type="checkbox" name="one" id="one">
              <i></i> <label for="one">垃圾营销</label>
          </li>
          <li>
              <input type="checkbox" name id="two">
              <i></i> <label for="two">涉黄信息</label>
          </li>
          <li>
              <input type="checkbox" name id="thr">
              <i></i> <label for="thr">有害健康</label>
          </li>
          <li>
              <input type="checkbox" name id="for">
              <i></i> <label for="for">人身攻击</label>
          </li>
          <li>
              <input type="checkbox" name id="fiv">
              <i></i> <label for="fiv">违法信息</label>
          </li>
          <li>
              <input type="checkbox" name id="six">
              <i></i> <label for="six">诈骗信息</label>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
        handle(e){
            var ev = e || window.event;
            var elm = ev.target || ev.srcElement;
            if (elm.tagName === 'INPUT') {
                if(elm.checked){
                    console.log(elm.label)
                }
                 return;
            }
            console.log(elm.checked)
           
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
          }
      }
      .mainM{
          width: 100%;
          height: 1.1rem;
          line-height: .6rem;
      }
      .mainB{
          width: 100%;
          height: 2.2rem;
          display: flex;
          flex-wrap: wrap;
          li{
              width: 50%;
              text-align: center;
              input{
                  width: .24rem;
                  height: .24rem;
              }
          }
      }
  }
}
</style>