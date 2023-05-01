function bubbleSort(array) {
  let innerLength = array.length;
  let noSwaps;
  for (let i = 0; i < array.length; i++) {
    innerLength--;
    noSwaps = true;
    for (let j = 0; j < innerLength; j++) {
      console.log(array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        noSwaps = false;
      }
    }
    console.log(noSwaps);
    if (noSwaps) {
      break;
    }
  }
  return array;
}

let result = bubbleSort([8, 7, 1, 2, 3, 5]);
// let result = bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);
