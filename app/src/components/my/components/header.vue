<template>
	<div id="header">
	   <div class="header_top">
	   	 <h2>我</h2>
		<router-link to="/settings">
	   	 <img src="../../../../static/23@2x.png" >
		</router-link>
	   </div>
	   <div class="header_middle">
	   	  <div style="width:0.5rem;height:0.5rem;background:#363838;">
	   	  	<router-link :to="{name:'collect'}">
			    <!-- 收藏跳转 -->
	   	  	    <img src="../../../../static/icon-sc@2x.png">
	   	  	</router-link>
	   	  </div>
	   	       
	   	   <router-link :to="{name:'person'}">
			  <!-- 个人编辑信息跳转 -->
	   	      <img class="ig" src="../../../../static/tx_01@2x.png">
	   	   </router-link>
	   	   

	   	  <div style="width:0.5rem;height:0.5rem;background:#363838;;">
            <router-link :to="{name:'newList'}">
	   	  	   <img src="../../../../static/5@2x.png">
		    </router-link>
	   	  </div>
	   </div>
	   <div class="header_bottom">
	   	   <!-- <router-link :to="{name:'attention'}">-->
	   	    <dl>
	   	    	<dt>297</dt>
	   	    	<router-link :to="{name:'attention'}">
	   	    	    <dd>关注</dd>
	   	    	</router-link>
	   	    </dl>
	   	    <!--</router-link>-->
	   	    
	   	    <dl>
	   	    	<dt>550</dt>
	   	    	<router-link :to="{name:'fans'}">
	   	    	     <dd>粉丝</dd>
	   	    	</router-link>
	   	    </dl>
	   	    <dl>
	   	    	<dt>1154</dt>
			    <router-link :to="{name:'praise'}"> 
	   	    	    <dd>我的赞</dd>
				</router-link>
	   	    </dl>
	   </div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
    #header{
		width:100%;
 		height:3.8rem;
 		background:url("../../../../static/my/wd_bj@2x.png") no-repeat ;
		background-size: 100% 4.23rem;
		position: relative;
		z-index: 5;
		.header_top{
			width:100%;
 		    height:1.17rem;//1.27----1.1
 		    /*background:green;*/
 		    overflow:hidden;
			h2{
				width:0.32rem;
				height:0.31rem;
				/*text-align:center;*/
				margin-left:3.59rem;
				margin-top:0.5rem;//0.68----0.5
				/*height:1.27rem;
				line-height:1.27rem;*/
				float:left;
				font-size:0.32rem;
				color:#fff;
				
			}
			img{
				width:0.42rem;
				height:0.4rem;
				/*float:left;*/
				margin-top:0.55rem;//0.63-----0.55
				margin-left:6.86rem;
			}
		}
		.header_middle{
			width:100%;
 		    height:1.53rem;
			.ig{
				width:1.53rem;
				height:1.53rem;
				float:left;
				margin-left:0.9rem;
			}
			div:nth-child(1){
				width:0.6rem;
 		        height:0.6rem;
 		        /*background:yellow;*/
 		        float:left;
				margin-left:1.47rem;
				margin-top:0.51rem;
				overflow:hidden;
				border-radius:50%;
				opacity:0.5;
				img{
					width:0.36rem;
					height:0.36rem;
					float:left;
					margin-left:0.06rem;
					margin-top:0.08rem;
				}
			}
			div:nth-child(3){
				width:0.6rem;
				height:0.6rem;
				/*background:yellow;*/
				float:left;
				margin-left:0.9rem;
				margin-top:0.49rem;
				overflow:hidden;
				border-radius:50%;
				opacity:0.5;
				img{
					width:0.36rem;
					height:0.36rem;
					float:left;
					margin-left:0.06rem;
					margin-top:0.07rem;
				}
			}
		}
		.header_bottom{
			width:100%;
			height:1.43rem;	
			display:flex;
			justify-content: space-around;
			dl{
				float:left;
				width:0.9rem;
				height:0.57rem;
				 margin-top:0.18rem;//0.3---0.1
				font-size:0.24rem;
				color:#fff;
				dt{
					margin-left:0.07rem;
				}
				dd{
					color:#fff;
				}
			}
		}
	}
</style>