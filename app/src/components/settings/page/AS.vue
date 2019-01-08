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
                <li>手机号码</li>
            </router-link >
              <!-- <router-link to=""> -->
                <li >修改密码</li>
            <!-- </router-link> -->
            <!-- <Modal v-show="isModalVisible" @close="closeModal">确认</Modal> -->
        </ul>
    </div>
  </div>
</template>
<script>
export default {};
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
        .main>ul>li>a{
            color:#313131;
        }
    }
  
</style>