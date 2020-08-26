import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld.vue'
import Hi from '@/components/Hi.vue'
// import Hi1 from '@/components/Hi1.vue'
import Hi2 from '@/components/Hi2.vue'
import Error1 from '@/components/Error.vue'
// import { component } from 'vue/types/umd'
Vue.use(Router)

export default new Router({  // 配置路由
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello  // 引入组件
      
    },
    {
      path:'/abc',
      component:Error1,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了404');
        console.log(to);
        console.log(from);
        console.log(next);
        
      }
    },
    {
      path: '/hi',
      name: 'Hi',
      component: Hi,  // 引入组件
      children: [
        {
          path: 'hi1',
          name:'hi1',
          // component: Hi1,
          redirect:'/'
        }, {
          path: 'hi2',
          component: Hi2  // 引入组件
        }
      ]
    },

  ]
})