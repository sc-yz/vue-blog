# 哈哈

## 类数组对象

所谓的类数组对象： 拥有 length 属性和若干索引属性的对象

```js
const arr = ['apple', 'orange', 'banana'];

const arrLike = {
  0: 'apple',
  1: 'orange',
  2: 'banana',
  length: 3,
};

// 读写

// 读
console.log(arr[0], arrLike[0]);

// 写
arr[0] = 'new apple';
arrLike[0] = 'new apple';

console.log(arr[0], arrLike[0]);

// 长度

console.log(arr.length, arrLike.length);

// 遍历

for (let i = 0; i < arr.length; i++) {
  console.log('arr', i, arr[i]);
}

for (let i = 0; i < arrLike.length; i++) {
  console.log('arrLike', i, arrLike[i]);
}

// 但是不能使用数组的方法
// arrLike.push('a'); // error arrLike.push is not a function

// 需要把类数组对象转成数组

const d = Array.from(arrLike);

const a = Array.prototype.map.call(arrLike, function (item) {
  return item;
});
const b = Array.prototype.slice.call(arrLike);

const c = Array.prototype.splice.call(arrLike, 0);

console.log(a, b, c, d, arrLike, [...arLike]);
```

## arguments 对象

Arguments 对象只定义在函数体中，包括了函数的参数和其他属性。在函数体中，arguments 指代该函数的 Arguments 对象。

```js
function foo(name, age, sex) {
  console.log(arguments, Object.prototype.toString.call(arguments));
  //  Arguments(3) ["name", "age", "sex", callee: ƒ, Symbol(Symbol.iterator): ƒ]0: "name"1: "age"2: "sex"callee: ƒ foo(name, age, sex)length: 3Symbol(Symbol.iterator): ƒ values()__proto__: Object "[object Arguments]"
}

foo('name', 'age', 'sex');
```

## DOM 元素节点集合

```js
const divs = document.getElementsByTagName('div');

console.log(Object.prototype.toString.call(divs)); // [object HTMLCollection]
```

## 判断是否为类数组对象

这两个都会把数组判断为类数组对象

```js
// JQUERY 实现
function isArrayLike(obj) {
  // obj必须有length属性
  var length = !!obj && 'length' in obj && obj.length;
  var typeRes = type(obj);

  // 排除掉函数和Window对象
  if (typeRes === 'function' || isWindow(obj)) {
    return false;
  }

  return (
    typeRes === 'array' ||
    length === 0 ||
    (typeof length === 'number' && length > 0 && length - 1 in obj)
  );
}

// underscore 实现
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
var isArrayLike = function (collection) {
  var length = collection.length;
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};
```
