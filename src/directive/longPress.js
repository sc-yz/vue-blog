/*
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2022-09-01 10:35:50
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-01 11:07:36
 * @FilePath: /vue-blog-github/src/filtter/longPress.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// longpress.js
// import Vue from 'vue'
const longpress = {
  bind: function (el, binding, vNode) {
    // 确保提供的表达式是函数
    if (typeof binding.value !== 'function') {
      // 获取组件名称
      const compName = vNode.context.name;
      // 将警告传递给控制台
      let warn = `[longpress:] provided expression '${binding.expression}' is not afunction, but has to be `;
      if (compName) {
        warn += `Found in component '${compName}' `;
      }
      console.warn(warn);
    }
    // 定义变量
    let pressTimer = null;
    // 定义函数处理程序
    // 创建计时器（ 1秒后执行函数 ）
    let start = (e) => {
      if (e.type === 'click' && e.button !== 0) {
        return;
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          // 执行函数
          handler();
        }, 2000);
      }
    };
    // 取消计时器
    let cancel = () => {
      // 检查计时器是否有值
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    };
    // 运行函数
    const handler = (e) => {
      // 执行传递给指令的方法
      binding.value(e);
    };
    // 添加事件监听器
    el.addEventListener('mousedown', start);
    el.addEventListener('touchstart', start);
    // 取消计时器
    el.addEventListener('click', cancel);
    el.addEventListener('mouseout', cancel);
    el.addEventListener('touchend', cancel);
    el.addEventListener('touchcancel', cancel);
  },
};
export default longpress;
