---
title: 前端安全
tags:
  - 前端
date: 2020-07-07 09:50:54
categories:
---

## XSS （跨站脚本攻击）

Cross-Site Scripting（跨站脚本攻击）简称 XSS，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。

为了和 CSS 区分，这里把攻击的第一个字母改成了 X，于是叫做 XSS。

XSS 的本质是：恶意代码未经过滤，与网站正常的代码混在一起；浏览器无法分辨哪些脚本是可信的，导致恶意脚本被执行。

而由于直接在用户的终端执行，恶意代码能够直接获取用户的信息，或者利用这些信息冒充用户向网站发起攻击者定义的请求。

在部分情况下，由于输入的限制，注入的恶意脚本比较短。但可以通过引入外部的脚本，并由浏览器执行，来完成比较复杂的攻击策略。

根据攻击的来源，XSS 攻击可分为存储型、反射型和 DOM 型三种。

### 存储型 XSS

存储型 XSS 的攻击步骤：

1. 攻击者将恶意代码提交到目标网站的数据库中。
2. 用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。
3. 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。

### 反射型 XSS

反射型 XSS 的攻击步骤：

1. 攻击者构造出特殊的 URL，其中包含恶意代码。
2. 用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。
3. 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

`反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。`

反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。
由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。
POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见。

### DOM 型 XSS

DOM 型 XSS 的攻击步骤：

1. 攻击者构造出特殊的 URL，其中包含恶意代码。
2. 用户打开带有恶意代码的 URL。
3. 用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。

#### 预防 DOM 型 XSS 攻击

**DOM 型 XSS 攻击，实际上就是网站前端 JavaScript 代码本身不够严谨，把不可信的数据当作代码执行了。**
在使用 .innerHTML、.outerHTML、document.write() 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 .textContent、.setAttribute() 等。
如果用 Vue/React 技术栈，并且不使用 v-html/dangerouslySetInnerHTML 功能，就在前端 render 阶段避免 innerHTML、outerHTML 的 XSS 隐患。
DOM 中的内联事件监听器，如 location、onclick、onerror、onload、onmouseover 等，a 标签的 href 属性，JavaScript 的 eval()、setTimeout()、setInterval() 等，都能把字符串作为代码运行。如果不可信的数据拼接到字符串中传递给这些 API，很容易产生安全隐患，请务必避免。

```javascript
input: 前端过滤，入库，后端过滤
output: 后端过滤，输出，前端过滤

// npm库过滤相关标签
js-xss

// provides a simple HTML
sanitize-html
```

## CSRF(Cross-site request forgery) （跨站请求伪造）

CSRF（Cross-site request forgery）跨站请求伪造，也被称为“One Click Attack”或者 Session Riding，通常缩写为 CSRF 或者 XSRF，是一种对网站的恶意利用。尽管听起来像跨站脚本，但它与 XSS 非常不同，XSS 利用站点内的信任用户，而 CSRF 则通过伪装成受信任用户的请求来利用受信任的网站。攻击通过在授权用户访问的页面中包含链接或者脚本的方式工作

CSRF 攻击
一个典型的 CSRF 攻击流程大概如下:

用户登录 a.com 并保留登录信息
攻击者引诱用户访问了 b.com
b.com 在用户不知情的情况下向 a.com 发送请求并携带用户的登录信息
a.com 接收请求验证登录信息通过执行某些恶意操作
攻击者在用户不知情的情况下冒充用户的身份完成了攻击.
攻击方式:

攻击者的网站
有文件上传漏洞的网站
第三方论坛,博客等网站
目标网站自身的漏洞
相对 XSS 攻击,CSRF 攻击不太一样

一般攻击发起点不在目标网站,而是被引导到第三方网站再发起攻击,这样目标网站就无法防止
攻击者不能获取到用户 Cookies,包括子域名,而是利用 Cookies 的特性冒充用户身份进行攻击
通常是跨域攻击,因为攻击者更容易掌握第三方网站而不是只能利用目标网站自身漏洞
攻击方式包括图片,URL,CORS,表单,甚至直接嵌入第三方论坛,文章等等,难以追踪

### 先看问题

1:为何浏览器要有同源策略,限制跨域?
2:同源策略有什么限制?
3:浏览器既然有同源策略,为何还允许 JSONP 或者 COSF 解决跨域?
4:浏览器已经限制跨域为何还会有 csrf?
5:scrf 防御核心思想是啥?

### 1: 为何浏览器要有同源策略,限制跨域?

答: 浏览器没有同源策略 那 csrf 攻击将会轻而易举,网站 cookie 随手可取,任何网站将变得不安全
eg:用户登录完银行网站,这时去访问其他网站,其他网站可以直接伪造请求将用户的银行钱转走;(如果没有同源策略这时会自动携带用户刚刚登录银行 cookie)

### 2: 同源策略有什么限制?

答: 浏览器同源策略主要限制:

- 跨域不允许 ajax 访问后的后续操作,直接报跨域错误 No ‘Access-Control-Allow-Origin’ header is present on the requested resource (这里请求是已经发出去的,就是说服务器是有收到请求,只是浏览器限制获得请求后的操作,不允许处理跨域数据)

- 跨域不允许携带 cookie,不管是标签< scrip> 方式还是 ajax 请求方式 都是不允许携带 cookie 的,上面的 ajax 服务器是可以收到请求,但是是没有任何 cookie 的

- img 标签跨域请求图片会污染 canvas,不允许 canvas 输出,常用 html2canvas 一款 html 转图片的插件,原 html 里的图片跨域则最终生成图片会失败

### 3: 浏览器既然有同源策略,为何还允许 JSONP 或者 COSF 解决跨域?

答: JSONP 或者 COSF 解决跨域 都需要后端配合,并且 COSF 只有后台配置白名单才能使用 cookie,不能使用 cookie 是不能造成跨域攻击,通过这样的方式将网站是否能跨域,哪些域能跨交给各自网站去判断(比如银行网站只要不设置 COSF 请求头头是不能被跨域的)

### 4: 浏览器已经限制跨域为何还会有 csrf?

答: 上面已经说到浏览器已经限制跨域的 cookie 使用,这只是针对 ajax 或者< scrip>访问的,下面的情况都可以正常使用 cookie

- 直接通过 windo.location.href=xxx 重定向跨域
- 通过< form> 表单跨域提交 ,不论 post 或者 get
- 通过< iframe> 打开跨域连接

所以同源策略没有完全限制跨域攻击的可能,要完全限制只能要求网页不能跳外链或者任何外链都不能带 cookie,这样做成本会很重会严重影响网站功能开发

### 5: csrf 防御核心思想是啥?

答 5:跨域攻击防御(简单的说就是怎么判断访问是从自己的网站或者 app 发出的)核心思想:判断发出请求的网站来源;
主要实现如下:

- 验证 HTTP Referer
  HTTP Referer 即是打开当下链接的页面的域名(网页是从哪个页面链接过来的);
  跨域攻击只能直接跳转或者 < form>提交,正常情况是不能伪造 Referer 的 服务端只要获取到 Referer 校验是否合法链接即可,当然这是不能百分百保证的,Referer 的值是由浏览器提供的，虽然 HTTP 协议上有明确的要求，但是每个浏览器对于 Referer 的具体实现可能有差别，并不能保证浏览器自身没有安全漏洞

- 通过自定义 token
  网站每次进入一个页面都必须由后端生成一个 token 通过预编译(php 模板) 或者请求头方式传给前端,前端每次请求都要带上上一次请求的返回的 token,token 可由后端加密,这个有点像 referer 只是这个 referer 是我们自己定义的

## 常见的攻击手段

1. 大小写绕过
   这个绕过方式的出现是因为网站仅仅只过滤了`<script>`标签，而没有考虑标签中的大小写并不影响浏览器的解释所致。具体的方式就像这样：
   `http://192.168.1.102/xss/example2.php?name=<sCript>alert("hey!")</scRipt>`
2. img 的 error 属性
3. iframe script 属性
4. js 事件标签 onclick ，onfocus，onmouse 等

## 相关阅读

[XSS](https://juejin.im/post/5bad9140e51d450e935c6d64)
[CSRF](https://lequ7.com/2019/08/06/javascript/qian-duan-an-quan-xi-lie-CSRF-pian/)
[https://juejin.cn/post/6898124066063024136](https://juejin.cn/post/6898124066063024136)
[美团 xss](https://tech.meituan.com/2018/09/27/fe-security.html)
[美团 csrf](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)
[https://wooyun.js.org/drops/%E8%B0%83%E7%9A%AE%E7%9A%84location.href.html](https://wooyun.js.org/drops/%E8%B0%83%E7%9A%AE%E7%9A%84location.href.html)
