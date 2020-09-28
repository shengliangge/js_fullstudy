function getData(){
  setTimeout(()=>{
    return 'JSON'
  },500)
}

// 需要使用上面的异步函数的函数签名啊加上async，声明这个一个异步函数
async function testAsync(){
  //在异步函数前面加上await，函数执行就会等待await声明的异步函数执行完毕，再给
  try{
    await getData()
  }catch(error){

  }
  // ... 剩下的代码
}

// 1.函数声明式、函数表达式、对象方法、class方法、箭头函数都可以声明async
// 2.任何一个await语句的后面的Promise对象变为reject，那么整个async函数会中断
// 3.async函数返回的是Promise对象，必须等到所有的await命令后面的Promise对象执行完，才会发生状态改变，