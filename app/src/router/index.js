import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Dynamic from '../components/dynamic'
import Release from '../components/release'
import Message from '../components/message'
import My from '../components/my'
import Err from '../components/error/error.vue'
import Settings from "../components/settings"
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
      component: Err
    },
    //设置
    {
      path:"/settings",
      name:"settings",
      component:Settings,
      meta:{
        flag:false
      }
    },
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
        },
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
    }
 





  ]
})


// router.beforeEach((to,from,next)=>{
//   if(to.meta.requireAuth){

//   }
// })


