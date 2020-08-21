//  引入依赖
const Koa = require('Koa')
const app = new Koa()//定义一个新的Koa实例
const handle = async (ctx, next) => {
  //捕捉错误,如果错误，输出错误页面
  // 用p装内容something error，you should concat admin
  try {
    await next()
  } catch (error) {
    ctx.response.status = err.statusCode | err.status | 500;
    ctx.response.type = 'html'
    ctx.response.body = `<p>something error，you should concat admin</p>`
    ctx.app.emit('error', error, ctx)
  }
}
const main = ctx => {
  ctx.throw(500)
}
//  监听error，可以在控制台看见server error
app.on('error', (err) => {
  console.log('error', err);
  console.log('logger error', err.message);
})
app.use(handle)
app.use(main)
app.listen(3001, () => {
  console.log('3001端口启动')
})