# haha

## 数组

## 数组访问元素的时间复杂度 O(1)

通过硬件内存管理器,通过访问数组中的下标来访问内存中存储的元素.
访问任何一个位置的数组元素,时间复杂度是 O(1),硬件可以保证.

## 数组删除和新增元素的时间复杂度 O(n)

## JS 的数组在内存中不是连续的？

传统语言数组的概念：
像 C/C++ 这种传统的编译型的语言，它们的数组在内存中用一串连续的区域来存放一些值，而且它们的数组中存放的数据类型都需要预先设定成同一类型

而对于 JS 来说的话，数组中存储的数据类型是可以完全不一致的，这就意味着，JS 数组中内存地址不是连续的。（因为传统语言数组下标取值，就是因为是连续，且每小块大小都相等的内存空间，可以直接对应上内存的地址）而 JS 它因为数组可以存放不同类型的数据，而且也能进行数组下标取值。其实这个时候采用的是哈希映射的方式，获取到对应数组下标的值的。

不过，现在的 JS 引擎为了优化 JS 的性能，它会分配一个连续的内存空间给存储了相同数据类型的数组，以达到更好的遍历效果。所以，只要你数组里存的是相同类型的值，在内存中的地址还是连续的。

```
const arr = [1, 2, 3, 4, 5]; //JS 引擎分配连续的内存空间
const arr2 = [true, "233", {}, 2]; //JS 分配不同的内存空间

```

另外，也可以使用 ArrayBuffer 获取通用的、固定长度的原始二进制数据缓冲区。它是一个字节数组，通常在其他语言中称为“byte array”。