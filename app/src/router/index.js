import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Dynamic from '../components/dynamic'
import Release from '../components/release'
import Message from '../components/message'
import My from '../components/my'
import Err from '../components/error/error.vue'
import Attention from '../components/my/components/attention'
import Fans from '../components/my/components/fans'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: Dynamic
    },
    {
      path: '/release',
      name: 'release',
      component: Release
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/my',
      name: 'my',
      component: My,
    },
    {
      path: '/error',
      name: 'error',
      component: Err
    },
    {
    	path: '/attention',
      name: 'attention',
      component: Attention
    },
    {
    	path: '/fans',
      name: 'fans',
      component: Fans
    }
  ]
})
