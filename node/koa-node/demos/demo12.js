const Koa = require('Koa')
const app = new koa()
const path = require('path')
const serve=require('koa-static')
const main = ctx => {
  ctx.response.body = path.join(__dirname)
}
// const main=serve(path.join(__dirname))
app.use(main)
app.listen(3000)