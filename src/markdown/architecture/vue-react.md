# 哈哈

vue 和 react 对比

## 数据绑定

vue: 双向数据绑定策略,对 DOM 事件进行监听
react: 局部刷新策略，数据发生变化时，直接重新渲染组件，便可以得到最新的视图

## 组件化和数据流

vue: vue 组件不想 React 组件，他不是完全以组件功能和 UI 为维度进行划分的，vue 组件本质上是一个 Vue 实例。每个 Vue 实例在创建的时候都需要经过，设置数据监听，编译模版，将模板引用到 DOM 上。vue 父子组件通过单向数据流向下传递数据

react： 函数组件就是存 UI 组件

## 数据状态管理

vuex 借鉴了 Redux,具有和 Redux 相同的 store 概念，不允许组件直接修改 store state ，而是需要使用 dispath action 来通知 store 的变化。这个过程不同意 Redux 的函数式思想。
其中一个区别是，Vuex 改变 store 的方法是提交一个 mutation，而 Redux 并不支持。

Redux 提倡不可变性，而 vuex 的数据是可变化的，Redux 中的 reducer 每次都会生成新的 state 以代替就的 state，而 Vuex 是直接对其进行修改

Redux 在检测数据变化的时，是通过浅比较的方式比较差异的，而 Vuex 其实和 Vuxe 的原理一样，是通过遍历数据的 getter/setter 来比较的

## 渲染和更新

vue template 是典型的模板，在 JSX 在表达上更加自然。

## 社区
