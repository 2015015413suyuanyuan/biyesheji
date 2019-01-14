import Vue from 'vue'
import Router from 'vue-router'

// 主页 
import Home from '@/components/Home/Home'

// 创建菜谱 
import CookBook from '@/components/CookBook/CookBook'
import CreateBook from '@/components/CookBook/CreateBook'
import CookClassify from '@/components/CookBook/CookClassify'

// 厨房故事
import KitchenStory from '@/components/KitchenStory/KitchenStory'
import KitchenStoryDetails from '@/components/KitchenStory/KitchenStoryDetails'

// 我的 
import My from '@/components/My/My'
import About from '@/components/My/About'
import ChangeInfo from '@/components/My/ChangeInfo'
import Logged from '@/components/My/Logged'
import NoLogged from '@/components/My/NoLogged'
import Registe from '@/components/My/Registe'
import Login from '@/components/My/Login'

// 搜索菜谱
import Search from '@/components/Search/Search'
import SearchHome from '@/components/Search/SearchHome'
import Result from '@/components/Search/Result'
import CookBook1 from '@/components/CookBook/CookBook1'

import CookBookDetail from '@/components/CookBookDetail/CookBookDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { navShow: true}
    },
    {
      path: '/My',
      name: 'My',
      component: My,
      meta: { navShow: true}
    },   
    {
      path: '/About',
      name: 'About',
      component: About,
      meta: { navShow: false}
    }, 
    {
      path: '/ChangeInfo',
      name: 'ChangeInfo',
      component: ChangeInfo,
      meta: { navShow: false}
    },
    {
      path: '/Logged',
      name: 'Logged',
      component: Logged,
      meta: { navShow: true}
    },
    {
      path: '/NoLogged',
      name: 'NoLogged',
      component: NoLogged,
      meta: { navShow: true}
    },
    {
      path: '/Registe',
      name: 'Registe',
      component: Registe,
      meta: { navShow: false}
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: { navShow: false}
    },    
    {
      path: '/CreateBook',
      name: 'CreateBook',
      component: CreateBook,
      meta: { navShow: false}
    },
    {
      path: '/CookBook',
      name: 'CookBook',
      component: CookBook,
      meta: { navShow: false}
    },
    {
      path: '/CookBook1',
      name: 'CookBook1',
      component: CookBook1,
      meta: { navShow: false}
    },
    {
      path: '/CookClassify',
      name: 'CookClassify',
      component: CookClassify,
      meta: { navShow: false}
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
      meta: { navShow: false}
    },
    {
      path: '/SearchHome',
      name: 'SearchHome',
      component: SearchHome,
      meta: { navShow: false}
    },
    {
      path: '/Result',
      name: 'Result',
      component: Result,
      meta: { navShow: false}
    },
    {
      path: '/KitchenStoryDetails',
      name: 'KitchenStoryDetails',
      component: KitchenStoryDetails,
      meta: { navShow: false}
    },
    {
      path: '/KitchenStory',
      name: 'KitchenStory',
      component: KitchenStory,
      meta: { navShow: true}
    },
    {
      path: '/CookBookDetail',
      name: 'CookBookDetail',
      component: CookBookDetail,
      meta: { navShow: false}
    }
  ]
})
