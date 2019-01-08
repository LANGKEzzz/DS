<template>
 <div class="as">
    <div class="header">
        <router-link to="/settings">
            <div class="header_pic">
                <img src="../../../../static/icon/icon_jiantou1@2x.png"/>
            </div>
        </router-link>
      <p>账号与安全</p>
    </div>
    <div class="main">
        <ul>
            <!-- <li v-for="(item,index) in list" @click='handleMark($event)'>
                <router-link :to="{name:item.name}">
                    {{item.title}}
                </router-link>
            </li> -->
              <router-link to="/phonenum">
                <li class="phonenum">手机号码</li>
            </router-link >
              <!-- <router-link to=""> -->
                <li @click="modal1=true" >修改密码</li>
  				
        </ul>
            <Modal
						v-model="modal1"
						cancel-text="取消"
						ok-text="确定"
						title="为确保您的账号与安全，修改密码请填写原密码"
				        @on-ok="ok"
				        @on-cancel="cancel"
				        :mask-closable=true>
				    	<input type="text" placeholder="请输入密码"/>
		
			    </Modal> 
    </div>

  </div>
</template>

<script>
export default {
	data(){
		return{
			modal1:false
		}
		
	},
	methods:{
		ok () { 
			this.$Message.info('Clicked ok'); 
		},
		cancel () { 
			this.$Message.info('Clicked cancel');
		}

	}
}
</script>
<style lang="scss" scoped>
    .as{
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
                font-size: 0.34rem;
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
                bottom:.23rem;
            }
        }
        .main{
            width:7.5rem;
            height:4.9rem;
            margin-top:.2rem;
            ul{
                width:100%;
                height:100%;
                li{
                    width:100%;
                    height:.88rem;
                    background:rgba(255,255,255,1);
                    box-shadow:0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
                    border-bottom:1px solid #eee;
                    line-height:.88rem;
                    padding-left:.25rem;
                    font-size:.24rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    
                }
            }
        }
        .main .phonenum{
            color:#313131;
        }
    }
  
</style>
<style>
	.ivu-modal{
		width:100%;
		height:100%;
	}
	.ivu-modal-content{
		width:4.72rem;
		height:2.94rem;
		background:rgba(255,255,255,1);
		border-radius:0.4rem;
		position:relative;
		left:19%;
		top:30%;
	}
	.ivu-modal-header,.ivu-modal-footer{
		border:none;
	}
	
	.ivu-modal-header p, .ivu-modal-header-inner{
		overflow:initial;
		text-overflow: initial;
		white-space:initial;
		width:3.98rem;
		height:.2rem;
		font-size:.22rem;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(49,49,49,1);
		margin-top:.2rem;
		margin-left:.1rem;
		line-height:.32rem;
	}
	.ivu-modal-body input{
		width:4rem;
		height:0.71rem;
		border:0.01rem solid rgba(198,197,197,1);
		opacity:0.3;
		border-radius:0.04rem;
		font-size:.2rem;
	}
	.ivu-modal-footer{
		display:flex;
		justify-content:space-between;
		padding-left:.5rem;
		padding-right:.5rem;
		
	}
	.ivu-btn-large{
		width:1.24rem;
		height:.54rem;
		border:0.01rem solid rgba(198,197,197,1);
		border-radius:0.05rem;
		font-size:.23rem;
		background:#fff;
		
	}
	.ivu-btn-text{
		color:#313131;
	}
	.ivu-btn-primary{
		color:#63D7D4;
	}
	

</style>