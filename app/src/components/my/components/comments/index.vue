<template>
  <div class="app">
    <div class="nav">     
        <div class="return" @click="handleBack()">
          <img src="../../../../../static/icon/icon_jiantou1@2x.png">
        </div>
    </div>
    <div class="wrapper conout" ref="box">
      <div class="content conin">

        <div class="dynamic">
          <div class="user_tx">
            <img src="../../../../../static/tx_02@2x.png">
            <h2>偶像观察员</h2>
            <p>12-25&nbsp;&nbsp;18:20&nbsp;&nbsp;&nbsp;来自iphone客户端</p>
          </div>
          <div class="user_con">
            <p>"以前我以为<br>
					钱可以买到一切<br>
					现在我觉得真的不行<br>
					因为钱不够"</p>
          </div>
          <div class="user_show">
            <img src="../../../../../static/tu_01@2x.png">
            <img src="../../../../../static/tu_02@2x.png">
            <img src="../../../../../static/tu_03@2x.png">
            <img src="../../../../../static/tu_04@2x.png">
            <img src="../../../../../static/tu_05@2x.png">
            <img src="../../../../../static/tu_06@2x.png">
          </div>
        </div>
       <div class="like">
           <div class="likehead">
               <p class="commentsNum  maincon">评论:&nbsp;(<span>3</span>)</p>
               <p class="likeNum">赞:&nbsp;(<span>3</span>)</p>
           </div>
           <div class="likecon">
               <div class="likeuser">
                   <div class="user_tx">
                        <img src="../../../../../static/tx_02@2x.png">
                    </div>
                    <div class="comcon">
                        <h2>偶像观察员</h2>
                        <p>啦啦啦啦啦啦啦啦啦啦</p>
                    </div>
                    <div class="time">
                        <span>18:20</span>
                        <div class="fx">
                            <div><img src="../../../../../static/icon/icon_zf@2x.png"></div>
                            <div><img src="../../../../../static/icon/icon_pl@2x.png"></div>
                            <div><img src="../../../../../static/icon/icon_dz@2x.png"></div>
                        </div>
                        </div>
               </div>
                 <div class="likeuser">
                   <div class="user_tx">
                        <img src="../../../../../static/tx_02@2x.png">
                    </div>
                    <div class="comcon">
                        <h2>偶像观察员</h2>
                        <p>啦啦啦啦啦啦啦啦啦啦</p>
                    </div>
                    <div class="time">
                        <span>18:20</span>
                        <div class="fx">
                            <div><img src="../../../../../static/icon/icon_zf@2x.png"></div>
                            <div><img src="../../../../../static/icon/icon_pl@2x.png"></div>
                            <div><img src="../../../../../static/icon/icon_dz@2x.png"></div>
                        </div>
                        </div>
               </div>
               
                <div class="likeuser">
                   <div class="user_tx">
                        <img src="../../../../../static/tx_02@2x.png">
                    </div>
                    <div class="comcon">
                        <h2>偶像观察员</h2>
                        <p>啦啦啦啦啦啦啦啦啦啦</p>
                    </div>
                    <div class="time">
                        <span>18:20</span>
                        <div class="fx">
                            <div><img src="../../../../../static/icon/icon_zf@2x.png"></div>
                            <div><img src="../../../../../static/icon/icon_pl@2x.png"></div>
                            <div><img src="../../../../../static/icon/icon_dz@2x.png"></div>
                        </div>
                        </div>
               </div>
                <div class="likeuser">
                   <div class="user_tx">
                        <img src="../../../../../static/tx_02@2x.png">
                    </div>
                    <div class="comcon">
                        <h2>偶像观察员</h2>
                        <p>啦啦啦啦啦啦啦啦啦啦</p>
                    </div>
                    <div class="time">
                        <span>18:20</span>
                        <div class="fx">
                            <div><img src="../../../../../static/icon/icon_zf@2x.png"></div>
                            <div><img src="../../../../../static/icon/icon_pl@2x.png"></div>
                            <div><img src="../../../../../static/icon/icon_dz@2x.png"></div>
                        </div>
                        </div>
               </div>
                <div class="likeuser">
                   <div class="user_tx">
                        <img src="../../../../../static/tx_02@2x.png">
                    </div>
                    <div class="comcon">
                        <h2>偶像观察员</h2>
                        <p>啦啦啦啦啦啦啦啦啦啦</p>
                    </div>
                    <div class="time">
                        <span>18:20</span>
                        <div class="fx">
                            <div><img src="../../../../../static/icon/icon_zf@2x.png"></div>
                            <div><img src="../../../../../static/icon/icon_pl@2x.png"></div>
                            <div><img src="../../../../../static/icon/icon_dz@2x.png"></div>
                        </div>
                        </div>
               </div>
                <div class="likeuser">
                   <div class="user_tx">
                        <img src="../../../../../static/tx_02@2x.png">
                    </div>
                    <div class="comcon">
                        <h2>偶像观察员</h2>
                        <p>啦啦啦啦啦啦啦啦啦啦</p>
                    </div>
                    <div class="time">
                        <span>18:20</span>
                        <div class="fx">
                            <div><img src="../../../../../static/icon/icon_zf@2x.png"></div>
                            <div><img src="../../../../../static/icon/icon_pl@2x.png"></div>
                            <div><img src="../../../../../static/icon/icon_dz@2x.png"></div>
                        </div>
                        </div>
               </div>
           </div>
       </div>


      </div>
    </div>
  </div>
</template>


<script>
import Bscroll from "better-scroll";
export default {
  data() {
    return {
    };
  },
  methods: {
    handleBack(){
        this.$router.back();
    }
  },
  mounted() {
      
    this.scroll = new Bscroll(this.$refs.box,{
      pullUpLoad:true,
      click:true
    });
    console.log(this.scroll)
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
   
    background:#f4f4f4;
    .conin {
        overflow: hidden;
         padding-top: 0.8rem;
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
         justify-content: space-around;
            padding: 0 0.1rem;
          margin-top: 0.18rem;
          img {
            width: 2.3rem;
            height: 2.3rem;
           width: 32%;          
            margin-bottom: 0.1rem;
          }
        }
      }
      .like{
          width: 100%;
          margin-top: 0.2rem;
          background: white;
          .likehead{
              height:0.69rem;
              border-bottom: 1px solid #f4f4f4;
              display: flex;
              justify-content: space-between;
              p{
                  line-height: 0.69rem;
                  height: 0.69rem;
                  font-size:0.2rem;
              }
              .maincon{
                  font-family: PingFangSC-Semibold;
                  color: #313131;
              }
              .commentsNum{
                  text-indent: 0.5rem;
              }
              .likeNum{
                  padding-right: 0.5rem;
              }
          }
          .likecon{
              width: 100%;
              .likeuser{
                  display: flex;
                  flex-wrap: wrap;
                  padding: 0 0.2rem;
                  height: 1.4rem;
                  border-bottom: 1px solid #f4f4f4;
                  .user_tx{
                      img{
                        width: 0.8rem;
                        height: 0.8rem;
                        margin-top: 0.15rem;
                      }
                     
                  }
                  .comcon{
                      text-indent: 0.2rem;
                      font-family: PingFangSC-Regular;
                      h2{
                          font-size: 0.2rem;
                          color: #717171;
                          margin-top: 0.3rem;
                      }
                      p{
                          font-size: 0.24rem;
                          color: #313131;
                      }
                  }
                  .time{
                      width: 100%;
                      text-indent: 0.1rem;
                      display: flex;
                      span{
                          width:35%;

                      }
                      .fx{
                          width: 65%;
                          display: flex;
                          justify-content: space-around;
                          div{
                              width: 15%;
                              img{
                                  width: 0.2rem;
                                  height: 0.2rem;
                                  margin: 0 auto;
                                  margin-top:0.09rem;
                              }
                          }
                      }
                  }
              }
          }

      }
    }
  }
}
</style>

