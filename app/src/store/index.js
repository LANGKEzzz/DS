import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import Dynamic from "./dynamic"
//引入自己的库
import My from "./my"

var store = new Vuex.Store({
    modules:{
        Dynamic,
        My
    }
})

export default store;