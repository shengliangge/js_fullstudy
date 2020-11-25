// 实现 mergePromise
// 最后输出: 1, 2, 3 'done' [1, 2, 3]

const timeout = ms => new Promise((resolve, reject) => {
  setTimeout(() => resolve(), ms);
});

const ajax1 = () => timeout(2000).then(() => {
  console.log('1');
  return 1;
});

const ajax2 = () => timeout(1000).then(() => {
  console.log('2');
  return 2;
});

const ajax3 = () => timeout(2000).then(() => {
  console.log('3');
  return 3;
});
const mergePromise = (ajaxArray) => {
  // console.log('参数', ajaxArray)
  return new Promise((resolve, reject) => {
    let res = [], i = 0
    function walk() {
      let work = ajaxArray[i]
      if (!work) {
        resolve(res)
        return
      }
      i++
      work().then(r => {
        walk()
        res.push(r)
      })
    }
    walk()
  })

};
mergePromise([ajax1, ajax2, ajax3])
  .then((data) => {
    console.log('done');
    console.log(data);
  });
