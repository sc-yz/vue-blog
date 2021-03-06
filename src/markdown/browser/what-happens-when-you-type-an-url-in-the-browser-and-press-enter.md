# what-happens-when-you-type-an-url-in-the-browser-and-press-enter

## 判断 url，补全 http 或者 https

## 缓存

输入 url 后，浏览器会判断请求的资源是否存在本地缓存（强缓存），存在则直接从缓存中获取，否则往下走

[缓存](/post/brwoser-cache)

## DNS 解析

`DNS 的解析原理和过程：`

在 Internet 上域名和 IP 是对应的，DNS 解析有两种：一种是正向解析，另外一种是反向解析。

正向解析：正向解析就是将域名转换成对应的 IP 地址的过程,它应用于在浏览器地址栏中输入网站域名时的情形。

反向解析：根据 IP 地址查找对应的注册域名，经常被一些后台程序使用,用户看不到。

另外需要知道的是 DNS 查询的工作方式：

客户端和浏览器，本地 DNS 之间的查询方式是递归查询；

本地 DNS 服务器与根域及其子域之间的查询方式是迭代查询；

`DNS 解析过程：`

场景：用户在浏览器输入网址：clondant.blog.51cto.com，其解析过程如下：

1. 浏览器将会检查缓存中有没有这个域名对应的解析过的 IP 地址，如果有该解析过程将会结束。

2. 如果用户的浏览器中缓存中没有，操作系统会先检查自己本地的 hosts 文件是否有这个网址映射关系，如果有，就先调用这个 IP 地址映射关系，完成域名解析。

3. 如果 hosts 里没有这个域名的映射，则查找本地 DNS 解析器缓存，是否有这个网址映射关系或缓存信息，如果有，直接返回给浏览器，完成域名解析。

4. 如果 hosts 与本地 DNS 解析器缓存都没有相应的网址映射关系，则会首先找本地 DNS 服务器，一般是公司内部的 DNS 服务器，此服务器收到查询，如果此本地 DNS 服务器查询到相对应的 IP 地址映射或者缓存信息，则返回解析结果给客户机，完成域名解析，此解析具有权威性。
5. 如果本地 DNS 服务器无法查询到，则根据本地 DNS 服务器设置的转发器进行查询；

未用转发模式：本地 DNS 就把请求发至根 DNS 进行（迭代）查询，根 DNS 服务器收到请求后会判断这个域名(.com)是谁来授权管理，并会返回一个负责该顶级域名服务器的一个 IP。本地 DNS 服务器收 到 IP 信息后，将会联系负责.com 域的这台服务器。这台负责.com 域的服务器收到请求后，如果自己无法解析，它就会找一个管理.com 域的下一级 DNS 服务器地址给本地 DNS 服务器。当本地 DNS 服务器收到这个地址后，就会找域名域服务器，重复上面的动作，进行查询，直至找到域名对应的主机。

使用转发模式：此 DNS 服务器就会把请求转发至上一级 DNS 服务器，由上一级服务器进行解析，上一级服务器如果不能解析，或找根 DNS 或把转请求转至 上上级，以此循环。不管是本地 DNS 服务器用是是转发，还是根提示，最后都是把结果返回给本地 DNS 服务器，由此 DNS 服务器再返回给客户机。

搭建基本的 DNS 服务

## TCP 链接

![tcp](https://waqll.oss-cn-qingdao.aliyuncs.com/blog/tcp.jpeg)

## 处理请求

## 响应请求

### 304 问题

## 断开 TCP 链接

## 渲染页面

1. 渲染进程将 HTML 内容转换为能够读懂的 DOM 树结构。
2. 渲染引擎将 CSS 样式表转化为浏览器可以理解的 styleSheets，计算出 DOM 节点的样式。
3. 创建布局树，并计算元素的布局信息。
4. 对布局树进行分层，并生成分层树。
5. 为每个图层生成绘制列表，并将其提交到合成线程。
6. 合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图。
7. 合成线程发送绘制图块命令 DrawQuad 给浏览器进程。
8. 浏览器进程根据 DrawQuad 消息生成页面，并显示到显示器上。

![render-process](https://waqll.oss-cn-qingdao.aliyuncs.com/blog/renderingProcess.webp)

## 页面卡顿

造成页面卡顿的原因有很多，从渲染机制上和运行上可以分为两大类，分别是：

1. 渲染不及时，造成掉帧
   长时间占用 js 线程，页面回流，重绘较多，资源加载阻塞
2. 内存过大
   内存泄漏导致内存过大

## 利用 GPU 加速渲染

CSS 中的以下几个属性能触发硬件加速：

transform
opacity
filter
will-change

## 相关阅读

[https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)

[https://www.freecodecamp.org/news/what-happens-when-you-hit-url-in-your-browser/](https://www.freecodecamp.org/news/what-happens-when-you-hit-url-in-your-browser/)

[浏览器架构](https://xie.infoq.cn/article/5d36d123bfd1c56688e125ad3)
