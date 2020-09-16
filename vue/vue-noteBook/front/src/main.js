import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import { Swipe, SwipeItem, Icon, Field, ActionSheet, Toast, Panel, Uploader } from 'vant'
import 'vant/lib/index.css'
import util from './assets/js/util'
import axios from 'axios'

Vue.use(Swipe).use(SwipeItem).use(Icon).use(Field).use(ActionSheet).use(Toast).use(Panel).use(Uploader).use(axios)

Vue.prototype.$http = axios
Vue.prototype.$util = util
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
