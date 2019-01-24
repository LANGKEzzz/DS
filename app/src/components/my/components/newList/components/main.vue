<template>
	<div id="main">
		<ul>
			<!-- <li>
				<router-link :to="{name:'chat'}">
					<img src="../../../../../../static/gzdr_tx_01@2x.png">
				</router-link>
				<p>新鲜事</p>
				<p>在吗</p>
				<span>已读</span>
			</li>
		    <li>
		    	<router-link :to="{name:'chat'}">
		    	    <img src="../../../../../../static/gzdr_tx_02@2x.png">
		    	</router-link>
		    	<p>新鲜事</p>
				<p>出来玩啊</p>
				<span style="border:1px solid #FD3535;color:#FD3535">未读</span>
		    </li>
		    <li>
		    	<router-link :to="{name:'chat'}">
		    	    <img src="../../../../../../static/gzdr_tx_03@2x.png">
		    	</router-link>
		    	<p>新鲜事</p>
				<p>很高心认识你</p>
				<span>已读</span>
		    </li>
		    <li>
		    	<router-link :to="{name:'chat'}">
		    	   <img src="../../../../../../static/gzdr_tx_01@2x.png">
		    	</router-link>
		    	<p>新鲜事</p>
				<p>在干嘛</p>
				<span>已读</span>
		    </li>
		    <li>
		    	<router-link :to="{name:'chat'}">
		    	   <img src="../../../../../../static/gzdr_tx_02@2x.png">
		    	</router-link>
		    	<p>新鲜事</p>
				<p>哈哈哈哈哈</p>
				<span>已读</span>
		    </li>
		    <li>
		    	<router-link :to="{name:'chat'}">
		    	   <img src="../../../../../../static/gzdr_tx_03@2x.png">
		    	</router-link>
		    	<p>新鲜事</p>
				<p>天啊</p>
				<span>已读</span>
		    </li> -->



			<li v-for="(item,index) in arrAttention" v-bind:key="index">
				<router-link :to="{name:'chat'}">
				   <img :src="item.picUrl">
				</router-link>
				<p>{{item.friendName}}</p>
				<p>{{item.friendMain}}</p>
				<span>已读</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import  Vuex from "vuex";
	export default{
	  created(){
		 	//console.log( this );
			this.handleAttentionData();
			// console.log(this.state)
        },
        methods:{
          ...Vuex.mapActions({
              handleAttentionData:"My/handleAttentionData"
          })
        },
		computed:{
				...Vuex.mapState({
					arrAttention:state=>state.My.arrAttention
				})
			},
		data(){
			return{
            
			}
				console.log(this.state)
		}
	}
</script>

<style lang="scss" scoped>
	#main{
		width:100%;
		height:13.34rem;
		font-family:PingFangSC-Regular;
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
				 border-radius:50%;
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