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
<style>
    .message{
        width:100%;
        height:100%;
       
    }
</style>