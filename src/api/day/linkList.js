class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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

function loopLink(list) {
  let p1 = list;
  let p2 = list;
  while (p1) {
    console.log(p1);
    p1 = p1?.next;
    p2 = p2?.next?.next;
    if (p1 === p2) {
      return true;
    }
  }

  return false;
}

console.log(loopLink(root));

instanceOf;

function instanceOf(left, right) {}
