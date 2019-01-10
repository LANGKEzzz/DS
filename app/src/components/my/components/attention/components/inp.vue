<template>
	<div id="inp">
		<input type="text" id="ipt" placeholder="搜索全部粉丝" style="padding-left:0.85rem;color='#717171';">
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
    #inp{
    	width:100%;
    	height:0.95rem;
    	background:#f4f4f4;
		position: relative;
		z-index: 5;
    	#ipt{
    		width:7.02rem;
    		height:0.58rem;
    		border-radius:0.2rem;
			box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.15);
    		margin-left:0.24rem;
    		margin-top:0.2rem;
    		background:url("../../../../../../static/icon/gzdr_icon-ss@2x.png") no-repeat;
			background-size:0.36rem 0.36rem;
			background-position: 0.24rem 0.11rem;
    	}
    }
</style>