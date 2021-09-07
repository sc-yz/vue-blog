# 哈哈

## scoped 实现原理

通过 Webpack 调用 VueJS 中相应 Loader , 给组件 HTML 模板添加自定义属性 (Attribute) data-v-x, 以及给组件内 CSS 选择器添加对应的属性选择器 (Attribute Selector) [data-v-x], 达到组件内样式只能生效与组件内 HTML 的效果, 代码效果如下

```javascript
<div class='lionad' data-v-lionad></div>
<style>
.lionad[data-v-lionad] {
  background: #fff;
}
</style>
```

## v-show 和 v-if

v-show 是修改 css 的 display 属性，元素始终存在 dom 树上，触发重绘
v-if 是直接销毁或创建组件，触发重排

## 单向数据流

防止从子组件意外变更父级组件的状态

利用$emit 调用父组件的方法来修改 props，还可以利用.sync 修饰符来缩写

```javascript
// 父组件
 <fatherComponent :title="title" @update:title="title = $event">

 // 子组件
 this.#emit("update:title",'xxx)

 // 利用.sync,重写父组件
 <faterCInponent :title.sync="title">

```

## computed 和 watch 的区别

computed: 计算属性，依赖其他的属性值，computed 的值存在缓存，只有依赖的属性值发生变化，才会重新计算

watch: 观察数据的变化，执行相应的回调

## 直接给一个数组项赋值，Vue 能检测到变化吗？

## 对 Vue 生命周期的理解？

vue 实例有一个完整的生命周期，也就是开始创建，初始化数据，编译模版，挂载 Dom，渲染更新，渲染卸载

beforeCreate
组件实例被创建之初，组件的属性生效之前

created
组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用

beforeMount
在挂载开始之前被调用：相关的 render 函数首次被调用

mounted
el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子

beforeUpdate
组件数据更新之前调用，发生在虚拟 DOM 打补丁之前

update
组件数据更新之后

activited
keep-alive 专属，组件被激活时调用

deactivated
keep-alive 专属，组件被销毁时调用

beforeDestory
组件销毁前调用

destoryed
组件销毁后调用

## Vue 的父组件和子组件生命周期钩子函数执行顺序？

加载渲染过程
父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted

子组件更新过程
父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated

父组件更新过程
父 beforeUpdate -> 父 updated

销毁过程
父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

## 谈谈你对 keep-alive 的了解？

## 组件中 data 为什么是一个函数？

因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。

## v-model 的原理

v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：

text 和 textarea 元素使用 value 属性和 input 事件；
checkbox 和 radio 使用 checked 属性和 change 事件；
select 字段将 value 作为 prop 并将 change 作为事件。

## vue 通信

（1）props / $emit 适用 父子组件通信
这种方法是 Vue 组件的基础，相信大部分同学耳闻能详，所以此处就不举例展开介绍。
（2）ref 与 $parent / $children 适用 父子组件通信

ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
$parent / $children：访问父 / 子实例

（3）EventBus （$emit / $on） 适用于 父子、隔代、兄弟组件通信
（4）vuex

## vue-router 中常用的 hash 和 history 路由模式实现原理吗

hash: 利用锚点的特性实现路由跳转。
history: HTML5 提供了 History API 来实现 URL 的变化

```javascript
window.history.pushState(null, null, path);
window.history.replaceState(null, null, path);
```

history 路由模式的实现主要基于存在下面几个特性：

pushState 和 repalceState 两个 API 来操作实现 URL 的变化 ；
我们可以使用 popstate 事件来监听 url 的变化，从而对页面进行跳转（渲染）；
history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转（渲染）

## 双向数据绑定

## proxy 和 object.defineProperty

## vue 项目优化

（1）代码层面的优化

v-if 和 v-show 区分使用场景
computed 和 watch 区分使用场景
v-for 遍历必须为 item 添加 key，且避免同时使用 v-if
长列表性能优化
事件的销毁
图片资源懒加载
路由懒加载
第三方插件的按需引入
优化无限列表性能
服务端渲染 SSR or 预渲染

（2）Webpack 层面的优化

Webpack 对图片进行压缩
减少 ES6 转为 ES5 的冗余代码
提取公共代码
模板预编译
提取组件的 CSS
优化 SourceMap
构建结果输出分析
Vue 项目的编译优化

（3）基础的 Web 技术的优化

开启 gzip 压缩

浏览器缓存

CDN 的使用

使用 Chrome Performance 查找性能瓶颈

## vue3.0

## 相关阅读

[https://ustbhuangyi.github.io/vue-analysis/v2/extend/keep-alive.html#%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6](https://ustbhuangyi.github.io/vue-analysis/v2/extend/keep-alive.html#%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6)
