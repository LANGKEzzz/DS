import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Dynamic from '../components/dynamic'
import Release from '../components/release'
import Message from '../components/message'
import MessageFocus from '../components/message/focus/focus.vue'
import MessageMessremind from '../components/message/messremind/messremind.vue'
import MessageRemind from '../components/message/remind/remind.vue'

import My from '../components/my'
import Err from '../components/error/error.vue'
import Fatheras from "../components/settings/father-as.vue"
import Fathermessage from "../components/settings/father-message.vue"
import Fathergeneral from "../components/settings/father-general.vue"
import Fatherpicture from "../components/settings/father-picture.vue"
import Fathershield from "../components/settings/father-shield.vue"
import AS from "../components/settings/page/AS.vue"
import messageS from "../components/settings/page/messageS.vue"
import generalS from "../components/settings/page/generalS.vue"
import shieldS from "../components/settings/page/shieldS.vue"
import pictureS from "../components/settings/page/pictureS.vue"
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
      path:"/message/messremind",
      name:'messagemessremind',
      component:MessageMessremind,
      meta:{
        flag:true
      }
    },
    {
      path:"/message/focus",
      name:'messagefocus',
      component:MessageFocus,
      meta:{
        flag:true
      }
    },
    {
      path:"/message/remind",
      name:'Messageremind',
      component:MessageRemind,
      meta:{
        flag:true
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
        flag:false,
        requireAuth:true
      }
    },

    
    // {
    //   path:"/settings",
    //   name:"settings",
    //   component:Settings,
    //   meta:{
    //     flag:false,
    //     requireAuth:true
    //   }
    // },
    //设置
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
      component: Attention,
      meta:{
        flag:true
      }
    },
    {

    	path: '/fans',
      name: 'fans',
      component: Fans,
      meta:{
        flag:true
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
    }

  ]
})


// router.beforeEach((to,from,next)=>{
//   if(to.meta.requireAuth){

//   }
// })


