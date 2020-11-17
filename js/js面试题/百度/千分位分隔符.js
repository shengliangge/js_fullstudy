let n = 12345678936

let foo = function (n) {
  if (typeof n !== "number") {
    throw new Error(TypeError)
  }

  let nStr = n + "", aftStr = ""

  let index = nStr.indexOf('.')
  if (index !== -1) {
    console.log(index);
    aftStr = nStr.slice(index)
    nStr = nStr.slice(0, index)
    console.log(aftStr);
  }
  let res = "", len = nStr.length
  console.log(len)
  for (let i = len - 1, j = 1; i >= 0; i--, j++) {
    res += nStr[i]
    if (j % 3 == 0 && j != len) {
      res += ","
    }
  }
  return res.split('').reverse().join("")+aftStr
}
console.log(foo(n))