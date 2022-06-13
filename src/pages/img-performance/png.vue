<!--
 * @Author: kian
 * @Date: 2021-12-11 10:21:48
 * @LastEditors: kian
 * @LastEditTime: 2021-12-11 11:02:28
 * @Description: 
-->
<template>
  <ul>
    <li v-for="item in lists" :key="item">
      <picture class="picture">
        <source type="image/png" :srcset="item + '?image_process=format,png'" />
        <img class="image" :src="item" />
      </picture>
    </li>
  </ul>
</template>
<script>
import { getLCP, getFID, getCLS } from 'web-vitals';
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      lists: [
        'https://cdn.gelonghui.com/static/h5/labor-day/image_3.webp',
        'https://cdn.gelonghui.com/static/h5/labor-day/image_4.webp',
        'https://cdn.gelonghui.com/static/h5/labor-day/image_5.webp',
      ],
    };
  },
  mounted() {
    getCLS(console.log);
    getFID(console.log);
    getLCP(console.log);
  },
};
</script>
<style scoped lang="less">
ul {
  width: 50%;
  display: block;
  margin: auto;
  li {
    list-style: none;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
