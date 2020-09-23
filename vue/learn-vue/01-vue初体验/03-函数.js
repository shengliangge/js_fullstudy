const nums = [10, 20, 111, 222, 44, 40, 50]

// 1、filter函数的使用
// filter中的回调函数有一个要求：必须返回一个boolean值
// true：当返回true时，函数内部会自动将这次回调的n加入新的数组中
// false：当返回false时，函数内部会过滤掉这次的n
const newNum = nums.filter((n) => {
  return n < 100
})
console.log(newNum);

// 2、map函数的使用

let new2Num = newNum.map((n) => {
  return n * 2
})
console.log(new2Num);

// 3、reduce函数的使用
// reduce作用是对数组中所有的内容进行汇总
let new3Num = newNum.reduce((pre, n) => {
  return pre + n
}, 0)
console.log(new3Num);
