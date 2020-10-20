// const http = require('http')
// const server = http.createServer((req, res) => {
//   res.end('hello world')
// })
// server.listen(3000)



// const Koa = require('Koa')
// const app = new Koa()
// app.use((ctx,next) => {
//   console.log(ctx);

//   ctx.body='hello'
// })
// app.listen(3000)

const Koa = require('./lib/application')
let koa = require('./lib/application')
let app = new Koa()
app.use((req, res) => {
  res.end('hello world2')
})
app.listen(3000)