// 对象
var mrLei = {
  name: 'LeiLei',
  age: 20,
  sex: 'boy',
  health: 100,
  smoke: function() {
    console.log('I am smoking cool!')
    this.health--
  },
  drink: function() {
    console.log('I am drink')
    this.health++
  }
}
// mrLei.health++
// mrLei.smoke()
// mrLei.drink()
// mrLei.drink()
// console.log(mrLei.health)
// mrLei.boyFriend='zhiHong'





//对象的创建
// 1.var obj={}   对象字面量 | 对象直接量