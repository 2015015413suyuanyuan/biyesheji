// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'lib-flexible/flexible.js'
import axios from 'axios'
import Qs from 'qs'
import iView from 'iview'
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(mintui)
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
Vue.prototype.HOST='/api'
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
