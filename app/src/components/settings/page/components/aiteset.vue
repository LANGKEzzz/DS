<template>
  <div class="at">
    <div class="header">
      
        <div class="header_pic" @click="handleJump">
          <img src="../../../../../static/icon/icon_jiantou1@2x.png">
        </div>
      
      <p>@设置</p>
    </div>
    <div class="main">
        <p>我将收到这些人的@通知</p>
        <ul>
 					<li v-for="(item,index) in list" @click="handleChange(index);handleChangeFlag(index)" :key="index">
                    {{item.title}}
                    <img src="../../../../../static/icon/icon_dh@2x.png" v-show="activeIndex==index"> 
                
            </li>
        </ul>
    </div>
    <div class="footer" v-if="flag">
        <p>所有人评论我时，都将在信息列表首页进行数字提醒，并将在应用外传送通知</p>
        <div>
            <img src="../../../../../static/icon/sz_fh@2x.png"/>
            <p class="my1">我的</p>
            <p class="bigquan">
            	<span>9</span>
            </p>
        </div>
    </div>
    <div class="footer footer1" v-if="flag1">
        <p>未关注的人@我时，将仅进行红点标记</p>
        <div>
            <img src="../../../../../static/icon/sz_fh@2x.png"/>
            <p class="my2">我的</p>
            <p class="smallquan">
            	
            </p>
        </div>
    </div>
    <div class="footer footer1 footer2" v-if="flag2">
        <p>所有的@我时，将仅进行红点标记</p>
        <div>
            <img src="../../../../../static/icon/sz_fh@2x.png"/>
            <p class="my2">我的</p>
            <p class="smallquan">
            	
            </p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
	    data(){
        return{
            list:[
                {
                    
                    title:"所有人"
                    // messsage:"我关注的人",
                    // url:"../../../../../static/icon/icon_jiantou1_reserver.png"
                },
                {
                    // name:"phomeAS",
                    title:"我关注的人"
                    // messsage:"所有人",
                    // url:"../../../../../static/icon/icon_jiantou1_reserver.png"

                },
                                {
                    // name:"phomeAS",
                    title:"关闭"
                    // messsage:"所有人",
                    // url:"../../../../../static/icon/icon_jiantou1_reserver.png"

                }
   
  

            ],
            activeIndex:-1,
            flag:false,
            flag1:false,
            flag2:false
           
        }
    },
    methods:{
    	handleChange(index){
    		this.activeIndex=index
            console.log(index);
        },
        handleChangeFlag(index){
          if(index==0){
              this.flag=true
            this.flag1=false,
            this.flag2=false
          }else if(index==1){
              this.flag1=true;
              this.flag=true;
              this.flag2=false;
          }else if(index==2){
              this.flag2=true;
              this.flag1=false;
              this.flag=false;
          }
            
        },
        handleJump(){
            this.$router.go(-1);
        }
     }
}

</script>
<style lang="scss" scoped>
@import "../../../../common/css/fontSize";
   .at{
        width:7.5rem;
        height:13.34rem;
        background: #eee;
        .header {
            width: 7.5rem;
            height: 1.28rem;
            // text-align: center;
            background:rgba(255,255,255,1);
            box-shadow:0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
            position:relative;
             p {
                font-size:$font_size_34;
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
        .main{
            width:7.5rem;
            height:3.5rem;
            margin-top:.50rem;
           
            p{
                padding-left:.24rem;
                padding-bottom: .17rem;
                font-size:$font_size_20;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(113,113,113,1);
            }
            ul{
                width:100%;
                height:2.58rem;
                li{
                    width:100%;
                    height:.88rem;
                    background:rgba(255,255,255,1);
                    box-shadow:0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
                    border-bottom:1px solid #eee;
                    line-height:.88rem;
                    padding-left:.25rem;
                    font-size:$font_size_24;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    position: relative;
                     img{
                        display:inline-block;
                        position:absolute;
                        right:.24rem;
                        bottom:.33rem;
                        width:.42rem;
                        height:.3rem;
                    }
                    
                }
            }
        }
        	.main>ul>li>a{
            color:#313131;
        }
        	.footer{
	        	/*margin-top:.43rem;*/
	        	padding-left:.24rem;
	        	padding-right:.24rem;
	        	margin-bottom: .5rem;
            p{
                font-size:$font_size_20;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(113,113,113,1);
                display:inline-block;
                
            }
            div{
            	 width:7.02rem;
            	 height:.88rem;
            	 background:#FFFFFF;
            	 padding-top:0.1rem;
            	 line-height:.88rem;
            	 margin-top:0.2rem;
            	 position:relative;
            	   img{
            	 		display:inline-block;
                         width:.72rem;
                         height:.72rem;
            	 	}
            	   .my1,.my2{
            	 	 display:inline-block;
            	 	 font-size:$font_size_24;
								 font-family:PingFang-SC-Medium;
								 font-weight:500;
								 color:rgba(49,49,49,1);
								 margin-left:.08rem;
								 /*line-height:.88rem;*/
								 /*margin-bottom:0.01rem;*/
								 /*margin-top:-0.02rem;*/
								position:absolute;
								top:.01rem;
								left:.8rem;
            	 }
            	 .bigquan{
            	 	  width:.34rem;
									height:.34rem;
									background:rgba(249,58,43,1);
									border-radius:50%;
									display:inline-block;
									position:absolute;
									top:.25rem;
									right:.14rem;
									span{
										  color:#fff;
											position:absolute;
											top:-0.26rem;
											right:.1rem;
											
                                            }
                        }
                    }
                }
                .footer1{
                    div{
                            margin-top:0.2rem;
                            line-height:.88rem;
                            
                            .smallquan{
                                width:.1rem;
                                            height:.1rem;
                                            background:rgba(249,58,43,1);
                                            border-radius:50%;
                                            position:absolute;
                                            top:.38rem;
                                            right:.19rem;
                            }
                    }
                }
   }
 
</style>
