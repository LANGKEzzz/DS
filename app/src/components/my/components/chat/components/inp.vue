<template>
	<div id="inp">
		<button>语音</button>
		<input type="text" id="send">
		<button>发送</button>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	#inp{
		width:100%;
		height:1rem;
		background:#fff;
		position:fixed;
		left:0;
		bottom:0;
		z-index: 5;
		display:flex;
		justify-content: space-around;
		overflow:hidden;
		button{
			width:0.6rem;
			height:0.4rem;
			margin-top:0.38rem;
		}
		#send{
			width:5rem;
			height:0.58rem;
			border-radius:0.2rem;
			box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.15);
			margin-top:0.2rem;
			background:#f4f4f4;
		}
	}
</style>