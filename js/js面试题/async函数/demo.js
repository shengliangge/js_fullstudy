function getContent() {
  return 1
}
async function getAsyncConstant() {
  return 1
}
async function getPromise() {
  return new Promise((resole, reject) => {
    resole(1)
  })
}
async function test() {
  let a = 2
  let c = 1
  await getContent()
  let d = 3
  await getPromise()
  let e = 4
  await getAsyncConstant()
  return 2
}