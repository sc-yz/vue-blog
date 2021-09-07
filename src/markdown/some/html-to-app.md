# 哈哈

h5 跳转 app 的方式

## URL Scheme

在 APP 内部设定一个 URL Schemes。你可以把它理解为 APP 在网页端的文本传输协议，例如：

微信: weixin://
淘宝: taobao://

如果一个 APP 注册了自己的 URL Scheme，那我们就可以利用 URL Scheme ，从网页直接打开 APP 并且跳转到 APP 的某个页面，比如：我们可以利用 window.location.href = "weixin://" 来打开微信。

这个对于 iOS 和 Android 都生效。

`重点：微信客户端封禁了 URL Scheme 的功能 ！！！`

意味着在微信浏览器使用 window.location.href ="URL Scheme"是不会直接打开对象的客户端。如果需要打开，这在微信浏览器右上角，在别的浏览器打开页面，再进行跳转

[少数派 url-scheme](https://sspai.com/post/31500)

这里提一下微下载：

微下载是为移动应用提供的腾讯官方授权的下载推广链接，可在微信、手机 QQ、QQ 空间、浏览器等多场景实现一键下载安装，大大提升开发者分享营销的下载转化率。
微下载也是利用 URL Scheme 实现打开 app 的。微下载可以使用自定义的背景。这个也需要联系管理员

## Universal Link(通用链接)

    `这个只正对iOS生效！！！`

    ios9.0 之前支持 URL Scheme,iOS9.之后 Universal Link 技术出现

## 微信开放标签

2020 年 5 月左右，微信支持 `跳转小程序 wx-open-launch-weapp` 和 `跳转APP wx-open-launch-app`

1. 接入微信 js-sdk
2. 必须是服务号的 APPID
3. 微信开放平台中登录，设置公众账号-服务号-网页跳转移动应用-关联设置-JS 接口安全域名(`域名需完全匹配，比如填写www.baidu.com,则在m.badu.com,www.baidu.cn下是不生效的`),修改域名一个月三次机会。

遇到的问题：

在 nextjs 中使用，wx-open-launch-app 渲染略慢，大约 2.5 秒左右，别的没试过，然后因为使用的 script 标签，渲染成功时，wx-launch-open-app 标签会闪烁一下（默认会给一个打开 app 的标签）。
如何解决：用一个标签覆盖 wx-open-launch-app，让他们处于上下层，wx-open-luanch-app 在上面（因为要处理点击事件），并且设置 opcaty:0;

## 相关阅读

[微信打开 app](https://juejin.cn/post/6844904126300553223#heading-27)
[各大 app 的 UrlScheme](https://www.zhihu.com/question/313529493)
[微信开放标签](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html)和[跳转 App 的 wx-open-launch-app](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html)
