// 入口文件
import { add } from './math.js'
console.log(add(4 + 5))


script start
async1 start
async2
promise1
script end
sync1 end
promise2
setTimeout

wei promise2
hong script1 end setTimeout

实现一个Object create

function create(o) {
  let obj = {}
  Object.setPrototypeOf(obj, o)
  return obj
}