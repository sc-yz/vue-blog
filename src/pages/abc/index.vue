<!--
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2022-09-09 14:07:53
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-13 17:23:58
 * @FilePath: /vue-blog-github/src/pages/abc/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="abc">
    <!-- <font-one></font-one> -->
    <!-- <font-two></font-two> -->
    <!-- <font-three></font-three> -->
    <!-- <font-four></font-four> -->
    <font-five></font-five>
  </div>
</template>

<script>
import FontOne from '@/components/abc/font_one.vue';
// import FontTwo from '@/components/abc/font_two.vue';
import FontThree from '@/components/abc/font_three.vue';
import FontFour from '@/components/abc/font_four.vue';
import FontFive from '@/components/abc/font_five.vue';
export default {
  components: {
    FontOne,
    // FontTwo,
    FontThree,
    FontFour,
    FontFive,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
.abc {
  width: 100%;
  height: 100%;
  background: black;
  color: red;
  font-size: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<!-- https://codepen.io/html5andblog/pen/ZWmYMy -->
<!-- https://alvarotrigo.com/blog/css-text-animations/ -->
