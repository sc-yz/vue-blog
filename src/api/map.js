const person = new Map();
person.set("name", "老毕");
person.set("age", 18);
person.set("hobby", ["看电影", "读书", "玩手机"]);
console.log(person);
person.set("age", 26);
console.log(person);
person.delete("age");
console.log(person);
person.forEach((item, index) => {
  console.log(111, item, index);
});
