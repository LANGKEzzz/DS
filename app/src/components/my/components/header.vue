<template>
	<div id="header">
	   <div class="header_top">
	   	 <h2>我</h2>
	   	
	   	    <img src="../../../../static/23@2x.png">
	   	
	   </div>
	   <div class="header_middle">
	   	  <div>
	   	  	<router-link :to="{name:'collect'}">
	   	  	    <img src="../../../../static/icon-sc@2x.png">
	   	  	</router-link>
	   	  </div>
	   	  
	   	   <router-link :to="{name:'person'}">
	   	      <img class="ig" src="../../../../static/tx_01@2x.png">
	   	   </router-link>
	   	   
	   	  <div>
	   	  	<img src="../../../../static/5@2x.png">
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

<style>
	#header{
		width:7.5rem;
		height:3.8rem;
		background:skyblue;
	}
	#header .header_top{
		width:7.5rem;
		height:1.27rem;
		/*background:green;*/
		overflow:hidden;
	}
	#header .header_top h2{
		width:0.32rem;
		height:0.31rem;
		/*text-align:center;*/
		margin-left:3.59rem;
		margin-top:0.68rem;
		/*height:1.27rem;
		line-height:1.27rem;*/
		float:left;
		font-size:0.34rem;
		color:#fff;
	}
	#header .header_top img{
		width:0.42rem;
		height:0.4rem;
		/*float:left;*/
		margin-top:0.63rem;
		margin-left:6.86rem;
	}
	#header .header_middle{
		width:7.5rem;
		height:1.53rem;
		/*background:red;*/
	}
	#header .header_middle .ig{
		width:1.53rem;
		height:1.53rem;
		float:left;
		margin-left:0.9rem;
	}
	#header .header_middle div:nth-child(1){
		width:0.6rem;
		height:0.6rem;
		/*background:yellow;*/
		float:left;
		margin-left:1.47rem;
		margin-top:0.51rem;
	}
	#header .header_middle div:nth-child(3){
		width:0.6rem;
		height:0.6rem;
		/*background:yellow;*/
		float:left;
	    margin-left:0.9rem;
	    margin-top:0.51rem;
	}
	#header .header_middle div img{
		width:0.36rem;
		height:0.36rem;
		float:left;
	}
	#header .header_bottom{
		width:7.5rem;
		height:1.43rem;	
		display:flex;
		justify-content: space-around;
	}
	#header .header_bottom dl{
		float:left;
		width:0.9rem;
		height:0.57rem;
		margin-top:0.3rem;
		font-size:0.24rem;
		color:#fff;
	}
	#header .header_bottom dl dt{
		margin-left:0.07rem;
	}
	
</style>