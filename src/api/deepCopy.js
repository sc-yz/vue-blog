/*
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2021-07-08 15:41:24
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-27 14:32:44
 * @FilePath: /vue-blog-github/src/api/deepCopy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}
function deepClone(target, map = new WeakMap()) {
  // 判断是否为对象

  if (isObject(target)) {
    let cloneTarget = isArray(target) ? [] : {};
    console.log(cloneTarget, map.get(target));

    // if (map.get(target)) {
    //   return map.get(target);
    // }

    // map.set(target, cloneTarget);

    for (const key in target) {
      cloneTarget[key] = deepClone(target[key], map);
    }

    return cloneTarget;
  } else {
    return target;
  }

  return target;
}

const obj = {
  NUMBER: 1,
  // STRING: '1',
  // NULL: null,
  // UNDEFINED: undefined,
  // SYMBOL: Symbol(1),
  // BOOLEAN: true,
  // BIGINT: 1,

  // OBJ: {
  //   name: '123',
  // },
  // OBJ_1: {
  //   name: {
  //     first: 'w',
  //     second: 'aq',
  //   },
  // },

  // REGEXP: /\W+/,
  // DATE: new Date(),
  // FUNCTION: function () {
  //   console.log(123);
  // },

  // SET: new Set([1, 2, 3]),
  // MAP: new Map(),

  // NAN: NaN,
  // INFINITY: Infinity,
};
obj.target = obj;

const a = deepClone(obj);

console.log(a);

// cnblogs.com/craftsman-gao/p/5130567.html
const obj = {
  name: 'waq',
  sex: 'man',
};

for (const item of obj) {
  console.log(item);
}
