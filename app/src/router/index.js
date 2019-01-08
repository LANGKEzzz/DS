import Vue from 'vue'
import Router from 'vue-router'
//home 下的路由
import Home from '../components/home'
import Main from "../components/main"
//release 下的路由
import Release from '../components/release'
//message 下的路由
import Message from '../components/message'
//my 下的路由
import My from '../components/my'
import Attention from '../components/my/components/attention'
import Fans from '../components/my/components/fans'
//err 下的路由
import Err from '../components/error/error.vue'
//login 下的路由
import Login from '../components/login'
//register 下的路由
import Register from '../components/register'
//dynamic下的路由
import Comm from '../components/dynamic/content/comment.vue'
import Concern from '../components/dynamic/content/concern.vue'
import Recommend from '../components/dynamic/content/recommend.vue'
import Nearby from '../components/dynamic/content/nearby.vue'
import Dynamic from '../components/dynamic'
import Transpond from '../components/dynamic/content/transpond.vue'

//settings 下的路由
import Settings from '../components/settings'
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
import Aiteset from "../components/settings/page/components/aiteset"
import Phonenum from "../components/settings/page/components/phonenum"

import FindPwd from '../components/findpwd'

import Praise from '../components/my/components/praise'

import Person from '../components/my/components/person'

import Collect from '../components/my/components/collect'

import Chat from '../components/my/components/chat'

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
      path: '/main',
      name:'main',
      component:Main,
      meta:{
        flag:false,
        requireAuth:true
      }
    },
    {
      path: '/findpwd',
      component:FindPwd,
      name:"findpwd",
      meta:{
        flag:false,
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
    //dynamic
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
      path: '/transpond',
      name: 'transpond',
      component: Transpond,
      props:true,
      meta:{
        flag:false
      }
    },
    //release
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
      path:"/fatheras",
      name:"fatheras",
      component:Fatheras,
      meta:{
        flag:false
      },
      children:[
        {
          path:"/aS",
          name:"aS",
          component:AS,
          meta:{
            flag:false
          }
        }
      ]
    },
    {
      path:"/fathermessage",
      name:"fathermessage",
      component:Fathermessage,
      meta:{
        flag:false
      },
      children:[
        {
          path:"/messageS",
          name:"messageS",
          component:messageS,
          meta:{
            flag:false
          }
        }
      ]

    },
    {
      path:"/fathergeneral",
      name:"fathergeneral",
      component:Fathergeneral,
      meta:{
        flag:false
      },
      children:[
        {
          path:"/generalS",
          name:"generalS",
          component:generalS,
          meta:{
            flag:false
          }
        }
      ]
    },  
   
    {
      path:"/fatherpicture",
      name:"fatherpicture",
      component:Fatherpicture,
      meta:{
        flag:false
      },
      children:[
        {
          path:"/pictureS",
          name:"pictureS",
          component:pictureS,
          meta:{
            flag:false
          }
        }
      ]
    },
    {
      path:"/fathershield",
      name:"fathershield",
      component:Fathershield,
      meta:{
        flag:false
      },
      children:[
        {
          path:"/shieldS",
          name:"shieldS",
          component:shieldS,
          meta:{
            flag:false
          }
        }
      ]
    }, 
    {
      path:"/aiteset",
      name:"aiteset",
      component:Aiteset,
      meta:{
        flag:false
      }
    },
    {
    	path:"/phonenum",
      name:"phonenum",
      component:Phonenum,
      meta:{
        flag:false
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

    	path: '/praise',
      name: 'praise',
      component: Praise,
      meta:{
        flag:true
      }
    },
    {

    	path: '/person',
      name: 'person',
      component: Person,
      meta:{
        flag:true
      }
    },
    {

    	path: '/collect',
      name: 'collect',
      component: Collect,
      meta:{
        flag:true
      }
    },
    {

    	path: '/chat',
      name: 'chat',
      component: Chat,
      meta:{
        flag:false
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


