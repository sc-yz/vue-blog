---
title: jsBridge
categories:
tags:
---

## js 调用 native

通过在 webview 页面里直接注入原生 js 代码方式，使用 addJavascriptInterface 方法来实现

1. android

   ```javascript

   class JSInterface {
       @JavascriptInterface //注意这个代码一定要加上
       public String getUserData() {
           return "UserData";
       }
   }
   // 注入方法
   webView.addJavascriptInterface(new JSInterface(), "NativeInterface");


   // webview 调用
   const result = window.NativeInterface.getUserData()

   ```

2. iOS
   iOS 8.0 及以上系统，WKWebview 提供了`window.webkit.messageHandlers`方法,
   以下为创建 WKWebViewConfiguration 和 创建 WKWebView 示例：

   ```javascript
       WKWebViewConfiguration *configuration = [[WKWebViewConfiguration alloc] init];
       WKPreferences *preferences = [WKPreferences new];
       preferences.javaScriptCanOpenWindowsAutomatically = YES;
       preferences.minimumFontSize = 40.0;
       configuration.preferences = preferences;


       - (void)viewWillAppear:(BOOL)animated
       {
           [super viewWillAppear:animated];
           [self.webView.configuration.userContentController addScriptMessageHandler:self name:@"share"];
           [self.webView.configuration.userContentController addScriptMessageHandler:self name:@"pickImage"];
       }
       - (void)viewWillDisappear:(BOOL)animated
       {
           [super viewWillDisappear:animated];
           [self.webView.configuration.userContentController     removeScriptMessageHandlerForName:@"share"];
           [self.webView.configuration.userContentController removeScriptMessageHandlerForName:@"pickImage"];
       }
   ```

   ```javascript
   // webview页面调用
   window.webkit.messageHandlers.fn.postMessage();
   ```

   注意在 ios 中调用 webview 的方法时，存在返回值，这个过程是异步的，不能实时获取返回值，可以将方法封装成 promise

## native 调用 js

Native 调用 JS 比较简单，只要 H5 将 JS 方法暴露在 Window 上给 Native 调用即可
