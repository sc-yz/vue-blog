// 首字母大写
// 输入:["adam", "LISA", "barT"]，输出：["Adam", "Lisa", "Bart"]
const IndexMap = (arr) => {
  return arr.map((item) => {
    return item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase();
  });
};
console.log(IndexMap(['adam', 'LISA', 'barT']));

// 数组去重
let arr = [1, 2, 3, 4, 5, 2, 3, 1];
const removeDuplicates = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc.includes(cur) ? acc : [...acc, cur];
  }, []);
};

console.log(removeDuplicates(arr));

// 扁平化数组
// 输入: [1,2,[3,4,[5,6]]]
const flatArr = (arr) => {
  return arr.reduce((acc, cur) => {
    return Array.isArray(cur) ? [...acc, ...flatArr(cur)] : [...acc, cur];
  }, []);
};

console.log(flatArr([1, 2, [3, 4, [5, 6]]]));
