//选择排序
let arr = [145, 248, 31, 45, 9, 11, 148, 300];
const mySort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i]
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (min > arr[j]) {
        let temp = arr[j]
        arr[j] = min
        min = temp
      }
      console.log(arr)
    }
    arr[i] = min
  }
  return arr;
}
console.log(mySort(arr));
// 空间复杂度o（1）
// 时间复杂度o（n2）
// 不稳定