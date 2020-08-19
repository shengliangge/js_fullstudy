// 引入依赖 commonJS
const Koa = require('koa')

// 创建一个Koa对象表示web app本身
const app = new Koa() //定义一个新的koa实例

// ctx.request.accepts是用来检查http请求的accept的内容的
// Accept属于请求头，代表客户端希望接收的数据类型，跟ContentType类似
const main = ctx => {
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml'
        ctx.response.body = '<data>Hello World</data>'
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html'
        ctx.response.body = '<p>Hello World</p>'
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json'
        ctx.response.body = '{data: Hello World}'
    } else {
        ctx.response.type = 'text'
        ctx.response.body = 'data: Hello World'
    }
}
app.use(main)

// 在端口3000监听
app.listen(3000, () => {
    console.log('项目启动ing')
})