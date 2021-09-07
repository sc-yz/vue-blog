function new(fn, ...args) {
  const obj = Object.create();

  Object.setPrototypeOf(obj, fn.prototype);

  const result = fn.call(obj, ...args);

  return Object.prototype.toString.call(result) === '[object,Object]'
    ? result
    : obj;
}
