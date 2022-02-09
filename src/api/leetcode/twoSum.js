const nums = [2, 11, 15, 7, 6];
const target = 9;
// 输入: nums = [2,11,15,7,6], target = 9
// 输出: [0,1]

// 暴力破解  时间复杂度O(n*n)

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log('twoSum', twoSum(nums, target));

const twoSum2 = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let n = target - nums[i];

    if (map[n] !== undefined) {
      console.log('map', [map[n], i]);
      return [map[n], i];
    } else {
      map[nums[i]] = i;
      console.log(map);
    }
  }
};

console.log('twoSum2', twoSum2(nums, target));
