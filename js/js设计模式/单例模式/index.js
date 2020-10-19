// 保证一个类只有一个实例
// 保证一个类自由一个实例，并提供一个访问他的全局访问点3
class SingleDog {
  show() {
    console.log('我是一个单例对象')
  }
  static getInstance() {
    // 判断是否被new过
    if (!SingleDog.instance) {
      SingleDog.instance = new SingleDog()
    }
    return SingleDog.instance
  }
}
const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()
console.log(s1 === s2);

s1 === s2


