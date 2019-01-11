import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import Dynamic from "./dynamic"
import Release from "./release"
var store = new Vuex.Store({
    modules:{
        Dynamic,
        Release
    }
})

export default store;