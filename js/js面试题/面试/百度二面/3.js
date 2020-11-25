/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // if (nums.length < 1) return
  let arr = mySort(nums)
  // let res = arr[arr.length - k]
  // return res
};

var mySort = function (arr) {
  if (arr.length <= 1) return arr
  let left = [], right = [], mid = [], temp = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < temp) {
      left.push(arr[i])
    } else if (arr[i] > temp) {
      right.push(arr[i])
    } else {
      mid.push(arr[i])
    }
  }
  console.log(left)
  console.log(mid)
  console.log(right)

  return mySort(left).concat(mid, mySort(right))
}

// findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
console.log(mySort([3,2,3,1,2,4,5,5,6]))

