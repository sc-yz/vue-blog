# 哈哈

React 为什么要引入 Fiber 架构？ 看看下面的火焰图，这是 React V15 下面的一个列表渲染资源消耗情况。整个渲染花费了 130ms, 🔴 在这里面 React 会递归比对 VirtualDOM 树，找出需要变动的节点，然后同步更新它们, 一气呵成。这个过程 React 称为 Reconcilation(中文可以译为协调).

在 Reconcilation 期间，React 会霸占着浏览器资源，一则会导致用户触发的事件得不到响应, 二则会导致掉帧，用户可以感知到这些卡顿。

React16 启用了全新的架构，叫做 Fiber，其最大的使命是解决大型 React 项目的性能问题，再顺手解决之前的一些痛点。
Fiber 是对 React 核心算法的重构

React 通过 Fiber 架构，让自己的 Reconcilation 过程变成可被中断。 '适时'地让出 CPU 执行权，除了可以让浏览器及时地响应用户的交互，还有其他好处:

与其一次性操作大量 DOM 节点相比, 分批延时对 DOM 进行操作，可以得到更好的用户体验。这个在《「前端进阶」高性能渲染十万条数据(时间分片)》 以及司徒正美的《React Fiber 架构》 都做了相关实验
司徒正美在《React Fiber 架构》 也提到：🔴 给浏览器一点喘息的机会，他会对代码进行编译优化（JIT）及进行热代码优化，或者对 reflow 进行修正.

## 痛点

1. 组件不能返回数组，最见的场合是 UL 元素下只能使用 LI，TR 元素下只能使用 TD 或 TH，这时这里有一个组件循环生成 LI 或 TD 列表时，我们并不想再放一个 DIV，这会破坏 HTML 的语义。
2. 弹窗问题，之前一直使用不稳定的 unstable_renderSubtreeIntoContainer。弹窗是依赖原来 DOM 树的上下文，因此这个 API 第一个参数是组件实例，通过它得到 对应虚拟 DOM，然后一级级往上找，得到上下文。它的其他参数也很好用，但这个方法一直没有转正。。。
3. 异常处理，我们想知道哪个组件出错，虽然有了 React DevTool，但是太深的组件树查找起来还是很吃力。希望有个方法告诉我出错位置，并且出错时能让我有机会进行一些修复工作
4. HOC 的流行带来两个问题，毕竟是社区兴起的方案，没有考虑到 ref 与 context 的向下传递。
5. 组件的性能优化全凭人肉，并且主要集中在 SCU（shouldcomponentupdate），希望框架能干些事情，即使不用 SCU，性能也能上去。

## 解决进度

1. 16.0 让组件支持返回任何数组类型，从而解决数组问题; 推出 createPortal API ,解决弹窗问题; 推出 componentDidCatch 新钩子， 划分出错误组件与边界组件， 每个边界组件能修复下方组件错误一次， 再次出错，转交更上层的边界组件来处理，解决异常处理问题。
2. 16.2 推出 Fragment 组件，可以看作是数组的一种语法糖。
3. 16.3 推出 createRef 与 forwardRef 解决 Ref 在 HOC 中的传递问题，推出 new Context API，解决 HOC 的 context 传递问题（主要是 SCU 作崇）
4. 而性能问题，从 16.0 开始一直由一些内部机制来保证，涉及到批量更新及基于时间分片的限量更新。

## React 这个纯视图库其实也是三层架构

1. 虚拟 DOM 层，它只负责描述结构与逻辑;
2. 内部组件层，它们负责组件的更新, ReactDOM.render、 setState、 forceUpdate 都是与它们打交道，能让你多次 setState，只执行一次真实的渲染, 在适合的时机执行你的组件实例的生命周期钩子
3. 底层渲染层， 不同的显示介质有不同的渲染方法，比如说浏览器端，它使用元素节点，文本节点，在 Native 端，会调用 oc， java 的 GUI， 在 canvas 中，有专门的 API 方法

虚拟 DOM 是由 JSX 转译过来的，JSX 的入口函数是 React.createElement, 可操作空间不大， 第三大的底层 API 也非常稳定，因此我们只能改变第二层。

React16 将内部组件层改成 Fiber 这种数据结构，因此它的架构名也改叫 Fiber 架构。Fiber 节点拥有 return, child, sibling 三个属性，分别对应父节点， 第一个孩子， 它右边的兄弟， 有了它们就足够将一棵树变成一个链表， 实现深度优化遍历。

## 如何决定每次更新的数量

## 加快响应速度

对于’前端框架‘来说，解决这种问题有三个方向:

1️⃣ 优化每个任务，让它有多快就多快。挤压 CPU 运算量
2️⃣ 快速响应用户，让用户觉得够快，不能阻塞用户的交互
3️⃣ 尝试 Worker 多线程

Vue 选择的是第 1️⃣, 因为对于 Vue 来说，使用模板让它有了很多优化的空间，配合响应式机制可以让 Vue 可以精确地进行节点更新, 读者可以去看一下今年[Vue Conf-尤雨溪](https://www.yuque.com/vueconf/2019/gwn1z0)的演讲，非常棒!；而 React 选择了 2️⃣ 。对于 Worker 多线程渲染方案也有人尝试，要保证状态和视图的一致性相当麻烦。

## 相关阅读

[司徒正美-react-fiber](https://zhuanlan.zhihu.com/p/37095662)
[https://zhuanlan.zhihu.com/p/35578843](https://zhuanlan.zhihu.com/p/35578843)
[https://juejin.cn/post/6844903975112671239](https://juejin.cn/post/6844903975112671239)
[https://www.cnblogs.com/roy1/p/13872969.html](https://www.cnblogs.com/roy1/p/13872969.html)
[Vue 和 React 的优点分别是什么？](https://www.zhihu.com/question/301860721)
[https://www.zhihu.com/question/66749082/answer/246217812](https://www.zhihu.com/question/66749082/answer/246217812)
[vue3 为什么不用时间切片](https://juejin.cn/post/6844904134945030151)
[六个问题让你更懂 React Fiber](https://mp.weixin.qq.com/s/6gvYGgawu_Uw1XpqqsJQWQ)
