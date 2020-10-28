cookie 和localStore sessionStorage 都属于前端存储
如果cookie里面有内容，自动把cookie当作请求头传输给后端
cookie存什么东西，怎么存，哪些属性
domain： 域 .baidu.com
path:  路径 /
expires   过期时间
httpOnly: 只在http环境下传输， js无法操作（减少xss攻击）
secure  https环境下传输
sameSite Strict(严格模式，只有在baidu.com请求baidu.com才会传输baidu.com的cookie)/Node/lax(有时候可以拿到，有时候不能拿到)   (跨站请求伪造)
