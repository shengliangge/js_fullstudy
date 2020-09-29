# DOM树

字节数据==>字符串==>标记（Token）
标记完成之后，这些标记会紧接着转换成Node，不通的Node会根据之前的联系构建一颗DOM树

# CSSOM树

过程类似于DOM树的产生，但是更加消耗性能，因为样式可以是自行设定的，也可能是继承获得的。这个过程浏览器得递归CSSOM树，才能确定具体的元素是什么样式。

# 渲染树

DOM树+CSSOM树=render树（渲染树）
渲染树不是简单的将两者合并，渲染树只会包括需要显示的节点，和这些节点的样式信息。比如：display：none的节点就不再渲染树中显示

当浏览器生成渲染树之后，就会根据渲染树来进行布局（回流），然后GPU绘制

# 为什么操作DOM慢

因为DOM树归渲染引擎 操作，js归js引擎操作，当使用js直接操作dom的时候，涉及到两个线程之间的通信，势必带来性能损耗

# 什么情况会阻塞渲染

想要渲染更快：

1. html扁平化
2. 优化css选择器

 

# 回流（Reflow）&&重绘(Repaint)

**回流**：计算渲染树中每一个可见节点在设备视图窗口的确切位置和大小，这个计算的阶段

**重绘**：拿到渲染树中节点的几何信息后，将节点转换为屏幕上的实际像素，这个阶段叫重绘节点

# 何时发生回流重绘

**发生回流：**

1. 删除或添加**可见**的DOM元素  （减少回流手段：可以先将元素设置为不可见，再进行操作，最后设为可见，减少回流）
2. 元素的位置发生变化
3. 元素的尺寸发生变化（元素尺寸改变——内外边距、填充、边框大小、宽度和高度）
4. 内容改变（文本变化、替换**不同尺寸**的图片
5. 页面初次渲染
6. 浏览器窗口尺寸变化（）

## 注意：回流一定会重绘，重绘不一定会回流

# 浏览器的优化机制

目前大多数的浏览器都会通过队列化修改批量的回流过程，浏览器会将修改操作放到队列里，直到一段时间后或者达到阈值，才会一次性全部回流，然后清空队列。

* 但是，获取布局信息的操作，会强制队列刷新

offsetTop、offsetLeft、offsetWidth、offsetHeight
scrollTop、scrollLeft、scrollWidth、scrollHeight
clientTop、clientLeft、clientWidth、clientHeight
getComputedStyle()
getBoundingClientRect

# 减少回流和重绘

## 修改单一DOM：

1. 使用cssText
2. 使用类名

## 批量修改DOM:
当我们需要对DOM对一系列修改的时候，可以通过一下步骤减少回流重绘次数：

1. 使元素脱离文档流
2. 对其进行多次修改
3. 将元素带回到文档中

该过程的第一步和第三步可能会引起回流，但是经过第一步之后，对DOM的所有修改都不会引起回流，因为它已经不在渲染树了。

有三种方式可以让DOM脱离文档流：

- 隐藏元素，应用修改，重新显示
- 使用文档片段(document fragment)在当前DOM之外构建一个子树，再把它拷贝回文档。
- 将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始的元素。

考虑我们要执行一段批量插入节点的代码：
```
function appendDataToElement(appendToElement, data) {
    let li;
    for (let i = 0; i < data.length; i++) {
        li = document.createElement('li');
        li.textContent = 'text';
        appendToElement.appendChild(li);
    }
}

const ul = document.getElementById('list');
appendDataToElement(ul, data);
```