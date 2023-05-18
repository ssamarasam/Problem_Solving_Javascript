function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      console.log("j+1", j + 1);
      arr[j + 1] = arr[j];
      console.log("Swap j to j+1", arr);
    }
    console.log(j);
    arr[j + 1] = currentValue;
    console.log("second: ", arr);
  }
}

insertionSort([2, 1, 4, 9, 76, 3]);
