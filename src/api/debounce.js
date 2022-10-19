/*
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2021-07-08 15:41:24
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-27 14:24:57
 * @FilePath: /vue-blog-github/src/api/debounce.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// n秒时间后，执行回调函数，如果n秒内时间再被触发，则再往后推n秒执行回调

function debounce(fn, t) {
  let timer;
  return function (...arguments) {
    if (timer) {
      clearTimeout(timer);
      return;
    }
    timer = setTimeout(() => {
      fn.call(this, ...arguments);
    }, t);
  };
}

// function scrollheight(e) {
//   console.log(e);
// }

// window.addEventListener("scroll", debounce(scrollheight(), 3000));
