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
     			<li @click="handleShow()">
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
		<div class="sex" v-show="flag">
              <h1>性别</h1>
			  <ul>
				<li>
					<p>男</p><input id="s1" type="radio" name="sex" @click="handleSex"/>
				</li>
				<li>
					<p>女</p><input id="s2" type="radio" name="sex" @click="handleSex"/>
				</li>
			    
			  </ul>
			 
		</div>
     </div>
</template>

<script>
     //引入vuex
	 import Vuex from 'vuex'
     export default{
		 computed:{
			 //辅助函数
			 ...Vuex.mapState({
				 flag:state => state.My.flag
			 })
			
		 },
		 methods:{
			 ...Vuex.mapMutations({
				 handleShow:"My/handleShow"
			 }),
			  ...Vuex.mapMutations({
				 handleSex:"My/handleSex"
			 })
		 }
		
	  } //console.log(flag)
</script>

<style lang="scss" scoped>
	#main{
		width:100%;
		height:12.06rem;
		position: relative;
		
		.ex{
			width:100%;
	    	height:0.2rem;
	    	background:#f4f4f4;
		}
		.main_imp{
			width:100%;
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
				width:100%;
				height:0.83rem;
				border:1px solid #F4F4F4;
				overflow:hidden;
				h2{
					float:left;
				    margin-left:0.25rem;
				    margin-top:0.33rem;
					font-size:0.24rem;
				}
				p{
					margin-left:6rem;
					margin-top:0.33rem;
				}
			}li:nth-child(3){
				width:100%;
				height:0.83rem;
				/*background:blue;*/
				overflow:hidden;
				border:1px solid #F4F4F4;
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
				width:100%;
				height:0.83rem;
				border:1px solid #F4F4F4;
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
		.sex{
			width:5.74rem;
			height:3.48rem;
			
			position: absolute;
			left:0.88rem;
			top:4.93rem;
			h1{
			    margin-left:0.52rem;
				margin-top:0.51rem;
			}
			li:nth-child(1){
				width:4.68rem;
				height:0.8rem;
			
				margin-left:0.53rem;
				margin-top:o.2rem;
				overflow:hidden;
				border-bottom:1px solid #E2E2E2;
				p{
					margin-top:0.15rem;
					margin-left:0.1rem;
					float:left;
				}
				#s1{
					width:0.26rem;
					height:0.26rem;
                    margin-left:3.6rem;
					margin-top:0.25rem;
				}
			}
			li:nth-child(2){
				width:4.68rem;
				height:0.8rem;
			
				margin-left:0.53rem;
			
				overflow:hidden;
				p{
					margin-top:0.15rem;
				    margin-left:0.1rem;
					float:left;
				}
				#s2{
				    width:0.26rem;
					height:0.26rem;
                    margin-left:3.6rem;
					margin-top:0.25rem;
				}
			}
			
		}
	}
</style>