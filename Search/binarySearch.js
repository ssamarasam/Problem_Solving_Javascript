let input = [
  1, 2, 3, 4, 11, 15, 18, 23, 28, 29, 33, 34, 35, 36, 41, 42, 44, 48, 49, 50,
];

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  //   console.log(middle);

  while (left <= right) {
    if (arr[middle] < num) {
      left = middle + 1;
      middle = Math.floor((left + right) / 2);
    } else if (arr[middle] > num) {
      right = middle - 1;
      middle = Math.floor(right / 2);
    } else {
      return { input: num, index: middle };
    }
  }
  return -1;
}

let result = binarySearch(input, 6);
console.log(result);
