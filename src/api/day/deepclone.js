function isObject(obj) {
  return (
    typeof obj !== null && (typeof obj == 'object' || typeof obj == 'function')
  );
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

function deepClone(target, map = new WeakMap()) {
  if (isObject(target)) {
    const cloneTarget = isArray(target) ? [] : {};

    if (map.get(target)) {
      return map.get(target);
    }

    map.set(target, cloneTarget);

    for (let i in target) {
      cloneTarget[i] = deepClone(target[i], map);
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
