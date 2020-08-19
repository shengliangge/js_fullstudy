// var num = new Number(123)
// num.abc = 'aaa'
// console.log(num.abc);
// console.log(num);
// console.log(num * 2);
// console.log(num.abc);
// console.log(num);

//num 参与运算又变回了数字，不参与运算还能当对象使用
// 能有属性和方法，同理，字符串和布尔也一样
// 但是null和undefined不行


// var str = 'abdc'
// console.log(str);


// //包装类
// var num=4
// console.log(num.len);

// var arr = [1, 2, 3]
// arr.length = 5
// console.log(arr);


// var str = 'abcd'
// str.length = 2
// // 这是字符串对象，具备length属性
// console.log(str.length);


// 面试题 
var str = 'abc'
str += 1
var test = typeof (str)
if (test.length == 6) {
  test.sign = 'typeOf的返回结果可能String'
}
console.log(test.sign);