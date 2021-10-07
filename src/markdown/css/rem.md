<!--
 * @Author: kian
 * @Date: 2021-09-27 09:47:26
 * @LastEditors: kian
 * @LastEditTime: 2021-09-27 14:35:54
 * @Description:
-->

# haha

## 设备像素 (Device Pixels)

设备像素：设备屏幕的物理像素，单位是 px。比如 iphone6 的 `750px*1334px`

## 分辨率

对于屏幕，分辨率一般表示屏幕上显示的物理像素总和。比如，我们说 iPhone6 屏幕分辨率是 750x1334px

对于图像，概念等同于图像尺寸、图像大小、像素尺寸等等。比如，我们说 20x20px 的 icon

## css 像素

CSS 像素（CSS Pixels）：是 Web 编程的概念，指的是 CSS 样式代码中使用的逻辑像素

所以，1 个 CSS 像素在不同设备上可能对应不同的物理像素数，这个比值是设备的属性（Device Pixel Ratio，设备像素比

## 设备像素比

DPR,通过`window.devicePixelRatio`获取

## 相关阅读

[【移动端适配】为什么根元素 font-size 设置成 100px 或 625%？](https://www.cnblogs.com/2019gdiceboy/p/11024352.html)
[设备像素](http://www.ayqy.net/blog/%E5%AE%8C%E5%85%A8%E7%90%86%E8%A7%A3px-dpr-dpi-dip/)
[postcss-px-vw](https://github.com/evrone/postcss-px-to-viewport)
[rem-vw](https://www.zhihu.com/question/37179916)
