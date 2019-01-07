import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import Dynamic from "./dynamic"
var store = new Vuex.Store({
    modules:{
        Dynamic
    }
})

export default store;