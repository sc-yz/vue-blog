// 1-n 之间的和

const getSum = (n) => {
  // 1+2+3+...n
  // n+(n-1)
  if (n == 1) {
    console.log(n);
    return 1;
  } else {
    return getSum(n - 1) + n;
  }
};

const app = document.getElementById("app");
// 递归生成virtual dom
const virtualDom = (html) => {
  let reactiveData = {
    tag: "", // 标签类型
    value: "",
    children: [],
    data: {},
    type: "",
  };

  //   console.log(html.nodeType, html.attributes.class, html.tagName);
  reactiveData = {
    tag: html.tagName.toLowerCase(), // 标签类型
    value: "",
    children: [],
    data: {},
    type: html.nodeType,
  };
  if (html.children && html.children.length > 0) {
    [...html.children].forEach((item) => {
      reactiveData.children.push(virtualDom(item));
    });
  }
  return reactiveData;
};
