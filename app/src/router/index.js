import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Dynamic from '../components/dynamic'
import Release from '../components/release'
import Message from '../components/message'
import My from '../components/my'
import Err from '../components/error/error.vue'
import AS from "../components/settings/page/AS.vue"
import messageS from "../components/settings/page/messageS.vue"
import generalS from "../components/settings/page/generalS.vue"
import shieldS from "../components/settings/page/shieldS.vue"
import pictureS from "../components/settings/page/pictureS.vue"
import Aiteset from "../components/settings/page/components/aiteset"
import Phonenum from "../components/settings/page/components/phonenum"
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
import Loginphone from "../components/settings/page/components/loginPhone"
import Changenum from "../components/settings/page/components/changenum"
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
        //设置
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta:{
        flag:false,
        requireAuth:true
      }
    },
			//账号与安全
    {
      path:"/aS",
      name:"aS",
      component:AS,
      meta:{
        flag:false
      }
    },
			//消息设置
    {
      path:"/messageS",
      name:"messageS",
      component:messageS,
        meta:{
          flag:false
        }
    },
    //通用设置
    {
      path:"/generalS",
      name:"generalS",
      component:generalS,
        meta:{
          flag:false
        }
    },
    //图片设置
    {
      path:"/pictureS",
      name:"pictureS",
      component:pictureS,
        meta:{
          flag:false
      }
    },
    //屏蔽设置
    {
      path:"/shieldS",
      name:"shieldS",
      component:shieldS,
        meta:{
          flag:false
      }
    },
    //@设置
    {
      path:"/aiteset",
      name:"aiteset",
      component:Aiteset,
      meta:{
        flag:false
      }
    },
    //手机号码
    {
    	path:"/phonenum",
      name:"phonenum",
      component:Phonenum,
      meta:{
        flag:false
      }
    },
    //登录手机
    {
      path:"/loginphone",
      name:"loginphone",
      component:Loginphone,
      meta:{
        flag:false
      }
      
    },
    //更换号码
    {
    	path:"/changenum",
      name:"changenum",
      component:Changenum,
      meta:{
        flag:false
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


