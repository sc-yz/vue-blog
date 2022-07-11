## 什么是 webpack

本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

## webpack 核心概念 & 构建流程

webpack 包含 6 个核心概念：入口（entry）、输出（output）、处理器（loader）、插件（plugin）、模块（module）、组合块（chunk）。

大致的构建流程是进入入口文件，解析出导入语句，根据 module（文件名后缀）调用对应的 Loader 处理，再找该 module 依赖的 module，递归地进行编译转换，最后将编译好的 module 整理组合成一个或多个 chunk，生成文件。整个过程是串行进行的。

## 基础用法

### enrty output loaders plugins mode

阅读文档[webpack concepts](https://webpack.docschina.org/concepts/)

### 解析 ES6 语法

### 解析 CSS\LESS\SCSS

### 解析图片字体

### webpack 中文件监听

### webpack 热更新原理

webpack-dev-server 文件放在内存中
webpack complier
bundle server
hmr server
hmr runingtime

### 文件指纹

### HTML\CSS\JS 压缩

## 进阶用法

### 自动清除构建产物

### postcss 插件 autoprefixer

### px to rem

### 静态资源内联

### 多页面打包方案

### sourcemap

### 提取页面公共资源

plugins: html-webpack-externals-lugin

```json
{
  "optimization": {
    "splitChunks": {}
  }
}
```

### Tree shaking

### 代码分割和动态 import

COMMONJS: require.ensure
ES6: 动态 import (目前没有原生支持，需要 babel 转换)

### webpack 中的 eslint

### webpack 打包基础库

## 打包后的代码质量

如何获取打包后各个模块的大小，使用 webpack-bundle-analyzer 分析工具，在启动打包完成后，会在 8888 端口显示一个交互式可视化 bundle treemap。

## manifest runtime

在使用 webpack 构建的典型应用程序或站点中，有三种主要的代码类型：

你或你的团队编写的源码。
你的源码会依赖的任何第三方的 library 或 "vendor" 代码。
webpack 的 runtime 和 manifest，管理所有模块的交互。
本文将重点介绍这三个部分中的最后部分：runtime 和 manifest，特别是 manifest。

### runtime

runtime，以及伴随的 manifest 数据，主要是指：在浏览器运行过程中，webpack 用来连接模块化应用程序所需的所有代码。它包含：在模块交互时，连接模块所需的加载和解析逻辑。包括：已经加载到浏览器中的连接模块逻辑，以及尚未加载模块的延迟加载逻辑。

### manifest

一旦你的应用在浏览器中以 index.html 文件的形式被打开，一些 bundle 和应用需要的各种资源都需要用某种方式被加载与链接起来。在经过打包、压缩、为延迟加载而拆分为细小的 chunk 这些 webpack 优化 之后，你精心安排的 /src 目录的文件结构都已经不再存在。所以 webpack 如何管理所有所需模块之间的交互呢？这就是 manifest 数据用途的由来……

当 compiler 开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 "manifest"，当完成打包并发送到浏览器时，runtime 会通过 manifest 来解析和加载模块。无论你选择哪种 模块语法，那些 import 或 require 语句现在都已经转换为 **webpack_require** 方法，此方法指向模块标识符(module identifier)。通过使用 manifest 中的数据，runtime 将能够检索这些标识符，找出每个标识符背后对应的模块。

### 问题

所以，现在你应该对 webpack 在幕后工作有一点了解。“但是，这对我有什么影响呢？”，你可能会问。答案是大多数情况下没有。runtime 做完成这些工作：一旦你的应用程序加载到浏览器中，使用 manifest，然后所有内容将展现出魔幻般运行结果。然而，如果你决定通过使用浏览器缓存来改善项目的性能，理解这一过程将突然变得极为重要。

通过使用内容散列(content hash)作为 bundle 文件的名称，这样在文件内容修改时，会计算出新的 hash，浏览器会使用新的名称加载文件，从而使缓存无效。一旦你开始这样做，你会立即注意到一些有趣的行为。即使某些内容明显没有修改，某些 hash 还是会改变。这是因为，注入的 runtime 和 manifest 在每次构建后都会发生变化。

查看*管理输出*指南的 manifest 部分，了解如何提取 manifest，并阅读下面的指南，以了解更多长效缓存错综复杂之处。

## 相关阅读

[wenbpack](https://www.yuque.com/allenzhoujiawei/kb/zsp9gp)
[webpack configuration](https://webpack.docschina.org/configuration)
[webpack 性能优化](https://juejin.cn/post/6844904084781154318#heading-3)
[webpackjsonp](https://ljf0113.github.io/2017/12/09/how-webpack-load-js-file/)
[module-chunk-bundle](https://www.cnblogs.com/skychx/p/webpack-module-chunk-bundle.html)
[webpack 流程](https://zhuanlan.zhihu.com/p/360421184)
