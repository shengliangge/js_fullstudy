// function greeter(person: string) {
//   return "hello" + person
// }
// const user = "wn"


// 类型
// let isLoading = false
// isLoading=123    不能更改，类型不一样

// let num = 5
// num = 8
// let book: string = 'typeScript'


// 空值
// function warnUser(): void {

// }
// const a: void = undefined    //特例
// let aa: undefined = undefined

// let sym1 = Symbol('key1')

// bigint
// 需要将数值转成BigInt计算，不会超精度,以下为js代码
const big_max = BigInt(Number.MAX_SAFE_INTEGER);
//这里n是bigint的标志,且bigint和number是完全不同的两个类型
//ts中使用bigint,不支持1n,2n,但是可以BigInt(1),BigInt(2)代替
const max1 = big_max + 1n
const max2 = big_max + 2n
console.log(max1);
console.log(max2);

console.log(max1 == max2);
