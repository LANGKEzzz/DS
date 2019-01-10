import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import Dynamic from "./dynamic"
import Home from "./home"
var store = new Vuex.Store({
    modules:{
        Dynamic,
        Home
    }
})

export default store;