const testData = [12, 1, 0, 5, 7, 4, 23, 10, 98, 35, 74, 3, 1, 8, 6];

function QuickSort(arr, left, right) {
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
}

function SelectSort(arr) {
  const len = arr.length;
  let minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }

  return arr;
}

function InsertSort(arr) {
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
}

function BubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let flag = false;
    for (let j = i + 1; j < len; j++) {
      console.log('交换了');
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        flag = true;
      }
    }
    if (!flag) break;
  }

  return arr;
}

function merge(left, right) {
  let result = [],
    il = 0,
    ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
}

function MergeSort(arr) {
  if (arr.length < 2) return arr;

  let middle = Math.floor(arr.length / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle),
    params = merge(MergeSort(left), MergeSort(right));

  params.unshift(0, arr.length);

  arr.splice.apply(arr, params);
  return arr;
}

console.log(
  // QuickSort(testData)
  // SelectSort(testData)
  InsertSort(testData)
  // BubbleSort(testData)
  // BubbleSort([5, 4, 3, 2, 1])
);
