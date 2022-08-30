<!--
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2021-07-09 14:03:43
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-08-24 15:18:09
 * @FilePath: /vue-blog-github/src/pages/about/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="draw-lots">
    <div
      v-for="(item, index) in arr"
      :key="index"
      :class="['item', item.number ? 'number' : '']"
      @click="changeItem(index)"
    >
      <span>{{ item.name }}</span>
      <span v-if="item.number">{{ item.number }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
    };
  },

  methods: {
    getList() {
      for (let i = 1; i < 20; i++) {
        this.arr.push({
          name: `学生-${i}`,
          number: i % 6 === 0 ? i : '',
        });
      }
    },
    changeItem(index) {
      // this.$set(this.arr[index], 'number', index + 1);
      this.arr[index].number = index + 1;
    },
  },

  mounted() {
    this.getList();
  },
};
</script>
<style scoped lang="less">
.draw-lots {
  width: 100vw;
  height: 100vh;
  background: url('https://img10.gelonghui.com/library/34f83-238dcbc9-92bd-49e8-a7b4-9136bf314aac.png');
  background-size: 100% 100%;
  padding: 2vh 5vw;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-items: center;
    font-size: 20px;
    color: #fff;
    background: rgb(61, 102, 255); // 210
    margin-right: calc((90vw - 1200px) / 9);
    &.number {
      background: rgb(210, 210, 210);
    }
    &:nth-child(10n) {
      margin-right: 0;
    }
  }
}
</style>
