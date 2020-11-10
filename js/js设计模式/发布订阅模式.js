class Observers {
  constructor() {
    this.message = {}  //消息队列
  }
  // 1.向消息队列里面添加内容
  on(type, fn) {
    // type:看着的行为
    // fn：发生的事情
    // 然后记录在消息队列中
    console.log('触发', fn);
    // 判断是否已经被注册过
    // 如果没有，就赋值，赋值为数组
    // 如果有，直接想数组里面添加
    if (!this.message[type]) {
      this.message[type] = []
    }
    //直接push
    this.message[type].push([fn])
  }
  // 2.删除消息队列里面的内容
  off(type, fn) {
    if (!fn) { //fn参数不存在，直接把事件取消
      delete this.message[type]
    } else {    //存在，删除具体的fn
      // 判断是否真的订阅过
      if (!this.message[type]) return
      this.message[type] = this.message[type].filter(item => item != fn)
    }
  }
  // 3. 触发消息队列
  trigger(type) {
    // 先判断是否订阅过
    if (!this.message[type]) return
    // 如果订阅过，触发里面的每一个函数
    this.message[type].forEach(item => {
      item()
    });
  }
}

const ob1 = new Observers()


ob1.on('abc', handA)
ob1.on('aCCC', handB)
console.log(ob1)
function handA() {
  console.log(A);
}
function handB() {
  console.log(B);
}
function handB() {
  console.log(B);
}