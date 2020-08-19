// 使用Node构建一个web服务器
// 在Node中提供了一个核心模块：http
// http这个模块的职责就是帮你创建编写服务器的

// 1. 加载http核心模块
var http = require('http')
// 2. 使用http.createServer()方法创建一个web服务器
// 返回一个Server实例
var server = http.createServer()

// 3. 服务器要干嘛？
// 提供服务 对数据的服务
// 发请求
// 接受请求
// 处理请求
// 给反馈(发送响应)


// request请求时间处理函数，需要接受两个参数：
// Request请求对象
// 请求对象可以用来获取客户端的一些请求信息，例如请求路径
// Response响应对象
// 响应可以用来给客户端发送相应消息

// 当客户端请求过来，就会自动触发服务器的request请求事件，然后执行回调函数
server.on('request', function (request,response) {
  console.log('收到客户端的请求，请求路径是：',request.url);
  // response对象有一个方法：write可以用来给客户端发送相应数据
  // write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待
  response.write('hello')
  response.write('node js')
  response.end()
})
// 4.绑定端口号，启动服务器
server.listen(3000, function () {
  console.log('服务器启动成功了，可以通过3000端口访问服务');
})
