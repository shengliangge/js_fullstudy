import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main.vue')
  }, {
    path: '/login',
    component: () => import('@/views/loginRegister.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
