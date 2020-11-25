function color() {
  let num = parseInt(Math.random() * 256)
  let colorStr=num.toString(16)
  if(colorStr.length==1){
    colorStr='0'+colorStr
  }
  return colorStr
}
let res = ''
for (let i = 0; i < 3; i++) {
  res += color()
}
console.log(res)