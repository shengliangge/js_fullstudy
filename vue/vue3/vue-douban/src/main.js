import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import './assets/styles/reset.css'
import { NavBar } from 'vant';
import { Search } from 'vant';
createApp(App).use(store).use(router).use(NavBar).use(Search).mount('#app')
