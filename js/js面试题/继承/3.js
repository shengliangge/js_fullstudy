function SuperType() {
  this.property = true
}
SuperType.prototype.getSuperValue = function () {
  return this.property
}
function SubType() {
  this.subproperty = false
}

// 继承，用SuperType的实例来重写SubType的原型对象
SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function () {
  return this.subproperty
}

let instance = new SubType()
console.log(instance.getSuperValue());
