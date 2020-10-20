let xq = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('元隆相亲');
    resolve('相亲成功，嘿嘿')
  }, 2000)
})
xq.then((res) => {
  console.log(res)
})

function marry() {
  // setTimeout(() => {
  //   console.log('元隆结婚了');
  // }, 1000)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      log('元隆结婚了')
    }, 1000)
  })
}


function baby1() {
  setTimeout(() => {
    console.log('小元隆出生');
  }, 1500)
}
marry()

//Promise pending(进行中) resolved(已成功) reject(失败)