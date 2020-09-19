import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
  path: '/',
  name: 'StarNotes',
  component: () => import('@/views/StarNotes.vue'),
  meta:{
    title:'星辰笔记'
  }
}
,  {
  path: '/StarBanner',
  name: 'StarBanner',
  component: () => import('@/views/StarBanner.vue'),
  meta:{
    title:'星辰笔记'
  }
},
{
  path: '/StarLogin',
  name: 'StarLogin',
  component: () => import('@/views/StarLogin.vue'),
  meta:{
    title:'登陆'
  }
},
{
  path: '/StarRegister',
  name: 'StarRegister',
  component: () => import('@/views/StarRegister.vue'),
  meta:{
    title:'注册'
  }
},
{
  path: '/noteClass',
  name: 'noteClass',
  component: () => import('@/views/NoteClass.vue'),
  meta:{
    title:'noteClass'
  }
},
{
  path: '/noteList',
  name: 'noteList',
  component: () => import('@/views/NoteList.vue'),
  meta:{
    title:'noteList'
  }
},
{
  path: '/noteDetail',
  name: 'noteDetail',
  component: () => import('@/views/NoteDetail.vue'),
  meta:{
    title:'noteList'
  }
},
{
  path: '/addNote',
  name: 'addNote',
  component: () => import('@/views/AddNote.vue'),
  meta:{
    title:'写日记'
  }
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
