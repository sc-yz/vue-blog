const subscribe = (function () {
  //  发布订阅类
  class Sub {
    constructor() {
      // => 创建一个时间池
      this.$pool = [];
    }

    // 向事件池中追加方法,去重处理
    add(fn) {
      let isFunction =
        Object.prototype.toString.call(fn) !== "[object Function]";
      let isExit = this.$pool.includes(fn);
      if (isFunction || isExit) return;
      this.$pool.push(fn);
    }

    remove(fn) {
      let $pool = this.$pool;
      for (let i = 0; i < $pool.length; i++) {
        let item = $pool[i];
        if (item == fn) {
          // 移除 顺序不变的情况下基本上只能用splice,但是不能这么写，这样会导致数组塌陷问题，我们不能真移除，只能把当前复制为null
          // $pool.splice(i, 1);
          $pool[i] = null;
          break;
        }
      }
    }

    // 通知事件池中的方法，按照顺序执行
    fire(...args) {
      let $pool = this.$pool;
      for (let i = 0; i < $pool.length; i++) {
        let item = $pool[i];
        if (typeof item !== "function") {
          // 此时再删除
          $pool.splice(i, 1);
          i--;
          continue;
        }
        item.call(this, ...args);
      }
    }
  }

  // 暴露给外面用,不需要每次都new
  return function subscribe() {
    return new Sub();
  };
})();

let pond = subscribe();
document.querySelector(".submit").onclick = function (ev) {
  console.log("点击事件");
  pond.fire(ev);
};

let fn1 = function () {
  console.log(1);
};
let fn2 = function () {
  console.log(2);
  pond.remove(fn1);
};

let fn3 = function () {
  console.log(3);
};
let fn4 = function () {
  console.log(4);
};
pond.add(fn1);
pond.add(fn2);
pond.add(fn3);
pond.add(fn4);
