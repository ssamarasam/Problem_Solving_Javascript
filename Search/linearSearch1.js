function linerarSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

let inputArray = [
  1, 5, 8, 33, 44, 55, 22, 111, 101, 202, 387, 2889, 294, 123, 31, 312,
];
let inputVal = 294;

let result = linerarSearch(inputArray, inputVal);
console.log(result);
