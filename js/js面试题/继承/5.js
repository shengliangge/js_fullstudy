function SuperType(name) {
  this.name = name
  this.colors = ['red', 'green', 'blue']
}
SuperType.prototype.sayName = function () {
  console.log(this.name);

}
function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}
SubType.prototype = new SuperType()   // 寄生组合继承：Object.create(SuperType.prototype)
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function () {
  console.log(this.age);
}

let instance1 = new SubType('yuanlong', 20)
instance1.colors.push('pink')
console.log(instance1.colors);
instance1.sayAge()