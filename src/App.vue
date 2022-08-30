<!--
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2021-05-05 09:20:18
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-08-30 16:14:34
 * @FilePath: /vue-blog-github/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div id="app">
    <!-- <header id="nav">
      <div class="nav-container">
        <router-link to="/">Vue</router-link> |
        <router-link to="/">Js</router-link> |
        <router-link to="/pack">Pack</router-link>
      </div>
    </header>
    <div id="blog-container"> -->

    <router-view />

    <!-- </div> -->
  </div>
</template>

<script>
import VConsole from 'vconsole';

export default {
  mounted() {
    new VConsole();

    console.info('vconsole-info-测试');
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  width: 100%;
  height: 100%;

  #nav {
    .nav-container {
      max-width: 1200px;
      margin: auto;
      height: 50px;
      display: flex;
      align-items: center;
    }
  }
  #blog-container {
    max-width: 1200px;
    margin: auto;
  }
}
</style>
