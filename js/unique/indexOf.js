let array = [1, 2, 1, '1', '1']

function unique(array) {
  let arr=[]
  // arr[0] = array[0]
  for (let i = 0; i < array.length; i++) {
    // if (arr.indexOf(array[i]) === -1) {
      if(!arr.includes(array[i])){
      arr.push(array[i])
    }
  }
  return arr
}
console.log(unique(array))