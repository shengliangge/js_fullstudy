//数组去重


// function unique(array) {
  // 1.将数组的每一项拿出来
  // 2.找到不是重复项，放入这个数组中
  // let res = []
  // res[0]=array[0]
  // for (let i = 0; i < array.length; i++) {
  //   console.log(i)
  //   for (let j = 0, resLen = res.length; j < resLen; j++) {
  //     console.log(j)
  //     if (array[i] === res[j]) {
  //       break;
  //     }
  //     //如果array[i]是唯一的，那么执行完循环，就让 j=resLen
  //     if (j === resLen-1) {
  //     res.push(array[i])
  //     }
  //   }
  //   return res;
  // }
  let array = [1,1,'1','1'];
  function unique(array) {
    // res用来存储结果
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        for (let j = 0, resLen = res.length; j < resLen; j++ ) {
            if (array[i] === res[j]) {
                break;
            }
        }
        // 如果array[i]是唯一的，那么执行完循环，j等于resLen
        if (j === resLen) {
            res.push(array[i])
        }
    }
    return res;
}
  // 方法一：
  //   let arr = [];
  //   for (let i = 0; i < array.length-1; i++) {
  //     // let temp = array[0];
  //     for (let j = array.length-1; j >i; j--) {
  //       if (array[i] === array[j]) {
  //         array.splice(j, 1)
  //       }
  //     }
  //     console.log(array)
  //   }
  // return array
// }

console.log(unique(array))