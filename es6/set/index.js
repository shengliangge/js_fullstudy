
// const s = new Set()//类数组
// const arr = new Array()
// console.log(arr)
// let arr=[2,3,4,1,7,2]
// console.log(s)
// arr.forEach((x)=>{
// s.add(x)
// s.push(x)
// })
// console.log(s)
// const set =new Set(document.querySelectorAll('div'))
// console.log(set)

//数组去重
// let arr=[2,3,4,7,2,1 ]
// console.log(arr.indexOf(9))
// console.log(arr.includes(2))
// arr.splice(2,1,9,8)
// console.log(arr)
// const a=[...new Set(arr)]
// console.log(a)

//字符串去重
// const a=[...new Set('abdcccwIaddddIII')]
// console.log(a)

// let a=NaN
// let b=NaN
// const s=new Set()
// s.add(a)
// s.add(b)
// console.log(s)


// const s=new Set()
// s.add({},{})
// console.log(s)

// const s =new Set()
// s.add(1).add(2)
// console.log(s)
// console.log(s.delete(1))
// console.log(s.has(2)) //判断是否存在
// s.clear()
// console.log(s)



// ['a','b','c'].forEach((e)=>{
//   console.log(e)
// })


// const s =new Set([1,2,3])
// // s.add(1).add(2)
// console.log(s)
// const array=Array.from(s)
// array.forEach(e=>{
//   console.log(e)
// })


//数组去重

// function dedupe(array){
//   return Array.from(new Set(array))
// }

// console.log(dedupe([1,2,1,34,4]))


//set遍历

// let set = new Set(['red', 'green', 'blue'])
let set =new Set()
set.add({name:'wn'})
set.add({age:18})
set.add({sex:'boy'})
//第一种
// keys()是set结构中返回键名的遍历器
// for (let item of set.keys()) {
//   console.log(item)
// }
//第二种
//values()是set结构中返回的遍历器
// for(let item of set.values()){
//   console.log(item)
// }
// 第三种
// entries()是set 结构中返回键值对的遍历器
// for(let item of CustomElementRegistry())