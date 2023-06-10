function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
  }
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
      //   console.log(arr);
    }
  }
  swap(arr, swapIndex, start);
  //   console.log(arr, swapIndex);
  return swapIndex;
}

// let result = pivot([7, 2, 3, 1, 10, 4, 9, 8]);
// console.log(result);
//

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

let result = quickSort([7, 2, 3, 1, 10, 4, 9, 8]);
console.log(result);
