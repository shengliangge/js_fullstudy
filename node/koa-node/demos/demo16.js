//  引入依赖
const Koa = require('Koa')

const app = new Koa()//定义一个新的Koa实例
const handle = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    // console.log(err)
    ctx.response.status = err.statusCode | err.status | 500;
    ctx.response.body = {
      'message': err.message
    }
  }
}
const main = ctx => {
  ctx.throw(500)
}

app.use(handle)
app.use(main)
app.listen(3001, () => {
  console.log('3000端口启动')
})