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

let Koa = require('./lib/application')
let app = new Koa()

app.use((ctx) => {
  // console.log(ctx.req.url);
  // console.log(ctx.request.req.url);
  // console.log(ctx.response.req.url);
  // console.log(ctx.request.url);
  // console.log(ctx.request.path);
  // console.log(ctx.url);
  // console.log(ctx.path);
  ctx.body = "hello world"
  console.log(ctx.body);
})

app.listen(3000)
