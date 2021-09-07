Function.prototype.diyCall = function (context, ...args) {
  let ctx = context ? context : window;
  ctx.fn = this;
  const result = ctx.fn(...args);
  delete ctx.fn;
  return result;
};
