//  引入依赖
const Koa = require('Koa')
const koaBody = require('koa-body')
const app = new Koa()//定义一个新的Koa实例
const main = ctx => {
  // const body = ctx.request.body
  // if (!body.name) {
  //   ctx.throw(400, 'request.name')
  // }
  // ctx.response.body = { name: body.name }
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
}
app.use(koaBody())
app.use(main)
app.listen(3000, () => {
  console.log('3000端口启动')
})