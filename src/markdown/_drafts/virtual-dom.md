---
title: virtual-dom
categories:
tags:
---

## 虚拟 DOM

1. virtual dom 是真实 DOM 的映射
2. 当虚拟 DOM 树中的某些节点改变时,会得到一个新的虚拟树，算法对这两棵树（新树和旧树）进行比较，找出差异，然后只需要在真实的 DOM 上做出相应的改变。

使用虚拟 DOM 的原因，减少回流和重绘

## js 模拟 DOM 树

首先，我们需要以某种方式将 DOM 树存储在内存中，可以使用普通的 js 对象来做
