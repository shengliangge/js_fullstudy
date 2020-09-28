const obj = {
  a: 1,
  b: 2,
  c: 3
}



//区别：
// 1. for ... in 循环返回的都是数据结构的键值名
// 遍历数组返回的是数组的下标
// 不仅可以遍历数字键名，还会遍历原型上的值和手动添加的其他键
// 特别情况下，遍历的顺序不会按照对象的顺序进行

// for of
// 不能遍历对象
// 返回的是数组元素

// 原生具备 Iterator 接口的数据结构如下。

// Array
// Map
// Set
// String
// TypedArray
// 函数的 arguments 对象
// NodeList 对象

// 对象中的常规属性和排序属性
function Foo() {
  this[100] = 'test-100'
  this[1] = 'test-1'

  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this['C'] = 'bar-C'
  this['b'] = 'bar-B'
  this['A'] = 'bar-A'
}

let bar = new Foo()
for (let key in bar) {
  console.log(`index:${key} value:${bar[key]}`);
}
// 对象中的数字属性会被优先遍历，且按照顺序遍历

//ECMAScript 规范中定义了【数字属性应该按照索引值的大小升序排列、字符串属性根据创建时的顺序升序排列】
// 数字属性称为排序属性，字符串属性称为常规属性

