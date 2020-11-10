//实现emmiter订阅发布者模式
class Emit {
  constructor() {
    this.message = {}
  }
  on(type, fn) {   //接收类型和函数
    //添加订阅
    if (!this.message[type]) {  //如果一开始不存在
      this.message[type] = []   //定义为数组
    }
    this.message[type].push([fn])   //将订阅的push进去
  }
  off(type, fn) {
    if (!fn) {   //如果没有传fn，那就是整体删除
      delete this.message[type]
    } else {   //删除具体的函数
      //判断是否订阅过
      if (!this.message[type]) return
      this.message[type] = this.message[type].filter((item) => {
        item !== fn
      })
    }
  }     //删除订阅或订阅的函数
  emit(type, ...args) {

    if (!this.message[type]) return  //如果不存在
    this.message[type].forEach((item) => {   //执行所有订阅的函数
      item(...args)
    })
  }    //触发
}
// 调用代码
let em = new Emit();
em.on('a', (param) => { console.log('a: ' + param) });
em.on('a', (param) => { console.log('a: ' + param) });
console.log(em)
em.emit('a', '我的名字');
// 控制台输出:  a: 我的名字
