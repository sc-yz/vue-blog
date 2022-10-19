<!--
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2022-09-09 14:12:50
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-13 16:52:08
 * @FilePath: /vue-blog-github/src/components/abc/font_1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">
    <svg viewBox="0 0 960 300">
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="80%">{{ text }}</text>
      </symbol>

      <g class="g-ants">
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'AAAAA',
    },
  },
};
</script>

<style scoped lang="less">
// @import '～https://fonts.googleapis.com/css?family=Montserrat';
svg {
  display: block;
  font: 10.5em 'Montserrat';
  width: 960px;
  height: 300px;
  margin: 0 auto;
}

.text-copy {
  fill: none;
  stroke: white;
  stroke-dasharray: 6% 29%;
  stroke-width: 5px;
  stroke-dashoffset: 0%;
  animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1) {
  stroke: #4d163d;
  animation-delay: -1;
}

.text-copy:nth-child(2) {
  stroke: #840037;
  animation-delay: -2s;
}

.text-copy:nth-child(3) {
  stroke: #bd0034;
  animation-delay: -3s;
}

.text-copy:nth-child(4) {
  stroke: #bd0034;
  animation-delay: -4s;
}

.text-copy:nth-child(5) {
  stroke: #fdb731;
  animation-delay: -5s;
}

@keyframes stroke-offset {
  100% {
    stroke-dashoffset: -35%;
  }
}
</style>
