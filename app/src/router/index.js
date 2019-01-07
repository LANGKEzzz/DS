import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Dynamic from '../components/dynamic'
import Release from '../components/release'
import Message from '../components/message'
import My from '../components/my'
import Err from '../components/error/error.vue'
<<<<<<< HEAD
import Concern from '../components/dynamic/content/concern.vue'
import Recommend from '../components/dynamic/content/recommend.vue'
import Nearby from '../components/dynamic/content/nearby.vue'
=======
import Login from '../components/login'
import Settings from '../components/settings'
import Register from '../components/register'
>>>>>>> zjq

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
<<<<<<< HEAD
        flag:true
=======
        flag:true,
        requireAuth:true
>>>>>>> zjq
      }
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: Dynamic,
<<<<<<< HEAD
      redirect:'/dynamic/concern',
      children:[
        {
          path: '/dynamic/concern',
          name: 'concern',
          component: Concern,
          meta:{
            flag:true
          }
        },
        {
          path: '/dynamic/recommend',
          name: 'recommend',
          component: Recommend,
          meta:{
            flag:true
          }
        },
        {
          path: '/dynamic/nearby',
          name: 'nearby',
          component: Nearby,
          meta:{
            flag:true
          }
        }
      ],
      meta:{
        flag:true
=======
      meta:{
        flag:true,
        requireAuth:true
>>>>>>> zjq
      }
    },
    {
      path: '/release',
      name: 'release',
      component: Release,
      meta:{
<<<<<<< HEAD
        flag:false
=======
        flag:true,
        requireAuth:true
>>>>>>> zjq
      }
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta:{
<<<<<<< HEAD
        flag:true
=======
        flag:true,
        requireAuth:true
>>>>>>> zjq
      }
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta:{
<<<<<<< HEAD
        flag:true
=======
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
>>>>>>> zjq
      }
    },
    {
      path: '/**',
      name: 'error',
      component: Err,
      meta:{
<<<<<<< HEAD
        flag:true
=======
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
>>>>>>> zjq
      }
    }
  ]
})


// router.beforeEach((to,from,next)=>{
//   if(to.meta.requireAuth){

//   }
// })


