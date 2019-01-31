// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'lib-flexible/flexible.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import router from './router'
import store from './store'
import axios from './libs/axios'

Vue.config.productionTip = false
Vue.use(mintui)
Vue.prototype.HOST='/api'
Vue.use(iView)
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
