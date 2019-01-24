<template>
    <div id="main">
       <input type="text" id="name" placeholder="偶像观察生">
       <button id="btn">保存</button>
    </div>
</template>
    

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
     #main{
         width:100%;
         height: 11rem;
         background:#f4f4f4;
         #name{
             width:6rem;
             height:0.5rem;
             border:none;
             border-bottom:1px solid #63D7D4;
             background:#f4f4f4;
             margin-left: 0.24rem;
             margin-top:0.61rem;
         }
         #btn{
             width: 1rem;
             height:0.5rem;
             margin-left: 0.1rem;
             background: skyblue;
             border:none;
             color: #f4f4f4
            //  border-bottom:1px solid #63D7D4;
         }

     }
</style>
