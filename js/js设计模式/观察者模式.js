// 观察者构造函数
class Observer {
  constructor(name, fn = () => { }) {  //给默认值
    this.name = name
    this.fn = fn
  }
}

// 创建两个观察者：
// 需要身份
// 需要技能
const bzr = new Observer('班主任', (state) => { console.log('找你爸',state) })
const xz = new Observer('校长', (state) => { console.log('我是校长',state) })
console.log(bzr)
console.log(xz)
// 被观察者：
// 需要属性：自己的状态
// 队列：记录有谁观察自己，数组
// 方法：能设置自己的状态，当需要改变的时候，要触发这个方法改变状态
// 方法：需要添加观察者
// 方法：删除观察者

// 被观察者构造函数
class Subject {
  constructor(state) {
    this.state = state//记录状态
    this.observers = []//记录观察我的人
  }
  // 设置自己的状态，方法
  setState(val) {
    this.state = val
    this.observers.forEach(item => {
      // 告诉他改变成了什么状态
      item.fn(this.state)
    })
  }
  //添加观察者
  addObservers(obs) {
    //传递观察者进来
    // 如果观察者已经存在，就不在添加
    this.observers = this.observers.filter(item => item !== obs)
    this.observers.push(obs)
  }
  //删除观察者
  delObservers(obs){
    this.observers=this.observers.filter(item=>item!==obs)
  }
}

//创建一个被观察者
const xiaoming = new Subject('学习')
// console.log(xiaoming);
xiaoming.addObservers(bzr)
xiaoming.addObservers(xz)
xiaoming.addObservers(xz)
console.log(xiaoming);

xiaoming.setState('玩游戏')  //改变状态，触发我的观察者的技能
xiaoming.delObservers(xz)
console.log(xiaoming )