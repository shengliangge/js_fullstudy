// js函数解析url成为对象
let url = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&ch=&tn=baidu&bar=&wd=url&oq=%25E5%25A4%258D%25E6%259D%2582%25E7%259A%2584url&rsv_pq=cea248440000f2c0&rsv_t=dfbaY%2BwnxdlIlX0GsWCjf21H6BRi57QFkFg1BaIddAxEABbIEOzcsup%2FtQQ&rqlang=cn&rsv_enter=1&rsv_btype=t&rsv_dl=tb&inputT=633"
const foo = function (url) {
  let res = {}
  let index = url.indexOf("?")
  let newUrl = url.slice(index + 1)
  let urlArr = newUrl.split("&")
  for (let item of urlArr) {
    let i = item.indexOf("=")
    let key = item.slice(0, i)
    let val = item.slice(i + 1)
    res[key]=val
  }
  return res
}
console.log(foo(url))