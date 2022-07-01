---
title: webpack
categories:
tags:
---

## 什么是 webpack

本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

## webpack 核心概念 & 构建流程

webpack 包含 6 个核心概念：入口（entry）、输出（output）、处理器（loader）、插件（plugin）、模块（module）、组合块（chunk）。

大致的构建流程是进入入口文件，解析出导入语句，根据 module（文件名后缀）调用对应的 Loader 处理，再找该 module 依赖的 module，递归地进行编译转换，最后将编译好的 module 整理组合成一个或多个 chunk，生成文件。整个过程是串行进行的。

## 统计打包速度

这次提供的测试优化的项目是使用 vue-cli3.0 脚手架搭建的。vue 官方提供了一个 GUI 的 webpack Analyzer，通过 vue ui 命令即可。

vue-cli3.0 以下有一个包 `webpack-jarvis`

## 测试性能瓶颈

The first step to optimising your webpack build speed, is to know where to focus your attention.
speed-measure-webpack-plugin 是一个专门测试 webpack 构建速度的工具，可以在终端列出所有 Loader 和 Plugin 的耗时。
在 vue-cli3 中使用方式如下：

```javascript
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
module.exports = {
    ...,
  configureWebpack: smp.wrap({ // 包裹
        output: {
            ...
        },
    plugins: [
        ...
    ]
    })
}
```

## 查看 webpack 配置

vue: `vue inspect`
react: 默认命令在 package.json 里面

```json
"webpack_output_dynamic": "vue inspect > output.js"
```

## 优化 webpack 打包速度

影响前端发布速度的有两个方面，一个是构建，一个就是压缩

### 缩小构建目标

- 优化 resolve.extensions 配置

  在导入没带文件后缀的路径时，webpack 会自动带上后缀去尝试询问文件是否存在，而 resolve.extensions 用于配置尝试后缀列表；默认为 extensions:['js','json'];
  及当遇到 require('./data')时 webpack 会先尝试寻找 data.js，没有再去找 data.json；如果列表越长，或者正确的后缀越往后，尝试的次数就会越多；

  所以在配置时为提升构建优化需遵守:

  1. 频率出现高的文件后缀优先放在前面；
  2. 列表尽可能的小；
  3. 书写导入语句时，尽量写上后缀名
  4. 如果项目中用的 jsx 较多，所以配置 extensions: [".jsx",".js"],vue 项目中默认的 extensions: ['.mjs','.js','.jsx','.vue','.json','.wasm']

- 定搜索目录 resolve.modules
  当搜索模块的时候告诉 webpack 确定的目录文件，这样可以避免无用的检索。webpack 默认的配置是相对路径，检索当前目录的下的 node_modules，如果没有则再会去根目录下的 node_modules，直到没有最后抛错。
  `resolve: { modules: ['node_modules'] }`

  ```javascript
  // ✅正确写法 https://cli.vuejs.org/zh/config/#chainwebpack
  // with an absolute path, it will only search in the given director.
  chainWebpack: (config) => {
    config.resolve.modules.store = new Set([
      path.resolve(__dirname, "node_modules"),
      "node_modules",
    ]);
  };
  ```

- 配置 resolve.alias
  vue 默认的 alias:{'@': '/Users/waq/workspace/vue-test-admin/src',vue$: 'vue/dist/vue.runtime.esm.js'}

### 有效利用多核，开启多进程

1. 是否为 Babel 或 TypeScript 使用 thread-loader

   ```javascript
   module.exports = {
     parallel: require("os").cpus().length > 1,
   };
   ```

   这是 vue-cli3.x 中的默认配置，可以让每一个 loader 都在单独的 worker 池中运行，开启多进程后编译的效率得到提升。但在 worker 池中运行的 loader 是受限制的，参考文档。

2. webpack 中代码压缩插件 terser-webpack-plugin 默认开启多进程配置。

   ```json
   // terser-webpack-plugin
   {
     optimization: {
       minimizer: [
         new TerserPlugin({
           parallel: true,
         }),
       ],
     },
   };
   ```

3. happypack
   原理：每次 webapck 解析一个模块时，HappyPack 会将它及它的依赖分配到 worker 线程中。
   提示：由于 HappyPack 对 file-loader、url-loader 支持的不友好，所以不建议对该 loader 使用。

   ```cmd
   npm install --save-dev happypack
   ```

   ```javascript
   const HappyPack = require("happypack");
   module.exports = {
     plugins: [
       new HappyPack({
         id: "jsx",
         threads: 4,
         loaders: ["babel-loader"],
       }),
       new HappyPack({
         id: "styles",
         threads: 2,
         loaders: ["style-loader", "css-loader", "less-loader"],
       }),
     ],
   };
   ```

### 利用缓存提升二次构建速度

1. 在 webpack 构建过程中，有效利用缓存可以大大缩减二次打包构建的时间。

```json
{
  "test": /\.m?jsx?$/,
  "exclude": [
    function () {
      /* omitted long function */
    }
  ],
  "use": [
    {
      "loader": "/Users/waq/workspace/vue-test-admin/node_modules/cache-loader/dist/cjs.js",
      "options": {
        "cacheDirectory": "/Users/waq/workspace/vue-test-admin/node_modules/.cache/babel-loader",
        "cacheIdentifier": "1f5d7b0a"
      }
    },
    {
      "loader": "/Users/waq/workspace/vue-test-admin/node_modules/babel-loader/lib/index.js"
    }
  ]
}
```

cacheDirectory 默认配置时 false。当对 babel-loader 设置缓存配置时，cacheDirectory 指定的目录将用来缓存 babel loader 执行后的结果。二次以后的构建，webpack 都会先尝试读取目录文件中的缓存。这样可以有效避免每次 Babel 重新编译产生的高性能消耗。vue-cli3.x 默认开启缓存。

2. terser-webpack-plugin

   ```json
   {
     "optimization": {
       "minimizer": [
         new TerserPlugin({
           "chache": true
         })
       ]
     }
   }
   ```

   代码压缩插件开启缓存，cache 属性 Type: Boolean | String，Default: true。启用文件缓存。默认缓存路径：node_modules/.cache/terser-webpack-plugin.

   vue 默认的 optimization:

   ```json
   optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: false,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
   }
   ```

3. cache-loader
   cache-loader 允许 loader 执行后的结果缓存到磁盘或者数据库中。你可以利用它来缓存一些性能开销比较大的 loader 的结果，比如 babel-loader。使用时只需要把次 loader 放在其它 loader 之前。

   ```json
   {
     "module": {
       "rules": [
         {
           "test": /\.ext$/,
           "use": ["cache-loader", ...loaders],
           "include": path.resolve("src")
         }
       ]
     }
   }
   ```

   vue-cli3.x 默认使用 cache-loader 缓存 babel-loader 的结果

   ```json
   {
     "test": /\.vue$/,
     "use": [
       {
         "loader": "/Users/waq/workspace/vue-element-chart-admin/node_modules/cache-loader/dist/cjs.js",
         "options": {
           "cacheDirectory": "/Users/waq/workspace/vue-element-chart-admin/node_modules/.cache/vue-loader",
           "cacheIdentifier": "72772542"
         }
       },
       {
         "loader": "/Users/waq/workspace/vue-element-chart-admin/node_modules/vue-loader/lib/index.js",
         "options": {
           "compilerOptions": {
             "whitespace": "condense"
           },
           "cacheDirectory": "/Users/waq/workspace/vue-element-chart-admin/node_modules/.cache/vue-loader",
           "cacheIdentifier": "72772542"
         }
       }
     ]
   }
   ```

4. hard-source-webpack-plugin
   webpack4 抛弃了使用 dll，hard-source-webpack-plugin 就是一个很好的替代者，它可为模块提供中间缓存步骤。第二次构建将明显更快。亲测有奇效。

   ```json
   // vue.config.js
   // const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
   {
     "configureWebpack": {
       "plugins": [new HardSourceWebpackPlugin()]
     }
   }
   ```

### 外部扩展 external

externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法。这样的好处是减少需要打包的依赖，处理的数量少了，时间就能减少。同时又能减小生产包的体积，还能享受 CDN 带来的好处。使用 external 有利于页面加载。

```json
{
  "chainWebpack": (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugin("html").tap((args) => {
        args[0].environment = process.env.NODE_ENV;
        return args;
      });
    }
  },
  "configureWebpack": (config) => {
    if (process.env.NODE_ENV === "production") {
      Object.assign({
        config,
        "externals": {
          "vue": "Vue",
          "vuex": "Vuex",
          "vue-router": "VueRouter",
          "axios": "axios"
        }
      });
    }
  }
}
```

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
[webpack 性能优化](https://juejin.cn/post/6844904084781154318#heading-3)
[webpackjsonp](https://ljf0113.github.io/2017/12/09/how-webpack-load-js-file/)
