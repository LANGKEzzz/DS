<template>
	<div id="header">
			<img @click="handleBack()"    src="../../../../../../static/icon/icon_jiantou1@2x.png">
		<h2>更改名字</h2>
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
		overflow:hidden;
		background:#fff;
		img{
			width:0.22rem;
			height:0.42rem;
			float: left;
			margin-left:0.24rem;
			margin-top:0.63rem;
		}
		h2{
			font-size:0.34rem;
			margin-left:0.81rem;
			margin-top:0.56rem;	
		}
	}
</style>