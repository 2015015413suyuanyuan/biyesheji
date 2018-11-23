import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CookBook from '@/components/CookBook'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: HelloWorld
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },    
    {
      path: '/CookBook',
      name: 'CookBook',
      component: CookBook
    }
  ]
})
