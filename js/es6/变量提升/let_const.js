// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function() {
//         cosole.log(i);

//     };
//     a[i]();
// }
// // a[6]();

// for (let i = 0; i < 3; i++) { //父级作用域
//     i = 'abc'; //子作用域
//     console.log(i);
// }



// 暂时性死区
// var tmp = 123;
// if (true) {
//     tem = 'abc';
//     let tmp;
// }

// let a = 'a'
// let a = 'aa'
// console.log(a)


if (true) {
    console.log(age)
    const age = 18;
}