const after = (fn, t) => {
  return () => {
    if (time - 1 === 0) {
      return fn();
    }
  };
};

// 判断两个数是否相等
const equal = (val1, val2) => {};

// a == 1 && a == 2 && a == 3;

const a = {
  value: 0,
  [Symbol.toPrimitive]() {
    return ++this.value;
  },
};

// 判断回文
