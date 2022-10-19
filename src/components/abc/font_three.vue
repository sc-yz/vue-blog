<!--
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2022-09-13 14:29:26
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-13 15:32:06
 * @FilePath: https://codepen.io/LouiseX/pen/mLrxmB
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <canvas id="stage"></canvas>
</template>

<script>
import { Scene } from './three';
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      new Scene({
        canvas: '#stage',
        width: window.innerWidth,
        height: window.innerHeight,
        alphabet: 'ABCD',
        color: 'red',
        intervalTime: 5000,
      });
    },
  },
};
</script>

<style scoped lang="less">
canvas {
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
}
</style>
