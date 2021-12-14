<!--
 * @Author: kian
 * @Date: 2021-12-13 10:20:00
 * @LastEditors: kian
 * @LastEditTime: 2021-12-14 15:35:58
 * @Description:
-->

# 哈哈

## 浏览器历史

[browser-wikipedia](https://zh.wikipedia.org/wiki/%E7%BD%91%E9%A1%B5%E6%B5%8F%E8%A7%88%E5%99%A8)
[browser-firefox](https://www.mozilla.org/zh-CN/firefox/browsers/browser-history/)

## 浏览器

早期：Mosaic，Netscape Navigator
主要：IE、Edge、Chrome、FireFox、Safari、Opera

1. [Mosaic](https://zh.wikipedia.org/wiki/Mosaic)

   开发者：[NCSA](https://zh.wikipedia.org/wiki/%E5%9B%BD%E5%AE%B6%E8%B6%85%E7%BA%A7%E7%94%B5%E8%84%91%E5%BA%94%E7%94%A8%E4%B8%AD%E5%BF%83)
   初始版本：0.5 / 1993 年 1 月 23 日

2. [Netscape Navigator](https://zh.wikipedia.org/wiki/%E7%BD%91%E6%99%AF%E5%AF%BC%E8%88%AA%E8%80%85)

   开发者：[网景通信公司](https://zh.wikipedia.org/wiki/%E7%B6%B2%E6%99%AF)
   初始版本：1994 年 12 月 15 日

3. [IE(Internet_Explore)](https://zh.wikipedia.org/wiki/Internet_Explorer)
   开发者:[微软](https://zh.wikipedia.org/wiki/%E5%BE%AE%E8%BB%9F)
   初始版本：1995 年 8 月 16 日

4. [FireFox](https://zh.wikipedia.org/wiki/Firefox%E7%80%8F%E8%A6%BD%E5%99%A8)
   开发者:[Mozilla 基金会](https://zh.wikipedia.org/wiki/Mozilla%E5%9F%BA%E9%87%91%E6%9C%83)及贡献者[Mozilla 公司](https://zh.wikipedia.org/wiki/Mozilla%E5%85%AC%E5%8F%B8)
   初始版本:2004 年 11 月 9 日

   Firefox 于 2002 年由 Mozilla 社群成员创建，当时叫做“Phoenix”，因为社群成员们想要一个独立的浏览器，而非 Mozilla Application Suite 这样的包。即使在测试阶段，Firefox 也在测试者中颇为流行，并因其速度、安全性及扩展组件而受称赞。Firefox 于 2004 年 11 月首次发布，并且 9 个月内下载量超过 6,000 万，获取了巨大的成功，Internet Explorer 的主导地位首次受到了挑战[16]。Firefox 被认为是 Netscape Navigator 的精神续作，因为 Netscape 于 1998 年被 AOL 收购前创建了 Mozilla 社群。

5. [Chrome](https://zh.wikipedia.org/wiki/Google_Chrome)

   开发者:[谷歌](https://zh.wikipedia.org/wiki/Google)

   初始版本：2008 年 9 月 2 日

6. [Safari](https://zh.wikipedia.org/wiki/Safari)
   开发者:[Apple Inc.](https://zh.wikipedia.org/wiki/%E8%98%8B%E6%9E%9C%E5%85%AC%E5%8F%B8)
   初始版本:2003 年 1 月 7 日

   Safari 浏览器是苹果公司所开发，并内置于 macOS（前称 OS X、Mac OS X）、iOS 与 iPadOS 的网页浏览器。在 1997 年以前，Mac 预装的浏览器是 Netscape Navigator。之后苹果和微软达成协议，以在 Mac 上使用 Internet Explorer for Mac 作默认浏览器换取微软开发 Mac 版的 Microsoft Office。Safari 浏览器在 2003 年 1 月 7 日首度发行测试版[8]，并从 Mac OS X Panther 开始成为 Mac OS X 的默认浏览器，也是 iOS 和 iPadOS 内置的默认浏览器。Windows 版本的首个测试版在 2007 年 6 月 11 日推出，支持 Windows XP、Windows Vista 和 Windows 7[9]，并在 2008 年 3 月 18 日推出正式版，但苹果已于 2012 年 7 月 25 日停止开发 Windows 版的 Safari 浏览器[10]。

7. Opera

## 浏览器内核

- 排版引擎

  ![image](https://upload.wikimedia.org/wikipedia/zh/timeline/8i156vwxwht27bxioxoe9b3x2of2zik.png)

  1. KHTML

  [排版引擎-wikipedia](https://zh.wikipedia.org/wiki/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%95%E6%93%8E)

- Javascript 引擎

  [Javascript 引擎-wikipedia](https://zh.wikipedia.org/wiki/JavaScript%E5%BC%95%E6%93%8E)

## webview

- [iOS](https://zh.wikipedia.org/zh/IOS) webview

  1. UIWebview
     从 iOS 2.0 开始，UIWebView 类就已经作为一种在应用程序中显示 HTML 内容的方式出现了

     UIWebView 是 iOS 上对 WebKit 的封装，WebKit 是渲染引擎，UIWebView 是渲染引擎和 JS 引擎的组合。

  2. WKWebview
     iOS 8.0 引入了 WKWebView 作为替代品。

     iOS13 开始苹果将 UIWebview 列为过期 API。2020 年 4 月起 App Store 将不再接受使用 UIWebView 的新 App 上架、2020 年 12 月起将不再接受使用 UIWebView 的 App 更新。

     WebKit 框架使用 WKWebView 来代替 IOS 的 UIWebView 和 OSX 的 WebView，并且使用 Nitro JavaScript 引擎，这意味着所有第三方浏览器运行 JavaScript 将会跟 safari 一样快。

     iOS 的 WebView 基于 Safari，Safari 的版本跟随 iOS 系统

- [Android](https://zh.wikipedia.org/wiki/Android) webview
  Android WebView 在低版本和高版本采用了不同的 webkit 版本内核，在 4.4 版本后使用 Chrome 内核。

  安卓不限制应用使用自己的浏览器内核，安卓微信用了腾讯自己的基于 WebKit 的 X5 内核：腾讯浏览服务

  [参考](https://developer.chrome.com/docs/multidevice/android/)

[difference-between-uiwebview-and-wkwebview](https://www.hackingwithswift.com/example-code/wkwebview/whats-the-difference-between-uiwebview-and-wkwebview)

## Navigator.userAgent

    ```txt
    userAgent = appCodeName/appVersion number (Platform; Security; OS-or-CPU; Localization; rv: revision-version-number) product/productSub Application-Name Application-Name-version
    ```

## 相关阅读

[why-do-all-browsers-user-agents-start-with-mozilla](https://stackoverflow.com/questions/1114254/why-do-all-browsers-user-agents-start-with-mozilla)
[为什么所有主要浏览器的 User-Agent 都是 Mozilla/x.0 开头？](https://www.zhihu.com/question/19553117)
[浏览器内核](https://juejin.cn/post/6844904055236460558)
[android](https://zh.wikipedia.org/wiki/Android)
[android-webview](https://stackoverflow.com/questions/33998074/what-is-the-engine-of-android-native-browser)
