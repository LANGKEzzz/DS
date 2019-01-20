<template>
	<div id="main">
		<ul>
			<li v-for="(item,index) in List_att"  >
				<router-link :to="{name:'chat'}">
					<img src="../../../../../../static/gzdr_tx_01@2x.png">
				</router-link>
				<p>新鲜事</p>
				<p>新鲜事金牌作者&nbsp一起回顾</p>
				<span>互相关注</span>
			</li>
		    <!-- <li>
		    	<router-link :to="{name:'chat'}">
		    	    <img src="../../../../../../static/gzdr_tx_02@2x.png">
		    	</router-link>
		    	<p>新鲜事</p>
				<p>新鲜事金牌作者&nbsp;一起回顾</p>
				<span>互相关注</span>
		    </li> -->
		    <!-- <li>
		    	<router-link :to="{name:'chat'}">
		    	    <img src="../../../../../../static/gzdr_tx_03@2x.png">
		    	</router-link>
		    	<p>新鲜事</p>
				<p>新鲜事金牌作者&nbsp;一起回顾</p>
				<span>互相关注</span>
		    </li>
		    <li>
		    	<router-link :to="{name:'chat'}">
		    	   <img src="../../../../../../static/gzdr_tx_01@2x.png">
		    	</router-link>
		    	<p>新鲜事</p>
				<p>新鲜事金牌作者&nbsp;一起回顾</p>
				<span>互相关注</span>
		    </li>
		    <li>
		    	<router-link :to="{name:'chat'}">
		    	   <img src="../../../../../../static/gzdr_tx_02@2x.png">
		    	</router-link>
		    	<p>新鲜事</p>
				<p>新鲜事金牌作者&nbsp;一起回顾</p>
				<span>互相关注</span>
		    </li>
		    <li>
		    	<router-link :to="{name:'chat'}">
		    	   <img src="../../../../../../static/gzdr_tx_03@2x.png">
		    	</router-link>
		    	<p>新鲜事</p>
				<p>新鲜事金牌作者&nbsp;一起回顾</p>
				<span>互相关注</span>
		    </li> -->
		</ul>
	</div>
</template>

<script>
	export default{

		data(){
			return{
               List_att:[
				   {
						 "id":1,
					  "url":"../../../../../../static/gzdr_tx_02@2x.png",
					  "p1":"新鲜事",
					  "p1":"新鲜事金牌作者&nbsp;一起回顾",
					  "sp":"互相关注"

				   },
				   {
						 "id":1,
            "url":"../../../../../../static/gzdr_tx_03@2x.png",
					  "p1":"新鲜事",
					  "p1":"新鲜事金牌作者&nbsp;一起回顾",
					  "sp":"互相关注"
				   },
				    {
							"id":3,
            "url":"../../../../../../static/gzdr_tx_02@2x.png",
					  "p1":"新鲜事",
					  "p1":"新鲜事金牌作者&nbsp;一起回顾",
					  "sp":"互相关注"
				   },
				    {
							"id":4,
                      "url":"../../../../../../static/gzdr_tx_03@2x.png",
					  "p1":"新鲜事",
					  "p1":"新鲜事金牌作者&nbsp;一起回顾",
					  "sp":"互相关注"
				   },
                    {
											"id":5,
                      "url":"../../../../../../static/gzdr_tx_02@2x.png",
					  "p1":"新鲜事",
					  "p1":"新鲜事金牌作者&nbsp;一起回顾",
					  "sp":"互相关注"
				   },
				   {
						 "id":6,
                      "url":"../../../../../../static/gzdr_tx_03@2x.png",
					  "p1":"新鲜事",
					  "p1":"新鲜事金牌作者&nbsp;一起回顾",
					  "sp":"互相关注"
				   },
				   {
						 "id":7,
                      "url":"../../../../../../static/gzdr_tx_03@2x.png",
					  "p1":"新鲜事",
					  "p1":"新鲜事金牌作者&nbsp;一起回顾",
					  "sp":"互相关注"
				   },
				   {
						 "id":8,
                      "url":"../../../../../../static/gzdr_tx_03@2x.png",
					  "p1":"新鲜事",
					  "p1":"新鲜事金牌作者&nbsp;一起回顾",
					  "sp":"互相关注"
				   },
				   {
						 "id":9,
                      "url":"../../../../../../static/gzdr_tx_03@2x.png",
					  "p1":"新鲜事",
					  "p1":"新鲜事金牌作者&nbsp;一起回顾",
					  "sp":"互相关注"
				   },
			   ]
			}
		},
		methods:{

		}
	}
</script>

<style lang="scss" scoped>
	#main{
		width:100%;
		height:13.34rem;
		li{
			width:100%;
			height:1.68rem;
			/*background:yellow;*/
			border:1px solid #f4f4f4;
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
			span{
				display:block;
				/*float:left;*/
				width:1.16rem;
				height:0.48rem;
				margin-left:6.1rem;
				margin-top:-0.3rem;
				border:1px solid #717171;
				text-align:center;
				line-height:0.48rem;
			}
		}
	}
</style>
