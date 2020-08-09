// let patt1 = new RegExp("hello")
// let patt2 = /world/

// //正则的使用 test()

// let pat = /my/

// let str = "this is my code ..."
// console.log(pat.test(str))

// let pat = /hello/
// let msg = 'oh my world'
// console.log(pat.exec(msg))

//正则表达式的类型

//不区分大小写
// let str = 'visit NanChang'
// //加i不区分大小写
// let pat = /nanchang/i
// console.log(pat.test(str))


// //字符串的正则
// let str = "Visit W3School W3School"
// // search  字符串查找
// console.log(str.search(/W3School/))

// let str = '1 plus 2 equl 3333 '
// console.log(str.match(/\d+/g))

// match()//字符串匹配

// let str = "Hello pp! oh I am wn wn"
// // console.log(str.replace(/wn/, "snail"))


// console.log(str.split(/\s+/))


// 正则的写法
// [abc]查找方括号之间的任何字符
// let str = "Is this all there is?"
// let pat = /[a-h]/g
// console.log(str.match(pat))
//[^abc] 查找任何不在方括号之间的字符

// let str ="hEllo pp li^ke j[inlo^^nG "
// let pat =/[A-z]/g
// console.log(str.match(pat))

// let str='hello ziChen! How are you?'
// let pat=/hello|you/g
// console.log(str.match(pat))

// let str="That's h_ot!"
// // let pat = /h.t/g
// let pat=/\W/g
// console.log(str.match(pat))

// let str = 'moon'
// // let pat=/\b/g
// console.log(str.match(pat))

// let str = "hello yangyang! hello world"
// // let pat =/h+/g
// let pat =/lo*/g
// console.log(str.match(pat))

//手机号正则
// let tel ='13826645099'
// let pat=/^1[3-9]\d{9}$/
// console.log(pat.test(tel))
let e='1234qq.com'
let email=/(\S)+[@]{1}(\S)+[.]{1}(\w)+/
console.log(email.test(e))