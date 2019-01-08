import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Dynamic from '../components/dynamic'
import Release from '../components/release'
import Message from '../components/message'
import My from '../components/my'
import Err from '../components/error/error.vue'
// import Fatheras from "../components/settings/father-as.vue"
// import Fathermessage from "../components/settings/father-message.vue"
// import Fathergeneral from "../components/settings/father-general.vue"
// import Fatherpicture from "../components/settings/father-picture.vue"
// import Fathershield from "../components/settings/father-shield.vue"
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
import Aiteset from "../components/settings/page/components/aiteset"
import Phonenum from "../components/settings/page/components/phonenum"

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
          path:"/aS",
          name:"aS",
          component:AS,
          meta:{
            flag:false
      }
    },

    {
          path:"/messageS",
          name:"messageS",
          component:messageS,
          meta:{
            flag:false
          }
    },
    {
          path:"/generalS",
          name:"generalS",
          component:generalS,
          meta:{
            flag:false
          }
    },
    {
          path:"/pictureS",
          name:"pictureS",
          component:pictureS,
          meta:{
            flag:false
          }
    },
    {
          path:"/shieldS",
          name:"shieldS",
          component:shieldS,
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
      path: '/**',
      name: 'error',
      component: Err
    },
 





  ]
})


// router.beforeEach((to,from,next)=>{
//   if(to.meta.requireAuth){

//   }
// })


