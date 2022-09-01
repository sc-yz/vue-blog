/*
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2021-05-06 10:07:39
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-01 10:42:01
 * @FilePath: /vue-blog-github/src/filtter/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';

const initTime = (i) => {
  return i.toFixed(2);
};

const allFiltters = {
  initTime,
};

Object.keys(allFiltters).forEach((key) => {
  Vue.filter(key, allFiltters[key]);
});
