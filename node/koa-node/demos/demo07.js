const Koa = require('Koa')
const route = require('koa-route')
const app = new Koa()
const main = ctx => {
  let date = new Date().getTime()
  ctx.response.body=`${date}-${ctx.request.method}-${ctx.request.url}`
}
app.use(route.get('/', main))
app.listen(3000)