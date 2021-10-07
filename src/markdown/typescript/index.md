<!--
 * @Author: kian
 * @Date: 2021-07-14 09:32:40
 * @LastEditors: kian
 * @LastEditTime: 2021-10-07 08:50:16
 * @Description:
-->

# 哈哈

## 类型

1. Boolean
2. Number
3. String
4. Array
5. Function
6. Object
7. Symbol
8. undefined
9. null
10. viod
    没有任何返回值 undefined
11. any
    不写类型就是 any 类型
12. unknown
13. never
    永远不会有返回值的类型
    1. 函数抛出异常
    2. 死循环函数
14. 元祖
15. 枚举

    1. 数字枚举，取值从 0 开始。可以自定义初始值
    2. 字符串枚举

    常量枚举，编译不见
    不同枚举类型的值不能比较

16. 高级类型
17. 接口
    索引接口：字符串索引，数字索引 （[x:string]:any || [x:number]:any），数字索引签名的返回值是字符串索引签名返回值的字类型，js 会类型转换，number=>string,保持类型的兼容性，

## 保证项目的可维护性和增强代码的可读性

## declare

在声明文件中，最常看见的语法之一。用来全局声明变量、常量、类、全局对象等等，前提是该文件不是模块声明文件（后面会讲）

```ts
declare global {
  interface String {
    helloword(): string;
  }
}

export {};
```

如果不加 export {}，会报「全局范围的扩大仅可直接嵌套在外部模块中或环境模块声明中」错误。增加 export{}其实也就是为了让这个声明文件变成模块声明文件，而不是一个全局声明文件。

## 三斜线指令

三斜线指令，也是最初用来表示模块之间依赖关系。目前也是很少会去使用，不过声明文件中，还是有很多会去使用。
在三斜线指令的语法中，目前可能会去比较常用的两种语法：

/// <reference path="./lib/index.d.ts" />：表示对一个文件的依赖。
/// <reference types="jye" />：表示对一个库的依赖。

说白了，三斜线的 path & types，和 es6 的 import 语义相似，同时三斜线指令必须放在文件的最顶端。例如，当我们的声明文件过于庞大，一般都会采用三斜线指令，将我们的声明文件拆分成若干个，然后由一个入口文件引入。

## 全局声明和局部声明

其实写到这里，前面有两点没有说清楚，什么是全局声明，什么是局部声明。
我的理解是，如果这个声明文件被 typescript 引入了，那么这个文件不包含 import export，那么这个文件中包含的 declare & interface & type 就会变成全局声明。反之，若是这个文件包含了 import export，那么这个文件包含的 declare & interface & type 则会是局部声明，不会影响到全局声明。

### 新语法

​declare var 声明全局变量
​declare function 声明全局方法
​declare class 声明全局类
​declare enum 声明全局枚举类型
​declare namespace 声明（含有子属性的）全局对象
​interface 和 type 声明全局类型
​export 导出变量
​export namespace 导出（含有子属性的）对象
​export default ES6 默认导出
​export = commonjs 导出模块
​export as namespace UMD 库声明全局变量，UMD 固定语法。
​declare global 扩展全局变量
​declare module 扩展模块
​/// <reference /> 三斜线指令

### 全局声明

全局变量的声明文件主要有以下几种语法：

​declare var 声明全局变量
​declare function 声明全局方法
​declare class 声明全局类
​declare enum 声明全局枚举类型
​declare namespace 声明（含有子属性的）全局对象
​interface 和 type 声明全局类型

## 模块插件

有时通过 import 导入一个模块插件，如果我们想要扩展此插件。ts 提供了一个语法 declare module，它可以用来扩展原有模块的类型。

现在我要给 dayjs 这个模块添加一个方法，名字就叫做 getDate :

import day from "dayjs";

//千万不要忘记了引号
declare module "dayjs" {
export function getDate():number;
}
day.getDate = function(){
const date = new Date();
return Number(date);
};
console.log(day().format());
console.log(day.getDate());
//2020-02-09T14:10:34+08:00
//1581228634901
通过 declare module 可以直接扩展第三方模块

## 泛型

泛型（Generics） 是指在定义函数、接口或类的时候，不预先制定具体的类型，而是在使用的时候再指定类型的一种特性

## 类与接口

接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述。

并且：接口的另一个用途，对类的一部分行为进行抽象。

## 相关阅读

[TypeScript 怎么声明全局类型，可以不 import 直接使用?](https://www.zhihu.com/question/350961609)
[声明文件](https://shymean.com/article/%E7%AE%A1%E7%90%86TypeScript%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E)
[Typescript](https://ts.xcatliu.com/)
