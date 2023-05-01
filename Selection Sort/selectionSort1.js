function selectionSort(arr) {
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    console.log(min);
    if (arr[i] !== min) {
      [arr[i], arr[minIndex]] = [min, arr[i]];
    }

    console.log(arr);
  }
  return arr;
}

let result = selectionSort([5, 1, 2, 6, 3, 0]);
console.log(result);
