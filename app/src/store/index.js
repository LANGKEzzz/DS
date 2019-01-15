import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import Dynamic from "./dynamic"
import Home from "./home"
import Release from "./release"
import Message from "./message"

//引入自己的库

import My from "./my"
import Settings from "./settings"


var store = new Vuex.Store({
    modules:{
        namespaced:true,
        Dynamic,
        Settings,    
        Home,
        Message,
        My,
        Release
        
    }
})

export default store;