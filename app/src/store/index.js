import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import Dynamic from "./dynamic"

import Message from "./message"

//引入自己的库
import My from "./my"


var store = new Vuex.Store({
    modules:{
        Dynamic,
        Message,
        My
    }
})

export default store;