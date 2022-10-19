/*
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2021-07-08 15:41:23
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-27 14:20:18
 * @FilePath: /vue-blog-github/src/api/curry.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function currying(fn, ...args) {
  const arr = args || [];
  const length = fn.length; // 获取参数的长度
  return (...args1) => {
    const newArr = arr.concat(args1);
    if (newArr.length < length) {
      return currying.call(this, fn, ...newArr);
    } else {
      return fn.apply(this, newArr);
    }
  };
}

function add3(a, b, c) {
  return a + b + c;
}

// function currying(func) {
//     const args = [];
//     return function result(...rest) {
//         if (rest.length === 0)
//             return func(...args);

//         args.push(...rest);
//         return result;
//     }
// }

// const add = (...args) => args.reduce((a, b) => a + b);

// const sum = currying(add);

// sum(1,2)(3);
// sum(4);
// sum(); // 10
