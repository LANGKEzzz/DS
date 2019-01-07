<template>
    <div class="app">
        <div class="user" v-for="(item,index) in obj">
            <div class="photo">
                <img src="item.imgsrc">
            </div>
            <p class="username">{{item.username}}</p>
        </div>
    </div>
</template>


<script>

export default {
   data(){
       return{
           obj:[
               {
                   id:1,
                   username:"啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_10@2x.png" 
                               
               },
               
           ]
       }
   },
   munted(){}

}
</script>
<style lang="scss" scoped>
    .app{
        height: 12rem;
        width: 100%;
        background: black;
        .user{
            width: 1.4rem;
            height: .8rem;
            overflow: hidden;
            .photo{
                width: .5rem;
                height: .5rem;
                margin: 0 auto;
                img{
                    width:.5rem;
                    height:.5rem;
                }
            }
            p{
                width:1.4rem;
                font-size:10px;
                line-height: 12px;
                color: white;
                text-align: center;
            }
        }
    }
</style>