# 哈哈

## 优化 diff 三点策略

1. web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计
2. 拥有相同类型的两个组件将会生成相似的树形结构，拥有不同类型的两个组件将会生成不同树形结构
3. 对于同一层级的一组节点，他们可以同构唯一 id 进行区分

## 相关阅读

[diff 算法](https://zhuanlan.zhihu.com/p/149972619)
