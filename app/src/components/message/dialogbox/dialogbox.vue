<template>
    <div class="dialogbox">
        <h2>
            昵称
            <router-link to="/message">
                <div class="dialogbox_back">
                    <img src="../../../../static/message/icon_jiantou1@2x.png" alt="">
                </div>
            </router-link>           
        </h2>
        <ul >
            <li class="dialogbox_box" v-for="(item,index) in lists">
                <div class="dialogbox_he">
                    <div>
                        <img src="../../../../static/message/xx_tx_06@2x.png" alt="">
                    </div> 
                    <span>
                        {{item.he}}
                        <i class="triangle_border_left"></i>
                    </span>                     
                </div>  
                <div class="dialogbox_my">
                    <span>
                        {{item.my}}
                        <i class="triangle_border_right"></i>
                    </span> 
                    
                    <div>
                        <img src="../../../../static/message/xx_tx_06@2x.png" alt="">
                    </div>                    
                </div>              
            </li>            
             
        </ul>
        <div class="dialogbox_inptbox">
            <div>语音</div>
            <input type="text" v-model="messageInput">
            <div @click="handleSendout()">发送</div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                messageInput:"",
                lists : [
                    {
                        "he" : "hhhh"
                    },
                    {
                        "he" : "hhhh"                     
                    },
                    {
                        "he" : "hhhh"
                    },
                    {
                        "he" : "hhhh"
                    },
                    {
                        "he" : "hhhh"
                    },
                    {
                        "he" : "hhhh"
                    },
                    {
                        "he" : "hhhh"
                    },
                    {
                        "he" : "hhhh"
                    },
                    {
                        "he" : "hhhh"
                    }
                ]
            }
        }
    
    }
</script>
<style lang="scss" scoped>
.dialogbox{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width:100%;
    height:100%;
    background:#f4f4f4;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    h2{
        
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:.88rem;
        text-align:center;
        font-size:.34rem;
        font-weight: 900;
        color:#1E1E1E;
        line-height:.88rem;
        position:relative;
        background:#fff;
        .dialogbox_back{
            position:absolute;
            left:.24rem;
            bottom:.23rem;
            img{
                width:.24rem;
                height:.42rem;
            }
        }
    }
    ul{
        flex:1;
        overflow: scroll;
        padding-bottom:.98rem;
        li{       
            height:2rem; 
            margin-top:.2rem;      
            .dialogbox_he,.dialogbox_my{
                border-radius: 50%;
                display:flex;
                             
                div{
                    width:.88rem;
                    height:.88rem;
                }                
                img{
                    width:100%;
                    height:100%;
                }                   
            }               
            .dialogbox_he{
                margin-left:.24rem;
                div{
                    margin-right:.09rem;
                }
                span{
                    display:block;
                    height:.64rem;
                    border-radius:.16rem;                    
                    background:#fff;
                    line-height: .64rem;
                    padding:0 .2rem;
                    margin-top:.4rem;
                    position:relative;
                    .triangle_border_left{
                        position:absolute;
                        left:-0.1rem;
                        top:.2rem;
                        width:0;
                        height:0;
                        border-width:10px 10px 10px 0;
                        border-style:solid;
                        border-color:transparent #fff transparent transparent;                   
                    }
                }                                          
            }
            .dialogbox_my{ 
                display:flex;
                justify-content: flex-end;
                padding-right:.24rem;             
                div{
                    margin-left:.09rem;
                }
                span{
                    display:block;
                    height:.64rem;
                    border-radius:.16rem;                    
                    background:#fff;
                    line-height: .64rem;
                    padding:0 .2rem;
                    margin-top:.4rem;
                    position:relative;
                    .triangle_border_right{ 
                        position:absolute;
                        right:-0.1rem;
                        top:.2rem;                
                        width:0;
                        height:0;
                        border-width:10px 0 10px 10px;
                        border-style:solid;
                        border-color:transparent transparent transparent #fff;                                        
                    }
                }                          
            }
        }                                                        
    }
    .dialogbox_inptbox{
        height:.98rem;
        background:#fff;
        display:flex;
        justify-content: space-between; 
        align-items: center;       
        color:#313131;
        font-size:.24rem; 
        line-height:.5rem;
        div:nth-child(1){           
            margin-left:.24rem;           
        }
        div:nth-child(3){
           margin-right:.24rem;
        }
        input{
            width:5rem;
            height:.58rem;
            border:none;
            border-radius: .29rem;
            background:#dfdede;
        }
    }
}
</style>