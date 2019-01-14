<template>
 <div class="shield">
    <div class="header">

            <div class="header_pic" @click="handleJump">
                <img src="../../../../static/icon/icon_jiantou1@2x.png"/>
            </div>

      <p>屏蔽设置</p>
    </div>
     <div class="main_t">
            <img src="../../../../static/icon/icon_tianjia@2x.png" @click="handleJumpF"/>
            <b>添加屏蔽用户</b>
			<p class="shieldP">已屏蔽用户</p>
    </div>


        <div class="wrapper" ref="wrapper">
        <ul class="content">
            <li v-for="(item,index) in list" :key="index">
               <div class="left">
               	<!-- <img src="../../../../static/shield/pb_tx_01@2x.png"/> -->
                   <img :src="item.imgUrl"/>
               </div>
               <div class="center">
               	<p>{{item.name}}</p>
               	<span>{{item.infor}}</span>
               </div>
               <div class="right" >{{item.message}}</div>
            </li>
         </ul>
        </div>

  </div>
</template>
<script>
import BScroll from 'better-scroll';
import {mapActions,mapState} from "vuex";
export default {
     // https://www.easy-mock.com/mock/5c3465747db0f179db202922/example/shield

    data(){
        return{
          list:this.$route.params
        }
   },
   computed:{
    // ...mapState({
    //     shieldList:state=>state.Settings.getshieldList
    // })
   },
   created(){
   // this.getshieldListA();

   },
   mounted(){
         this.$nextTick(()=>{
            this.scroll = new BScroll(this.$refs.wrapper,{
              pullUpRefresh : {
                threshold: 20,
                stop:0
            }


           })
            console.log(this.scroll)
         })
   },
   methods: {
     handleJump(){
         this.$router.go(-1)
     },

// ...mapActions({
//     getshieldListA:"Settings/getshieldListA"
// }),
   handleJumpF(){
   	  this.$router.push("attention");
   }



   }
}
</script>
</script>
<style lang="scss" scoped>
@import "../../../common/css/fontSize.scss";
    .shield{
        width:7.5rem;
        height:13.34rem;
        // height:100%;
        background: #eee;
         .header {
            width: 7.5rem;
            height: 1.28rem;
            // text-align: center;
            background:rgba(255,255,255,1);
            box-shadow:0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
            position:relative;
            z-index:10;
                p {
                    font-size: $font_size_34;
                    color:rgba(30,30,30,1);
                    display:inline-block;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    // line-height:1.7rem;
                    position:absolute;
                    left: 3.08rem;
                    bottom:.29rem;

                }
                .header_pic{
                    width:.24rem;
                    height:.42rem;
                    display:inline-block;
                    position:absolute;
                    left: 0.24rem;
                    bottom:.31rem;
                     img{
                    width:.24rem;
                    height:.42rem;
                    }
                }
            }


                .wrapper{
                    width:100%;
                    // height:12.04rem;
                    height:9rem;
                	ul{
                        width:100%;

	                	/*background:#FFFFFF;*/
	                	// position:absolute;
	                	// left:0;
	                	// bottom:0;
	                	// right:0;
	                	// top:2.94rem;
	                	li{
	                		width:7.49rem;
							height:1.68rem;
							background:rgba(255,255,255,1);
							margin-bottom:0.01rem;

							.left{

								float:left;
								line-height:1.68rem;
								margin-left:.24rem;
                                margin-top:.24rem;
                                width:1.2rem;
                                height:1.2rem;
                                border-radius:50%;
                                img{
                                    width:100%;
                                    height:100%;
                                }

							}
							.center{

								float:left;
								margin-top:.55rem;
								padding-left:.24rem;
								p{
									font-size:$font_size_24;
									font-family:PingFang-SC-Medium;
									font-weight:500;
									color:rgba(49,49,49,1);
									padding-bottom: .1rem;

								}
								span{
									font-size:$font_size_20;
									font-family:PingFang-SC-Medium;
									font-weight:500;
									color:rgba(113,113,113,1);

								}

							}
							.right{

								float:right;
								/*text-align:center;*/
								line-height:0.48rem;
								width:1.16rem;
								height:0.48rem;
								border:0.01rem solid rgba(113,113,113,1);
								border-radius:0.05rem;
								margin-top:.60rem;
								margin-right:.23rem;
								padding-left:.22rem;
							}

	                	}
	                }
                }


            .main>ul>li>a{
                color:#313131;
            }
            .main_t{
            		width:100%;
            		height:1.66rem;
            		background:#eee;
                    padding-left:.24rem;
                    /*margin-bottom:.42rem;*/
                    position:relative;
                    z-index:10;
                    img{
                        width:.42rem;
                        height:.42rem;
                        display:inline-block;
                        position:absolute;
                        left:.24rem;
                        top:.53rem;
                    }
                    b{
                        font-size:$font_size_24;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                        color:rgba(49,49,49,1);
                        position:absolute;
                        left:.78rem;
                        top:.55rem;
                    }
                    .shieldP {
                    padding-left:.24rem;
                    /*padding-bottom: .17rem;*/
                    font-size:$font_size_20;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(113,113,113,1);
                    position:absolute;
                    left:.06rem;
                    bottom:.19rem;
                    /*z-index:10;*/
                    /*position:fixed;*/
                }
                }


    }

</style>
