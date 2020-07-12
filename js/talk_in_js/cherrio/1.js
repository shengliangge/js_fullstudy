  // 对象是由方法和属性构成
  //JSON Object 对象字面量 literal object
  var duck = {
          type: '煌上煌',
          yz: 99,
          ducksing: function() {
              console.log("嘎嘎嘎");
          }
      }
      // 数据类型 数值类型number 字符串 string 布尔值 boolean null unbefined
  var cherrio = []; //标识符
  // 变量的类型是由值决定的
  // 基础类型不包括array array只是object的子类型
  var jiajun = {
      name: '家俊',
      ducksing: function() {
          console.log("嘎嘎嘎");
      }
  }
  var xyl = {
      name: '元隆',
      //   ducksing: '同名属性'
  }
  const xgg = [jiajun, xyl];
  for (var i = 0; i < 999; i++) {
      cherrio.push(duck);
  }
  //   可能会有同名属性，应该判断ducksing的类型
  for (var i = 0; i < xgg.length; i++) {
      if (typeof xgg[i].ducksing == 'function')
          cherrio.push(xgg[i]);
  }

  if (cherrio.length === 1000) {
      console.log('已经招募');
  }
  //   for (var i = 0; i < cherrio.length; i++) {
  //       cherrio[i].ducksing();
  //   }
  for (let singer of cherrio) { //es6 for of 循环
      singer.ducksing();
  }