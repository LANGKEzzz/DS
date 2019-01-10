import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import Dynamic from "./dynamic"
import Home from "./home"

import Message from "./message"

//引入自己的库

import My from "./my"
import Settings from "./settings"


var store = new Vuex.Store({
    modules:{
        Dynamic,
        Settings,    
        Home,
        Message,
        My
    }
})

export default store;