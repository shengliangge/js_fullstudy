// 实现Storage，使得该对象为单例，基于localStorage进行封装，
// 实现方法setItem(key,value)和getItem(key)


// 第一种方式
// class Storage {
//   setItem(key, value) {
//     return localStorage.setItem(key, value)
//   }
//   getItem(key) {
//     return localStorage.getItem(key)
//   }
//   static getInstance() {
//     // 判断是否被new过
//     if (!Storage.instance) {
//       Storage.instance = new Storage()
//     }
//     return Storage.instance
//   }
// }

// const storage1 = Storage.getInstance()
// const storage2 = Storage.getInstance()

// console.log(storage1===storage2);


// 第二种方式
class Storage {
  setItem(key, value) {
    return localStorage.setItem(key, value)
  }
  getItem(key) {
    return localStorage.getItem(key)
  }
  static getInstance() {
    // 判断是否被new过
    if (!Storage.instance) {
      Storage.instance = new Storage()
    }
    return Storage.instance
  }
}

const storage1 = Storage.getInstance()
const storage2 = Storage.getInstance()

console.log(storage1===storage2);