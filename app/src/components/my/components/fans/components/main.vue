<template>
	<div id="main">
		<div class="exa">
			<h4>A</h4>
		</div>
		<div class="friends">
			<ul>
				<li v-for="{item,index} in List_fans">
					<img src="../../../../../../\static\my\hy_tx_01@2x.png">
					<p>新鲜事</p>
					<p>新鲜事金牌作者&nbsp一起回顾</p>
					
				</li>
			    <!-- <li>
			    	<img src="../../../../../../\static\my\hy_tx_02@2x.png">
			    	<p>新鲜事</p>
					<p>新鲜事金牌作者&nbsp;一起回顾</p>
				
			    </li>
			    <li>
			    	<img src="../../../../../../\static\my\hy_tx_03@2x.png">
			    	<p>新鲜事</p>
					<p>新鲜事金牌作者&nbsp;一起回顾</p>
					
			    </li>
			    <li>
			    	<img src="../../../../../../\static\my\hy_tx_04@2x.png">
			    	<p>新鲜事</p>
					<p>新鲜事金牌作者&nbsp;一起回顾</p>
				
			    </li>
			    <li>
			    	<img src="../../../../../../\static\my\hy_tx_07@2x.png">
			    	<p>新鲜事</p>
					<p>新鲜事金牌作者&nbsp;一起回顾</p>
					
			    </li>
			    <li>
			    	<img src="../../../../../../static/gzdr_tx_03@2x.png">
			    	<p>新鲜事</p>
					<p>新鲜事金牌作者&nbsp;一起回顾</p>
			    </li> -->
		    </ul>
		</div>
	</div>
</template>

<script>
    export default{
		data(){
			return{
				List_fans:[
					{
                        "url":"../../../../../../static/gzdr_tx_02@2x.png",
						"p1":"新鲜事",
						"p1":"新鲜事金牌作者&nbsp;一起回顾"
					},
					{
                        "url":"../../../../../../static/gzdr_tx_03@2x.png",
						"p1":"新鲜事",
						"p1":"新鲜事金牌作者&nbsp;一起回顾"
					},
					{
                        "url":"../../../../../../static/gzdr_tx_04@2x.png",
						"p1":"新鲜事",
						"p1":"新鲜事金牌作者&nbsp;一起回顾"
					},
					{
                        "url":"../../../../../../static/gzdr_tx_05@2x.png",
						"p1":"新鲜事",
						"p1":"新鲜事金牌作者&nbsp;一起回顾"
					},
					{
                        "url":"../../../../../../static/gzdr_tx_06@2x.png",
						"p1":"新鲜事",
						"p1":"新鲜事金牌作者&nbsp;一起回顾"
					},
					{
                        "url":"../../../../../../static/gzdr_tx_07@2x.png",
						"p1":"新鲜事",
						"p1":"新鲜事金牌作者&nbsp;一起回顾"
					},
					{
                        "url":"../../../../../../static/gzdr_tx_07@2x.png",
						"p1":"新鲜事",
						"p1":"新鲜事金牌作者&nbsp;一起回顾"
					},
					{
                        "url":"../../../../../../static/gzdr_tx_06@2x.png",
						"p1":"新鲜事",
						"p1":"新鲜事金牌作者&nbsp;一起回顾"
					},
					{
                        "url":"../../../../../../static/gzdr_tx_06@2x.png",
						"p1":"新鲜事",
						"p1":"新鲜事金牌作者&nbsp;一起回顾"
					},
					{
                        "url":"../../../../../../static/gzdr_tx_06@2x.png",
						"p1":"新鲜事",
						"p1":"新鲜事金牌作者&nbsp;一起回顾"
					},
					{
                        "url":"../../../../../../static/gzdr_tx_06@2x.png",
						"p1":"新鲜事",
						"p1":"新鲜事金牌作者&nbsp;一起回顾"
					},
					{
                        "url":"../../../../../../static/gzdr_tx_06@2x.png",
						"p1":"新鲜事",
						"p1":"新鲜事金牌作者&nbsp;一起回顾"
					},
					{
                        "url":"../../../../../../static/gzdr_tx_06@2x.png",
						"p1":"新鲜事",
						"p1":"新鲜事金牌作者&nbsp;一起回顾"
					},
					{
                        "url":"../../../../../../static/gzdr_tx_06@2x.png",
						"p1":"新鲜事",
						"p1":"新鲜事金牌作者&nbsp;一起回顾"
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	#main{
		width:100%;
		height:12.06rem;
		.exa{
			width:100%;
			height:0.5rem;
			background:#f4f4f4;
			h4{
			  font-size:0.35rem;
			  margin-left:0.24rem;	
			}
		}
		.friends{
			width:100%;
			height:11.71rem;
			
			li{
				width:100%;
				height:1.68rem;
				/*background:yellow;*/
				border:1px solid #f4f4f4;
		    }
		    img{
				width:1.2rem;
				height:1.2rem;
				float:left;
				margin-left:0.24rem;
				margin-top:0.24rem;
			}
			p:nth-child(2){
				margin-left:1.69rem;
				margin-top:0.56rem;
				
			}
			p:nth-child(3){
				margin-left:1.69rem;
				margin-top:0.16rem;
				
			}	
		}
	}
</style>