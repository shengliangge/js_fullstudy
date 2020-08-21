const koa = require('Koa')
const app = new koa()

const main = ctx => {
  ctx.response.status = 404
  ctx.response.body = '页面找不到'
}
app.use(main)
app.listen(3001)    