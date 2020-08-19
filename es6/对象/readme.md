<!-- 对象 -->

<!-- 对象属性的增 -->

3. 对象的创建方式
  + 字面量
  + 构造函数

  1)系统自带的构造函数 Object()
  2)自定义

# 构造函数的内部原理 2.js

1. 在函数体最前面隐式加上一个 this={}
2. 执行this.xxx=xxx
3. 隐式的返回这个this

 (构造函数中只有显示的return对象，会干扰原隐式的return值，原始值不会)

 # 包装类
 
  1.
     var num = 4;
     num.length= 3;
     console.log(num.length);//undefined
     //原始类型为啥添加属性不会报错呢，当我们num.length的时候，
     //内部隐式的发生一个过程，new Number(4).len = 3; 就是内部
     //会新建一个数字对象然后把4赋值进去，之后就会把这个对象delete
     //当我们访问num.length的时候，系统会再创建一个数字对象把
     //4赋值进去，这次的数字对象和上次的数字对像是两个对象(上次的已经销毁)
     //所以此时的数字对象并没有length属性，所以就返回undefined
     //这个隐式的中间环节就叫做包装类
     2.
     var str = "abcd";
     str.length = 2;
     console.log(str.length);//4
     //当我们str.length的时候，str并没有length属性，此时系统就会
     //new ("abcd").length = 2;然后销毁，当我们再去str.length的
     //时候，系统会new ("abcd").length,此时对象字符串有length属性
     //所有就返回4