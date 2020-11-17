class Observers {
  constructor() {
    this.message = {}
  }
  on(type, fn) {   //注册
    if (!this.message[type]) {   //如果不存在
      this.message[type] = []
    }
    this.message[type].push([fn])   //添加
  }
  off(type, fn) { //删除
    if (!fn) {  //直接删除type
      delete this.message[type]
    } else {    //删除具体的fn
      if (!this.message[type]) return//不存在
      //存在
      this.message[type] = this.message[type].filter(item => item != fn)
    }
  }
  emit(type) {
    if (!this.message[type]) return
    this.message[type].forEach(item => {
      item()
    })
  }
}