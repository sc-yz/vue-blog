# 哈哈

## 面试题一

```javascript
var num = 10;
const obj = { num: 20 };
obj.fn = (function (num) {
  this.num = num * 3;
  num++;
  return function (n) {
    console.log(this, this.num);
    this.num += n;

    num++;
    console.log(num);
  };
})(obj.num);
var fn = obj.fn;
fn(5);
console.log(num, obj.num);
```

## 调用栈

```javascript
var scope = 'global scope';
function checkscope() {
  var scope = 'local scope';
  function f() {
    return scope;
  }
  return f();
}
checkscope();
```

```javascript
var scope = 'global scope';
function checkscope() {
  var scope = 'local scope';
  function f() {
    return scope;
  }
  return f;
}
checkscope()();
```
