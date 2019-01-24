<template>
	<div id="main">
		<div class="exa">
			<h4>A</h4>
		</div>
		<div class="friends">
			<ul>
				<li v-for="(item,index) in arrAttention" v-bind:key="index">
				<router-link :to="{name:'chat'}">
				   <img :src="item.picUrl">
				</router-link>
					<p>{{item.friendName}}</p>
					<p>{{item.friendMain}}</p>	
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