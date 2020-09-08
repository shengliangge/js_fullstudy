import Vue from 'vue'
import VueRouter from 'vue-router'
import loginRegister from '../views/loginRegister.vue'
import home from '../views/Home.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/login',
      name:'login',
      component: loginRegister
    },
    {
      path:'/home',
      name:'home',
      component: home
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
