# 指令

1. v-once:表示元素和组件只渲染一次，不随着数据变化而变化
2. v-html: 后面跟一个string，会将string的html解析并渲染
3. v-text:和{{}}相似，都是将数据显示在界面中，但是会覆盖标签里面的内容
4. v-pre:将数据原样显示
5. v-cloak:某些情况需要直接显示未编译的{{}}
6. v-bind:用于绑定一个或多个属性值，或者向另一个组件传递props，语法糖是:

应用：类名使用对象形式 {类名1:true, 类名2:boolean}, 类名使用数组形式 [类名1:true, 类名2:boolean]

7. v-on 进行时间监听，语法糖@

传参的情况：如果不需要传参，可以省略(), 方法本身有一个event参数，如果需要传别的参数，有需要获取event，就可以使用$event

* 修饰符： .stop(阻止事件冒泡) .prevent(阻止默认事件，如submit) .keyCode| keyAlias 当特定键触发时触发 .native（监听组件根元素的元素）  .once（只触发一次）

# 计算属性

使用例子: `{{fullName}}` 用属性的方式使用
例子

``` 

compute:{
  fullName:function(){
    return this.a+this.b
  }
}
```

计算属性中有get和set方法，一般只用实现get方法，不实现set方法（相当于只读属性）

好处：计算属性会进行缓存，如果多次使用时，计算属性智慧调用一次

# v-if v-else-if  v-else

可以根据表达示的值渲染或者销毁元素或组件

v-if和v-show对比：
v-if条件为false时，不会生成响应的dom
v-show条件为false时，仅仅将元素的display属性设置为none
如何做选择？当需要频繁切换时：使用v-show，当只有一次切换时，用v-if

v-model 修饰符：

1. lazy ：变量不会实时更新，只会在失去焦点或者回车时更新 
2. number： 让输入框的string变成number类型
3. trim 去除空格

# 注册组件的基本步骤：

1. 创建组件构造器，Vue.extend()
2. 注册组件 Vue.component()方法
3. 使用组件

例如：
创建：const cpnC=Vue.extend({
template:`<div>
<p>组件</p>
</div>`
})
注册：Vue.component('myCpnC','cpnC')  //第一个名字，第二个是组件构造器
