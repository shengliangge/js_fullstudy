cookie    localStorage    sessionStorage   indexedDB
可设置
过期时间     需手动清除        关闭页面消失      需手动清除

  4k          5M               5M            无限

每次携带在
header中      不参与            不参与         不参与
影响请求的性能


cookie：
  value: 保存用户登录态，值应该加密
  http-only: 不能通过js访问cookie，防止xss攻击
  secure: 只在传输协议为https的请求中携带
  same-site: 规定浏览器不能再跨域请求中携带cookie，减少CSRF攻击



# 什么是 Service Worker
运行在浏览器背后的独立线程，一般用来实现缓存的功能，传输协议必须是HTTPS



