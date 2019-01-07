import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Dynamic from '../components/dynamic'
import Release from '../components/release'
import Message from '../components/message'
import My from '../components/my'
import Err from '../components/error/error.vue'
import Login from '../components/login'
import Settings from '../components/settings'
import Register from '../components/register'
import Attention from '../components/my/components/attention'
import Comm from '../components/dynamic/content/comment.vue'
import Transpond from '../components/dynamic/content/transpond.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home',
      meta:{
        flag:true,
        requireAuth:true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        flag:true,
        requireAuth:true
      }
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: Dynamic,
      meta:{
        flag:true,
        requireAuth:true
      }
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comm,
      meta:{
        flag:false
      }
    },
    {
      path: '/transpond/:itm',
      name: 'transpond',
      component: Transpond,
      meta:{
        flag:false
      }
    },
    {
      path: '/release',
      name: 'release',
      component: Release,
      meta:{
        flag:true,
        requireAuth:true
      }
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta:{
        flag:true,
        requireAuth:true
      }
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta:{
        flag:true,
        requireAuth:true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta:{
        flag:true,
        requireAuth:true
      }
    },
    {
      path: '/**',
      name: 'error',
      component: Err,
      meta:{
        flag:false,
        requireAuth:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        flag:false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{
        flag:false
      }
    },
    {
    	path: '/attention',
      name: 'attention',
      component: Attention
    }
  ]
})


// router.beforeEach((to,from,next)=>{
//   if(to.meta.requireAuth){

//   }
// })


