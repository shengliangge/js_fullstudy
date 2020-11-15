# mvvm原理的理解

* 传统的mvc指的是：用户操作会请求服务端路由，路由会调用对应的控制器来处理，控制器会获取数据，将结果返回给前端，页面重新渲染。
* mvvm：传统的前端数据是手动渲染到页面上，mvvm模式不需要用户收到操作dom元素，将数据绑定到viewModel层上，会自动将数据渲染到页面中，视图变化会通知viewModel层更新数据，viewModel就是我们mvvm模式的桥梁

# 说一下响应式数据的原理

理解：

1. 核心：Object.defineProperty
2. 默认Vue会在初始化数据时，会给data中的属性Object.defineProperty重新定义所有属性，当页面取到响应属性时，会进行依赖手机（收集当前组件中的watcher）如果属性发生变化就会通知相关依赖进行更新操作

# vue中是如何检测数组变化的

理解:

* 使用函数劫持的方式，重写了数组的方法
* vue将data中的数组，进行了原型链重写，指向了自己定义的数组原型方法，这样当调用数组api时

# router中的一些属性

to：跳转路径
tag：渲染成指定标签
replace： 不会留下 history
代码跳转：this.$router.push('/home)

# 动态路由

可以在配置路由的后面/：变量名，然后通过$route.params. 变量名, 获取
$route : 谁处于活跃状态，拿到的就是谁
$router：整个大的路由对象

# 路由传参

在<router-Link></router-Link>中的to="{path:'/profile', query:{参数} }"，通过$route.query取参数
在函数式跳转中，this.$router.push({path:'/路径', query:{参数}})

# 全局导航守卫

<!-- 前置钩子 -->
router.beforeEach((to, from, next)=>{
  document.title=to.title 
  next()
})
如果是后置钩子，就不需要主动调用next()函数
# 什么是服务端渲染

早期前后端不分离 
