function deepClone(obj) {
  if(obj==null) return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (typeof obj !== 'object') return obj
  let cloneObj = {}
  for (let key in obj) {
    if (!cloneObj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key])
    }
  }
  return cloneObj
}

let a = {
  name: '余淑豪',
  age:null,
  arr: [1, 2, 3, 4]
}
let b = deepClone(a)
b.arr[2] = 999
console.log(a)
console.log(b)