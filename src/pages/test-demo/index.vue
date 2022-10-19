<template>
  <div class="">{{ time }}</div>
</template>

<script>
import { countDonwTime } from '@/utils/index.js';
export default {
  data() {
    return {
      time: '',
    };
  },

  methods: {
    // 倒计时
    countDownTime() {
      const callback = (time) => {
        const { days, hours, minutes, seconds } = time;
        this.time = `${days}天${hours}小时${minutes}分${seconds}秒`;
      };
      countDonwTime(new Date('2022-10-20 00:10:00'), callback);
    },
  },
  created() {
    this.countDownTime();
  },
};
</script>

<style scoped lang="scss"></style>
