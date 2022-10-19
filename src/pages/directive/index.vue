<!--
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2022-09-22 09:08:25
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-27 09:38:52
 * @FilePath: /vue-blog-github/src/pages/directive/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div v-throttle:100="submit">点击事件</div>
    <div @click="jump">1231</div>
    <div v-for="item in list" :key="item">{{ item }}</div>
    <img
      style="margin-top: 1200px"
      src="https://img3.gelonghui.com/2275d-def33eba-4416-4c6b-aa5e-f5f3f40b7092.png?x-oss-process=image/resize,m_fixed,w_370,h_250/quality,Q_60"
      v-lazyload
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.list = Object.freeze([1, 2, 3, 4]);
  },
  methods: {
    submit() {
      console.log('点击事件');
    },
    jump() {
      // this.$router.push('/');
      // this.list = Object.freeze([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      // this.list = [...this.list, 5, 6, 7, 8, 9, 10];
      this.list = this.list.concat([5, 6, 7, 8, 9, 10]);
    },
  },
};
</script>

<style scoped lang="less"></style>
