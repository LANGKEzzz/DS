<template>
	<div id="main">
		<div class="exa">
			<h4>A</h4>
		</div>
		<div class="friends">
			<ul>
				<li v-for="(item,index) in arrAttention" v-bind:key="index" >
				<router-link :to="{name:'chat'}">
				   <img :src="item.picUrl">
				</router-link>
					<p>{{item.friendName}}</p>
					<p>{{item.friendMain}}</p>
					<button @click="handleJumpS(item)">屏蔽</button>
				</li>
		    </ul>
		</div>
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
					handleJumpS(item){
						var userID=item.id
						localStorage.setItem("storeId",JSON.stringify(userID))
						this.$router.push("/shieldS")
					}
        },
		computed:{
				...Vuex.mapState({
					arrAttention:state=>state.My.arrAttention
				})
			},
		data(){
			return{
			}
		}
	}
</script>

<style lang="scss" scoped>
	#main{
		width:100%;
		height:12.06rem;
		font-family:PingFangSC-Regular;
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
				button{
					display:block;
					width:1.16rem;
					height:0.48rem;
					margin-left:6.1rem;
					margin-top:-0.3rem;
					border:1px solid #717171;
					text-align:center;
					line-height:0.48rem;
					background:skyblue;
					color:#fff;
					border-radius: 5%;
				}
		    }
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
		}
	}
</style>
