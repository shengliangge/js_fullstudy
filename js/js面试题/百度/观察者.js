class Observers {
  constructor(name, fn = () => { }) {  //观察者名字和技能
    this.name = name
    this.fn = fn
  }
}
class Sub {
  constructor(state) {
    this.state = state  //状态
    this.observers = []  //观察者列表
  }
  add(obs) {
    this.observers = this.observers.filter(item => {
      item != obs
    })
    this.observers.push(obs)
  }
  del(obs) {
    this.observers.filter(item => {
      item != obs
    })
  }
  setState(val) {
    this.state = val  //改变状态
    this.observers.forEach(item => {
      item.fn(this.state)
    })
  }
}