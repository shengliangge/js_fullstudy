function newFunc(Fn) {
  let o = {}
  o.__proto__ = Fn.prototype    //对象的隐式原型等于Fn的显示原型
  Fn.call(o, arguments)
  return o
}

function Fn(name, age) {
  this.name = name
  this.age = age
}

let fn = new Fn()
fn = {
  name: '',
  age: ''
}