<template>
    <div class="app" ref="box">
        <!-- <transition name="slide"  v-for="(item,index) in obj" v-show="usershow"> -->
            <div class="user" v-for="(item,index) in obj">
                <div class="photo">
                    <img :src="item.imgsrc">
                </div>
                <p class="username">{{item.username}}</p>
            </div>
        <!-- </transition> -->
    </div>
</template>


<script>

export default {
   data(){
       return{
           obj:[
               {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_10@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_11@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_12@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_13@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_17@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_18@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_16@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_20@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_10@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_11@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_12@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_13@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_17@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_18@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_16@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_20@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_10@2x.png" 
                               
               },
               {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_10@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_11@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_12@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_13@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_17@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_18@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_16@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_20@2x.png" 
                               
               },
               {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_18@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_16@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_20@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_17@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_18@2x.png" 
                               
               },
                {
                   id:1,
                   username:"啦啦啦啦啦啦",
                   imgsrc:"../../../static/home/sy_tx_16@2x.png" 
                               
               }
               
           ],
           positions:[
               {//第一行
                   left:3.05,
                   top: 1.05
               },
               {//第二行
                   left:1.95,
                   top: 1.35
               },
               {
                   left:4.05,
                   top: 1.35
               },
               {//第三行
                   left:.9,
                   top: 2.05
               },
               {
                   left:3.05,
                   top: 1.95
               },
               {
                   left:5.15,
                   top: 2.05
               },
               {//第四行
                   left:.4,
                   top: 2.9
               },
               {
                   left:2.1,
                   top: 2.6
               },
               {
                   left:4,
                   top: 2.6
               },
               {
                   left:5.7,
                   top: 2.9
               },
               {//第五行
                   left:0.2,
                   top: 3.7
               },
               {
                   left:1.55,
                   top: 3.5
               },
               {
                   left:3.05,
                   top: 3.05
               },
               {
                   left:4.55,
                   top: 3.5
               },
               {
                   left:5.9,
                   top: 3.7
               },
                {//第6行
                   left:0.25,
                   top: 4.5
               },
               {
                   left:1.55,
                   top: 4.3
               },
               {
                   left:3.05,
                   top: 3.95
               },
               {
                   left:4.55,
                   top: 4.3
               },
               {
                   left:5.9,
                   top: 4.5
               },
                {//第7行
                   left:.6,
                   top: 5.3
               },
               {
                   left:2,
                   top: 5.3
               },
               {
                   left:4.1,
                   top: 5.3
               },
               {
                   left:5.5,
                   top: 5.3
               },
                {//第8行
                   left:1,
                   top: 6.1
               },
               {
                   left:3.05,
                   top: 4.95
               },
               {
                   left:5.05,
                   top: 6.1
               },
              
               {//第9行
                   left:1.95,
                   top: 6.6
               },
               {
                   left:4.05,
                   top: 6.6
               },
                {//第10行
                   left:3.05,
                   top: 6
               },
                {//第10行
                   left:3.05,
                   top: 6.9
               },
           ],

           //后期加动画
           usershow:true


       }
   },
   mounted(){
       let user = this.$refs.box.children;
       let len = this.$refs.box.children.length;
       for(var i = 0; i < len ; i ++){
           user[i].style.position = "absolute";
           user[i].style.left = this.positions[i].left + "rem";
           user[i].style.top = this.positions[i].top + "rem";
       }
    //    setTimeout(function(){
    //         this.usershow = true;
    //    },1000)
      
   },
   created(){
       
   }

}
</script>
<style lang="scss" scoped>
    .app{
        height: 12rem;
        width: 100%;
        background: black;
        position: relative;
        .user{
            width: 1.4rem;
            height: .86rem;
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
                font-size:0.2rem;
                line-height: 0.24rem;
                color: white;
                text-align: center;
                margin-top: 0.12rem;
            }
        }
    }
    // .slide-enter{
    //     transform: scale(0);
    // }
    // .slide-enter-active{
    //     transform: all .3s;
    // }
</style>