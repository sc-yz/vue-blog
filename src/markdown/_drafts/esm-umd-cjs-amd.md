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

## 相关阅读

[https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm)
[https://github.com/rollup/rollup/wiki/pkg.module](https://github.com/rollup/rollup/wiki/pkg.module)
[https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for](https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for)
