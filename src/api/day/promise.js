const { reject } = require('core-js/fn/promise');

const promiseAll = (promises) => {
  if (Object.prototype.toString.call(promises) !== '[object Array]') {
    throw new Error('params shound be Array');
  }
  const len = promises.length;
  let result = new Array(len);
  let count = 0;
  return new Promise((reslove, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(
        (res, index) => {
          count++;
          result[index] = res;
          if (len === count) {
            reslove(result);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};

const promiseRace = (promises) => {};

const maxRequest = (fn, maxnum) => {
  return new Promise((resolve, reject) => {
    function help(index) {
      Promise.resolve(fn).then(
        (res) => {
          resolve(res);
        },
        (err) => {
          if (index - 1 > 0) {
            help(index - 1);
          } else {
            reject(err);
          }
        }
      );
    }
    help(maxnum);
  });
};

module.exports = {
  maxRequest,
  promiseAll,
  promiseRace,
};
