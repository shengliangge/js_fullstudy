//实现一个函数执行， 出来的结果都是累加的


// 不依赖外部变量，实现累加效果
function add() {
  var num = 0;
  function a() {
    console.log(++num);
  }
  return a
}
var result = add()
result()
result()
result()
result()


