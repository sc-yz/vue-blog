/*
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2021-07-08 15:41:25
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-21 17:15:19
 * @FilePath: /vue-blog-github/src/api/throttle.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 时间固定，n秒内只触发一次

function throttle (fn, t) {
  let timer;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.call(this,...arguments);
      }, t);
    }
  };
}




function scrollHeight(e){
    console.log(e)
}

window.addEventListener('scroll',throttle(scrollHeight,400);






