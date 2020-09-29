// function getConstant() {
//   return 1
// }
// async function getAsyncConstant() {
//   return 1
// }
// async function getPromise() {
//   return new Promise((resolve, reject) => {
//     resolve(1)
//   })
// }
// async function test() {
//   let a = 2
//   let c = 1
//   await getConstant()
//   let d = 3
//   await getPromise()
//   let e = 4
//   await getAsyncConstant()
//   return 2
// }


function getConstant() {
  return 1
}
function getAsyncConstant() {
  return Promise.resolve().then(function() {
    return 1
  })
}
function getPromise() {
  return Promise.resolve().then(function() {
    return new Promise((resolve, reject) => {
      resolve(1)
    })
  })
}
function test() {
  return Promise.resolve().then(function() {
    let a = 2
    let c = 1
    return getConstant()
  }).then(function() {
    let d = 3
    return getPromise()
  }).then(function() {
    let e = 4
    return getAsyncConstant()
  }).then(function() {
    return 2
  })
}
