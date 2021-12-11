/*
 * @Author: kian
 * @Date: 2021-11-03 09:24:53
 * @LastEditors: kian
 * @LastEditTime: 2021-11-09 19:04:56
 * @Description:
 */
const dayjs = require('dayjs');

const time = {
  0: 1111,
  9: 1074,
  16: 289,
  24: 0,
};

const time1 = {
  0: 1111,
  24: 0,
};
// 0  1111
// 12
// 24 0

// 24 * 60 * 60 * 1000 /(1111 - 0) = 1

// t =
//   (h * 60 * 60 * 1000) / num
// 一次的时间
function fake(time) {
  const now = dayjs().valueOf();
  const nowH = dayjs(now).format('H');
  const today = dayjs(now).format('YYYY-MM-DD');
  console.log(nowH, today);
  const allZone = Object.keys(time);
  const allNumber = Object.values(time);

  console.log(allZone);

  let currentZone = 0;

  allZone.forEach((item) => {
    if (nowH > item) {
      currentZone = item;
    }
  });

  console.log(
    '当前时区',
    currentZone,
    allZone.indexOf(currentZone),
    allZone.indexOf(currentZone) + 1
  );

  // 当前时间的范围
  let currentTimeRange = [
    allZone.indexOf(currentZone),
    allZone.indexOf(currentZone) + 1,
  ];

  let currentStartTime = allZone.indexOf(currentZone);
  let currentEndTime = allZone.indexOf(currentZone) + 1;

  // console.log(
  //   currentStartTime,
  //   currentEndTime,
  //   allZone[currentStartTime],
  //   allZone[currentEndTime],

  //   allNumber[currentEndTime] - allNumber[currentStartTime],
  //   dayjs(today + ' 24').valueOf()
  // );

  const avNumber =
    (allNumber[currentStartTime] - allNumber[currentEndTime]) /
    (dayjs(today + ' ' + allZone[currentEndTime]).valueOf() -
      dayjs(today + ' ' + allZone[currentStartTime]).valueOf());

  const currentNumber =
    avNumber *
    (dayjs(today + ' ' + allZone[currentEndTime]).valueOf() -
      dayjs().valueOf());

  // const number20 =
  //   avNumber *
  //   (dayjs(today + ' ' + allZone[currentEndTime]).valueOf() -
  //     dayjs('2021-11-9 20:00').valueOf());
  // console.log(83, currentNumber, Math.round(currentNumber), number20);

  let a = +currentNumber;

  // 24 * 60 * 60 * 1000 /(1111 - 0) = 1

  const setTTT =
    (dayjs(today + ' ' + allZone[currentEndTime]).valueOf() -
      dayjs().valueOf()) /
    currentNumber;
  console.log(setTTT);

  const timer = setInterval(() => {
    a = a - 1;
    console.log(96, a);
  }, setTTT);

  setInterval(() => {
    console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'), a);
  }, 1000);
}

fake(time);
