const mod = require('./a.js');
console.log(mod)
mod.inc();
console.log(mod)
// //导入的值就是把导出的值复制（拷贝）一份过来
// // 2:如果一个模块被require了两次，他会把上一次的结果缓存起来
// console.log(mod.c, mod.obj)       //3
const ccc = require('./a');
console.log(ccc)   