# 哈哈

## set 产生的原因

由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。尽管如此我们还是有一些办法来回避这些限制并保证它们的响应性。

1. 对于对象

   Vue 无法检测 property 的添加或移除。由于 Vue 会在初始化实例时对 property 执行 getter/setter 转化，所以 property 必须在 data 对象上存在才能让 Vue 将它转换为响应式的

   ```javascript
   var vm = new Vue({
     data: {
       a: 1,
     },
   });

   // `vm.a` 是响应式的

   vm.b = 2;
   // `vm.b` 是非响应式的

   // 正确姿势
   this.$set(this.someObject, 'b', 2);
   ```

   **由于 Vue 不允许动态添加根级响应式 property，所以你必须在初始化实例前声明所有根级响应式 property，哪怕只是一个空值：**

2. 对于数组
   Vue 不能检测以下数组的变动：

   - 当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
   - 当你修改数组的长度时，例如：vm.items.length = newLength

   ```javascript
   this.$set(this.items, indexOfItem, newValue)
   为了解决第二类问题，你可以使用 splice：
   this.items.splice(newLength)
   ```

   **_vue 中的数组的监听不是通过 Object.defineProperty 来实现的，是通过对'push', 'pop','shift','unshift','splice', 'sort','reverse'这几个改变数组本身的方法执行后来通知监听达到的_**

## 接下来我们看看框架本身是如何实现的呢?

Vue 源码位置：vue/src/core/instance/index.js

```javascript
export function set(target: Array<any> | Object, key: any, val: any): any {
  // 如果 set 函数的第一个参数是 undefined 或 null 或者是原始类型值，那么在非生产环境下会打印警告信息
  // 这个api本来就是给对象与数组使用的
  if (
    process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(
      `Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`
    );
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    // 类似$vm.set(vm.$data.arr, 0, 3)
    // 修改数组的长度, 避免索引>数组长度导致splcie()执行有误
    target.length = Math.max(target.length, key);
    // 利用数组的splice变异方法触发响应式, 这个前面讲过
    target.splice(key, 1, val);
    return val;
  }
  // target为对象, key在target或者target.prototype上。
  // 同时必须不能在 Object.prototype 上
  // 直接修改即可, 有兴趣可以看issue: https://github.com/vuejs/vue/issues/6845
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }
  // 以上都不成立, 即开始给target创建一个全新的属性
  // 获取Observer实例
  const ob = (target: any).__ob__;
  // Vue 实例对象拥有 _isVue 属性, 即不允许给Vue 实例对象添加属性
  // 也不允许Vue.set/$set 函数为根数据对象(vm.$data)添加属性
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' &&
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
          'at runtime - declare it upfront in the data option.'
      );
    return val;
  }
  // target本身就不是响应式数据, 直接赋值
  if (!ob) {
    target[key] = val;
    return val;
  }
  // 进行响应式处理
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}
```

工具函数

```javascript
// 判断给定变量是否是未定义，当变量值为 null时，也会认为其是未定义
export function isUndef(v: any): boolean {
  return v === undefined || v === null;
}

// 判断给定变量是否是原始类型值
export function isPrimitive(value: any): boolean {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  );
}

// 判断给定变量的值是否是有效的数组索引
export function isValidArrayIndex(val: any): boolean {
  const n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}
```

## target 本身就不是响应式数据, 直接赋值

```javascript
if (!ob) {
  target[key] = val;
  return val;
}

data: {
  name: {
    sex: '';
  }
}

// age 被提前赋值了，导致age不是响应式数据，继续使用this.$set 也不会改变它为响应式
this.name.age = 18;
console.log(this.name);
this.$set(this.name, 'age', 12);
```

## 相关阅读

[https://segmentfault.com/q/1010000015780995](https://segmentfault.com/q/1010000015780995)
[https://segmentfault.com/a/1190000015783546](https://segmentfault.com/a/1190000015783546)
[https://segmentfault.com/a/1190000015709022](https://segmentfault.com/a/1190000015709022)
[https://www.zhihu.com/question/51520173](https://www.zhihu.com/question/51520173)
