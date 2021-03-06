// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import Observer from "./common/js/observer.js"
Vue.prototype.Observer=Observer;

// 引入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import "./common/css/reset.css";
import "./common/css/iconfont/iconfont.css";
import "../node_modules/swiper/dist/css/swiper.min.css";
import "./common/js/flexble";
import 'iview/dist/styles/iview.css';
//引入mint-ui 
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
import "./common/css/release/iconfont.css";
// 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入mock
import "./mock"
Vue.use(iView);

Vue.use(ElementUI);



Vue.config.productionTip = false
Vue.use(iView);
// Vue.use(MintUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
