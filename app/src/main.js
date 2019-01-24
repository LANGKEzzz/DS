// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import "./common/css/reset.css";
import "./common/css/iconfont/iconfont.css";
import "../node_modules/swiper/dist/css/swiper.min.css";
import "./common/js/flexble";
import iView from 'iview';
import 'iview/dist/styles/iview.css';
//引入mint-ui 
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


Vue.config.productionTip = false
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
