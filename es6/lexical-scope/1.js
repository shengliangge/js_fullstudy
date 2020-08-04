function foo(a) {
  var b = a + 2
  function bar(c){
    console.log(a,b,c)
  }
}
//bar(5)
//foo(2)
// 全局作用域下面只有一个foo
// foo作用域下面有啊a，b，bar