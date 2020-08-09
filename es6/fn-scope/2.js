var b;
function foo(a){
  b=a+bar(a*2)
  console.log(b*3)
}
function bar(a){
  return a-1
}
foo(2)

//规避冲突