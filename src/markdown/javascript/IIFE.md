# 哈哈

## IIFE 立即调用函数表达式

```javascript
(function () {
  console.log('IIFE');
})();
```

定义时就会执行，这是一个被称为`自执行匿名函数`的设计模式，包括两个部分：

1. 包围在`圆括号运算符()`里的一个匿名函数，这个匿名函数拥有独立的词法作用域，这不仅避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域。

2. 再一次使用了`()`，创建了一个立即执行函数表达式，Javascript 引擎到此将直接执行函数

## 当函数变成立即执行的函数表达式时，表达式中的变量不能从外部访问

```js
(function () {
  var name = 'Barry';
})();
console.log(name); // 抛出错误，“Uncaught ReferenceError: name is not defined”
```

## 将 IIFE 分配给一个变量，不是存储 IIFE 本身，而是存储 IIFE 执行后的结果

```js
var result = (function () {
  var name = 'Barry';
  return name;
})();

console.log(result); // "Barry"
```
