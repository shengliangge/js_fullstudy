//  引入依赖
const Koa = require('Koa')

const app = new Koa()//定义一个新的Koa实例
const main = ctx => {
  const n = Number(ctx.cookies.get('view') || 0) + 1
  ctx.cookies.set('view', n)
  ctx.response.body = n + 'view'
}
app.use(main)
app.listen(3002, () => {
  console.log('3002端口启动')
})