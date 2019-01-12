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
     			<li @click="handleShowArea()">
     				<h2>所在地</h2>
     				<p>{{myAddressProvince}}  {{myAddressCity}}  {{myAddresscounty}}</p>
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
		<mt-popup
			v-model="popupVisibleArea"
			popup-transition="popup-fade"
			style="position:absolute;left:0;top:-0.5rem;"
			>
			<div class="area">
				<mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>	
                <div class="btn">
					<button id="btn1" @click="handleCancel()">取消</button>
					<button id="btn2" @click="handleSure()">确定</button>
				</div>
			</div> 
		</mt-popup>
		
     </div>
</template>
<script>
	   //引入地区
	   import Vue from "vue";
	   import { Picker } from "mint-ui";
       import myaddress from "../data.json";
       Vue.component(Picker.name, Picker);


        //引入性别
        import { Popup } from 'mint-ui';
		import MintUI from 'mint-ui';	
		export default{
			data(){
				return{
					popupVisible:false,
					popupVisibleArea:false,
					se:"男",
					myAddressProvince:"",
					myAddressCity:"",
					myAddresscounty:"",
					myAddressSlots: [
									
									{
										flex: 1,//对应 slot CSS 的 flex 值
										defaultIndex: 1,//对应 slot 初始选中值，需传入其在 values 数组中的序号，默认为 0
										values: Object.keys(myaddress), //省份数组
										className: "slot1",//对应 slot 的类名
										textAlign: "center"//对应 slot 的对齐方式
										},
										{
										divider: true,//对应 slot 是否为分隔符
										content: "-",//分隔符 slot 的显示文本
										className: "slot2"
										},
										{
										flex: 1,
										values: [],
										className: "slot3",
										textAlign: "center"
										},
										{
										divider: true,
										content: "-",
										className: "slot4"
										},
										{
										flex: 1,
										values: [],
										className: "slot5",
										textAlign: "center"
										}
								  ],
								   myAddressProvince: "省",
								   myAddressCity: "市",
								   myAddresscounty: "区/县"
			    };
		   },		
			methods:{
				//性别的显示隐藏
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
				},
				//取消按钮
				handleCancel(){
					  this.popupVisibleArea = false
					  this.myAddressProvince = ""
					  this.myAddressCity = ""
					  this.myAddresscounty = ""

					  
				},
				//确定按钮
				handleSure(){
                      this.popupVisibleArea = false
				},
				//地区的显示和隐藏
				handleShowArea(){
                     this.popupVisibleArea = true
				},
				onValuesChange(picker, values) {
					if (values[0] > values[1]) {
						picker.setSlotValue(1, values[0]);
					}
				},

				onMyAddressChange(picker, values) {
					if (myaddress[values[0]]) {
						//这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
						picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
						picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
						//获取省
						this.myAddressProvince = values[0];
						//获取市
						this.myAddressCity = values[1];
						//获取县
						this.myAddresscounty = values[2];
						

						/*
							setSlotValues(index, values)：设定给定 slot 的备选值数组
						
						*/
					}
                }
				
			},

			mounted() {
					this.$nextTick(() => {
					//vue里面全部加载好了再执行的函数 （类似于setTimeout）
					this.myAddressSlots[0].defaultIndex = 0;
					// 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
					//因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
					});
            }

		}
</script>

<style lang="scss">

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
				margin-top:0.2rem;
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
		.area{
			width:5.74rem;
            height:3.48rem;
			background:#fff;
			position: absolute;
			left:0.88rem;
			top:4.93rem;
			border-radius:0.04rem;
			.picker-item{
			 	font-size: 0.28rem;
				
			}
			.btn{
				width:100%;
				height:0.9rem;
				overflow: hidden;
				margin-top: 0.3rem;
				border-top: 2px solid #f4f4f4;
				#btn1{
						width: 1rem;
						background:#f4f4f4;
						border: #fff;
						margin-left: 1.2rem;
						margin-top:0.5rem;
						color:skyblue;
						
					}
				#btn2{
						width: 1rem;
						background: #f4f4f4;
						border: #fff;
						margin-left: 1.2rem;
						margin-top:0.5rem;
						color:skyblue;
						
			    }
			}	
		}
	}
	
</style>