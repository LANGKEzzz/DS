<template>
    <div id="concern" v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
        <Main :data='concern'></Main>
        <div>没有更多</div>
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
            concern:state=>state.Dynamic.concern
        })
    },
    methods: {
        ...Vuex.mapActions({
            conGetData:"Dynamic/conGetData"
        }),
        loadMore(){
            if(this.concern.length<50){
                this.conGetData(this.page++);
            }else{
                alert("没有更多")
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>

</style>