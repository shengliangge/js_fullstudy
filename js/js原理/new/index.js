function Person(name) {
  this.name = name
}
let p = new Person('Tom')

//1.  p.__proto__ = ?  Person.prototype

//2.  Person.__proto__ = ?  Function.prototype   Function也是一种构造函数

var foo = {}

var F = function () { }
Object.prototype.a = 'value a'
Function.prototype.b = 'value b'

3.
// console.log(foo.a);    =>value a
// console.log(foo.b);    =>undefine
// console.log(F.a);      =>value a
// console.log(F.b);      =>value b


function Person(name) {
  this.name = name
}
let p = new Person('Tom')
// p = { name: 'Tom' }

// new的实现原理
function myNew(fun) {
  return function () {
    let obj = {
      __proto__: fun.prototype
    }
    fun.call(obj,...arguments)
    return obj
  }
}