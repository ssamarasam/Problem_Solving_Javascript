function maxProfit(arr) {
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] - arr[j] > max) {
        max = arr[i] - arr[j];
      }
    }
  }
  return max;
}

let result = maxProfit([7, 11, 2, 4, 5, 6]);
console.log(result);
