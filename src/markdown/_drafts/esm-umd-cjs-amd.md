---
title: esm umd cjs amd
categories:
tags:
---

## esm

es5 es6

```javascript
import { call, apply } from "utils.js"
export default function () {}
export const call = function () {}
export const allpy = function () {}
```

## umd

通用的包
支持 script 插入，也支持 import+require

## SeaJS && CMD && CJS

CJS === commonJS ,为 nodejs 支持的同步加载 commonjs

seajs 是遵循 cmd 规范编写的，依赖就近，用的时候再 require。

```javascript
// commonJS
const { call, apply } = require("utils.js")
module.exports = {
  call,
  apply,
}
```

## RequireJS && AMD

AMD stands for Asynchronous Module Definition. Here is a sample code
AMD 代表异步模块定义,下面是简单的代码

```javascript
define(["dep1", "dep2"], function (dep1, dep2) {
  // Define the module value by returning a value.
  return function () {}
})

or
// "simplified CommonJS wrapping" https://requirejs.org/docs/whyamd.html
define(function (require) {
  var dep1 = require("dep1"),
    dep2 = require("dep2")

  return function () {}
})
```

1. AMD imports modules asynchronously (hence the name).
2. AMD is made for frontend (when it was proposed) (while CJS backend).
3. AMD syntax is less intuitive than CJS. I think of AMD as the exact opposite sibling of CJS.

## export module.exports import require

require: node 支持的引入

export / import : 只有 es6 支持的导出引入

module.exports / exports: 只有 node 支持的导出

## AMD && CMD 区别

最明显的区别就是在模块定义时对依赖的处理不同

1、AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块
2、CMD推崇就近依赖，只有在用到某个模块的时候再去require
这种区别各有优劣，只是语法上的差距，而且requireJS和SeaJS都支持对方的写法。

AMD和CMD最大的区别是对依赖模块的执行时机处理不同，注意不是加载的时机或者方式不同。

很多人说requireJS是异步加载模块，SeaJS是同步加载模块，这么理解实际上是不准确的，其实加载模块都是异步的，只不过AMD依赖前置，js可以方便知道依赖模块是谁，立即加载，而CMD就近依赖，需要使用把模块变为字符串解析一遍才知道依赖了那些模块，这也是很多人诟病CMD的一点，牺牲性能来带来开发的便利性，实际上解析模块用的时间短到可以忽略。

为什么我们说两个的区别是依赖模块执行时机不同，为什么很多人认为ADM是异步的，CMD是同步的。（除了名字的原因。。。）

同样都是异步加载模块，AMD在加载模块完成后就会执行改模块，所有模块都加载执行完后会进入require的回调函数，执行主逻辑，这样的效果就是依赖模块的执行顺序和书写顺序不一定一致，看网络速度，哪个先下载下来，哪个先执行，但是主逻辑一定在所有依赖加载完成后才执行。

CMD加载完某个依赖模块后并不执行，只是下载而已，在所有依赖模块加载完成后进入主逻辑，遇到require语句的时候才执行对应的模块，这样模块的执行顺序和书写顺序是完全一致的。

这也是很多人说AMD用户体验好，因为没有延迟，依赖模块提前执行了，CMD性能好，因为只有用户需要的时候才执行的原因。

## ES6 COMMONJS 通用
```json
// 另一种做法是在package.json文件的exports字段，指明两种格式模块各自的加载入口。


"exports"：{ 
    "require": "./index.js"，
    "import": "./esm/wrapper.js" 
}
```
## 相关阅读

[https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm)
[https://github.com/rollup/rollup/wiki/pkg.module](https://github.com/rollup/rollup/wiki/pkg.module)
[https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for](https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for)
[csdn](https://blog.csdn.net/weixin_41829196/article/details/105855450)
[实战](https://segmentfault.com/a/1190000040311187)
[对比](https://github.com/zgfang1993/blog/issues/29)