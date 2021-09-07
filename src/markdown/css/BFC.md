# 哈哈

## BFC

BFC 是 Block Formatting Context 的简写，我们可以直接将其翻译成“块级格式化上下文”。它会创建一个特殊的区域，在这个区域中，只有 block box 参与布局

BFC 的一系列特点和规则规定了在这个特殊的区域中如何进行布局，如何进行定位，区域内元素的相互关系和相互作用是怎样的。这个特殊的区域不受外界影响

## 如何形成 BFC

1. 根元素或其他包含根元素的元素
2. 浮动元素(元素的 float 不是 none)
3. 绝对定位元素(元素的 position 为 absolute 或者 fixed)
4. 内联快(元素具有 diaplay:inline-block 属性)
5. 表格单元格
6. 表格标题
7. 具有 overflow 且值不是 visible 的元素
8. 含有样式属性 display:flow-root 的元素
9. 含有样式属性 column-span: all 的元素

## BFC 决定了什么

1. 内部的 box 将会独占宽度，且在垂直方向上一个接一个排列
2. box 在垂直方向上的间距有 margin 的属性决定，但是同一个 BFC 的两个相邻 box 的 margin 会出现边距折叠现象
3. 每个 box 在水平方向上的左边缘与 BFC 的左边缘相对齐，即使存在浮动也是如此
4. BFC 区域不会与浮动元素重叠，而是会依次排列
5. BFC 区域是一个独立的渲染容器，容器内的元素和 BFC 区域外的元素之间不会有任何干扰
6. 浮动元素的高度也参与 BFC 的高度计算

从这规则中，我们至少能总结出如下的一些关键要点：

1. 边距折叠
2. 清除浮动
3. 自适应多栏布局

## BFC 实战应用

```html
<style>
  body {
    width: 100vw;
    height: 100vh;
    position: relative;
  }
  .left {
    width: 80px;
    float: left;
    height: 100vh;
    background: blue;
  }
  .middle {
    overflow: hidden;
    background: blue;
    height: 100vh;
  }
  .right {
    height: 80px;
    float: right;
    height: 100vh;
    background: red;
  }
</style>

<body>
  <div class="left"></div>
  <div class="right"></div>
</body>
```

要求： 请在不修改已有内容的情况下加入样式，实现自适应（.left 宽度固定，.right 占满剩下的宽度）两拦布局

```css
.right {
  overflow: hidden;
}
```
