## 如何生成小程序跳转短链接

AppId：wx889af9cb69237bbe
Appsecrect：506024b70b66b4e4ca0b6ff729975d8f
Path: /pages/service/svip-v2/index
Query: code=xxx

1. xxx 对应的是文件名最后的英文字段
2. 编辑后台上传了文件名为：image_svip_service_qrcode_default.png，则 xxx 为 default，Query:code=default

## 如何生成推广链接

目前最新的短信链接没有接入任何推广平台，需要的话再添加。

链接 demo：http://test.m.gelonghui.com/mobile-activities/svip-training-camp/108/promote?gsource=test-demo&code=xxxx

1. 108 是活动 ID,在会员后台/活动管理/活动列表，里面添加
2. 链接同时支持付费和免费，需要在新增活动的时候，添加对应的字段
3. 活动封面活动封面图是最顶部的图片，
4. 跳转链接是购买成功之后，非微信浏览器里面显示，点击跳转到小程序客服的链接，可以去小程序官网生成 urlscheme
5. code 和上面生成小程序跳转短链接里面的 code 一致
