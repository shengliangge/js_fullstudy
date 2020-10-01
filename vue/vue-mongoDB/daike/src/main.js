import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './axios/index'
import './static/clear-default.css'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(api)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
