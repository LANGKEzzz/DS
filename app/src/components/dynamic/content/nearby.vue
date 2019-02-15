<template>
    <div id="concern" v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
        <Main :data='nearby'></Main>
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
            nearby:state=>state.Dynamic.nearby
        })
    },
    
    methods: {
        ...Vuex.mapActions({
            neaGetData:"Dynamic/neaGetData"
        }),
        loadMore(){
            if(this.nearby.length<50){
                this.neaGetData(this.page++);
            }else{
                alert("没有更多")
            }
            
        }
    },
}
</script>
<style lang="scss" scoped>

</style>