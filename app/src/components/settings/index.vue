<template>
    <div class="settings">
        <Header></Header>
        <Main></Main>
        <footer-com></footer-com>
       
    </div>
</template>
<script>
import Header from "./components/setting-header.vue"
import Main from "./components/setting-main.vue"
import footer from "./components/setting-footer.vue"

export default {
    components:{
        Header,
        Main,
        "footer-com":footer,
        

    }
}
</script>
<style lang="scss" scoped>
    .settings{
        width:100%;
        height:13.34rem;
        background: #eee;
    }
</style>
