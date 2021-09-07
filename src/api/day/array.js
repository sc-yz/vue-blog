// 数组扁平化
const testData = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10,
];

class Flatten {
  constructor() {
    this.one = [];
  }

  arrToOne(arr) {
    for (let i = 0; i <= arr.length; i++) {
      if (i === arr.length) {
        return this.one;
      }
      if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
        this.arrToOne(arr[i]);
      } else {
        this.one.push(arr[i]);
      }
    }
  }
}

function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

function flatten_reduce(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

function unique(arr) {
  let s = new Set();
  const result = arr.filter((item) => {
    const i = item + JSON.stringify(item);
    if (s.has(i)) {
      return false;
    } else {
      s.add(item);
      return true;
    }
  });

  return result;
}
// 但是contructor的指向是可以被改变，所以不安全
/**
 *
 * @param {*} obj  传入数组或
 * @param {*} mode  方式
 * @returns
 */
function isArray(obj, mode) {
  switch (mode) {
    case 1:
      return Array.isArray(obj);
      break;
    case 2:
      return Object.prototype.toString.call(obj) === '[object Array]';
      break;
    case 3:
      return Object.getPrototypeOf(obj) === Array.prototype;
      break;
    case 4:
      return obj instanceof Array;
      break;
  }
}

function arrayLikeToArray(arrLike, mode) {
  switch (mode) {
    case 1:
      return Array.prototype.slice.call(arrLike);
    case 2:
      return Array.from(arrLike);
  }
}

var jsonStudents = [
  { name: 'Dawson', totalScore: '197', Chinese: '100', math: '97' },
  { name: 'HanMeiMei', totalScore: '196', Chinese: '99', math: '97' },
  { name: 'HanMeiMei', totalScore: '196', Chinese: '99', math: '10' },
  { name: 'HanMeiMei', totalScore: '196', Chinese: '99', math: '80' },
  { name: 'LiLei', totalScore: '185', Chinese: '88', math: '97' },
  { name: 'XiaoMing', totalScore: '196', Chinese: '96', math: '100' },
  { name: 'Jim', totalScore: '196', Chinese: '98', math: '98' },
  { name: 'Joy', totalScore: '198', Chinese: '99', math: '99' },
];

const a = jsonStudents.sort(function (a, b) {
  if (a.totalScore === b.totalScore) {
    if (a.Chinese === b.Chinese) {
      return a.math - b.math;
    }
    return a.Chinese - b.Chinese;
  }
  return a.totalScore - b.totalScore;
});

module.exports = { flatten, flatten_reduce, unique, isArray, testData };
