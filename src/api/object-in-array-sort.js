const obj = [
  {
    name: "baobao",
    age: 3,
  },
  {
    name: "tiantian",
    age: 10,
  },
  {
    name: "yanyan",
    age: 1,
  },
  {
    name: "lele",
    age: 9,
  },
  {
    name: "guoguo",
    age: 8,
  },
];

function sortArray(item) {
  const arr = item.sort((a, b) => {
    return a.age - b.age;
  });
  console.log(arr);
}

sortArray(obj);
