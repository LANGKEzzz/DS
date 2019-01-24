import Vue from 'vue'
import Router from 'vue-router'
//home 下的路由
import Home from '../components/home'
import Main from "../components/main"
//release 下的路由
import Release from '../components/release'
import Location from '../components/release/Location.vue'
//message 下的路由
let Message = resolve=>require(["../components/message"],resolve)
// import Message from '../components/message'
let MessageFocus = resolve=>require(["../components/message/focus/focus.vue"],resolve)
// import MessageFocus from '../components/message/focus/focus.vue'
let MessageMessremind = resolve=>require(["../components/message/messremind/messremind.vue"],resolve)
// import MessageMessremind from '../components/message/messremind/messremind.vue'
let MessageRemind = resolve=>require(["../components/message/remind/remind.vue"],resolve)
// import MessageRemind from '../components/message/remind/remind.vue'
let Dialogbox = resolve=>require(["../components/message/dialogbox/dialogbox.vue"],resolve)
// import Dialogbox from "../components/message/dialogbox/dialogbox.vue"
let Replay = resolve=>require(["../components/message/replay/replay.vue"],resolve)
// import Replay from "../components/message/replay/replay.vue"
//my 下的路由
import My from '../components/my'
import Attention from '../components/my/components/attention'
import Fans from '../components/my/components/fans'
import Comments from "../components/my/components/comments"
import Likes from "../components/my/components/like"
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
import Complaint from '../components/dynamic/content/complaint.vue'

//settings 下的路由
import Settings from '../components/settings'

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
import NewList from '../components/my/components/newList'
import ChangeName from '../components/my/components/changeName'
import Loginphone from "../components/settings/page/components/loginPhone"
import Changenum from "../components/settings/page/components/changenum"
import Modifypwd from "../components/settings/page/components/modifyPwd"
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home',
      meta: {
        flag: true,
        requireAuth: true
      }
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: '/findpwd',
      component: FindPwd,
      name: "findpwd",
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        flag: true,
        requireAuth: true
      }
    },
    //dynamic
    {
      path: '/dynamic',
      name: 'dynamic',
      component: Dynamic,
      redirect: '/dynamic/concern',
      children: [{
          path: '/dynamic/concern',
          name: 'concern',
          component: Concern,
          meta: {
            flag: true
          }
        },
        {
          path: '/dynamic/recommend',
          name: 'recommend',
          component: Recommend,
          meta: {
            flag: true
          }
        },
        {
          path: '/dynamic/nearby',
          name: 'nearby',
          component: Nearby,
          meta: {
            flag: true
          }
        }
      ],
      meta: {
        flag: true
      }
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comm,
      meta: {
        flag: false,
        keepAlive: true
      }
    },
    {
      path: '/transpond',
      name: 'transpond',
      component: Transpond,
      props: true,
      meta: {
        flag: false
      }
    },
    {
      path: '/complaint',
      name: 'complaint',
      component: Complaint,
      props: true,
      meta: {
        flag: false
      }
    },
    //release
    {
      path: '/release',
      name: 'release',
      component: Release,
      meta: {
        flag: false,
        requireAuth: true
      },
    },
    {
      path: '/location',
      name: 'location',
      component: Location,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta: {
        flag: true,
        requireAuth: true
      }
    },
    {
      path: "/message/dialogbox",
      name: "dialogbox",
      component: Dialogbox,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: "/message/messremind",
      name: 'messagemessremind',
      component: MessageMessremind,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: "/message/focus",
      name: 'messagefocus',
      component: MessageFocus,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: "/message/remind",
      name: 'Messageremind',
      component: MessageRemind,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path:"/message/replay",
      name:'Replay',
      component:Replay,
      meta:{
        flag:false,
        requireAuth:true
      }
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta: {
        flag: true,
        requireAuth: true
      }
    },
    {
      path: "/comments",
      name: 'comments',
      component: Comments
    },
    {
      path: "/like",
      name: 'like',
      component: Likes
    },
    //设置
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    //账号与安全
    {
      path: "/aS",
      name: "aS",
      component: AS,
      meta: {
        flag: false
      }
    },
    //消息设置
    {
      path: "/messageS",
      name: "messageS",
      component: messageS,
      meta: {
        flag: false
      }
    },
    //通用设置
    {
      path: "/generalS",
      name: "generalS",
      component: generalS,
      meta: {
        flag: false
      }
    },
    //图片设置
    {
      path: "/pictureS",
      name: "pictureS",
      component: pictureS,
      meta: {
        flag: false
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
      path: "/aiteset",
      name: "aiteset",
      component: Aiteset,
      meta: {
        flag: false
      }
    },
    //手机号码
    {
      path: "/phonenum",
      name: "phonenum",
      component: Phonenum,
      meta: {
        flag: false
      }
    },
    //登录手机
    {
      path: "/loginphone",
      name: "loginphone",
      component: Loginphone,
      meta: {
        flag: false
      }

    },
    //更换号码
    {
      path: "/changenum",
      name: "changenum",
      component: Changenum,
      meta: {
        flag: false
      }
    },
    {
    	path:"/modifypwd",
      name:"modifypwd",
      component:Modifypwd,
      meta:{
        flag:false
      }
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        flag: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        flag: false
      }
    },
    //关注
    {
      path: '/attention',
      name: 'attention',
      component: Attention,
      meta:{
        flag:false
      }
    },
    //粉丝
    {

      path: '/fans',
      name: 'fans',
      component: Fans,
      meta:{
        flag:false
      }
    },
    //我的赞
    {
    	path: '/praise',
      name: 'praise',
      component: Praise,
      meta:{
        flag:false
      }
    },
    //个人资料
    {
    	path: '/person',
      name: 'person',
      component: Person,
      meta:{
        flag:false
      }
    },
     //我的收藏
    {
    	path: '/collect',
      name: 'collect',
      component: Collect,
      meta:{
        flag:false
      }
    },
    //聊天
    {
    	path: '/chat',
      name: 'chat',
      component: Chat,
      meta: {
        flag: false
      }
    },
    //消息列表
    {
    	path: '/newList',
      name: 'newList',
      component: NewList,
      meta:{
        flag:false
      }
    },
    //变更名字
    {
    	path: '/changeName',
      name: 'changeName',
      component: ChangeName,
      meta: {
        flag: true
      }
    },

    {
      path: '/**',
      name: 'error',
      component: Err,
      meta: {
        flag: false,
        requireAuth: true
      }
    }

  ]
})


// router.beforeEach((to,from,next)=>{
//   if(to.meta.requireAuth){

//   }
// })
