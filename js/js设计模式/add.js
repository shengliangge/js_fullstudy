function add() {
  let _args = [...arguments]
  function fn() {
    _args.push(...arguments)
    return fn
  }
  fn.toString = function () {
    return _args.reduce((sum, cur) => {
     return sum + cur
    },0)
  }
  return fn
}
console.log(add(5)(6,8)(6).toString())