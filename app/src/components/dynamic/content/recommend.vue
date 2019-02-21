<template>
    <div id="concern" v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
        <Main :data='recommend'></Main>
    </div>
</template>
<script>
import Main from './main.vue'
import Vuex from 'vuex'
export default {
    data(){
        return{
            page:1
        }
    },
    components:{
        Main
    },
    computed: {
        ...Vuex.mapState({
            recommend:state=>state.Dynamic.recommend
        })
    },
    
    methods: {
        ...Vuex.mapActions({
            recGetData:"Dynamic/recGetData"
        }),
        loadMore(){
            if(this.recommend.length<50){
                this.recGetData(this.page++);
            }else{
                alert("没有更多")
            }
            
        }
    },
}
</script>
<style lang="scss" scoped>

</style>