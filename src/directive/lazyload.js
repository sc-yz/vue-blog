/*
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2022-09-22 10:42:05
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-22 15:01:13
 * @FilePath: /vue-blog-github/src/directive/lazyload.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const lazyload = {
  bind(el, binding) {
    lazyload.init(el, binding);
  },
  inserted(el) {
    console.log('insert');

    if (!IntersectionObserver) {
      console.log('支持IntersectionObserver');
      lazyload.Observer(el);
    } else {
      console.log('不支持');
      lazyload.listenerScroll(el);
    }
  },
  init(el, _binding) {
    console.log(el, _binding);
    el.setAttribute('data-src', el.src);
    el.setAttribute(
      'src',
      'https://p1-q.mafengwo.net/s10/M00/6A/A7/wKgBZ1ooqROANJAYAAKS5BEN4qA76.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90'
    );
    console.log('init', el);
  },
  Observer(el) {
    const io = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        console.log(entry, entry.isIntersecting, entry.target.dataset.src);
        if (entry.isIntersecting && entry.target.dataset.src) {
          el.src = entry.target.dataset.src;
          el.removeAttribute('data-src');
        }
      });
    });
    io.observe(el);
  },
  listenerScroll(el) {
    console.log('listenerScroll');
    lazyload.scrollBack(el);
    window.addEventListener('scroll', () => {
      console.log('listenerScroll-callback');
      lazyload.scrollBack(el);
    });
  },
  scrollBack(el) {
    const clientHeight = document.documentElement.clientHeight;
    const top = el.getBoundingClientRect().top;
    console.log('scrollBack', el.getBoundingClientRect(), top, clientHeight);
    if (top < clientHeight) {
      el.src = el.dataset.src;
      el.removeAttribute('data-src');
    }
  },
};

export default lazyload;
