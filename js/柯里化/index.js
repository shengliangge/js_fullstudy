function sun(a, b, c) {
  console.log(a + b + c);
}

function curry(fn) {

}

function fn(a, b, c, d, e) {
  console.log(a, b, c, d, e)
}
let _fn = curry(fn)
_fn(1, 2, 3, 4, 5)
_fn(1)(2)(3)(4)(5)
_fn(1, 2)(3, 4)(5)

// 降低函数的通用性，提高函数的适用性

checkByRegExp(/^1\d{10}$/, '17826864511')
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, '652501825@qq.com')