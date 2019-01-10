<template>
  <div id="header">
		<!-- <router-link :to="{name:'my'}"> -->
			<img @click="handleBack()"   src="../../../../../../static/icon/icon_jiantou1@2x.png">
		<!-- </router-link> -->
		<h2><b>我的赞</b></h2>
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
		width:7.5rem;
		height:1.28rem;
		position: relative;
		z-index: 5;
		background:#fff;
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