# 哈哈

## useState

## useEffect

## useLayoutEffect

## 函数组件怎么阻止重复渲染

避免组件不必要的渲染的方法有：React.memo 包裹的函数式组件，继承自 React.PureComponent 的 class 组件。

利用了 shouldComponent 钩子特性

Q: 为什么不让每个组件都继承 PureComponent 或者用 memo 包呢？
A: 每次更新的时候（包括状态更新或上层组件重新渲染），它们就会在新 props、state 和旧 props、state 之间对 key 和 value 进行浅比较。浅比较是个严格相等的检查，如果检测到差异，render 就会执行：

```js
// 基本类型的比较
shallowCompare({ name: 'bar' }, { name: 'bar' }); // output: true
shallowCompare({ name: 'bar' }, { name: 'bar1' }); // output: false

// 深层嵌套就会判断失败
shallowCompare(
  { name: { first: 'John', last: 'Schilling' } },
  { name: { first: 'John', last: 'Schilling' } }
); // output: false
```

Tip #4：更好的 props 写法
前面的问题的一种解决方法是改写我们的 props。

我们不传递对象作为 props，而是将对象拆分成基本类型：

```html
<Bar firstName="John" lastName="Schilling" />
```

## memo 适用于函数组件,class 组件，父组件也可以传 props 给子组件，只要 props 的值不是动态变化的就可以。简单来说 useCallback 就是处理父组件重复无用的调用子组件的，useMemo 处理属性重复无用的调用的
