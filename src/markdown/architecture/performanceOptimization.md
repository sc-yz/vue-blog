# 性能优化

说到性能优化, 很多人第一时间就是想到图片压缩,压缩代码,懒加载,然后就不知道了。
做性能优化之前，第一步我们需要做性能分析，我们需要分析我们的页面到底哪里慢了，哪里需要优化。
然后我们再从开发项目到页面渲染的整个流程分阶段来解析性能优化。

## 性能分析

1. chrome devtool
   - network
   - performace
   - lighthouse
2. [webpagetest](https://www.webpagetest.org)
   - waterfull chart 请求瀑布图
   - first view 一次访问
   - repeat view 二次访问

性能的关键指标

性能监控平台

1. ARMS

## 代码优化

了解浏览器渲染流程

### HTML 优化

1. 避免节点深层级嵌套
2. 避免使用 table 布局

### JS 优化

`数组`

1. 避免读取超过数组的长度
   原因： 读取超出数组长度的数据产生的影响就是执行代价昂贵的原型链查找。

2. 数组中避免元素种类转换
   原因：避免使用-0、NaN、Infinity，因为它们任何一个元素进入数组后都会导致数组的类型变为 PACKED_DOUBLE_ELEMENTS

3. 优先于数组而不是类似数组的对象
   虽然运行起来逻辑没有问题，但是比数组直接调用 forEach 要慢得多，因为在 V8 中，forEach 已经高度优化。

   - 提高性能的方案就是，先将类似数组的对象转化为数组，在进行数组方法的调用。虽然有一次转换的成本，但是换来的性能优化是值得的，尤其是在数组上执行大量操作时。

   ```javascript
   const actualArray = Array.prototype.slice.call(arrayLike, 0);
   actualArray.forEach((value, index) => {
     console.log(`${index}: ${value}`);
   });
   ```

   - 另一个比较常见的情况是 arguments。在以前，要输出参数，我们一般都会这么做。

   ```javascript
   const logArgs = function () {
     Array.prototype.forEach.call(arguments, (value, index) => {
       console.log(`${index}: ${value}`);
     });
   };
   logArgs('a', 'b', 'c');
   ```

`对象`

1. 实例化后避免添加新属性或删除属性

   ```javascript
   const car1 = {color: 'red'}; // In-objece 属性
   const.seats = 4; // Normal/Fast 属性，存储property store里，需要通过描述数组间接查找。
   ```

2. 更快速的数据访问

   对于浏览器来说，一个标识符所处的位置越深，去读写他的速度也就越慢(对于这点，原型链亦是如此)。

   1. 将 for 循环里面的 length 先存储起来;

`函数`

1. lazy parsing 懒解析 vs eager parsing 急迫解析

   - 懒解析的好处，如果不需要解析，那就不用在“堆”里面分配内存，不用为它创建一个语法树。可以提高我们加载 js 的一个整体的效率。

   - 但是现实中，我们有时候还是需要我们的函数立即去执行的(先定义，然后再执行)。假如我们先进行懒解析，然后发现需要立即执行，还需要一个急迫解析,这样反而效率减半。所以我们要告诉解析器某个函数需要被立即执行，需要进行饥饿解析即可。

   - 只需添加一个括号即可，如果添加的括号会在压缩的时候被去掉，可以利用 Optimize 把括号找回来。

   ```javascript
   // 旧：
   // const add = (a, b) => a + b;
   //新：
   // const add = ((a, b) => a + b); // 注意括号
   ```

`dom`

1. 事件委托减少循环绑定的事件

   实现：利用事件代理

   优点:

   - 减少事件绑定，提高性能，减少内存的占用
   - 新增子对象时，不用再次绑定事件.

`资源`

1. Code splitting 代码查分，按需加载。
   当前访问路径需要哪些资源就加载哪些资源，不需要的我们给它延迟，访问的时候再去加载。达到减少加载 js 的目的

### CSS 优化

通过 Devtool 工具观察瀑布图中的 Recalculate Style，它会计算 Render 树（渲染树）,然后从根节点开始进行页面渲染，将 CSS 附加到 DOM 上的过程，即为样式计算所开销的时间。

1. 降低 CSS 的阻塞
2. 利用 GPU 进行完成动画，既使用复合图层。
3. 使用 contain 属性（contain:layout）。
4. font-display 属性
5. 动画开启硬件加速 `transform: translate3d(0,0,0)`
6. 使用 flex 布局比浮动布局强

### 图片优化

### 字体优化

font

- 使用 local()
  当在加载自己的字体时，在最前面声明 local(),像这样， 如果字体文件在本地就不会发起新的请求

  ```css
  @font-face {
    font-family: 'Awesome Font';
    font-style: normal;
    font-weight: 400;
    src: local('Awesome Font'), url('/fonts/awesome.woff2') format('woff2'), url('/fonts/awesome.woff')
        format('woff'), url('/fonts/awesome.ttf') format('truetype'), url('/fonts/awesome.eot')
        format('embedded-opentype');
  }
  ```

- 您可以通过 unicode-range 描述符指定一个用逗号分隔的范围值列表，其中的每个值都可能采用下列三种不同形式中的一种：

  1. 单一代码点（例如 U+416）

  2. 间隔范围（例如 U+400-4ff）：表示范围的开始代码点和结束代码点

  3. 通配符范围（例如 U+4??）：“?”字符表示任何十六进制数字

  ```css
  @font-face {
    font-family: 'Awesome Font';
    font-style: normal;
    font-weight: 400;
    src: local('Awesome Font'), url('/fonts/awesome-l.woff2') format('woff2'), url('/fonts/awesome-l.woff')
        format('woff'), url('/fonts/awesome-l.ttf') format('truetype'), url('/fonts/awesome-l.eot')
        format('embedded-opentype');
    unicode-range: U+000-5FF; /* Latin glyphs */
  }
  ```

  ```css
  @font-face {
  font-family: 'Awesome Font';
  font-style: normal;
  font-weight: 400;
  src: local('Awesome Font'),
  url('/fonts/awesome-jp.woff2') format('woff2'),
  url('/fonts/awesome-jp.woff') format('woff'),
  url('/fonts/awesome-jp.ttf') format('truetype'),
  url('/fonts/awesome-jp.eot') format('embedded-opentype');
  unicode-range: U+3000-9FFF, U+ff??; /_ Japanese glyphs _/
  }

  ```

- font-display 属性

  1. auto 用浏览器自动进行选择，没有太大用处

  2. block（阻塞）：3s 等待，在前 3s 不显示，如果 3s 之后期望字体下载完了，就用下载好的期望字体，要是 3s 之后期望字体还没有下载完，就用默认字体，什么时候期望字体下载完了，在进行替换

  3. swap（交换）：刚开始加载就用默认字体，什么时候期望字体下载完成，在对默认字体进行替换

  4. fallback：其实是对 block 的一种优化，等待时间变为 100ms，等待时间之后若期望字体下载完了，用期望字体，否则用默认字体，什么时候期望字体下载完什么时候进行替换

  5. optional：手机端特别优化的，等待时间 100ms，若 100ms 期望字体下载完了就一直用期望字体，若没下载完就一直用默认字体，永不替换

## 构建优化

### 查看构建速度

`speed-measure-webpack-plugin`是一个专门测试 webpack 构建速度的工具，可以在终端列出所有 Loader 和 Plugin 的耗时.
在 vue-cli3 中使用方式如下：

```javascript
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
module.exports = {
  configureWebpack: smp.wrap({
    output: {},
    plugins: [],
  }),
};
```

### 查看 weboack 配置

```json
{
  "script": {
    "webpack_output": "vue inspect --mode=production > output.js"
  }
}
```

### 优化打包速度

#### 最优的搜索路径配置

1. 确定搜索目录 resolve.modules
   当搜索模块的时候告诉 webpack 确定的目录文件，这样可以避免无用的检索。webpack 默认的配置是相对路径，检索当前目录的下的 node_modules，如果没有则再会去根目录下的 node_modules，直到没有最后抛错。

   ```json
   {
     "resolve": { "modules": ["node_modules"] }
   }
   ```

   ```json
   {
     // ✅正确写法 https://cli.vuejs.org/zh/config/#chainwebpack
     // with an absolute path, it will only search in the given director.
     "chainWebpack": (config) => {
       config.resolve.modules.store = new Set([
         path.resolve(__dirname, "node_modules"),
         "node_modules"
       ]);
     }
   }
   ```

   ```json
   {
     // ❌错误写法 https://cli.vuejs.org/zh/config/#configurewebpack
     "configureWebpack": {
       "resolve": {
         "modules": [path.resolve(__dirname, "node_modules")]
       }
     }
   }
   ```

   在 vue-cli3 中 vue.config.js 与 node_modules 是在同一目录层级下，所以两个配置的耗时理论上是没有差别的。

2. 拓展名配置 reselove.extensions

   webpack 会根据默认的 extensions 去逐个询问，是否存在该拓展名的文件，所以当你想导入的文件的拓展名在配置数组的末尾，则会影响整个打包耗时

   ```javascript
   // 默认的
   module.exports = {
     //...
     resolve: {
       extensions: ['.wasm', '.mjs', '.js', '.json'],
     },
   };
   ```

   所以 extensions 的配置原则是频率出现高的排在前面，数组长度尽量的小。

   ```javascript
   // v-cli 中 默认的配置
   module.exports = {
     //...
     webpackConfig.resolve
      .extensions
        .merge(['.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'])
        .end()
   };
   ```

   而项目中文件没有.mjs 和.jsx，所以在 vue.config.js 中我这样配置会更好

   ```javascript
   // 默认的
   module.exports = {
     //...
     // ✅正确写法 https://cli.vuejs.org/zh/config/#chainwebpack
     // high frequency extension, it's best to be at the front of the array
     chainWebpack: (config) => {
       config.resolve.extensions.store = new Set([
         '.js',
         '.vue',
         '.json',
         '.mjs',
         '.jsx',
         '.wasm',
       ]);
     },
   };
   ```

3. 忽略非模块化 Library module.noParse
   忽略那些文件中不含有 import,require，define 的调用，或任何其他导入机制的 library。忽略大型的 library 可以提高性能

#### 有效利用多核，开启多进程

1. 是否为 Babel 或 TypeScript 使用 thread-loader

   vue 默认开启

   ```js
   module.exports = {
     parallel: require('os').cpus.length > 1,
   };
   ```

2. terser-webpack-plugin

   ```js
   modules.exports = {
     optimization: {
       minimizer: [
         new TerserPlugin({
           paraller: true,
         }),
       ],
     },
   };
   ```

3. happyPack

   webpack4 以后不建议使用

### DllPlugin

### 利用缓存提升二次构建速度

在 webpack 构建过程中，有效利用缓存可以大大缩减二次打包构建的时间

1. babel-loader
2. terser-webpack-plugin
   代码压缩插件开启缓存，cache 属性 Type:Boolean | String, Default:true 。启用文件缓存，默认缓存路径：`node_modules/.cache/terser-webpack-plugin`

   ```js
   modules.exports = {
     optimization: {
       minimizer: [
         new TerserPlugin({
           cache: true,
         }),
       ],
     },
   };
   ```

3. cache-loader
   cache-loader 允许 loader 执行后的结果缓存到磁盘或者数据库中，你可以利用它来缓存一些性能开销比较大的 loader 的结果，比如 babel-laoder。使用时只需要把次 loader 放在其他 loader 之前。

   ```js
   module.exports = {
     module: {
       rules: [
         {
           test: /\.ext$/,
           use: ['cache-loader', ...loaders],
           include: path.resolve('src'),
         },
       ],
     },
   };
   ```

   vue-cli3.x 默认使用 cache-loader 缓存 babel-loader 的结果（查看 output.js）。
   ⚠️ 请注意，保存和读取这些缓存文件会有一些时间开销，所以请只对性能开销较大的 loader 使用此 loader。

4. hard-source-webpack-plugin
   webpack4 抛弃了使用 dll,hard-soucre-webpack-plugin 就一个很好的代替者，它可以为模块提供中间缓存步骤。第二次构建将明显更快。

   ```js
   const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
   configureWebpack: {
     plugins: [new HardSourceWebpackPlugin()];
   }
   ```

#### 外部扩展 (external)

externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法。这样的好处是减少需要打包的依赖，处理的数量少了，时间就能减少。同时又能减小生产包的体积，还能享受 CDN 带来的好处。使用 external 有利于页面加载。

```js
{


"chainWebpack": (config) => {
  if (process.env.NODE_ENV === 'production') {
    config.plugin('html').tap((args) => {
      args[0].environment = process.env.NODE_ENV;
      return args;
    });
  }
},
"configureWebpack": (config) => {
  if (process.env.NODE_ENV === 'production') {
    Object.assign({
      config,
      externals: {
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
        axios: 'axios',
      },
    });
  }
};
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title>快站</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but 快站 doesn't work properly without JavaScript enabled.
        Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <% if (htmlWebpackPlugin.options.environment === 'production') { %>
    <script src="https://cdn.bootcss.com/vue/2.6.6/vue.min.js"></script>
    <script src="https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js"></script>
    <script src="https://cdn.bootcss.com/vuex/3.1.0/vuex.min.js"></script>
    <script src="https://cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>
    <% } %>
  </body>
</html>
```

#### webpack-bundle-analyzer

查看打包之后的结果

#### 总结

1. 升级 webpack 版本，官方一直在对性能进行优化（小声逼逼：webpack5 打包输出体积更小、速度更快）。
2. 升级 nodejs 版本，保持一个稳定的高版本 node 有意想不到的效果。
3. 优化 webpack 打包搜索路径，递归很耗时。
4. 利用外部扩展 externals，把不太变动的 lib 排除在输出 bundle 中，使用 CDN 服务。
5. 充分利用多核处理器。
6. 有效利用缓存，提升二次构建速度。
7. 拥有高性能处理器的设备打包更快。

## 传输优化

1. 使用 Gzip 压缩

   - 在 http／1.0 协议中关于服务端发送的数据可以配置一个 Content-Encoding 字段，这个字段用于说明数据的压缩方法

   ```json
   Content-Encoding: gzip
   Content-Encoding: compress
   Content-Encoding: deflate
   ```

   - 客户端在接受到返回的数据后去检查对应字段的信息，然后根据对应的格式去做相应的解码。客户端在请求时，可以用 Accept-Encoding 字段说明自己接受哪些压缩方法。
     `Accept-Encoding: gzip, deflate`

   - nginx 配置 gzip

   ```conf
   gzip_static on;
   gzip_http_version   1.1;
   gzip_proxied        expired no-cache no-store private auth;
   gzip_disable        "MSIE [1-6]\.";
   gzip_vary           on;
   ```

   - node server

   ```javascript
   const express = require('express');
   const app = express();
   //express 框架，前边肯定都是必要的，也就是只需安装 compression 组件，然后添加一下两句代码就好
   const compression = require('compression');
   app.use(compression());
   ```

   - apache

   在 .htaccess 文件里增加如下代码：

   ```xml
   # compress text, html, javascript, css, xml:
   AddOutputFilterByType DEFLATE text/plain
   AddOutputFilterByType DEFLATE text/html
   AddOutputFilterByType DEFLATE text/xml
   AddOutputFilterByType DEFLATE text/css
   AddOutputFilterByType DEFLATE application/xml
   AddOutputFilterByType DEFLATE application/xhtml+xml
   AddOutputFilterByType DEFLATE application/rss+xml
   AddOutputFilterByType DEFLATE application/javascript
   AddOutputFilterByType DEFLATE application/x-javascript

   # Or, compress certain file types by extension:

   <files \*.html>
   SetOutputFilter DEFLATE
   </files>
   ```

2. 使用 keep-alive
3. http 缓存

   - cache-control/expires
   - last-modified+if-modified-since
   - etag+if-none-match
   - service worker

4. http2

   - 多路复用
   - 服务器推送
   - 二进制分帧
   - header 头部压缩 hpack

5. 减少重定向

## 渲染优化

60fps 与设备刷新率

目前大多数设备的屏幕刷新率为 60 次/秒。因此，如果在页面中有一个动画或渐变效果，或者用户正在滚动页面，那么浏览器渲染动画或页面的每一帧的速率也需要跟设备屏幕的刷新率保持一致。

其中每个帧的预算时间仅比 16 毫秒多一点 (1 秒/ 60 = 16.66 毫秒)。但实际上，浏览器有整理工作要做，因此您的所有工作需要在 10 毫秒内完成。如果无法符合此预算，帧率将下降，并且内容会在屏幕上抖动。 此现象通常称为卡顿，会对用户体验产生负面影响

1. css js 顺序
2. 减少重排重绘

   - js 尽量减少对样式的操作，能用 css 完成的就用 css
   - 对 dom 操作尽量少，能用 createDocumentFragment 的地方尽量用
   - 如果必须要用 js 操作样式，能合并尽量合并不要分多次操作
   - resize 事件 最好加上防抖，能尽量少触发就少触发
   - 加载图片的时候，提前写好宽高

## 相关阅读

[lazyparsing-esaerParsing](https://programmersought.com/article/15265512559/)
[开启 zip 压缩](https://zhuanlan.zhihu.com/p/64973956)
[服务器推送](https://www.ruanyifeng.com/blog/2018/03/http2_server_push.html)
[渲染性能](https://developers.google.com/web/fundamentals/performance/rendering?hl=zh-cn)
