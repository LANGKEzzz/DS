<template>
    <div id="concern">
        <Main :data='nearby'></Main>
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
            nearby:state=>state.Dynamic.nearby
        })
    },
    created() {
        this.neaGetData();
    },
    methods: {
        ...Vuex.mapActions({
            neaGetData:"Dynamic/neaGetData"
        })
    },
}
</script>
<style lang="scss" scoped>

</style>