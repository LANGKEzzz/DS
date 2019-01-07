import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Dynamic from '../components/dynamic'
import Release from '../components/release'
import Message from '../components/message'
import My from '../components/my'
import Err from '../components/error/error.vue'
import Concern from '../components/dynamic/content/concern.vue'
import Recommend from '../components/dynamic/content/recommend.vue'
import Nearby from '../components/dynamic/content/nearby.vue'
import Login from '../components/login'
import Settings from '../components/settings'
import Register from '../components/register'
import Attention from '../components/my/components/attention'

import Comm from '../components/dynamic/content/comment.vue'
import Transpond from '../components/dynamic/content/transpond.vue'

import Fans from '../components/my/components/fans'

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
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta:{
        flag:true,
        requireAuth:true
      }
    },  
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        flag:true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{
        flag:true
      }
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
    },
    {
      path: '/**',
      name: 'error',
      component: Err,
      meta:{
        flag:false,
        requireAuth:true
      }
    }

  ]
})


// router.beforeEach((to,from,next)=>{
//   if(to.meta.requireAuth){

//   }
// })


