/*
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2021-05-06 10:03:27
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-01 11:10:18
 * @FilePath: /vue-blog-github/src/directive/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import click from './click';
import longpress from './longPress';

const allDirective = {
  click,
  longpress,
};

Object.keys(allDirective).forEach((key) => {
  Vue.directive(key, allDirective[key]);
});
