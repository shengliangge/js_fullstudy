// 一个问题，匹配多个解决方案，不一定用到哪一个
// 而且有可能还会随时增加多个方案
// 例如购物车：接收两个参数，价格，折扣种类

// 以闭包保存方案
const foo = (function () {
  const sale = {
    "100_10": function (price) {
      return price -= 10
    },
    "200_25": function (price) {
      return price -= 25
    },
    "80%": function (price) {
      return price *= 0.8
    }
  }
  function foo(price, type) {
    if (!sale[type]) return //没有这个折扣
    return sale[type](price)   //有就执行
  }
  foo.add = function (type, fn) {
    //先判断是否有
    if (sale[type]) return '已经存在'
    sale[type] = fn
    return '添加成功'
  }
  foo.del=function(type){
    // 先判断有没有
    if(sale[type]){
      delete sale[type]
    }
  }
  return foo
})()