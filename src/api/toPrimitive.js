const object1 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 1;
    } else if (hint == "string") {
      return "I am string";
    }
    return null;
  },
};

alert(object1);
console.log(object1 + 1);
