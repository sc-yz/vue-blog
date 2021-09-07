// 时间固定，n秒内只触发一次

function  (fn, t) {
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






