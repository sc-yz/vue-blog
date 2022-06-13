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

chrome && firefox 可以直接打开应用
Android 下它们会拦截掉所有页面调起。需要提示用户从系统浏览器中打开。

[少数派 url-scheme](https://sspai.com/post/31500)

这里提一下微下载：

微下载是为移动应用提供的腾讯官方授权的下载推广链接，可在微信、手机 QQ、QQ 空间、浏览器等多场景实现一键下载安装，大大提升开发者分享营销的下载转化率。
微下载也是利用 URL Scheme 实现打开 app 的。微下载可以使用自定义的背景。这个也需要联系管理员

## Universal Link(通用链接)

    `这个只正对iOS生效！！！`

    ios9.0 之前支持 URL Scheme,iOS9.之后 Universal Link 技术出现

## Deep Link && App Link

`深层链接`是指将用户直接转到应用中的特定内容的网址。在 Android 中，您可以通过添加 intent 过滤器以及从传入的 intent 提取数据来设置深层链接，以便将用户吸引到正确的 Activity。

不过，如果用户设备上安装的其他应用可以处理相同的 intent，则用户可能无法直接进入您的应用。例如，点击银行发来的电子邮件中的网址可能会显示一个对话框，询问用户是使用浏览器还是银行自己的应用打开此链接。

Android 6.0（API 级别 23）及更高版本中的 `Android 应用链接`使应用能将自己指定为给定类型链接的默认处理程序。如果用户不想使用某个应用作为默认处理程序，则可以从设备的系统设置中替换此行为。

App Link 类似 Univarsal Link

## 微信开放标签

2020 年 5 月左右，微信支持 `跳转小程序 wx-open-launch-weapp` 和 `跳转APP wx-open-launch-app`

1. 接入微信 js-sdk
2. 必须是服务号的 APPID
3. 微信开放平台中登录，设置公众账号-服务号-网页跳转移动应用-关联设置-JS 接口安全域名(`域名需完全匹配，比如填写www.baidu.com,则在m.badu.com,www.baidu.cn下是不生效的`),修改域名一个月三次机会。
4. 微信直接打开链接，分享出去是链接（不是卡片），不能使用微信开发标签

遇到的问题：

在 nextjs 中使用，wx-open-launch-app 渲染略慢，大约 2.5 秒左右，别的没试过，然后因为使用的 script 标签，渲染成功时，wx-launch-open-app 标签会闪烁一下（默认会给一个打开 app 的标签）。
如何解决：用一个标签覆盖 wx-open-launch-app，让他们处于上下层，wx-open-luanch-app 在上面（因为要处理点击事件），并且设置 opcaty:0;

## nextjs 代码

```js
import React from 'react';
import { getAppUrl } from 'utils/public';
import { UseIsWechat } from 'customHooks/useIsWechat';
/**
 * 跳转到app
 * @param props
 */
interface WxOpenLaunchAppBtnProps {
  url?: string;
  height: string;
}
const WxOpenLaunchAppBtn = (props: WxOpenLaunchAppBtnProps) => {
  const { url, height } = props;
  const IsInWeiXin = UseIsWechat();

  return (
    <>
      {IsInWeiXin && process.env.NEXT_PUBLIC_G_ENV === 'production' ? (
        <div className="wx-open-luanch-app-box">
          {/* @ts-ignore */}
          <wx-open-launch-app
            appid="wx9c61118ae1033a2e"
            extinfo={getAppUrl(url || 'https://www.gelonghui.com')}
            style={{ display: 'block' }}
          >
            <script
              type="text/wxtag-template"
              style={{ width: '100%', height: height, display: 'block' }}
            >
              <p
                className="wx-btn"
                style={{
                  width: '100%',
                  height: height,
                  display: 'block',
                  opacity: 0,
                }}
              ></p>
            </script>

            {/* @ts-ignore */}
          </wx-open-launch-app>
        </div>
      ) : null}
      <style jsx>{`
        .wx-open-luanch-app-box {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: ${height};
          z-index: 1;
          display: block;
        }
      `}</style>
    </>
  );
};

export default WxOpenLaunchAppBtn;
```

```js
// how to use

import React from 'react';
import Head from 'next/head';
import WxOpenLaunchApptTest from 'components/public/WxOpenLaunchAppV2';
import { UseWechatShare } from 'customHooks/useWechatShare';
import { getAppUrl, getIsWechat } from 'utils/public';

const ToApp = (props: any) => {
  // 需要jssdk才能使用微信分享喝wx-open-launch-app
  UseWechatShare({
    pageShareimgURL: '',
    pageShareDesc: '简介',
    pageShareTitle: '标题',
  });
  const ToApp = () => {
    if (getIsWechat() && process.env.NEXT_PUBLIC_G_ENV === 'production') return;
    window.location.href = getAppUrl(window.location.href);
  };
  return (
    <>
      <Head>
        <title>跳转App</title>
      </Head>
      <div className="to-app-demo">
        <div className="open-app-btn">
          <div className="btn" onClick={ToApp}>
            打开APPwebview
          </div>
          <WxOpenLaunchApptTest
            height="30px"
            url="https://m.gelonghui.com/mobile-activities/portfolio/battle/80"
          />
        </div>

        <div className="open-app-btn">
          <div className="btn" onClick={ToApp}>
            打开APP帖子
          </div>
          <WxOpenLaunchApptTest
            height="30px"
            url="https://m.gelonghui.com/p/506888"
          />
        </div>
      </div>

      <style jsx>{`
        .to-app-demo {
          width: 100%;
          min-height: 100vh;
          background: #eee;
          padding: 20px;
          .open-app-btn {
            position: relative;
            width: 150px;
            height: 30px;
            display: block;
            margin-bottom: 30px;
            .btn {
              width: 150px;
              height: 30px;
              background: #386ff2;
              text-align: center;
              color: #fff;
              line-height: 30px;
              border-radius: 3px;
            }
          }
        }
      `}</style>
    </>
  );
};
export default ToApp;
```

## 相关阅读

[微信打开 app](https://juejin.cn/post/6844904126300553223#heading-27)
[各大 app 的 UrlScheme](https://www.zhihu.com/question/313529493)
[微信开放标签](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html)
[跳转 App 的 wx-open-launch-app](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html)
[App Link](https://developer.android.com/training/app-links)
[不同浏览器的 App Link 表现不一致](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-applinking-faq-0000001086561880)
[launch-app-from-browser](https://harttle.land/2017/12/24/launch-app-from-browser.html)
