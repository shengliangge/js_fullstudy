let arr = [2, 5, 9, 8], target = 10

const fn = function (arr, target) {
  let res = []
  let map = new Map()
  for (let i = 0; i < arr.length; i++) {
    let cur = target - arr[i]
    if (map.has(arr[i])) {
      res.push(map.get(arr[i]))
      res.push(i)
    }
    map.set(cur, i)
  }
  // console.log(map)
  return res
}
console.log(fn(arr, target))