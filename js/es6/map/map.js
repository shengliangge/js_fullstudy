// let obj = {
//   name: '明国',
//   age: 18,
//   sex: 'man'
// }
// obj.height='175cm'
// const m = new Map()
// m.set(obj,'content')
// console.log(m)
// console.log(m.get(obj))
// console.log(m.has(obj))

//使用数组作为参数
// const map = new Map([
//   ['name', '翔翔'],
//   ['age', '20']
// ])
// 

// const items=[
//   ['name', '翔翔'],
//   ['age', '20']
// ]
// const set=new Set([
//   ['foo',1],
//   ['bar',2]
// ])
//   console.log(set)
//   const map=new Map(set)
//   console.log(map)
// items.forEach(([key,value])=>{
//   // console.log(key)
//   // console.log(value)
//   map.set(key,value)
//   console.log(map)
// })

// let k1='a';
// let k2='a';
// const map=new Map()
// map.set(-0,111).set(+0,222)
// console.log(map)
// console.log(-0===+0) // 0, -0 默认就是一个建

// const map=new Map()
// map.set(undefined,1)
// map.set(null,2)
// console.log(map)
// const map = new Map()
// map.set(NaN, 5)   //NaN默认就是一个键
// map.set(NaN, 6)
// console.log(map)


// map 的遍历方法
const map=new Map([
  ['foo','no'],
  ['bar','yes']
])
// //keys()返回键名的遍历器
// for(let key of map.keys()){
//   console.log(key)
// }
// // values()返回键值的遍历器
// for(let val of map.values()){
//   console.log(val)
// }
// // entries()返回成员的遍历器
// for(let key of map.entries()){
//   console.log(key)
// }

//map forEach 方法
// map.forEach((e)=>{
//   console.log(e)
// })

//map 转换成数组
//解构
const arr=[...map]
console.log(arr)
