<template>
	<div id="header">
	   <div id="header">
			<!-- <router-link :to="{name:'my'}"> -->
				<img @click="handleBack()"   src="../../../../../../static/icon/icon_jiantou1@2x.png">
			<!-- </router-link> -->
			<h2><b>好友</b></h2>
	    </div>
	</div>
</template>

<script>
     export default{
		 methods:{
			 handleBack(){
				  this.$router.back();
		     }
		 }
			
	 }
</script>

<style lang="scss" scoped>
	#header{
		width:100%;
		height:1.28rem;
		position: relative;
		background: #ffffff;
		z-index: 5;
		overflow:hidden;
		img{
			width:0.22rem;
			height:0.42rem;
			float:left;
			margin-left:0.24rem;
			margin-top:0.63rem;
		}
		h2{
			font-size:0.34rem;
			margin-left:3.08rem;
			margin-top:0.68rem;
		}
		
	}
</style>