// 变量的赋值
// let a = 1;
// let b = 2;
// let c = 3;

// let [a, b, c] = [1, 2, 3]

// let [foo, [[bar], baz]] = [1, [[2], 3]]
// console.log(bar)
// let [foo = true] = [];
// foo // true

// let [x, y = 'b'] = ['a']; // x='a', y='b'
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b' undefined解构赋值默认不成功

// let [x=1,y=x]=[2,3]
// console.log(x,y) 
// let obj = {
//   name: '元隆',
//   age:18
// }
// let { name, age } = obj
// console.log(name, age)


// let{foo:baz}={foo:'aaa',bar:'bbb'}
// //foo是匹配模式，baz才是变量
// console.log(baz)


let obj={
  name:'子城',
  desc:{
    alone:false,
    age:20,
    sanwei:[50,100,120]
  }
}

// 解构：
// let{name,desc:{alone},desc:{age},desc:{sanwei}}=obj
let{name,desc:{alone,age,sanwei:[a,b,c]}}=obj
console.log(name,alone,age,a,b,c)
