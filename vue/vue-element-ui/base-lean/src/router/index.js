import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/pop'
  },
  {
    path: '/home/:id',
    component: () => import('../views/Home.vue'),
    children: [{
      path: '/child',
      component: () => import('../views/Child.vue')
    },
    {
      path: '/layout',
      component: () => import('../views/element/Layout.vue')
    },
    {
      path: '/pop',
      component: () => import('../views/element/Pop.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
