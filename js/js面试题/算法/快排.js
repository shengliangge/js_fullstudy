// var quickSort = function(arr) {  
//   if (arr.length <= 1) {return arr; }//判断数组，一个长度直接返回 
//    var pivotIndex = Math.floor(arr.length / 2); 
//    var pivot = arr.splice(pivotIndex, 1)[0];//找出基准元素 
//    var left = [];   
//    var right = [];    
//    for (var i = 0; i < arr.length; i++){
// //循环把元素分别放入左边和右边数组        
//    if (arr[i] < pivot) {  
//      left.push(arr[i]);    
//    } else {    
//      right.push(arr[i]);     
//    }  
//  }    
//  return quickSort(left).concat([pivot], quickSort(right));

// };

let arr = [5, 9, 2, 45, 3, 10]

var quickSort = function (arr) {
  if (arr.length <= 1) { return arr; }
  var pivot = arr[0];
  var left = [];
  var right = [];
  var mid = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      mid.push(arr[i]);
    }
  }
  return quickSort(left).concat(mid, quickSort(right));
};



var mySort = function (arr) {
  if (arr.length <= 1) return arr
  let temp = arr[0]
  let left = []
  let mid = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < temp) {
      left.push(arr[i])
    } else if (arr[i] > temp) {
      right.push(arr[i])
    } else {
      mid.push(arr[i])
    }
  }
  return mySort(left).concat(mid, mySort(right))
}

console.log(mySort(arr))