# 算法

## 时间复杂度

通用的方法：「 大 O 符号表示法 」，即 T(n) = O(f(n))

我们先来看个例子：

```javascript
for (i = 1; i <= n; ++i) {
  j = i;
  j++;
}
```

通过「 大 O 符号表示法 」，这段代码的时间复杂度为：O(n) ，为什么呢?

在 大 O 符号表示法中，时间复杂度的公式是： T(n) = O( f(n) )，其中 f(n) 表示每行代码执行次数之和，而 O 表示正比例关系，这个公式的全称是：算法的渐进时间复杂度。

常见的时间复杂度量级有：

1. 常数阶 O(1)
2. 对数阶 O(logN)
3. 线性阶 O(n)
4. 线性对数阶 O(nlogN)
5. 平方阶 O(n²)
6. 立方阶 O(n³)
7. K 次方阶 O(n^k)
8. 指数阶(2^n)

## 空间复杂度

既然时间复杂度不是用来计算程序具体耗时的，那么我也应该明白，空间复杂度也不是用来计算程序实际占用的空间的。

空间复杂度是对一个算法在运行过程中临时占用存储空间大小的一个量度，同样反映的是一个趋势，我们用 S(n) 来定义

空间复杂度比较常用的有：O(1)、O(n)、O(n²)

## Stack 栈

**Stack 的特点是先进后出 或者说后进先出（last in first out）。**

Stack 一般具备以下方法：

1. push：将一个元素推入栈顶
2. pop：移除栈顶元素，并返回被移除的元素
3. peek：返回栈顶元素
4. length：返回栈中元素的个数

## Queue（队列）

**_Queue 的特点是先进先出_**

Queue 一般具有以下常见方法：

1. enqueue：入列，向队列尾部增加一个元素
2. dequeue：出列，移除队列头部的一个元素并返回被移除的元素
3. front：获取队列的第一个元素
4. isEmpty：判断队列是否为空
5. size：获取队列中元素的个数

## Linked List（链表）

![链表](https://waqll.oss-cn-qingdao.aliyuncs.com/blog/linkedList.png)

数组需要一块连续的内存空间来存储，对内存的要求比较高。如果我们申请一个 100MB 大小的数组，当内存中没有连续的、足够大的存储空间时，即便内存的剩余总可用空间大于 100MB，仍然会申请失败。
而链表恰恰相反，它并不需要一块连续的内存空间，它通过“指针”将一组零散的内存块串联起来使用，所以如果我们申请的是 100MB 大小的链表，根本不会有问题。

**_顾名思义，链表是一种链式数据结构，链上的每个节点包含两种信息：节点本身的数据和指向下一个节点的指针。链表和传统的数组都是线性的数据结构，存储的都是一个序列的数据，但也有很多区别，如下表：_**

| 比较维度     | 数组                             | 链表                                         |
| :----------- | :------------------------------- | :------------------------------------------- |
| 内存分配     | 静态内存分配，编译时分配且连续   | 动态内存分配，运行时分配且不连续             |
| 元素获取     | 通过 Index 获取，速度较快        | 通过遍历顺序访问，速度较慢                   |
| 添加删除元素 | 因为内存位置连续且固定，速度较慢 | 因为内存分配灵活，只有一个开销步骤，速度更快 |
| 空间结构     | 可以是一维或者多维数组           | 可以是单向、双向或者循环链表                 |

一个单向链表通常具有以下方法：

1. size：返回链表中节点的个数
2. head：返回链表中的头部元素
3. add：向链表尾部增加一个节点
4. remove：删除某个节点
5. indexOf：返回某个节点的 index
6. elementAt：返回某个 index 处的节点
7. addAt：在某个 index 处插入一个节点
8. removeAt：删除某个 index 处的节点

```javascript
class LinkedList {
  constructor(){
    this.next = null;
    this.value = ""
  }
}
```

## Set（集合）

![集合](https://waqll.oss-cn-qingdao.aliyuncs.com/blog/set.png)

**_集合是数学中的一个基本概念，表示具有某种特性的对象汇总成的集体。在 ES6 中也引入了集合类型 Set，Set 和 Array 有一定程度的相似，不同的是 Set 中不允许出现重复的元素而且是无序的。_**

一个典型的 Set 应该具有以下方法：

1. values：返回集合中的所有元素
2. size：返回集合中元素的个数
3. has：判断集合中是否存在某个元素
4. add：向集合中添加元素
5. remove：从集合中移除某个元素
6. union：返回两个集合的并集
7. intersection：返回两个集合的交集
8. difference：返回两个集合的差集
9. subset：判断一个集合是否为另一个集合的子集

## Hash Table（哈希表/散列表）

**Hash Table 是一种用于存储键值对（key value pair）的数据结构，因为 Hash Table 根据 key 查询 value 的速度很快，所以它常用于实现 Map、Dictinary、Object 等数据结构。如上图所示，Hash Table 内部使用一个 hash 函数将传入的键转换成一串数字，而这串数字将作为键值对实际的 key，通过这个 key 查询对应的 value 非常快，时间复杂度将达到 O(1)。Hash 函数要求相同输入对应的输出必须相等，而不同输入对应的输出必须不等，相当于对每对数据打上唯一的指纹。**

一个 Hash Table 通常具有下列方法：

1. add：增加一组键值对
2. remove：删除一组键值对
3. lookup：查找一个键对应的值

## tree

**_顾名思义，Tree 的数据结构和自然界中的树极其相似，有根、树枝、叶子，如上图所示。Tree 是一种多层数据结构，与 Array、Stack、Queue 相比是一种非线性的数据结构，在进行插入和搜索操作时很高效。_**
在描述一个 Tree 时经常会用到下列概念：

1. Root（根）：代表树的根节点，根节点没有父节点
2. Parent Node（父节点）：一个节点的直接上级节点，只有一个
3. Child Node（子节点）：一个节点的直接下级节点，可能有多个
4. Siblings（兄弟节点）：具有相同父节点的节点
5. Leaf（叶节点）：没有子节点的节点
6. Edge（边）：两个节点之间的连接线
7. Path（路径）：从源节点到目标节点的连续边
8. Height of Node（节点的高度）：表示节点与叶节点之间的最长路径上边的个数
9. Height of Tree（树的高度）：即根节点的高度
10. Depth of Node（节点的深度）：表示从根节点到该节点的边的个数
11. Degree of Node（节点的度）：表示子节点的个数

一个二叉查找树应该具有以下常用方法：

1. add：向树中插入一个节点
2. findMin：查找树中最小的节点
3. findMax：查找树中最大的节点
4. find：查找树中的某个节点
5. isPresent：判断某个节点在树中是否存在
6. remove：移除树中的某个节点

## 相关阅读

[知乎-时间-空间复杂度](https://zhuanlan.zhihu.com/p/50479555)
[数据结构](https://mp.weixin.qq.com/s/mMDlxNhm8pc8lccH_8Baxw)