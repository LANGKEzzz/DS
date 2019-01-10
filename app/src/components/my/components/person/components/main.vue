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
								<router-link :to="{name:'changeName'}">
							<h2>昵称</h2>
							<p>偶像观察员</p>
							</router-link>
						</li>
                
     			<li @click="handleShow()">
     				<h2>性别</h2>
     				<span>{{se}}</span>
     				<img src="../../../../../../static/icon/icon_jiantou1_reserver.png">
     			</li>
     			<li>
     				<h2>所在地</h2>
     				<p>安徽&nbsp;芜湖</p>
     				<img src="../../../../../../static/icon/icon_jiantou1_reserver.png">
     			</li>
     		</ul>
     	</div>
		 <!-- 选择性别 -->
		<mt-popup
			v-model="popupVisible"
			popup-transition="popup-fade"
			style="position:absolute;left:0;top:-0.5rem">
				<div class="sex">
					<h1>性别</h1>
					<ul>
						<li>
							<p>男</p><input id="s1" type="radio" name="1"
						
							 @click="handleSex(1)"/>
						</li>
						<li>
							<p>女</p><input id="s2" type="radio" name="1"
							
							 @click="handleSex(2)"/>
						</li>
					</ul>
				</div>
		</mt-popup>



	    <!-- 选择地区 -->
		<div class="area">
				<mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
				<p>地址2级联动：{{myAddressProvince}} {{myAddressCity}}</p>
		</div>
		
     </div>
</template>
<script>
	   //地区
	   import Vue from "vue";
	   import { Picker } from "mint-ui";
       import myaddress from "../data.json";
       Vue.component(Picker.name, Picker);


        //性别
        import { Popup } from 'mint-ui';
		import MintUI from 'mint-ui';	
		export default{
			data(){
				return{
					popupVisible:false,
					se:"男",
				// 	myAddressSlots: [
				// 			{
				// 			flex: 1,//对应 slot CSS 的 flex 值
				// 			defaultIndex: 1,//对应 slot 初始选中值，需传入其在 values 数组中的序号，默认为 0
				// 			values: Object.keys(myaddress), //省份数组
				// 			className: "slot1",//对应 slot 的类名
				// 			textAlign: "center"//对应 slot 的对齐方式
				// 			},
				// 			{
				// 				divider: true,//对应 slot 是否为分隔符
				// 				content: "-",//分隔符 slot 的显示文本
				// 				className: "slot2"
				// 			},
				// 			{
				// 				flex: 1,
				// 				values: [],
				// 				className: "slot3",
				// 				textAlign: "center"
				// 			},
				// 			{
				// 				divider: true,
				// 				content: "-",
				// 				className: "slot4"
				// 			},
				// 			{
				// 				flex: 1,
				// 				values: [],
				// 				className: "slot5",
				// 				textAlign: "center"
				// 			}		
				// 	],
				// 	myAddressProvince: "省",
				// 	myAddressCity: "市",
				// 	myAddresscounty: "区/县"
				// },
			}
		},		
 
		
			methods:{
				handleShow(){
					this.popupVisible = true
				},
				handleSex(val){
					if(val == 1){
						this.se = "男"
					}else if(val == 2){
						this.se = "女"
					}
					this.popupVisible = false
					
				}
			}
		}
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
					color:#313131;
					
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
					color:#313131;
				}
				p{
					margin-left:6rem;
					margin-top:0.33rem;
					color:#313131;
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
					color:#313131;
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
					color:#313131;
				}
				p{
					margin-top:0.33rem;
					margin-left:1.62rem;
					float:left;
					color:#313131;
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
			background:#fff;
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
		// .area{
		// 	width:574px;
        //     height:348px;
		// 	background:yellow;
		// 	position: absolute;
		// 	left:0.88rem;
		// 	top:4.93rem;
		// }
	}
</style>