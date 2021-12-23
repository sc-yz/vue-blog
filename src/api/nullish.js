/*
 * @Author: kian
 * @Date: 2021-12-17 10:11:47
 * @LastEditors: kian
 * @LastEditTime: 2021-12-17 17:25:27
 * @Description:
 */

const a = [
  {
    name: '深 赛 格',
    industry: '商业贸易',
    ratio: 0.02,
  },
  {
    name: '中电电机',
    industry: '电气设备',
    ratio: 0.0359,
  },
  {
    name: '津膜科技',
    industry: '公用事业',
    ratio: 0.0868,
  },
  {
    name: '广电电气',
    industry: '电气设备',
    ratio: 0.263,
  },
  {
    name: '美团-W',
    industry: '休闲服务',
    ratio: 0.013,
  },
  {
    name: '三 达 膜',
    industry: '公用事业',
    ratio: 0.0626,
  },
  {
    name: '国电电力',
    industry: '公用事业',
    ratio: 0.0309,
  },
  {
    name: '现 金',
    industry: '现 金',
    ratio: 0.4878,
  },
];
const b = {};
console.log(a);
a.forEach((item) => {
  if (!b[item.industry]) {
    b[item.industry] = item.ratio;
  } else {
    b[item.industry] = b[item.industry] + item.ratio;
  }
});

console.log(b);
const c = Object.keys(b).map((key) => {
  return {
    name: key,
    ratio: b[key],
  };
});
console.log(c);
