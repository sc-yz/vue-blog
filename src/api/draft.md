## 机器语言 =》 汇编语言 =》 低级语言(面向过程) =》 高级语言（面向对象） =》 框架 =》 api

面向对象：把一些公共的东西封装起来，通过 new 出来的对象直接调用就好

## es5 中的面向对象

## 类

es 中 类 === 构造函数

类：只要有 new ，new 后面跟着的就是类
构造函数： 通过参数 可以传递到函数本身的 this 身上

## es6 中的面向对象

es6 中把构造函数和类分开
class 声明类的关键字
构造函数： 应该是一个函数

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```
