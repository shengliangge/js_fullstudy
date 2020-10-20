let http = require('http')
let EventEmitter = require('events')
let context = require('./context')    //上下文
let request = require('./request')
let response = require('./response')

class Koa extends EventEmitter {
  constructor() {
    super()
    this.fn
    this.context = context
    this.request = request
    this.response = response
  }
  createContext(req, res) {   //核心方法，创建ctx
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)
    // 交叉赋值

  }
  handleRequest(req, res) {
    let ctx = this.createContext(req, res)
    this.fn(ctx)
    res.end(ctx.body)
  }
  use(fn) {
    this.fn = fn    //用户使用use方法的时候，把回调函数赋值给this.fn
  }
  listen(...args) {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}
module.exports = Koa