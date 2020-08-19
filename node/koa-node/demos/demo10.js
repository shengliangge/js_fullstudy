const Koa = require('koa')
const fs = require('fs').promises
const app = new Koa()
// 中间件
const main =async function (ctx) {
  ctx.response.type = 'html'
  ctx.response.body = await  fs.readFile('./template.html', 'utf-8')
}
app.use(main)
app.listen(3000)