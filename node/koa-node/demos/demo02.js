//  引入依赖
const Koa = require('Koa')

const app = new Koa()//定义一个新的Koa实例
const main = ctx => {
  ctx.response.body = "Hello World"
}
app.use(main)
app.listen(3000, () => {
  console.log('3000端口启动')
})