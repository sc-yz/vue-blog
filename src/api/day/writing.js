Function.prototype.call1 = function (context) {};

Function.prototype.bind1 = function (context) {
  const self = this;
  // 获取context后台的剩余的参数，第一个是context
  const arg = Array.prototype.slice.call(arguments, 1);
  return function () {
    const arg2 = Array.prototype.slice.call(arguments);
    self.apply(context, arg2.concat(arg));
  };
};

function debounce(fn, t) {
  let timer;
  return function (...arguments) {
    if (timer) {
      clearTimeout(timer);
      return;
    }

    timer = setTimeout(() => {
      return fn.call(this, ...arguments);
    }, t);
  };
}

function throttle(fn, t) {
  let timer;
  return function (arguments) {
    if (!timer) {
      time = setTimeout(() => {
        return fn.apply(this, arguments);
      }, t);
    }
  };
}

function loopLinkList() {
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

  root.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  // node5.next = node3;

  return function () {
    let p1 = root;
    let p2 = root;
    while (p1) {
      p1 = p1?.next;
      p2 = p2?.next?.next;
      if (p1 === p2) {
        return true;
      }
    }

    return false;
  };
}

function QuickSort(arr, left, right) {
  if (arr.length < 2) return arr;

  left = typeof left === 'number' ? left : 0;
  right = typeof right === 'number' ? right : arr.length - 1;

  let i = left,
    j = right,
    pivot = arr[Math.floor((left + right) / 2)];

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  if (left < i - 1) {
    QuickSort(arr, left, i - 1);
  }

  if (i < right) {
    QuickSort(arr, i, right);
  }

  return arr;
}
//  const arg1 = Array.prototype.slice.call(arguments, 1);
//  const self = this;
//  return function () {
//    const arg2 = Array.prototype.slice.call(arguments);
//    self.apply(context  , arg1.concat(arg2));
//  };
const testData = [12, 1, 0, 5, 7, 4, 23, 10, 98, 35, 74, 3, 1, 8, 6];

console.log(QuickSort(testData));

Function.prototype.bind1 = function (context) {
  const arg1 = Array.prototype.slice.call(arguments, 1);
  const self = this;

  return function () {
    const arg2 = Array.prototype.slice.call(arguments);
    return self.apply(context, arg1.concat(arg2));
  };
};
