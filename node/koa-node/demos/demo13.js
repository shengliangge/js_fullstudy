const koa = require('Koa')
const app = new koa()
const route = require('koa-route')
const redirect = ctx => {
  ctx.response.redirect('/')
  ctx.response.body = 'Hello'
}
const main = ctx => {
  ctx.response.body = 'Hello World'
}
app.use(route.get('/', main))
app.use(route.get('/redirect', redirect))
app.use(main)
app.listen(3001)    