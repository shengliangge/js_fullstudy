import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    meta: {
      title: '地质云图谱'
    },
    component: () => import('@/views/Main.vue')
  }, {
    path: '/login',
    name: 'login',
    meta: {
      title: '登陆'
    },
    component: () => import('@/views/loginRegister.vue')
  }, {
    path: '/register',
    name: 'register',
    meta: {
      title: '注册'
    },
    component: () => import('@/views/loginRegister.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
