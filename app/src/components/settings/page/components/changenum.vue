<template>
  <div class="loginPhone">
    <div class="header">
	        
	            <div class="header_pic" @click="handleJump">
	                <img src="../../../../../static/icon/icon_jiantou1@2x.png"/>
	            </div>
	        
	      <p>更换号码</p>
	</div>
    <div class="main">
        <ul>
			<li>
				<i>国家/地区</i>
				<span>中国(+86)</span>
			</li>
			<li>
				<i>手机号码</i>
				<span>
					<input type="text" value="178*****0181"/>
				</span>
			</li>
        </ul>
    </div>
    <div class=footer>
    	
    	<router-link to="/login">
    		<div>完成</div>
    	</router-link>
    </div>
   </div>
</template>
<script>
export default {
   methods:{
	   handleJump(){
		   this.$router.go(-1)
	   }
   }
}
</script>
<style lang="scss" scoped>
@import "../../../../common/css/fontSize";
    .loginPhone{
        width:7.5rem;
        height:13.34rem;;
        background: #eee;
        .header{
            width: 7.5rem;
            height: 1.28rem;
            // text-align: center;
            background:rgba(255,255,255,1);
            box-shadow:0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
            position:relative;
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
	        .main{
	            width:7.5rem;
	            /*height:4.9rem;*/
	            margin-top:.51rem;
	            
	            ul{
	                width:100%;
	                /*height:100%;*/
	                li{
	                    width:100%;
	                    height:.88rem;
	                    background:rgba(255,255,255,1);
	                    box-shadow:0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
	                    border-bottom:1px solid #eee;
	                    line-height:.88rem;
	                    padding-left:.25rem;
	                    padding-right:.25rem;
	                    font-size:$font_size_24;
	                    font-family:PingFang-SC-Medium;
	                    font-weight:500;
	                    position: relative;
	                    display:flex;
	                    justify-content:space-between;
	                    i{
	                    	font-style: normal;
	                    	font-size:$font_size_24;
												font-family:PingFang-SC-Medium;
												font-weight:500;
												color:rgba(49,49,49,1);
	                    }
	                    input {
	                    	width:102%;
	                    	height:98%;
	                    	outline:none;
	                    	text-align:right;
	                    	border:none;
	                    }
	                    
	                }
	            }
	        }
	        .main>ul>li>a{
	            color:#313131;
	            width:100%;
	            height:100%;
	            display:inline-block;
	        } 
	        .footer{
	        	margin-top:1.09rem;
	        	padding-left:.25rem;
	        	div{
	        		width:5.64rem;
					height:.72rem;
					background:rgba(99,215,212,1);
					border:1px solid rgba(206,204,204,1);
					box-shadow:0 0.01rem 0.03rem 0 rgba(1,29,28,0.15);
					border-radius:0.04rem;
					text-align:center;
					line-height:.72rem;
					font-size:$font_size_24;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:rgba(255,255,255,1);
					margin-left:.6rem;
					margin-top:.66rem;
	        	}
	        }          
    }
   
</style>