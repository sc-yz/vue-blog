// promise 的三个状态  pedding fulfiled rejected

Promise.resolve().then(function () {
  console.log("promise1");
  setTimeout(() => {
    console.log("setTimeout2");
  }, 0);
});

setTimeout(() => {
  console.log("setTimeout3");
  Promise.resolve().then(function () {
    console.log("promise333");
  });
  Promise.resolve().then(function () {
    console.log("promise444");
  });
}, 0);

setTimeout(() => {
  console.log("setTimeout4");
}, 0);

setTimeout(() => {
  console.log("setTimeout1");
  Promise.resolve().then(function () {
    console.log("promise2");
  });
}, 0);

new Promise((resolve, reject) => {
  console.log("sync");
});

// promise1 => seTimeout1 => promise2 => setTimeout2

// promise1 => setTimeout3 =>

function p1r1() {
  console.log(0);
  return Promise.resolve(4);
}

function p1r2(res) {
  console.log(res);
}

function p2r1() {
  console.log(1);
}

function p2r2() {
  console.log(2);
}

function p2r3() {
  console.log(3);
}

function p2r5() {
  console.log(5);
}

function p2r6() {
  console.log(6);
}

const p1 = Promise.resolve().then(p1r1).then(p1r2);

const p2 = Promise.resolve()
  .then(p2r1)
  .then(p2r2)
  .then(p2r3)
  .then(p2r5)
  .then(p2r6);
