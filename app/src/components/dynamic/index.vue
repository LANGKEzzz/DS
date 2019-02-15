<template>
    <div>
        <Header/>
        <Nav/>
        <keep-alive>
            <router-view class="content"></router-view>
        </keep-alive>
    </div>
</template>
<script>
import Header from './header'
import Nav from './nav'
import { InfiniteScroll } from 'mint-ui';
export default {
    data() {
        return {
            cname:'concern'
        }
    },
    components:{
        Header,
        Nav
    }

}
</script>
<style lang="">
    .content{
        width: 100%;
        position: absolute;
        top:2.19rem;
        bottom: .98rem;
        background: #f4f4f4;
        overflow: scroll;
    }
</style>