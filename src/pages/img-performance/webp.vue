<!--
 * @Author: kian
 * @Date: 2021-12-11 10:21:48
 * @LastEditors: kian
 * @LastEditTime: 2021-12-11 15:51:25
 * @Description: 
-->
<template>
  <ul>
    <li v-for="(item, index) in lists" :key="index">
      <!-- <picture class="picture">
        <source
          type="image/webp"
          :srcset="item + '?image_process=format,webp'"
        /> -->
      <img class="image" :src="item + '?image_process=format,webp'" />
      <!-- </picture> -->
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
        'https://img10.gelonghui.com/010f0-7279a0c4-815a-4d53-a196-61a67ffd6afb.png',
        'https://img10.gelonghui.com/010c1-3f683851-074b-4c76-ac62-fe9844b45c18.png',
        'https://img10.gelonghui.com/0539d-0bc02680-93cc-4312-88f0-b1df11cb97d5.jpg',
        'https://img10.gelonghui.com/05923-955619fa-e96a-4df6-932b-107adffcd6cc.png',
        'https://img10.gelonghui.com/08197-4d662398-8455-4d55-a7d0-7eb0de3f5370.png',
        'https://img10.gelonghui.com/083fe-4f51ba90-41a8-4def-b415-1953989a4ac6.png',
        'https://img10.gelonghui.com/0bd35-08674b6f-87f4-44ee-9c14-4e3b8e88bd51.jpg',
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
