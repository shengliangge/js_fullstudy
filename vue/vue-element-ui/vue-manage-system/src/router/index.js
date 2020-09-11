import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main.vue') 
  },
  {
    path: 'test',
    component: () =>  import('@/views/test.vue') 
  }
];

const router = new VueRouter({
  routes
});

export default router;
