const arr = [1, 2, 3];
const str = "123";

// console.log(arr, str);
// 数据类型：

// Array,Map,Set,String,TypeArray,arguments,NodeList

// Symbol.iterator ,对象没有这个方法

// for (let i of arr) {
//   console.log(i);
// }

// for (let i of str) {
//   console.log(i);
// }

// for (let i of obj) {
//   console.log(i);
// }

const inter = arr[Symbol.iterator](); // 迭代器对象：具备next 方法 {value:xxx,done:boolean}
// console.log(iner.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

function makeIterator(arr) {
  let index = 0;
  return {
    next() {
      if (index < arr.length) {
        return {
          value: arr[index++],
          done: false,
        };
      }

      return {
        value: undefined,
        dome: true,
      };
    },
  };
}

// const inter = makeIterator(arr);

// console.log(inter.next());
// console.log(inter.next());
// console.log(inter.next());
// console.log(inter.next());

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]() {
    let index = 0;
    let map = new Map();
    map.set("a", 1);
    map.set("b", 2);
    map.set("c", 3);

    return {
      next() {
        var mapEntries = [...map.entries()];
        if (index < map.size) {
          return {
            value: mapEntries[index++],
            dome: false,
          };
        }
        return {
          value: undefined,
          dome: true,
        };
      },
    };
  },
};

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function* () {
    let index = 0;
    let map = new Map();
    map.set("a", 1);
    map.set("b", 2);
    map.set("c", 3);

    var mapEntries = [...map.entries()];
    while (index < mapEntries.length) {
      yield mapEntries[index++];
    }
  },
};

// const iter = obj[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

function* test() {
  //yield 1; // value:1,done:false
  // return 1;   //value:1, done:true
  // yield 2;
  // yield 3;
  // yield 4;

  let value1 = yield 1;
  console.log(value1);
  let value2 = yield 2;
  console.log(value2);

  let value3 = yield 3;
  console.log(value3);
  let value4 = yield 4;
  console.log(value4);
}
const iter = test();
console.log(iter.next("one"));
console.log(iter.next("two"));
console.log(iter.next("three"));
console.log(iter.next("four"));
console.log(iter.next());

for (let i of obj2) {
  console.log(i);
}
