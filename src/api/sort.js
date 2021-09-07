const arr = [3, 38, 34, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// boubbleSort  冒泡排序
const bubbleSort = (arr) => {
  console.time("冒泡排序时间");
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.timeEnd("冒泡排序时间");
  console.log("bubbleSort", arr);
};

// 插入排序
const intertionSort = (arr) => {
  console.time("插入排序时间");
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let j = i - 1;
    // const value = arr[i];
    // while (j >= 0 && arr[j] > value) {
    //   arr[j + 1] = arr[j];
    //   j--;
    // }
    // arr[j + 1] = value;
    while (j >= 0 && arr[j] > arr[j + 1]) {
      const temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }

  console.timeEnd("插入排序时间");
  console.log("插入排序", arr);
};

// 选择排序
const selectionSort = (arr) => {
  console.time("选择排序时间");
  const len = arr.length;
  let index, temp;
  for (let i = 0; i < len - 1; i++) {
    index = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    if (index !== i) {
      temp = arr[index];
      arr[index] = arr[i];
      arr[i] = temp;
    }
  }
  console.timeEnd("选择排序时间");
  console.log("选择排序", arr);
};

bubbleSort(arr);
// intertionSort(arr);
// selectionSort(arr);
