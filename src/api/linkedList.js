class Node {
  constructor(val) {
    this.value = val;
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
    // 当前链表为非空，循环链表找出最后的节点，否则将head指向node
    if (this.head) {
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
    let res = '';
    if (this.head) {
      while (p.next) {
        res += p.value + '=>';
        p = p.next;
      }
      res += p.value;
      console.log('当前链表为：' + res);
    } else {
      console.log('当前链表为空链表');
    }
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.print();
