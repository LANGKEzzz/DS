<template>
     <div id="main">
     	<div class="ex"></div>
     	<div class="main_imp">
     		<ul>
     			<li>
     				<h2>头像</h2>
     				<img src="../../../../../../static/tx_01@2x.png">
     			</li>
     			<li>
     				<h2>昵称</h2>
     				<p>偶像观察员</p>
     			</li>
     			<li>
     				<h2>性别</h2>
     				<span>女</span>
     				<img src="../../../../../../static/icon/icon_jiantou1_reserver.png">
     			</li>
     			<li>
     				<h2>所在地</h2>
     				<p>安徽&nbsp;芜湖</p>
     				<img src="../../../../../../static/icon/icon_jiantou1_reserver.png">
     			</li>
     		</ul>
     	</div>
     </div>
</template>

<script>
</script>

<style lang="scss" scoped>
	#main{
		width:7.5rem;
		height:12.06rem;
		
		.ex{
			width:7.5rem;
	    	height:0.2rem;
	    	background:#f4f4f4;
		}
		.main_imp{
			width:7.5rem;
			height:11.86rem;
			li:nth-child(1){
				height:1.38rem;
				/*background:red;*/
				overflow:hidden;
			    border:1px solid #F4F4F4;
				h2{
					float:left;
					font-size:0.24rem;
					margin-top:0.58rem;
					margin-left:0.24rem;
				}
				img{
					width:1.1rem;
					height:1.1rem;
					margin-left:6rem;
					margin-top:0.14rem;
				}
			}li:nth-child(2){
				width:7.5rem;
				height:0.83rem;
				border:1px solid #F4F4F4;
				overflow:hidden;
				h2{
					float:left;
				    margin-left:0.25rem;
				    margin-top:0.33rem;
				}
				p{
					margin-left:6rem;
					margin-top:0.33rem;
				}
			}li:nth-child(3){
				width:7.5rem;
				height:0.83rem;
				/*background:blue;*/
				overflow:hidden;
				h2{
					float:left;
					font-size:0.24rem;
					margin-top:0.33rem;
					margin-left:0.24rem;
				}
				span{
					display:block;
					margin-left:1.55rem;
					margin-top:0.33rem;
					float:left;
				
				}
				img{
					margin-left:7.12rem;
					margin-top:0.44rem;
				}
			}li:nth-child(4){
				width:7.5rem;
				height:0.83rem;
				
				overflow:hidden;
				h2{
					float:left;
					font-size:0.24rem;
					margin-top:0.33rem;
					margin-left:0.24rem;
				}
				p{
					margin-top:0.33rem;
					margin-left:1.62rem;
					float:left;
				}
				img{
					margin-left:7.12rem;
					margin-top:0.44rem;
				}
				
			}
			
		}
	}
</style>