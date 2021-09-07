// 实现apply方法
// con
Function.prototype.diyApply = function (context, ...args) {
  console.log(context, this, args);
  // content 为即将被绑定的对象
  // this 为调用的函数
  // args 为传入的参数
};
// 实现call方法
Function.prototype.diyCall = function (context, ...args) {};
// 实现bind方法;
Function.prototype.diyBind = function (context, ...args) {};

// 实现instanceOf
function instanceOf(left, right) {
  let left_proto = Object.getPrototypeOf(left);
  let right_protytype = right.prototype;
}

// 实现new 操作符

function diyNew(fn, ...args) {
  const obj = Object.create({});
  Object.setPrototypeOf(obj, fn.prototype);
  obj.call(this, ...args);
  return obj;
}

// 实现reduce

// 实现 forEach
function foEach(item) {}

// 实现promise.all

// 实现currying

Function.prototype.diyCall = function (context, ...args) {
  const ctx = context || window || global;
  ctx.fn = this;
  const result = ctx.fn(...args);
  delete ctx.fn;
  return result;
};

var obj = {
  value: 1,
};

function bar(name, age) {
  return {
    value: this.value,
    name: name,
    age: age,
  };
}

console.log(bar.diyCall(null, 'kevin', 18));

Function.prototype.diyApply = function (context, args = []) {
  const ctx = context || window || global;
  ctx.fn = this;
  const result = ctx.fn(args);
  delete ctx.fn;
  return result;
};

Function.prototype.diyBind = function (context, args = []) {};
