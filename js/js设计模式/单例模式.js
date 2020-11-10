
const Person = (function () {
  function Person(name, age) {
    this.name = name
    this.age = age
  }
  let instance = null
  return function (...arg) {
    if (!instance) instance = new Person(...arg)
    return instance
  }
})()


let p1 = Person('cccc',18)
let p2 = Person()
console.log(p1);
console.log(p2);
console.log(p1 === p2);



