function bubbleSort(array) {
  let innerLength = array.length;
  for (let i = 0; i < array.length; i++) {
    innerLength--;
    for (let j = 0; j < innerLength; j++) {
      console.log(array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

let result = bubbleSort([2, 1, 0, 4, 1]);
console.log(result);
