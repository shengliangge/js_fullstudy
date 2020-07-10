# 浮动 float
浮动会让元素脱离文档流,间接导致父容器高度坍塌

# 清除浮动带来的负面影响
1. 在浮动元素后面添加一个空容器  <div style="clear: both;"></div>
2. 给浮动元素父容器添加一个伪类
```
  .clearfix::after {
            content: '';
            clear: both;
            display: block;
        }
```
3. BFC Block Formatting Context
解决元素脱离文档流带来的负面影响,以及margin重叠问题
bfc