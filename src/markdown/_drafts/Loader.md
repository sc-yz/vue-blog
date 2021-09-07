---
title: Loader
categories:
tags:
---

## loader 是什么

webpack 只能直接处理 javascript 格式的代码。任何非 js 文件都必须被预先处理转换为 js 代码，才可以参与打包。
loader（加载器）就是这样一个代码转换器。
它由 webpack 的 `loader runner` 执行调用，接收原始资源数据作为参数（当多个加载器联合使用时，上一个 loader 的结果会传入下一个 loader），最终输出 javascript 代码（和可选的 source map）给 webpack 做进一步编译。

loader 是 webpack 中一个重要的概念，它是指用来将一段代码转换成另一段代码的 webpack 插件。晕了没？为什么需要将一段代码转换成另一段代码呢？这是因为 webpack 实际上只能处理 JS 文件，如果需要使用一些非 JS 文件（比如 Coffee Script），就需要将它转换成 JS 再 require 进来

loader 用于对模块的源代码进行转换。loader 可以使你在 import 或 "load(加载)" 模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的得力方式。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS 文件！

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
    ],
  },
};
```

## 执行顺序

从右往左

## 文件

### file-loader

## JSON

### json5-loader

## 语法转换

### ts-loader

### babel-loader

### coffee-loader

## 模板

### html-loader

将 HTML 导出为字符串，需要传入静态资源的引用路径

## 样式

### css-loader

css-loader 会像 import / require（）一样解释@import 和 url（）并将解析它们。

### style-loader

通过注入 style 标签将 CSS 添加到 DOM

## 测试

### eslint-loader

## 框架

### vue-loader

## 相关阅读

[https://segmentfault.com/a/1190000015991629](https://segmentfault.com/a/1190000015991629)
[https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/308](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/308)
