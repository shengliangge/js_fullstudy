// 题目：
// 版本号排序
// 输入：
// ['1.1.1.1.1.1', '6', '5.4.3', '2.3.1', '2.3.1.1']
// 返回从大到小的版本号数组
function compareVersion(v1, v2) {
  let v1Arr = v1.split('.'), v2Arr = v2.split('.')
  let len = Math.min(v1Arr.length, v2.v2Arr.length);

  for (let i = 0; i < len; i++) {
    let v1Num = Number(v1Arr[i]), v2Num = Number(v2Arr[i])
    if(v1Num>v2Num) return 1
    else if(v1Num<v2Num) return -1
  }
  return v1Arr.length==v2Arr.length?0:(v1Arr.length>v2Arr.length?1:-1);
}
console.log(compareVersion(['1.1.1.1.1.1'],['2.3.1.1']));