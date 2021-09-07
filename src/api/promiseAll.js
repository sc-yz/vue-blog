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

Promise.race = (promises) => {
  return new Promise((resolve, reject) => {});
};

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
