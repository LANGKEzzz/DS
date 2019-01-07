<template>
    
    <!-- <Register></Register> -->
</template>

<script>
// import Register from "./components/reg.vue";
export default {
    components:{
        // "Register":Register
    }
}
</script>


<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  .logo {
    width: 4.14rem;
    height: 2.6rem;
    margin: 0 auto;
    margin-top: 1.83rem;
    img {
      width: 4.14rem;
      height: 2.6rem;
    }
  }
  .dl_zh,
  .dlpwd,.dl {
    width: 100%;
    height: 1rem;
  }
  .dl_zh{
      margin-top: 1.09rem;
  }
  .dlpwd{
      margin-top: 0.61rem;
  }
  .dl{
      margin-top:.93rem;
      .dlbtn{
          display:block;
          margin: 0 auto;
          background: #63D7D4;
          color: white;
          width: 6.04rem;
            height: 1rem;
            border-radius: 0.5rem;
            border: none;
            outline: none;
             box-shadow: 3px 8px 25px 0px rgba(44, 96, 95, 0.25);
             
      }
  }
  .num,
  .pwd {
    width: 6.04rem;
    height: 1rem;
    border-radius: 0.5rem;
    border: none;
    text-indent: 1.04rem;
    outline: none;
    display: block;
    margin: 0 auto;
    box-shadow: 3px 8px 25px 0px rgba(44, 96, 95, 0.25);
    font-size: 0.26rem;
  }
  .forget{
      width: 1rem;
      font-size: 0.22rem;
      text-align: center;
      margin: 0 auto;
      margin-top: 0.52rem;  
      color: #63D7D4;    
  }
  .go_reg{
      width: 2.2rem;
      height: .25rem;
      margin: 0 auto;
      margin-top: 2rem;
      text-align: center;
      color: #888;
  }
}
</style>

