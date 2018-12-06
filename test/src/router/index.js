import Vue from 'vue'
import Router from 'vue-router'

// 菜谱分类
import Classify from '@/components/Classify/Classify'
import ClassifyList from '@/components/Classify/ClassifyList'

// 主页 
import Home from '@/components/Home/Home'

// 创建菜谱 
import CookBook from '@/components/CookBook/CookBook'
import CreateBook from '@/components/CookBook/CreateBook'

// 菜谱详情
import DetailsHome from '@/components/Details/DetailsHome'


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
import Result from '@/components/Search/Result'
import CookBook1 from '@/components/CookBook/CookBook1'

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
      path: '/Search',
      name: 'Search',
      component: Search,
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
      path: '/DetailsHome',
      name: 'DetailsHome',
      component: DetailsHome,
      meta: { navShow: false}
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify,
      meta: { navShow: true}
    },
    {
      path: '/ClassifyList',
      name: 'ClassifyList',
      component: ClassifyList,
      meta: { navShow: false}
    }
  ]
})
