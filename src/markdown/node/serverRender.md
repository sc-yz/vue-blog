# BFF

Back for Frontend

## 同构 浏览器端和服务端共用一套代码

react:

```javascript
// ES modules
import ReactDOMServer from 'react-dom/server';

// CommonJS
var ReactDOMServer = require('react-dom/server');
```

vue:

```javascript
const renderer = require('vue-server-renderer').createRenderer();
```

难点：数据共享

## HTTP 服务性能测试

压力测试工具：

1. apachebench
2. wenbench

性能瓶颈所在

1. top cpu 内存
2. iostat 硬盘 io

## node.js 性能分析工具

1. node 自带的 profile

```cmd
node --prof entry.js
```

2. chrome devtool

```cmd
node --inspect-brk entry.js
```

3. clinic

## javascript 代码性能优化

计算性能优化的本质

1. 减少不必要的计算
2.  空间换时间

## nodejs http 服务性能优化准则

1. 提前计算

## 内存优化管理

垃圾回收

新生代： 容量小，垃圾回收更快

老生代：容量大，垃圾回收更慢

减少内存的使用，也是提高服务器性能的手段
如果存在内存泄漏，导致服务性能大大降低

节省内存最好的办法就是：使用池

## 多进程 多线程

单核 cpu 以时间片执行

## 相关阅读

[reactDomServer](https://reactjs.org/docs/react-dom-server.html)
[vueServerRender](https://github.com/vuejs/vue/tree/dev/packages/vue-server-renderer#readme)
