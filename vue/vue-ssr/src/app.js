
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './routes/index.js'
// 导出一个工厂函数
export function createApp() {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })
  return { app, router }
}
// const renderer = require('vue-server-renderer').createRenderer()
// const server = require('express')()

// const app = new Vue({
//   template: '<div>hello world</div>'
// })
// //服务器端渲染
// server.get('/', (req, res) => {
//   renderer.renderToString(app, (err, html) => {
//     if (err) {
//       res.status(500).end('Server Error')
//       return
//     }
//     res.send(`
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   ${html}
//   <script src="/bundle.client.js"></script>
// </body>
// </html>
//     `)
//   })
// })