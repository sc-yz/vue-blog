function* test(name) {
  console.log(value1);
  var value1 = yield name;
  console.log(value1);
  var value2 = yield name;
  console.log(value2);

  var value3 = yield name;
  console.log(value3);
  var value4 = yield name;
  console.log(value4);
}
const iter = test("one");
console.log(1, iter.next("one"));
console.log(2, iter.next("two"));
console.log(3, iter.next("three"));
console.log(4, iter.next("four"));
console.log(iter.next());
