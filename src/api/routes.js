function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].name);
    if (arr[i].children) {
      result = result.concat(flatten(arr[i].children));
    }
  }

  return result;
}

const routes = [
  {
    name: "aaa",
    children: [
      {
        name: "bbb",
        children: [
          {
            name: "ccc",
          },
        ],
      },
      {
        name: "ddd",
      },
      {
        name: "eee",
      },
    ],
  },
];

console.log(flatten(routes));
