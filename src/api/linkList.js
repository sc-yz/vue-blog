class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);

root.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node3;

const hasCloseLoop = (list) => {
  let p = list;
  let p1 = list;

  while (p1) {
    p = p?.next;
    p1 = p1?.next?.next;
    if (p === p1) {
      console.log(p, p1);
      return true;
    }
  }
  return false;
  //   while (((p = p?.next), (p1 = p1?.next?.next))) {
  //     if (p === p1) return true;
  //   }
  //   return false;
};

console.log(hasCloseLoop(root));
