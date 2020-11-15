自我介绍

单链表
图

DNS解析

HTTPS

HTTP

307 304
2xx
4xx
5xx

vue父子组件通信

实现一个eventBus

class EventBus {
  constructor() {
    this.msgCenter = {};
  }
  emit(type, data) {
    if (this.msgCenter[type] == undefined) {
      return;
    } else {
      for (let item of this.msgCenter[type]) {
        item.call(this, data);
      }
    }
  };
  on(type, fn) {
    if (this.msgCenter[type] == undefined) {
      this.msgCenter[type] = [];
    }
    this.msgCenter.push(fn);
  }
}




settimeout(fn1)

new Promise(fn2).then(fn3)

async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2 start');
  return new Promise((resolve, reject) => {
    resolve();
    console.log('async2 promise');
  })
}
console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0);
async1();
new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
}).then(function () {
  console.log('promise3');
});
console.log('script end');
