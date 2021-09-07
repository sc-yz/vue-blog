# 哈哈

## 对象属性的存储结构

```javascript
function Foo() {
  return {
    c: 'c',
    d: 'd',
    b: 'b',
    2: 2,
    1: 1,
    a: 'a',
    3: 3,
  };
}

var foo = new Foo();
Object.keys(foo)[
  //结果
  ('1', '2', '3', 'c', 'd', 'b', 'a')
];
```

Element，Property

索引属性被放在对象的 elements 属性下面，常规属性被放在对象的 properties 属性下面。

如果执行遍历对象的操作，那么 V8 会先从 elements 属性中按照顺序读取所有的元素，然后再从 properties 属性中读取所有的元素，这样就完成一次遍历操作。

索引类型的属性（下文称为索引属性）按照索引值从小到大的顺序打印出来
常规类型的属性（下文称为常规属性）按照创建时间的先后顺序打印出来

## 隐藏类(Hidden Class)

我们都知道，像 Java 这样的静态语言，类型一但创建便不可更改，属性可以通过固定的偏移量进行访问。相比之下，JavaScript 是一个动态类型的语言，对象创建之后可以在运行时改变类型，添加或删除属性，这意味着属性的类型和内存偏移量只有在运行时才能确定。

为了解决动态查找属性的问题，JavaScript 中引入了 Hidden Class（隐藏类，在 V8 中被称作 Map）的概念：每当一个属性的值发生改变时，我们就会重新计算这个属性的内存偏移量并把他记录在 Hidden Class 里。

先说明几个隐藏类的特性：

每个对象都拥有自己的隐藏类
隐藏类中记录了对象中每个属性的内存偏移量
当对象创建一个新属性，或者一个老属性被删除时，V8 会创建一个新的隐藏类并通过 back_pointer 指针指向老的隐藏类，新的隐藏类中只记录进行了变更的属性信息，随后对象指向隐藏类的指针会指向新的隐藏类
对象创建一个新属性时，会检查该对象隐藏类的转换信息（transition information）。如果转换信息包含了与当前属性更改相同的条件，则对象会将其隐藏类变更为转换信息中记录的类，而不会再创建一个新的隐藏类。

相同隐藏类
还记得前面遗留的问题嘛：两个不同的对象，拥有不同的属性但是却拥有相同的 Hidden Class。

首先要明确一点的是，每个对象都有自己的 elements 属性，指向 element 对象，默认情况下这个对象是线性存储数据的，对于 a 和 b 这两个对象来说，他们的 elements 对象的类型是一样的。那自然 Hidden Class 不需要单独对 element 做特殊记录。

当然，如果 element 的存储结构发生改变，Hidden Class 自然也会发生改变。

## 内敛缓存

## new

```js
// new
function newwww(fn) {
  var obj = new Object(); // 创建一个空对象
  obj.__proto__ = fn.prototype; // obj的__proto__指向构造函数的prototype
  var result = fn.call(obj); // 把构造函数的this指向obj，并执行构造函数把结果赋值给result
  if (typeof result === 'object') {
    obj = result; // 构造函数F的执行结果是引用类型，就把这个引用类型的对象返回给objB
  } else {
    obj = obj; // 构造函数F的执行结果是值类型，就返回obj这个空对象给objB
  }

  return obj;
}
// Object.create()
function ObjCreate(obj, properties) {
  function Fn() {}
  Fn.prototype = obj;
  if (properties) {
    Object.defineProperties(Fn, properties);
  }
  return new Fn();
}
```
