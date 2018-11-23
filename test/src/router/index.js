import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CookBook from '@/components/CookBook/CookBook'
import CreateBook from '@/components/CookBook/CreateBook'
import My from '@/components/My/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: HelloWorld,
      meta: { navShow: true}
    },
    {
      path: '/My',
      name: 'My',
      component: My,
      meta: { navShow: true}
    },    
    {
      path: '/CookBook',
      name: 'CookBook',
      component: CookBook,
      meta: { navShow: false}
    },    
    {
      path: '/CreateBook',
      name: 'CreateBook',
      component: CreateBook,
      meta: { navShow: false}
    }
  ]
})
