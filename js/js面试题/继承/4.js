function SuperType() {
  this.colors = ['red', 'green', 'blue']
}
// 构造函数继承、经典继承
function SubType() {
  SuperType.call(this)
}

let instance1 = new SubType()
instance1.colors.push('pink')
console.log(instance1.colors)

let instance2=new SubType()
console.log(instance2.colors);
