<template>
  <div @click="remove1" class="tip" :style="{ top: top + 'px' }">
    {{ title }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      visiable: false,
      top: 0,
    };
  },

  methods: {
    show(a, b) {
      return a + b;
    },

    remove1() {
      console.dir(this);
      console.dir(this.$el.parentNode.removeChild(this.$el));
    },
  },
};
</script>

<style scoped lang="less">
.tip {
  position: fixed;

  left: 0;
  right: 0;
  margin: auto;
}
</style>
