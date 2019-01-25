<template>
	<div id="main">
		<ul>
			<li v-for="(item,index) in arrAttention" v-bind:key="index" >
				<!-- <router-link :to="{name:'chat'}">
				   <img :src="item.picUrl">
				</router-link> -->
				<img :src="item.picUrl" @click="handleImg($event)">
				<p>{{item.friendName}}</p>
				<p>{{item.friendMain}}</p>
				<span>{{val}}</span>
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
          }),
					handleImg(e){
						e.stopPropagation();
						this.$router.push("chat")
					},

				



        },
		computed:{
				...Vuex.mapState({
					arrAttention:state=>state.My.arrAttention
				})
			},

		data(){
			return{
                val:"已关注"
			}
				console.log(this.state)
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
			position: relative;
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
				display:inline-block;
				/*float:left;*/
				width:1.16rem;
				height:0.48rem;
				// margin-left:6.1rem;
				// margin-bottom:3rem;
				border:1px solid #717171;
				text-align:center;
				line-height:0.48rem;
				background: #ffff;
				position:absolute;
				left:6.1rem;
				bottom:0.2rem;
				border-radius: 5%;

				
			}

		}
	}
</style>
