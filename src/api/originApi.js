/*
 * @Author: wanganqing wanganqing0502@163.com
 * @Date: 2021-07-08 15:41:24
 * @LastEditors: wanganqing wanganqing0502@163.com
 * @LastEditTime: 2022-09-27 14:51:37
 * @FilePath: /vue-blog-github/src/api/originApi.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 实现apply方法
// con
Function.prototype.diyApply = function (context, ...args) {
  console.log(context, this, args);
  // content 为即将被绑定的对象
  // this 为调用的函数
  // args 为传入的参数
};
// 实现call方法
// Function.prototype.diyCall = function (context, ...args) {};
// 实现bind方法;
// Function.prototype.diyBind = function (context, ...args) {};

// 实现instanceOf
// function instanceOf(left, right) {
// let left_proto = Object.getPrototypeOf(left);
// let right_protytype = right.prototype;
// }

// 实现new 操作符

function diyNew(fn, ...args) {
  const obj = Object.create({});
  Object.setPrototypeOf(obj, fn.prototype);
  obj.call(this, ...args);
  return obj;
}

// new实际上是在堆内存中开辟一个空间。
//     ①创建一个空对象，构造函数中的this指向这个空对象；
//     ②这个新对象被执行[ [ 原型 ] ]连接；
//     ③执行构造函数方法，属性和方法被添加到this引用的对象中；
//     ④如果构造函数中没有返回其它对象，那么返回this，即创建的这个的新对象，否则，返回构造函数中返回的对象。
// ​
function _new() {
  let target = {}; //创建的新对象
  let [constructor, ...args] = [...arguments];
  //执行[[原型]]连接,target是constructor的实例
  target.__proto__ = constructor.prototype;
  //执行构造函数,将属性或方法添加到创建的空对象上
  let result = constructor.prototype;
  if (result && (typeof result == 'object' || typeof result == 'function')) {
    //如果构造函数执行的结构返回的是一个对象,那么返回这个对象
    return result;
  }
  //如果构造函数返回的不是一个对象,返回创建的对象
  return target;
}

// 实现reduce

// 实现 forEach
// function foEach(item) {}

// 实现promise.all

// 实现currying

Function.prototype.diyCall = function (context, ...args) {
  const ctx = context || window || global;
  ctx.fn = this;
  const result = ctx.fn(...args);
  delete ctx.fn;
  return result;
};

// var obj = {
//   value: 1,
// };

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

Function.prototype.diyBind = function (context, args = []) {
  return function () {
    this.diyApply(context, args);
  };
};
