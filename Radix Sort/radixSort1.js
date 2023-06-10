// pseudocode
// write a function to accept list of numbers
// write function to get the digit count of each number
// get the max digits of largest number
// get the digit for kTh value
//
// loop from 0 to k
// get the max digits
// create 10 bucket arrays for each number from 0 to 9
// loop each item and place it in the respective buckets
// concatinate all the buckets and replace the original array
// proceed with looping to kTh number

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
// console.log(getDigit(123450, 6));
// console.log(digitCount(123450));
// console.log(mostDigits([1234, 1, 2, 12, 2345, 123450, 3333]));

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    nums = [].concat(...buckets);
    console.log(nums);
  }
  return nums;
}

console.log(radixSort([1234, 1, 2, 12, 2345, 123450, 3333]));
