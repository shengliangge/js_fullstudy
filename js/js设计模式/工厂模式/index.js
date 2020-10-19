// const yihan = {
//   name: '逸涵',
//   age: 18,
//   career: 'coder'
// }
// const hufei = {
//   name: '胡飞',
//   age: 19,
//   career: 'manager'
// }

function User(name, age, career, work) {
  this.name = name
  this.age = age
  this.career = career
  this.work = work
}
// const user = new User(name, age, career)

// 变， 不变
// function Coder(name, age) {
//   this.name = name
//   this.age = age
//   this.career = 'coder'
//   this.work = ['写代码', '写系统', '改bug']
// }

// function ProductManager(name, age) {
//   this.name = name
//   this.age = age
//   this.career = 'product manager'
//   this.work = ['订会议室', '写ppt', '催更']
// }

function Factory(name, age, career) {
  let work
  switch(career) {
    case 'coder':
      work = ['写代码', '写系统', '改bug']
      break
    case 'product manager':
      work = ['订会议室', '写ppt', '催更']
      break
    case 'boss':
      work = ['喝茶', '看报', '见客户']
      break
    case 'xxx':
      // ...
  }
  return new User(name, age, career, work)
}