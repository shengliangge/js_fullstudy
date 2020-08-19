//  引入依赖
const Koa = require('Koa')

const app = new Koa()//定义一个新的Koa实例
const main = ctx => {
  // console.log(main);
  if (ctx.request.url !== '/') {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">Index Page</a>'
  }else{
    ctx.response.body = 'htllo'
  }
}
app.use(main)
app.listen(3000, () => {
  console.log('3000端口启动')
})