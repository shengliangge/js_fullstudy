let http = require('http')
let EventEmitter = require('events')
let context = require('./context')  // 上下文
let request = require('./request')
let response = require('./response')
let Stream = require('stream')

class Koa extends EventEmitter {
  constructor() {
    super()
    // this.fn
    this.middlewares = []
    this.context = context
    this.request = request
    this.response = response
  }

  use (fn) {
    // this.fn = fn  // 用户使用use方法的时候，把回调函数赋值给this.fn
    this.middlewares.push(fn)
  }

  compose(middlewares, ctx) {
    function dispatch(index) {
      if (index === middlewares.length) return
      let middleware = middlewares[index]
      middleware(ctx, () => dispatch(index + 1))
    }
    dispatch(0)
  }

  createContext(req, res) { // 核心方法，创建ctx
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)
    // 交叉赋值
    ctx.req = request.req = response.req = req
    ctx.res = request.res = response.res = res
    request.ctx = response.ctx = ctx
    request.response = response
    response.request = request
    return ctx
  }

  handleRequest(req, res) {
    res.statusCode = 404
    let ctx = this.createContext(req, res)
    // this.fn(ctx)
    this.compose(this.middlewares, ctx)
    if (typeof ctx.body == 'object') {
      res.setHeader('Content-Type', 'application/json;charset=utf8')
      res.end(JSON.stringify(ctx.body))
    } else if (ctx.body instanceof Stream) {
      ctx.body.pipe(res)
    } else if (typeof ctx.body == 'string' || Buffer.isBuffer(ctx.body)) {
      res.setHeader('Content-Type', 'text/html;charset=utf8')
      res.end(ctx.body)
    } else {
      res.end('Not found')
    }
  }

  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}

module.exports = Koa
