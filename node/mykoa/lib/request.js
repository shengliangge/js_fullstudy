let url = require('url')
let request = {
  get url() { // ctx.request.url 就可以取值了
    return this.req.url
  },
  get path() { // ctx.request.path
    return url.parse(this.req.url).pathname
  },
  get query() {
    return url.parse(this.req.url).query
  }
}

module.exports = request
