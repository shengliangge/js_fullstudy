let arr = [145, 248, 31, 45, 9, 11, 145, 300];
//冒泡排序
const foo = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j - 1]) { //右边的小于左边的
        // let temp = arr[j]
        // arr[j] = arr[j - 1]
        // arr[j - 1] = temp
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
    }
  }
  return arr
}
console.log(foo(arr))

// 空间复制度：O(1)
// 时间复杂度：O(n2) 最好的情况是O(n)
// 稳定
