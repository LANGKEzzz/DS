<template>
    <div class="message">
        
        <Top-com></Top-com>
        <List-com></List-com>
    </div>
</template>
<script>
import Top from "./components/top"
import List from "./components/list"

export default {
    components:{
        "Top-com" : Top,
        "List-com" : List
    }
}
</script>
<style lang="scss" scoped>
    .message{
        width:100%;
        height:100%;
       display:flex;
       flex-direction: column;
       justify-content: space-between;
    }
    
</style>