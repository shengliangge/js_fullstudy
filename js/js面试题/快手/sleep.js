function sleep(t){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },t)
  })
}
await sleep(1000)