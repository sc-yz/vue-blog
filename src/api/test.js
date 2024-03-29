/*
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2022-02-10 15:01:46
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-28 09:05:17
 * @FilePath: /vue-blog-github/src/api/test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEcons
 */

const countDonwTime = (date) => {
  const date1 = new Date();
  const date2 = new Date('2022-10-19 23:28:20');
  const times = date2.getTime() - date1.getTime();

  let days = parseInt(times / (1000 * 60 * 60 * 24));
  let hours = parseInt((times % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = parseInt((times % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = parseInt((times % (1000 * 60)) / 1000);

  console.log(days, hours, minutes, seconds);

  const interval = setInterval(() => {
    if (seconds === 0 && minutes > 0) {
      seconds = 60;
      minutes = minutes - 1;
    }
    if (minutes === 0 && hours > 0) {
      minutes = 60;
      hours = hours - 1;
    }
    if (hours === 0 && days > 0) {
      hours = 24;
      days = days - 1;
    }
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(interval);
    } else {
      seconds = seconds - 1;
    }

    console.log(days, hours, minutes, seconds);
  }, 1000);
};

countDonwTime();
