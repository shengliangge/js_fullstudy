// Person.prototype--原型
// Person.prototype={} 函数被定义出来，就天生具备的属性
Person.prototype.name = 'jiajun'
Person.prototype.say=function(){
  console.log('giao');
}
function Person() {
  // this.name = 'wn'
}
var person = new Person()
console.log(person.name);  //从原型上继承来的
person.say()
var person1=new Person()
console.log('2',person1.name);