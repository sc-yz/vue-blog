# 哈哈

## 链表

链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。
链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。
每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域。

## 单向链表

单向链表的数据结构可以分为两部分：数据域和指针域，数据域存储数据，指针域指向下一个存储节点的地址。

## 双向链表

双向链表中同样有数据域和指针域。不同之处在于，指针域有左右（或上一个、下一个）之分，用来连接上一个结点、当前结点、下一个结点

## 头指针、头节点和首元节点详解

1. 头节点
   有时，在链表的第一个节点之前会额外增设一个节点，该节点的数据域一般不存放数据（有些情况下也可以存放链表的长度等信息），此节点被称为头节点。
   若链表中存在头节点，且头节点的指针域为空（NULL），表明链表是空表。
   头节点对于链表来说，不是必须的，换句话说，一个完整的链表中可以不设有头节点。那么，可能有人会问：既然头节点无关紧要，那它有什么作用？在处理某些问题时，给链表添加头节点会使问题变得简单。

2. 首元节点
   链表中第一个元素所在的节点，它是头节点后边的第一个节点。
   其实，首元节点和链表中存放数据的其他节点没什么不同，只是因为该节点位于链表的头部，所以被称为首元节点。

3. 头指针
   链表的头指针永远指向链表中第一个节点的位置，换句话说，如果链表有头节点，头指针指向头节点；否则，头指针指向首元节点。
   一个链表可以没有头节点，但不能没有头指针。
   头节点和头指针的区别是：
   头指针是一个指针，头指针指向链表的头节点或者首元节点；
   头节点是一个实际存在的节点，它包含有数据域和指针域。
   头节点和头指针的区别在程序中的直接体现是：头指针只声明而没有分配存储空间，头节点需要声明并分配一个节点的实际物理内存。

## js 实现链表

```js
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(val) {
    let node = new Node(val);
    let p = this.head;
    if (this.head) {
      // 如果存在，则找到末尾的节点，否则，赋值给head
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    } else {
      this.head = node;
    }

    this.length++;
  }
  print() {
    let p = this.head;
    let cur = '';
    if (this.head) {
      //   do {
      //     cur += p.value + '=>';
      //     p = p.next;
      //   } while (p.next);
      while (p.next) {
        cur += p.value + '=>';
        p = p.next;
      }
      cur += p.value;
      console.log(cur);
    } else {
      console.log('链表是空链表');
    }
  }
}

let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
console.log(linkedList);
linkedList.print();
```

## 相关阅读

[链表的头节点](https://www.jianshu.com/p/580ddaca13d5)
[相关视频](https://www.youtube.com/watch?v=ZBdE8DElQQU)
