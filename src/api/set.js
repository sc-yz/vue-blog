const s = new Set([1, 2, 3, 4]);
s.add(1);
s.add(2);
console.log(s);
s.add(3);
console.log(s);
s.delete(1);
console.log(s);
s.add({ name: "ll" });
console.log(s);
s.add({ name: "ll" });
console.log(s);
console.log(s.has({ name: "ll" }));
console.log(s.size);
console.log(s);

s.forEach((item, index) => {
  console.log(item, index);
});
// s.clear();
// console.log(s);
