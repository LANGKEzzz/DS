<template>
    <div id="concern">
        <Main :data='recommend'></Main>
    </div>
</template>
<script>
import Main from './main.vue'
import Vuex from 'vuex'
export default {
    components:{
        Main
    },
    computed: {
        ...Vuex.mapState({
            recommend:state=>state.Dynamic.recommend
        })
    },
    created() {
        this.recGetData();
    },
    methods: {
        ...Vuex.mapActions({
            recGetData:"Dynamic/recGetData"
        })
    },
}
</script>
<style lang="scss" scoped>

</style>