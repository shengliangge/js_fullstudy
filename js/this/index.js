// function identify(context){
//   return this.name.toUpperCase()
// }
// function speak(){
//   let greeting="Hello,I'm"+identify.call(this)
//   console.log(greeting);
// }
// let me={
//   name:'wn'
// }
// speak(me)
// function foo() {
//   console.log(this.a);
// }

// var a = 2;
// (function () {
//   foo(0)//严格模式下的foo的调用，与位置无关
// })()


var obj2 = {
  a: 3,
  foo: foo
}
var obj1 = {
  a: 2,
  obj2: obj2
}
obj1.obj2.foo()//foo此刻被obj所拥有


function foo() {
  console.log(this.a);  //obj.a
}
var obj ={
  a:2,
  foo:foo()
}
var bar=obj.foo
console.log(bar)