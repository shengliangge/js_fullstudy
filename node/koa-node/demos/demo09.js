//  引入依赖
const Koa = require('Koa')

const app = new Koa()//定义一个新的Koa实例
const one = (ctx, next) => {
  console.log('<<one');
  next()
  console.log('one>>');
}
const two =(ctx, next) => {
  console.log('<<two');
  next()
  console.log('two>>');
}
const three = (ctx, next) => {
  console.log('<<three');
  next()
  console.log('three>>');
}
app.use(one)
app.use(two)
app.use(three)
app.listen(3000)