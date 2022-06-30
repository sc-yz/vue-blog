Function.prototype.apply = function (ctx, ...args) {
  const context = ctx || window || global;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
