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

const curryadd = currying(add3);
console.log(curryadd(1)(2));
