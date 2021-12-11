<!--
 * @Author: kian
 * @Date: 2021-12-11 10:51:14
 * @LastEditors: kian
 * @LastEditTime: 2021-12-11 18:01:12
 * @Description:
-->

# 哈哈

## 网站

## LCP FID CLS

良好 需要改进 欠佳
LCP <=2.5 秒 <=4 秒 >4 秒
FID <=100 毫秒 <=300 毫秒 >300 毫秒
CLS <=0.1 <=0.25 >0.25

- LCP（最大内容渲染时间）：从用户请求网址到在视口中渲染最大可见内容元素所需的时间。最大的元素通常是图片或视频，也可能是大型块级文本元素。此指标很重要，因为它可以告诉浏览者网址会真正加载。
  报告中显示的累计 LCP 是指网址群组中某个网址在其 75% 的访问事件中达到 LCP 状态所用的时间。
- FID（首次输入延迟）：从用户首次与您的网页互动（点击链接、点按按钮，等等）到浏览器响应此次互动之间的用时。这种衡量方案的对象是被用户首次点击的任何互动式元素。此指标在用户需要执行操作的网页上非常重要，因为可据此判断网页进入互动状态的时间。
  报告中显示的累计 FID 是指网址群组中某个网址在其 75% 的访问事件中获得此值或更高值。
- CLS (Cumulative Layout Shift)：CLS 会衡量在网页的整个生命周期内发生的所有意外布局偏移的得分总和。得分是零到任意正数，其中 0 表示无偏移，且数字越大，网页的布局偏移越大。此指标很重要，因为当用户尝试与网页元素互动时，如果网页元素出现偏移，这会导致糟糕的用户体验。如果您似乎找不出得分很高的原因，请尝试与该网页互动，看看这对得分有何影响。
  报告中显示的累计 CLS 是指网址群组中某个网址在 75% 的访问事件中的最低相同 CLS。

## 相关阅读

[网站优化技巧之图片容量优化](https://blog.dteam.top/posts/2020-09/optimize-website-image-size.html#%E5%88%A9%E7%94%A8%E9%98%BF%E9%87%8C%E4%BA%91-cdn-%E8%BE%B9%E7%BC%98%E8%84%9A%E6%9C%AC%E5%AE%9E%E7%8E%B0%E8%87%AA%E9%80%82%E5%BA%94%E8%BD%AC%E6%8D%A2-webp)

[微信内置浏览器 webp](https://wubin.work/blog/articles/144)

["核心网页指标"报告](https://support.google.com/webmasters/answer/9205520?hl=zh-Hans)
[Avoid an excessive DOM size](https://www.corewebvitals.io/pagespeed/fix-avoid-excessive-dom-size-lighthouse)
