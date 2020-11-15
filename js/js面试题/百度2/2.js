
setTimeout(() => {
  console.log('1');
}, 0)

console.log('2')

const p1 = new Promise((resolve, reject) => {
  console.log('3')
  resolve('4')
})

p1.then((r) => {
  console.log(r)
})

宏任务：   console.log('1');

微任务：    console.log('4')