const ul = document.querySelector("ul");
ul.addEventListener("click", function (e) {
  const event = e || window.event;
  const target = event.target || event.srcElement;
  if (target.nodeName.toLowerCase() === "li") {
    console.log(target);
  }
});

const li = document.querySelectorAll("li");

// 事件监听

// 利用闭包的特性

// for (var i = 0; i < li.length; i++) {
//   li[i].onclick = (function (j) {
//     return function () {
//       console.log(j);
//     };
//   })(i);
// }

// 利用let 的暂时性死区
for (let i = 0; i < li.length; i++) {
  li[i].onclick = function () {
    console.log(i);
  };
}
