<template>
  <div class="at">
    <div class="header">
      <router-link to="/settings">
        <div class="header_pic">
          <img src="../../../../../static/icon/icon_jiantou1@2x.png">
        </div>
      </router-link>
      <p>@设置</p>
    </div>
    <div class="main">
        <p>我将收到这些人的@通知</p>
        <ul>
            <li>所有人</li>
            <li>我关注的人</li>
            <li>关闭</li>
        </ul>
    </div>
    <div class="footer">
        <p>所有人评论我时，都将在信息列表首页进行数字提醒，并将在应用外传送通知</p>
        <div>
            <img src="../../../../../static/icon/sz_fh@2x.png"/>
            <p class="my1">我的</p>
            <!--<span></span>-->
        </div>
    </div>
    <div class="footer footer1">
        <p>未关注的人@我时，将仅进行红点标记</p>
        <div>
            <img src="../../../../../static/icon/sz_fh@2x.png"/>
            <p class="my2">我的</p>
            <!--<span></span>-->
        </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
   .at{
        width:7.5rem;
        height:13.34rem;;
        background: #eee;
        .header {
            width: 7.5rem;
            height: 1.28rem;
            // text-align: center;
            background:rgba(255,255,255,1);
            box-shadow:0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
            position:relative;
             p {
                font-size:.34rem;
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
            bottom:.23rem;
        	}
    		}
        .main{
            width:7.5rem;
            height:3.5rem;
            margin-top:.50rem;
           
            p{
                padding-left:.24rem;
                padding-bottom: .17rem;
                font-size:.2rem;
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
                    font-size:.24rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    position: relative;
                     img{
                        display:inline-block;
                        position:absolute;
                        right:.24rem;
                        bottom:.33rem;
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
                font-size:.2rem;
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
            	 	}
            	   .my1,.my2{
            	 	 display:inline-block;
            	 	 font-size:.24rem;
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
            }
        }
        .footer1{
          	  div{
          	 		margin-top:0.2rem;
          	 		line-height:.88rem;
          	 }
          }
   }
 
</style>
