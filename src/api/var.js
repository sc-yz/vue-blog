// let a;
// if (true) {
//   a = 5;
//   function a() {}
//   a = 0;
//   function a() {}
//   a = 7;
//   console.log("0", a);
// }

// console.log("1", a);

// if (true) {
//   function a() {
//     console.log("执行了函数a");
//   }
//   a = 1;
//   console.log("内部a", a);
// }

// console.log("外部a", a, window.a);

// if (true) {
//   b = 1;
//   function b() {
//     console.log("执行了函数b");
//   }

//   console.log("内部b", b);
// }

// console.log("外部b", b, window.b);
// alert(c);

console.log(c);
if (true) {
  console.log(c);
  c = 1;
  function c() {
    console.log("执行了函数c");
  }

  console.log("内部c", c);
}

console.log("外部c", c);
