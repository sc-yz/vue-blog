/*
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2021-07-08 15:41:24
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-27 17:08:49
 * @FilePath: /vue-blog-github/src/api/promiseAll.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('arguments meust be an array !'));
    }
    let resolveCounter = 0;
    const length = promises.length;
    const resolvedValues = new Array(length);
    for (let i = 0; i < length; i++) {
      (function (i) {
        Promise.resolve(promises[i])
          .then((value) => {
            resolveCounter++;
            resolvedValues[i] = value;
            if (resolveCounter === length) {
              return resolve(resolvedValues);
            }
          })
          .catch((err) => {
            return reject(err);
          });
      })(i);
    }
  });
}

Promise.all = function (promises) {
  const values = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (res) => {
          count++;
          values[index] = res;
          if (count === promises.length) {
            resolve(values);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};

// Promise.race = (promises) => {
//   return new Promise((resolve, reject) => {});
// };

function maxRequest(fn, maxNum) {
  return new Promise((resolve, reject) => {
    function help(index) {
      Promise.resolve(fn())
        .then((value) => {
          return resolve(value);
        })
        .catch((error) => {
          if (index - 1 >= 0) {
            help(index - 1);
          } else {
            return reject(error);
          }
        });
    }
    help(maxNum);
  });
}

function pA(arr) {
  if (Object.prototype.toString.call(arr) !== '[object array]') {
    return 'arr 需要为一个数组';
  }

  const length = arr.length;
  const result = new Array(length);
  return new Promise((resolve, reject) => {
    for (let i = 0; i <= length; i++) {
      Promise.resolve(arr[i])
        .then((res) => {
          result[i] = res;
          if (i === length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}
