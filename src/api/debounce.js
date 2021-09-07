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
