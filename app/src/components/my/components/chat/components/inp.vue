<template>
	<div id="inp">
		<p>语音</p>
		<input type="text" id="send">
		<p>发送</p>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	#inp{
		width:7.5rem;
		height:1rem;
		background:#fff;
		display:flex;
		justify-content: space-around;
		overflow:hidden;
		
		p{
			width:0.6rem;
			height:0.23rem;
			margin-top:0.38rem;
		}
		#send{
			width:5rem;
			height:0.58rem;
			border-radius:0.2rem;
			margin-top:0.2rem;
			background:#f4f4f4;
		
		}
	}
</style>