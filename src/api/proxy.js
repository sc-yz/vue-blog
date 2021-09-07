const handler = {
  get: function (target, property) {
    console.log("get", target, property);
    return target[property];
  },
  set: function (target, property, value) {
    console.log("set", target, property, value);
    target[property] = 121212;
  },
};
const p = new Proxy({}, handler);
p.a = 1;
console.log(p.a);
