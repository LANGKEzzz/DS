<template>
	<div id="main">
		<div class="ex"></div>
		<div class="main_bottom">
			<div class="main_bottom_one">
				<img src="../../../../static/tx_02@2x.png">
				<h2>偶像观察员</h2>
				<p>12-25&nbsp;&nbsp;18:20&nbsp;&nbsp;&nbsp;来自iphone客户端</p>
			</div>
			<div class="main_bottom_two">
 				<p>"以前我以为<br/>
 				钱可以买到一切<br/>
 				现在我觉得真的不行<br/>
 				因为钱不够"</p>
			</div>
			<div class="main_bottom_thr">
				<img src="../../../../static/tu_01@2x.png">
				<img src="../../../../static/tu_02@2x.png">
				<img src="../../../../static/tu_03@2x.png">
				<img src="../../../../static/tu_04@2x.png">
				<img src="../../../../static/tu_05@2x.png">
				<img src="../../../../static/tu_06@2x.png">
			</div>
			<div class="main_bottom_four">
				<img class="tx" src="../../../../static/icon/dw@2x.png">
				<p>北京科技职业技术学院</p>
				<div class="fx">
					<div><img src="../../../../static/icon/icon_zf@2x.png"><span>100</span></div>
				    <router-link :to="{name:'comments'}"><div><img src="../../../../static/icon/icon_pl@2x.png"><span>266</span></div></router-link>
				    <router-link :to="{name:'like'}"><div><img src="../../../../static/icon/icon_dz@2x.png"><span>300</span></div></router-link>
				</div>
				

				<!-- 加载图标 -->
				<!-- <div class="loading" v-show="flag">
				   <i class="fa fa-spinner fa-pulse"></i>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	#main{
		width:7.5rem;
	    height:10.1rem;
	    .ex{
	    	width:100%;
	    	height:0.2rem;
	    	background:#f4f4f4;
	    }.main_bottom{
	    	width:100%;
	    	height:9rem;
	    	.main_bottom_one{
	    		width:100%;
	    		height:0.8rem;
	    		/*background:blue;*/
	    		margin-top:0.1rem;
	    		overflow:hidden;
	    		img{
	    			width:0.8rem;
	    			height:0.8rem;
	    			margin-left:0.24rem;
	    			float:left;
	    		}
	    		h2{
	    			font-size:0.24rem;
	    			color:#000;
	    			margin-left:1.38rem;
	    			margin-top:0.08rem;
	    		}
	    		p{
	    			font-size:0.2rem;
	    			color:#717171;
	    			margin-left:1.38rem;
	    			margin-top:0.08rem;
	    		}
	    	}
	    	.main_bottom_two{
	    	    width:100%;
	    	    // height:1.1rem;
	    	    /*background:green;*/
	    	    margin-top:0.18rem;
	    	    p{
	    	    	margin-left:0.24rem;
	    	    	margin-top:-0.1rem;
					font-weight:bold;
	    	    }
	    	}
	    	.main_bottom_thr{
	    		width:100%;
	    		height:4.6rem;
	    		/*background:skyblue;*/
	    		margin-top:0.24rem;
	    		img{
	    			width:2.3rem;
	    			height:2.3rem;
	    			float:left;
	    			margin-right:0.06rem;
	    			margin-bottom:0.1rem;
	    			margin-left:0.14rem;
	    		}
	    	}
	    	.main_bottom_four{
	    		.tx{
	    			width:0.27rem;
	    			height:0.35rem;
	    			float:left;
	    			margin-left:0.24rem;
	    		}
	    		p{
	    			margin-left:0.7rem;
	    		}
	    		.fx{
	    			width:100%;
	    			height:0.51rem;
	    			display:flex;
	    			justify-content:space-around;
	    			margin-top:0.2rem;
	    			div{
	    			    width:0.51rem;
	    			    height:0.51rem;
	    			    /*float:left;*/
	    			    img{
	    				width:0.33rem;
	    				height:0.33rem;
	    			    }
	    		    }
	    		}
	    		div{
	    			width:0.51rem;
	    			height:0.51rem;
	    			/*float:left;*/
	    			img{
	    				width:0.33rem;
	    				height:0.33rem;
	    			}
	    		}
	    	}
	    }
	}
	
</style>