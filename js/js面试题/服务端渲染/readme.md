## SPA

* 单页应用：

所有的内容都写在一个 index.html

npm run build

用户访问 index.html( `<div id="root"></div>` )->script->发起请求->js执行->构造出页面

## SSR(同构) 

服务端渲染

vue 和 react

虚拟DOM：{}

平台无关

`mount('#app')` 当渲染在浏览器里面 虚拟 DOM 就会变成真实 DOM 

- 当渲染在服务器里面 虚拟 DOM 变成字符串

- 当渲染在客户端（ios）里面，虚拟 DOM 变成客户端的组件

<template>
  <div>123</div>
</template>

import XXX from 'XXX.vue'

let html = `<div>123</div>`
res.end(html)