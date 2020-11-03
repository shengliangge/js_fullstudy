## BFC是什么？
Block fomatting context = block-level box + Formatting Context
直译为**块级格式化上下文**。它是一个**独立的渲染区域**，只有**块级元素**参与， 它规定了内部的块级元素如何布局，并且与这个区域外部毫不相干。（盒子模型分为块级元素和行内元素，块级元素会参与bfc） 　　　


## 如何生成BFC
满足下列声明之一：
- 根元素
- float值不为none
- overflow的值不为visible
- display的值为inline-block、table-cell、table-caption
- position的值为absolute或fixed
5种
## BFC的约束规则
- 内部盒子在垂直方向一个接一个放
- 垂直方向上的距离由margin决定（margin重叠问题）
- 元素的左外边距与包含块左边界相触（bfc子元素不会超出包含块，但是绝对定位的元素可以超出）
- bfc区域不会与float元素区域重叠
- 浮动子元素参与计算高度
- bfc是一个独立容器，内部元素和外部元素不会互相影响
6点
**帮助记忆**
看到以上的几条约束，想想我们学习css时的几条规则
- Block元素会扩展到与父元素同宽，所以block元素会垂直排列  
- 垂直方向上的两个相邻DIV的margin会重叠，而水平方向不会(此规则并不完全正确)
- 浮动元素会尽量接近往左上方（或右上方）
- 为父元素设置overflow：hidden或浮动父元素，则会包含浮动元素

## BFC在布局中的应用
- 防止margin重叠（塌陷）：
- 清除内部浮动
- 自适应多栏布局的