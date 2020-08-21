//  引入依赖
const Koa = require('Koa')

const app = new Koa()//定义一个新的Koa实例

const main = ctx => {
  ctx.throw(500)
}
//  监听error，可以在控制台看见server error
app.on('error',(error,ctx)=>{
  console.log('error',error);
})
app.use(main)
app.listen(3001, () => {
  console.log('3001端口启动')
})