<template>
 <div class="modify">
    <div class="header">
       
            <div class="header_pic" @click="handleJump">
                <img src="../../../../../static/icon/icon_jiantou1@2x.png"/>
            </div>
        
      <p>修改密码</p>
    </div>
    <div class="main">
        <ul>
           <li>
               密码:<input type="password" v-model="pwd" />
           </li>
           <li>
               确认密码:<input type="password" v-model="vertifypwd"/>
           </li>
        </ul>
        <div v-for="(item,index) in infor" v-show="item.flag" class="infor">{{item.message}}</div>
        <div class="modifyC" @click="handleModify" >修改</div>
        
    </div>

  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import axios from '../../../../lib'
export default {  
	data(){
		return{
           infor:[
           		{
           			message:"密码必须是6-12位的数字，字母或者符号组成",
           			flag:false
           		},
           		{
           			message:"两次密码不一致",
           			flag:false
           		}
           ],
            pwd:"",
            vertifypwd:""
		}
		
	},
	methods:{
        handleJump(){
            this.$router.go(-1);
        },
        handleModify(){
        	var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
        	if(!reg.test(this.pwd)){
        		this.infor[0].flag=true;
        	}else{
        		this.infor[0].flag=false;
        		if(this.pwd != this.vertifypwd){
        			this.infor[1].flag=true;
        		}else{
        			this.infor[1].flag=false;
        			Toast({
						  message: '修改成功，返回登录页面',
						  position: 'bottom',
						  duration: 3000
						});
        			this.$router.push("login");
//      			     axios.post("http://localhost:3000/list",{
//                         name:this.phone,
//                         password:this.mima2
//                  
//                       },
        			
        		}
        	}
        }
    
      

        

	}
}
</script>
<style lang="scss" scoped>
@import "../../../../common/css/fontSize.scss";
    .modify{
        width:7.5rem;
        height:13.34rem;;
        background: #eee;
         .header {
            width: 7.5rem;
            height: 1.28rem;
            // text-align: center;
            background:rgba(255,255,255,1);
            box-shadow:0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
            position:relative;
            p {
                font-size:$font_size_34;
                color:rgba(30,30,30,1);
                display:inline-block;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                // line-height:1.7rem;
                position:absolute;
                left: 3.08rem;
                bottom:.29rem;
                
            }
            .header_pic{
                width:.24rem;
                height:.42rem;
                display:inline-block;
                position:absolute;
                left: 0.24rem;
                bottom:.31rem;
                img{
                   width:.24rem;
                   height:.42rem; 
                }
            }
        }
        .main{
            width:7.5rem;
            height:1.76rem;
            margin-top:.2rem;
            ul{
                width:100%;
                height:100%;
                margin-bottom:.4rem;
                li{
                    width:100%;
                    height:.88rem;
                    background:rgba(255,255,255,1);
                    box-shadow:0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
                    border-bottom:1px solid #eee;
                    line-height:.88rem;
                    padding-left:.25rem;
                    font-size:.26rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    input {
                        border:none;
                        height:98%;
                        width:80%;
                        outline:none;
                    }
                    
                }
              
            }
            .infor{
                width:100%;
                height:.3rem;
                color:red;
                font-size:.26rem;
                
            }
            .modifyC{
                    width:5.64rem;
					height:.72rem;
					background:rgba(99,215,212,1);
					border:1px solid rgba(206,204,204,1);
					box-shadow:0 0.01rem 0.03rem 0 rgba(1,29,28,0.15);
					border-radius:0.04rem;
					text-align:center;
					line-height:.72rem;
					font-size:.35rem;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:rgba(255,255,255,1);
					margin-left:.9rem;
					margin-top:.66rem;
            }
        }
        
    }
  
</style>
<style>
.mint-toast .is-placebottom{
		width:3rem;
		height:0.67rem;	
		text-align:center;
		line-height:0.65rem;
		position:fixed;
		bottom:1.33rem;
		left:50%
	}
	.mint-toast-text{
		font-size:.24rem;
	}
</style>
