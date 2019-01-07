<template>
    <div id="concern">
        <Main>
            <div v-for="(item,index) in concern" v-bind:key="index">
                <div>
                    <img src="item" alt="">
                </div>
            </div>
        </Main>
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
            concern:state=>state.Dynamic.concern
        })
    },
    created() {
        this.conGetData();
    },
    methods: {
        ...Vuex.mapActions({
            conGetData:"Dynamic/conGetData"
        })
    },
}
</script>
<style lang="scss" scoped>

</style>