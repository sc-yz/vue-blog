---
title: vue知识点
categories:
tags:
---

## nextTick

### 应用场景

需要在视图更新之后，基于新的视图进行操作

### created、mounted

在 created 和 mounted 阶段，如果需要操作渲染后的试图，也要使用 nextTick 方法。
注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.\$nextTick 替换掉 mounted

### nextTick 原理

1、异步说明
Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新
2、事件循环说明
简单来说，Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。

### 以下使用 nexttick 的三种情况

1、显示原本是`display:none`的输入框，并立即获取焦点。

```javascript
showsou(){
  this.showit = true //修改 v-show
  document.getElementById("keywords").focus()  //在第一个 tick 里，获取不到输入框，自然也获取不到焦点
}
// 修改为：
showsou(){
  this.showit = true
  this.$nextTick(function () {
    // DOM 更新了
    document.getElementById("keywords").focus()
  })
}
```

2、点击获取元素宽度。

```javascript
<div id="app">
    <p ref="myWidth" v-if="showMe">{{ message }}</p>
    <button @click="getMyWidth">获取p元素宽度</button>
</div>

getMyWidth() {
    this.showMe = true;
    //this.message = this.$refs.myWidth.offsetWidth;
    //报错 TypeError: this.$refs.myWidth is undefined
    this.$nextTick(()=>{
        //dom元素更新后执行，此时能拿到p元素的属性
        this.message = this.$refs.myWidth.offsetWidth;
  })
}
```

## vue 中 computed、method、watch 区别

### computed

计算属性不能是在 data 里定义过的： 一个未在 data 里面定义过的值，依赖一个或者多个值变化而变化，当它被依赖的值不发生变化时，它就不会重新计算

computed 比较适合对多个变量或者对象进行处理后返回一个结果值，也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化，举例：购物车里面的商品列表和总金额之间的关系，只要商品列表里面的商品数量发生变化，或减少或增多或删除商品，总金额都应该发生变化
在 Vue 中计算属性是基于它们的依赖进行缓存的，而方法是不会基于它们的依赖进行缓存的。从而使用 computed 属性要比 method 性能更好。
computed 有缓存，若相关数据未发生变化，则不调用；

### method

通过触发一个事件或者函数的回调来实现数据的更新，他的执行，依赖于事件的触发

### watch

watch 主要用于监控 vue 实例的变化，它监控的变量当然必须在 data 里面声明才可以，它是监控单个变量或对象
消耗比较大
watch 多用于数据交互频繁的内容。（例如定时 axios 从服务器获取数据）

## Object.defineProperty 和 proxy

Object.defineProperty 的作用是劫持一个对象的属性，劫持属性的 getter 和 setter 方法，在对象的属性发生变化时进行特定的操作。而 Proxy 劫持的是整个对象。

Proxy 会返回一个代理对象，我们只需要操作新对象即可，而 Object.defineProperty 只能遍历对象属性直接修改,影响性能。

Object.defineProperty 不支持数组，更准确的说是不支持数组的各种 API，因为如果仅仅考虑 arry[i] = value 这种情况，是可以劫持的，但是这种劫持意义不大。而 Proxy 可以支持数组的各种 API。

## vue 为什么不能检测数组的变化

[https://segmentfault.com/a/1190000015783546#comment-area](https://segmentfault.com/a/1190000015783546#comment-area)

## vue-cli3.0

## vue-router
