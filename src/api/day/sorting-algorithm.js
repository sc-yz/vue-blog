const testData = [12, 1, 0, 5, 7, 4, 23, 10, 98, 35, 74, 3, 1, 8, 6];
// const testData = [5, 7, 4];
/**
 *
 *  交换排序： 冒泡排序，快速排序
 *  插入排序： 简单插入排序，希尔排序
 *  选择排序:  简单选择排序，堆排序
 *  归并排序： 二路归并排序，多路归并排序
 *  以上都是比较累排序
 *  非比较排序： 计数排序，桶排序，基数排序
 */

/**
 * 交换排序之冒泡排序
 * @param {*} arr 传入数组
 */
const BubbleSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        // es6
        // [arr[i], arr[j]] = [arr[j], arr[i]];
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

/**
 *  交换排序之快速排序
 *
 * 快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。
 *
 * 算法描述：
 * 快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：
 * 从数列中挑出一个元素，称为 “基准”（pivot）；
 * 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
 * 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序
 *
 * @param {*} arr 啊阿斯顿
 */

// 阮一峰实现的方法
const QuickSort = (arr, left, right) => {
  if (arr.length < 2) return arr;

  left = typeof left === 'number' ? left : 0;
  right = typeof right === 'number' ? right : arr.length - 1;

  let i = left,
    j = right,
    pivot = arr[Math.floor((left + right) / 2)];

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  if (left < i - 1) {
    QuickSort(arr, left, i - 1);
  }

  if (i < right) {
    QuickSort(arr, i, right);
  }

  return arr;
};

/**
 *  插入排序之 简单插入排序
 *
 * 把每一个数往前面插入数据
 *
 * @param {*} arr
 */

// [5 ,6 4];
const InsertSort = (arr) => {
  const len = arr.length;
  let preIndex, current;

  for (let i = 0; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];

    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }

  return arr;
};

/**
 *  插入排序之 希尔排序
 *
 *
 * @param {*} arr
 */
const HillSort = (arr) => {
  console.log(arry);
};

/*****
 *
 * 选择排序
 *
 * 双重循环，外层控制当前索引
 * 内层循环，找出最小值的索引，然后和当前索引替换值
 */

const SelectSort = (arr) => {
  const len = arr.length;
  let minIndex;

  for (i = 0; i < len - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }

  return arr;
};
// https://www.cnblogs.com/onepixel/p/7674659.html

module.exports = {
  BubbleSort,
  QuickSort,
  InsertSort,
  SelectSort,
  testData,
};

// 排序算法  https://javascript.ruanyifeng.com/library/sorting.html
