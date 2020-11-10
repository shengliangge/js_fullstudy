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
  return function foo(price, type) {
    if (!sale[type]) return //没有这个折扣
    sale[type](price)   //有就执行
  }
})()