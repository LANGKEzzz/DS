<template>
    <div id="main">
   	    <div class="ex"></div>
	    <div class="list">
	    	<ul>
	    		<!-- <li class="list_one">
	    			<img class="im" src="../../../../../../static/tx_01@2x.png">
	    			<h2><b>偶像观察员</b></h2>
	    			<p>12-25&nbsp;&nbsp;18:20&nbsp;&nbsp;&nbsp;来自iphone客户端</p>
		 			<p>所有的不愉快,过完年赶紧翻篇</p>
			        <ul class="pic">
			        	<li><img src="../../../../../../static/sc_tp_01@2x.png"></li>
			        	<li><img src="../../../../../../static/sc_tp_02@2x.png"></li>
			        	<li><img src="../../../../../../static/sc_tp_03@2x.png"></li>
			        	<li><img src="../../../../../../static/sc_tp_04@2x.png"></li>
			        	<li><img src="../../../../../../static/sc_tp_05@2x.png"></li>
			        	<li><img src="../../../../../../static/sc_tp_06@2x.png"></li>
			        </ul>
			        <div class="fx">
			        	<div><img src="../../../../../../static/icon/icon_zf@2x.png"><span>100</span></div>
			            <div><img src="../../../../../../static/icon/icon_pl@2x.png"><span>200</span></div>
			            <div><img src="../../../../../../static/icon/icon_dz@2x.png"><span>300</span></div>
			        </div>
	    		</li> -->


				<li class="list_one" v-for="(item,index) in arrCollect" v-bind:key="index">	
					<img class="im" :src="item.userPhoto">
					<h2><b>{{item.collectName}}</b></h2>
					<p>{{item.collectTime}}</p>
					<p>{{item.collectMain}}</p>
					<div class="pic">
						<img :src="item.mainPhotoOne">
						<img :src="item.mainPhotoTwo">
						<img :src="item.mainPhotoThree">
						<img :src="item.mainPhotoFour">
						<img :src="item.mainPhotoFive">
						<img :src="item.mainPhotoSix">
					</div>
					<div class="fx">
			        	<div><img src="static/icon/icon_zf@2x.png"><span>100</span></div>
			            <div><img src="static/icon/icon_pl@2x.png"><span>200</span></div>
			            <div><img src="static/icon/icon_dz@2x.png"><span>300</span></div>
			        </div>
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
			this.handleCollectData();
			// console.log(this.state)
        },
        methods:{
          ...Vuex.mapActions({
              handleCollectData:"My/handleCollectData"
          })
        },
		computed:{
				...Vuex.mapState({
					arrCollect:state=>state.My.arrCollect
				})
			},
}
</script>

<style lang="scss" scoped>
    #main{
     	width:7.5rem;
     	height:12.06rem;
     	font-family:PingFangSC-Regular;
     	.ex{
     		width:7.5rem;
     		height:0.19rem;
     		background:#f4f4f4;
     	}.list{
     		width:7.5rem;
     		height:11.87rem;
			li{
				border-bottom:0.2rem solid #f4f4f4;
	        }
     		.list_one{
     			width:7.5rem;
     			height:7.44rem;
     			
     			overflow:hidden;
     			p:nth-child(4){
     				margin-left:0.24rem;
     				margin-top:0.24rem;
     				color:#000000;
     				font-size:0.24rem;
     			}
     			.im{
     				/*display:block;*/
     				width:0.9rem;
     				height:0.9rem;
     				margin-left:0.24rem;
					margin-top: 0.16rem;
	    			float:left;
					 border-radius:50%;
     			}
     			h2{
	    			font-size:0.24rem;
	    			color:#000;
	    			margin-left:1.38rem;
	    			margin-top:0.16rem;
	    		}
	    		p{
	    			font-size:0.2rem;
	    			color:#fff;
	    			margin-left:1.38rem;
	    			margin-top:0.16rem;
	    			color:gray;
	    		}
	    		.pic{
	    			width:7.02rem;
	    			height:4.46rem;
	    			display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
	    			margin-left:0.24rem;
	    			margin-top:0.2rem;
	    			img{
	    				width: 2.3rem;
	    				margin-right:0.04rem;
	    				margin-bottom:0.04rem;
						height: 2.3rem;
	    			}
	    		}.fx{
	    			width:7.5rem;
	    			height:7.44rem;
	    			display:flex;
	    			justify-content:space-around;
	    			div{
	    				margin-top:0.35rem;
	    			}
	    		}
	    		
	    		
	    		
     		}
     	}			
    }
     		
     	
     	
     
</style>