// 常见的其他数据类型
let notSure: any = 4

// unknown
let value: any;
value = true
value = 1
value = 'hello'

const list: string[] = ['s', 'b']
const list1: Array<number> = [1, 2, 3] //范型
// 元祖
const list2: (string | number)[] = ['1', 2]
const list3: Array<any> = [1, '2', 3] //范型
// 对象
let obj:object