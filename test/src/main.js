import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import Tabbar from 'mint-ui';

Vue.use(Mint);
Vue.component(Tabbar.name, Tabbar);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
