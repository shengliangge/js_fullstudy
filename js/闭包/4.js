function test() {
  var food = 'apple'
  function a() {
    console.log(food);
  }
  function b() {
    console.log(food);
  }
  return a, b
}

//返回两个函数
function fruit() {
  var food = 'apple'    //food一直被缓存
  var obj = {
    eatFood: function () {
      if (food != '') {
        console.log('I am eating' + food)
        food = ''
      } else {
        console.log('There is nothing')
      }
    },
    pushFood: function (myFood) {
      food = myFood
    }
  }
  return obj
}
var person = fruit()