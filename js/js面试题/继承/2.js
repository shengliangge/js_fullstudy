function Person() {

}
var p1 = new Person()
console.log(p1.constructor);
Person.prototype = {
  name: '小花',
  // 第三问：constructor：Person   但是会可枚举，所以做一个数据劫持:
}
// 第三问：
// Object.defineProperty(Person.prototype,'constructor',{
//   enumerable:false,
//   value:Person
// })

var p2 = new Person()
console.log(p2.constructor);



