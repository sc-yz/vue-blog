class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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

const linkedList = new LinkedList();
linkedList.append(1);

linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
// console.log(linkedList);
// linkedList.print();

// 给定一个链表: 1->2->3->4->5, 和 n = 2
// 当删除了倒数第二个节点后，链表变为 1->2->3->5
// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点
// https://juejin.cn/post/6844903929470255111

// 我们可以使用两个指针而不是一个指针。第一个指针从列表的开头向前移动 n+1 步，
// 而第二个指针将从列表的开头出发。现在，这两个指针被 n个结点分开。
// 我们通过同时移动两个指针向前来保持这个恒定的间隔，直到第一个指针到达最后一个结点。
// 此时第二个指针将指向从最后一个结点数起的第n个结点。
// 我们重新链接第二个指针所引用的结点的 next 指针指向该结点的下下个结点。

var removeNthFromEnd = function (head, n) {
  let first = head; // 慢指针
  for (let i = 0; i < n; i++) {
    first = first.next;
    console.log(first);
  }

  if (!first) return head.next; // 当链表长度为n时，删除第一个节点

  let second = head; // 快指针
  while (first.next) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return head;
};

console.log(removeNthFromEnd(linkedList.head, 2));
