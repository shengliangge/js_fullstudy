// 欺骗词法作用域

//eval()
// function foo(str, a) {
//   eval(str) //
//   console.log(b, a)
// }
// var b = 2
// foo('var b=3', 1)

// var obj={
//   a:1,
//   b:2,
//   c:3
// }

// //简单快捷的方式 with
// with(obj){
//   a=100
//   b=200
//   c=300
// }

var o1={
  a:3
}

foo2(o1)