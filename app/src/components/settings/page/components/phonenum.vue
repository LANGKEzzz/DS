<template>
	<div class="phone">
		<div class="header">
	        <router-link to="/AS">
	            <div class="header_pic">
	                <img src="../../../../../static/icon/icon_jiantou1@2x.png"/>
	            </div>
	        </router-link>
	      <p>手机号码</p>
	    </div>
	    <div class="main">
	    	<img src ="../../../../../static/icon/icon_shouji@2x.png"/>
	    </div>
	    <div class="footer">
	    	<p class="infor">如你的手机号已不用，请及时更换</p>
	    	<router-link to="/loginphone">
		    	<div class="loginPhone">
		    		<span>1785*****065</span>
		    		<div class="login_phone">
		    			<img src="../../../../../static/icon/icon_lianxiren.png" class="login">
		    			<b>登录手机</b>
		    			<img src="../../../../../static/icon/icon_jiantou1_reserver.png" class="jiantou"/>
		    		</div>
		    	</div>
	    	</router-link>
	    </div>
   </div>
</template>

<script>
</script>

<style lang="scss" scoped>
 .phone{
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
                    font-size: .34rem;
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
           .main>img{
			   margin:1.2rem 2.4rem 1.13rem ;
		   }
		   .footer{
			   
			   .footer>.infor{
				    font-size:.2rem;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:rgba(113,113,113,1);
					padding-left:0.25rem;
			   }
			   .loginPhone{
			   		width:100%;
			   		height:.88rem;
			   		background:#fff;
			   		line-height:.88rem;
			   		margin-top:.24rem;
			   		 span{
			   			display:inline-block;
			   			float:left;
			   		}
			   		.login_phone{
			   			display:inline-block;
			   			float:right;
			   			/*padding-right:1rem;*/
			   			.login{
			   				display:inline-block;
			   				margin-top:-0.05rem;
			   			}
			   			b{
			   				font-weight:normal;
			   				color:#63D7D4;
			   			}
			   			.jiantou{
			   				margin-top:-0.05rem;
			   				display:inline-block;
			   				margin-left:.29rem;
			   				margin-right:.24rem;
			   				
			   			}
			   		}
			   }

		   }
    
    }
</style>
