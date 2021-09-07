const observer = (obj) => {
  if (typeof obj !== "object") {
    // throw new Error("参数不是对象");
    return;
  }
  for (const key in obj) {
    let temp = obj[key];
    observer(temp);
    const dep = new Dep();
    Object.defineProperty(obj, key, {
      get: function () {
        // 监听到了watcher的get
        dep.depend();
        return temp;
      },
      set: function (value) {
        if (temp === value) {
          // 值未发生变化
          return;
        }
        temp = value;
        dep.notify();
      },
    });
  }
};

class Dep {
  constructor() {
    this.subscribes = [];
  }

  addSubscribe = (item) => {
    this.subscribes.push(item);
  };

  notify = () => {
    this.subscribes.forEach((item) => {
      item.update();
    });
  };

  depend = () => {
    if (Dep.target) {
      this.addSubscribe(Dep.target);
    }
  };
}

Dep.target = null;

class Watcher {
  constructor(vm, exp, cb) {
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;
    this.value = this.get();
  }
  update = () => {
    let value = this.vm.data[this.exp];
    let oldVal = this.value;
    console.log(this.vm.data, this.exp, value, oldVal);
    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    }
  };
  get = () => {
    Dep.target = this;
    const value = this.vm.data[this.exp]; // 重点，获取的时候会触发getter
    Dep.target = null;
    return value;
  };
}

function myVue(data, el, exp) {
  this.data = data;
  observer(data);
  el.innerHTML = this.data[exp];
  console.log(this);
  new Watcher(this, exp, function (value) {
    console.log(121, value);
    el.innerHTML = value;
  });
  return this;
}

var ele = document.querySelector("#name");
var input = document.querySelector("input");

var myVue = new myVue(
  {
    name: "hello word",
  },
  ele,
  "name"
);

input.oninput = function (e) {
  myVue.data.name = e.target.value;
};
